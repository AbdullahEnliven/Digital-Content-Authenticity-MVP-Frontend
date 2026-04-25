import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AlertCircle, FileAudio, FileText, FileVideo, Image, ShieldCheck } from 'lucide-react'
import DashboardLayout from '../components/DashboardLayout.jsx'
import FileUploader from '../components/FileUploader.jsx'
import { DashboardCard, PageIntro } from '../components/DashboardCard.jsx'
import { useApp } from '../App.jsx'
import { api } from '../lib/api.js'
import { creditCostForFile, creditLabel, creditTypeForFile, DAILY_CREDIT_LIMIT } from '../lib/credits.js'

const STEPS = {
  pending: { label: 'Preparing upload', pct: 18 },
  processing: { label: 'Running verification', pct: 62 },
  completed: { label: 'Verification complete', pct: 100 },
}

const TEXT_INPUT_MIN_CHARS = 20
const TEXT_INPUT_MAX_CHARS = 5000

const MODE_DETAILS = {
  image: {
    title: 'Image verification',
    copy: 'Upload image files and run the visual authenticity workflow.',
    formats: 'JPG, PNG, WebP',
    icon: Image,
    color: 'var(--tv-primary)',
    bg: 'rgba(37, 99, 235, 0.12)',
  },
  audio: {
    title: 'Audio verification',
    copy: 'Upload voice or media files for speech authenticity analysis.',
    formats: 'MP3, WAV, M4A, OGG, FLAC, MP4, WebM, MOV',
    icon: FileAudio,
    color: 'var(--tv-success)',
    bg: 'rgba(16, 185, 129, 0.12)',
  },
  text: {
    title: 'Text verification',
    copy: 'Upload plain-text files and run the human-vs-AI text classifier.',
    formats: 'TXT',
    icon: FileText,
    color: 'var(--tv-danger)',
    bg: 'rgba(220, 38, 38, 0.12)',
  },
}

