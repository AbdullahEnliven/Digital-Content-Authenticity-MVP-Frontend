import { useRouter } from 'next/router'
import { ArrowLeft, Award, ShieldCheck } from 'lucide-react'
import DashboardLayout from '../components/DashboardLayout.jsx'
import { DashboardCard, PageIntro } from '../components/DashboardCard.jsx'
import { useApp } from '../App.jsx'

function getVerdict(score) {
  if (score >= 80) return { label: 'Authentic Content', tone: 'var(--tv-success)', badge: 'tv-badge tv-badge-success' }
  if (score >= 50) return { label: 'Suspicious Content', tone: 'var(--tv-warning)', badge: 'tv-badge tv-badge-warning' }
  return { label: 'Likely AI Generated', tone: 'var(--tv-danger)', badge: 'tv-badge tv-badge-danger' }
}

function getSignalLabel(mimeType) {
  if (mimeType?.startsWith('audio/') || mimeType === 'application/ogg') {
    return 'AI voice probability'
  }
  if (mimeType?.startsWith('video/')) return 'AI video probability'
  if (mimeType === 'text/plain') return 'AI text probability'
  return 'AI probability'
}

function Row({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '12px 0', borderBottom: '1px solid var(--tv-border)' }}>
      <span className="tv-muted">{label}</span>
      <strong style={{ textAlign: 'right' }}>{value}</strong>
    </div>
  )
}

export default function ResultsPage() {
  const router = useRouter()
  const { verificationResult, showToast } = useApp()

  if (!verificationResult) {
    return (
      <DashboardLayout>
        <div className="tv-card">
          <div className="tv-empty">
            No verification selected. Start a new upload to see results here.
            <div style={{ marginTop: 16 }}>
              <button type="button" className="tv-btn tv-btn-primary" onClick={() => router.push('/upload')}>
                Go to upload
              </button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  const score = Math.round(verificationResult.final_trust_score || verificationResult.trust_score?.score || 0)
  const aiPct = Math.round((verificationResult.ai_analysis?.ai_probability || 0) * 100)
  const verdict = getVerdict(score)
  const signalLabel = getSignalLabel(verificationResult.content?.mime_type)

  return (
    <DashboardLayout>
      <div style={{ display: 'grid', gap: 24 }}>
        <PageIntro
          title="Verification Results"
          copy={verificationResult.content?.filename || 'Latest verification'}
          actions={(
            <>
              <button type="button" className="tv-btn tv-btn-secondary" onClick={() => router.push('/upload')}>
                <ArrowLeft size={16} />
                New Verification
              </button>
              <button type="button" className="tv-btn tv-btn-primary" onClick={() => router.push('/certificate')}>
                <Award size={16} />
                View Certificate
              </button>
            </>
          )}
        />

        <div className="tv-grid-2">
          <DashboardCard>
            <div style={{ display: 'grid', gap: 18 }}>
              <div className={verdict.badge} style={{ width: 'fit-content' }}>{verdict.label}</div>
              <div style={{ fontSize: 68, lineHeight: 1, fontWeight: 800, color: verdict.tone }}>{score}</div>
              <div className="tv-muted">Final Trust Score</div>
              <p className="tv-page-copy" style={{ marginTop: 0 }}>{verificationResult.reasoning_summary || verificationResult.trust_score?.reasoning || 'Verification completed successfully.'}</p>
            </div>
          </DashboardCard>

          <DashboardCard>
            <div style={{ display: 'grid', gap: 10 }}>
              <div style={{ fontSize: 18, fontWeight: 800 }}>Verification Signals</div>
              <Row label={signalLabel} value={`${aiPct}%`} />
              <Row label="Model" value={verificationResult.ai_analysis?.model_name || '-'} />
              <Row label="Metadata score" value={`${Math.round((verificationResult.metadata?.consistency_score || 0) * 100)}%`} />
              <Row label="Verification status" value={verificationResult.verification_status || '-'} />
              <Row label="SHA256" value={verificationResult.content?.sha256_hash?.slice(0, 18) ? `${verificationResult.content.sha256_hash.slice(0, 18)}...` : '-'} />
            </div>
          </DashboardCard>
        </div>

        <DashboardCard>
          <div style={{ display: 'grid', gap: 10 }}>
            <div style={{ fontSize: 18, fontWeight: 800 }}>Metadata Summary</div>
            <Row label="Format" value={verificationResult.metadata?.file_format || '-'} />
            <Row label="Created" value={verificationResult.metadata?.creation_timestamp || 'Unavailable'} />
            <Row label="Device" value={verificationResult.metadata?.device_info || 'Unavailable'} />
            <Row label="Compression" value={verificationResult.metadata?.compression_indicators || '-'} />
          </div>
        </DashboardCard>

        <DashboardCard>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              type="button"
              className="tv-btn tv-btn-secondary"
              onClick={() => navigator.clipboard.writeText(`${window.location.origin}/certificate`).then(() => showToast('success', 'Certificate page copied', 'Success'))}
            >
              <ShieldCheck size={16} />
              Copy Certificate Page
            </button>
            {verificationResult.certificate ? (
              <button type="button" className="tv-btn tv-btn-primary" onClick={() => router.push('/certificate')}>
                Open Certificate
              </button>
            ) : null}
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  )
}
