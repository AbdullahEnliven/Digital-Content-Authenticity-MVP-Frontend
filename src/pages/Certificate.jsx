import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Award, Download, Share2 } from 'lucide-react'
import DashboardLayout from '../components/DashboardLayout.jsx'
import { DashboardCard, PageIntro } from '../components/DashboardCard.jsx'
import { useApp } from '../App.jsx'
import { api } from '../lib/api.js'

function Field({ label, value }) {
  return (
    <div className="tv-card tv-card-pad tv-card-soft">
      <div className="tv-muted" style={{ fontSize: 12 }}>{label}</div>
      <div style={{ marginTop: 6, fontWeight: 800 }}>{value}</div>
    </div>
  )
}

function trustTone(status) {
  if (status === 'Verified') return { color: 'var(--tv-success)', badge: 'tv-badge tv-badge-success' }
  if (status === 'Suspicious') return { color: 'var(--tv-warning)', badge: 'tv-badge tv-badge-warning' }
  return { color: 'var(--tv-danger)', badge: 'tv-badge tv-badge-danger' }
}

export default function CertificatePage() {
  const router = useRouter()
  const { token, verificationResult, showToast } = useApp()
  const [certificate, setCertificate] = useState(null)

  useEffect(() => {
    if (!verificationResult?.id) return

    api
      .getCertificateMetadata(token, verificationResult.id)
      .then(setCertificate)
      .catch((error) => showToast('error', error.message, 'Error'))
  }, [token, verificationResult, showToast])

  if (!verificationResult) {
    return (
      <DashboardLayout>
        <div className="tv-card">
          <div className="tv-empty">
            Open a verification first to view its certificate.
            <div style={{ marginTop: 16 }}>
              <button type="button" className="tv-btn tv-btn-primary" onClick={() => router.push('/history')}>
                Open History
              </button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  const handleDownload = async () => {
    try {
      await api.downloadCertificate(token, verificationResult.id)
      showToast('success', 'Certificate downloaded', 'Success')
    } catch (error) {
      showToast('error', error.message, 'Error')
    }
  }

  const trustStatus = verificationResult.trust_classification || 'Low Trust'
  const scoreTone = trustTone(trustStatus)
  const trustScore = Math.round(verificationResult.final_trust_score || 0)

  return (
    <DashboardLayout>
      <div style={{ display: 'grid', gap: 24, width: '100%', minWidth: 0 }}>
        <PageIntro
          title="Verification Certificate"
          copy="Authenticity certificate powered by your integrated certificate service."
          actions={(
            <>
              <button type="button" className="tv-btn tv-btn-primary" onClick={handleDownload}>
                <Download size={16} />
                Download PDF
              </button>
              <button
                type="button"
                className="tv-btn tv-btn-secondary"
                onClick={() => showToast('info', 'Certificate sharing is coming soon.', 'Info')}
              >
                <Share2 size={16} />
                Share
              </button>
            </>
          )}
        />

        <DashboardCard>
          <div style={{ display: 'grid', gap: 24 }}>
            <div style={{ textAlign: 'center', paddingBottom: 24, borderBottom: '1px solid var(--tv-border)' }}>
              <div style={{ width: 72, height: 72, margin: '0 auto 18px', borderRadius: 18, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(217, 119, 6, 0.12)', color: 'var(--tv-warning)' }}>
                <Award size={34} />
              </div>
              <div style={{ fontSize: 28, fontWeight: 800 }}>Certificate of Authenticity</div>
              <p className="tv-page-copy">This content has been processed through the integrated TrustVerify pipeline.</p>
            </div>

            <Field label="File Name" value={verificationResult.content?.filename || '-'} />

            <div className="tv-card tv-card-pad tv-card-soft">
              <div className="tv-muted" style={{ fontSize: 12 }}>Trust Score</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 10 }}>
                <div className="tv-progress" style={{ flex: 1 }}>
                  <span style={{ width: `${trustScore}%` }} />
                </div>
                <div style={{ display: 'grid', justifyItems: 'end', gap: 6 }}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: scoreTone.color }}>
                    {trustScore}%
                  </div>
                  <span className={scoreTone.badge}>{trustStatus}</span>
                </div>
              </div>
            </div>

            <div className="tv-grid-2">
              <Field label="Trust Level" value={verificationResult.trust_classification || '-'} />
              <Field label="Verification Status" value={verificationResult.verification_status || '-'} />
              <Field label="Verification Code" value={certificate?.verification_code || 'Generating...'} />
              <Field label="Issued Date" value={certificate?.created_at ? new Date(certificate.created_at).toLocaleString() : 'Generating...'} />
            </div>

            <div className="tv-card tv-card-pad tv-card-soft" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap' }}>
              <div>
                <div className="tv-muted" style={{ fontSize: 12 }}>Share Path</div>
                <div style={{ marginTop: 6, fontWeight: 800, color: 'var(--tv-text-muted)' }}>Coming soon</div>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  )
}