export default function UploadPage() {
  const router = useRouter()
  const { token, user, refreshUser, setVerificationResult, showToast } = useApp()
  const [file, setFile] = useState(null)
  const [mode, setMode] = useState('image')
  const [textInput, setTextInput] = useState('')
  const [options, setOptions] = useState({ identity: true, cert: true })
  const [progress, setProgress] = useState(null)
  const [verificationId, setVerificationId] = useState(null)
  const normalizedText = textInput.trim().replace(/\s+/g, ' ')
  const hasTypedText = mode === 'text' && normalizedText.length > 0
  const textFileLike = hasTypedText
    ? {
        name: 'pasted_text.txt',
        type: 'text/plain',
        size: new TextEncoder().encode(normalizedText).length,
      }
    : null
  const effectiveFile = hasTypedText ? textFileLike : file
  const creditType = effectiveFile ? creditTypeForFile(effectiveFile) : null
  const creditCost = effectiveFile ? creditCostForFile(effectiveFile) : 0
  const dailyLimit = user?.daily_credit_limit ?? DAILY_CREDIT_LIMIT
  const creditsRemaining = user?.credits_remaining ?? dailyLimit
  const canAfford = !effectiveFile || creditsRemaining >= creditCost
  const modeDetail = MODE_DETAILS[mode]
  const ModeIcon = modeDetail.icon
  const textTooShort = mode === 'text' && normalizedText.length > 0 && normalizedText.length < TEXT_INPUT_MIN_CHARS
  const canStart = mode === 'text'
    ? Boolean(effectiveFile) && !textTooShort && canAfford
    : Boolean(effectiveFile) && canAfford

  const handleModeChange = (nextMode) => {
    setMode(nextMode)
    if (nextMode !== 'text') {
      setTextInput('')
    }
  }

  useEffect(() => {
    if (!verificationId) return undefined

    const interval = setInterval(async () => {
      try {
        const status = await api.getVerificationStatus(token, verificationId)
        const view = STEPS[status.status] || { label: status.status, pct: status.progress || 0 }
        setProgress(view)

        if (status.status === 'completed') {
          clearInterval(interval)
          const result = await api.getVerification(token, verificationId)
          setVerificationResult(result)
          showToast('success', 'Verification completed successfully', 'Success')
          router.push('/results')
        }
      } catch (error) {
        clearInterval(interval)
        showToast('error', error.message, 'Error')
      }
    }, 700)

    return () => clearInterval(interval)
  }, [verificationId, token, router, setVerificationResult, showToast])

  const startVerification = async () => {
    if (!effectiveFile) {
      showToast('warning', mode === 'text' ? 'Paste text or select a .txt file first' : 'Please select a file first', 'Alert')
      return
    }

    if (textTooShort) {
      showToast('warning', `Please enter at least ${TEXT_INPUT_MIN_CHARS} characters for text verification`, 'Alert')
      return
    }

    try {
      setProgress(STEPS.pending)
      const uploadTarget = hasTypedText
        ? new File([normalizedText], 'pasted_text.txt', { type: 'text/plain' })
        : file
      const upload = await api.upload(token, uploadTarget)
      const verification = await api.startVerification(token, upload.id, {
        include_identity: options.identity,
        auto_issue_certificate: options.cert,
      })
      refreshUser?.().catch(() => {})
      setVerificationId(verification.id)
    } catch (error) {
      setProgress(null)
      showToast('error', error.message, 'Error')
    }
  }

  return (
    <DashboardLayout>
      <div style={{ display: 'grid', gap: 24 }}>
        <PageIntro
          title="Upload Content for Verification"
          copy="Choose image, audio, or text verification, upload a matching file type, and generate a trust result in a few steps."
        />

        <div className="tv-grid-3">
          <div style={{ gridColumn: 'span 2', display: 'grid', gap: 24 }}>
            {mode === 'text' ? (
              <DashboardCard>
                <div style={{ display: 'grid', gap: 14 }}>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 800 }}>Write Text</div>
                    <div className="tv-muted" style={{ marginTop: 6, fontSize: 13, lineHeight: 1.6 }}>
                      Write or paste text directly here for verification. You can still upload a `.txt` file below. Written text takes priority.
                    </div>
                  </div>

                  <div className="tv-field">
                    <textarea
                      className="tv-textarea"
                      value={textInput}
                      maxLength={TEXT_INPUT_MAX_CHARS}
                      placeholder="Paste or type text here..."
                      onChange={(event) => setTextInput(event.target.value)}
                      style={{ minHeight: 220 }}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', fontSize: 13 }}>
                    <span className="tv-muted">
                      Minimum {TEXT_INPUT_MIN_CHARS} characters. Maximum {TEXT_INPUT_MAX_CHARS} characters.
                    </span>
                    <strong style={{ color: normalizedText.length > TEXT_INPUT_MAX_CHARS * 0.9 ? 'var(--tv-warning)' : 'var(--tv-text)' }}>
                      {normalizedText.length} / {TEXT_INPUT_MAX_CHARS}
                    </strong>
                  </div>

                  {textTooShort ? (
                    <div style={{ color: 'var(--tv-danger)', fontSize: 13, fontWeight: 700 }}>
                      Enter at least {TEXT_INPUT_MIN_CHARS} characters before starting verification.
                    </div>
                  ) : null}
                </div>
              </DashboardCard>
            ) : null}

            <FileUploader mode={mode} onModeChange={handleModeChange} onFileReady={setFile} />

            <DashboardCard>
              <div style={{ display: 'grid', gap: 18 }}>
                <div className="tv-card tv-card-pad tv-card-soft" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: modeDetail.bg,
                      color: modeDetail.color,
                      flexShrink: 0,
                    }}
                  >
                    <ModeIcon size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800 }}>{modeDetail.title}</div>
                    <div className="tv-muted" style={{ marginTop: 4, fontSize: 13 }}>{modeDetail.copy}</div>
                  </div>
                </div>

                {progress ? (
                  <div className="tv-card tv-card-pad tv-card-soft">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                      <div style={{ fontWeight: 700 }}>{progress.label}</div>
                      <div style={{ color: 'var(--tv-primary)', fontWeight: 800 }}>{progress.pct}%</div>
                    </div>
                    <div className="tv-progress" style={{ marginTop: 12 }}>
                      <span style={{ width: `${progress.pct}%` }} />
                    </div>
                  </div>
                ) : null}

                {effectiveFile ? (
                  <div className="tv-card tv-card-pad tv-card-soft" style={{ display: 'grid', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                      <div>
                        <div style={{ fontWeight: 800 }}>Credit usage</div>
                        <div className="tv-muted" style={{ marginTop: 6, fontSize: 13 }}>
                          This {creditLabel(creditType)} verification will use {creditCost} credits.
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 24, fontWeight: 850, color: canAfford ? 'var(--tv-primary)' : 'var(--tv-danger)' }}>{creditCost}</div>
                        <div className="tv-muted" style={{ fontSize: 12 }}>credits</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 13 }}>
                      <span className="tv-muted">Available today</span>
                      <strong>{creditsRemaining} / {dailyLimit}</strong>
                    </div>
                    {!canAfford ? (
                      <div style={{ color: 'var(--tv-danger)', fontSize: 13, fontWeight: 700 }}>
                        Not enough credits for this verification. Credits refresh daily.
                      </div>
                    ) : null}
                  </div>
                ) : null}

              </div>
            </DashboardCard>

            <DashboardCard>
              <div style={{ display: 'grid', gap: 16 }}>
                <button type="button" className="tv-btn tv-btn-primary" onClick={startVerification} disabled={!canStart || Boolean(progress)}>
                  <ShieldCheck size={16} />
                  {progress ? 'Verification in progress...' : 'Start Verification'}
                </button>

                <div style={{ fontSize: 18, fontWeight: 800 }}>How it works</div>
                {[
                  'Upload content from your device into a secure verification flow.',
                  'We analyze file structure, metadata, and authenticity signals.',
                  'Detection models evaluate the likelihood of synthetic generation.',
                  'You receive a trust score, detailed result view, and certificate support when enabled.',
                ].map((line, index) => (
                  <div key={line} style={{ display: 'flex', gap: 12 }}>
                    <div style={{ width: 24, height: 24, borderRadius: 8, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(37, 99, 235, 0.12)', color: 'var(--tv-primary)', fontSize: 12, fontWeight: 800 }}>
                      {index + 1}
                    </div>
                    <div className="tv-muted" style={{ lineHeight: 1.6 }}>{line}</div>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>

          <div style={{ display: 'grid', gap: 24, alignContent: 'start' }}>
            <DashboardCard style={{ alignSelf: 'start' }}>
              <div style={{ display: 'grid', gap: 18 }}>
                <div style={{ fontSize: 18, fontWeight: 800 }}>Verification Options</div>
                {[
                  {
                    key: 'identity',
                    title: 'Identity Signal',
                    copy: 'Include creator identity signals in the trust calculation.',
                  },
                  {
                    key: 'cert',
                    title: 'Auto-issue Certificate',
                    copy: 'Generate a downloadable certificate after successful verification.',
                  },
                ].map((item) => (
                  <div key={item.key} className="tv-card tv-card-pad tv-card-soft" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 700 }}>{item.title}</div>
                      <div className="tv-muted" style={{ marginTop: 6, fontSize: 13 }}>{item.copy}</div>
                    </div>
                    <button
                      type="button"
                      className={`tv-toggle ${options[item.key] ? 'on' : ''}`}
                      onClick={() => setOptions((current) => ({ ...current, [item.key]: !current[item.key] }))}
                      style={{ marginTop: 2, flexShrink: 0 }}
                    >
                      <span />
                    </button>
                  </div>
                ))}
              </div>
            </DashboardCard>

            <DashboardCard style={{ alignSelf: 'start' }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 14, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(217, 119, 6, 0.12)', color: 'var(--tv-warning)', flexShrink: 0 }}>
                  <AlertCircle size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 800 }}>Privacy notice</div>
                  <div className="tv-muted" style={{ marginTop: 6, lineHeight: 1.6 }}>
                    Uploaded files are processed by your backend workflow and should follow your storage and retention rules.
                  </div>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
