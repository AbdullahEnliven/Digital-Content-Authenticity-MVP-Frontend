import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Award, Eye, FileText } from 'lucide-react'
import DashboardLayout from '../components/DashboardLayout.jsx'
import { PageIntro } from '../components/DashboardCard.jsx'
import { useApp } from '../App.jsx'
import { api } from '../lib/api.js'

function badgeClass(status) {
  if (status === 'Verified') return 'tv-badge tv-badge-success'
  if (status === 'Suspicious') return 'tv-badge tv-badge-warning'
  return 'tv-badge tv-badge-danger'
}

export default function HistoryPage() {
  const router = useRouter()
  const { token, setVerificationResult, showToast } = useApp()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .getHistory(token)
      .then(setItems)
      .catch((error) => showToast('error', error.message, 'Error'))
      .finally(() => setLoading(false))
  }, [token, showToast])

  return (
    <DashboardLayout>
      <div style={{ display: 'grid', gap: 24 }}>
        <PageIntro title="Verification History" copy="Browse your full verification timeline, revisit past checks, and open certificates when available." />

        <div className="tv-card">
          <div className="tv-card-pad" style={{ padding: 0 }}>
            {loading ? (
              <div className="tv-empty">Loading history...</div>
            ) : items.length === 0 ? (
              <div className="tv-empty">No history yet.</div>
            ) : (
              <table className="tv-table">
                <thead>
                  <tr>
                    <th>File</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Trust Score</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.verification_id}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div style={{ width: 40, height: 40, borderRadius: 12, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--tv-surface-soft)', color: 'var(--tv-primary)' }}>
                            <FileText size={18} />
                          </div>
                          <div>
                            <div style={{ fontWeight: 700 }}>{item.filename}</div>
                            <div className="tv-muted" style={{ fontSize: 12 }}>{item.mime_type}</div>
                          </div>
                        </div>
                      </td>
                      <td>{new Date(item.created_at).toLocaleString()}</td>
                      <td><span className={badgeClass(item.trust_classification || 'Pending')}>{item.trust_classification || 'Pending'}</span></td>
                      <td style={{ fontWeight: 800 }}>{Math.round(item.final_trust_score || 0)}%</td>
                      <td>
                        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                          <button
                            type="button"
                            className="tv-btn tv-btn-secondary"
                            onClick={async () => {
                              const result = await api.getVerification(token, item.verification_id)
                              setVerificationResult(result)
                              router.push('/results')
                            }}
                          >
                            <Eye size={16} />
                            View
                          </button>
                          {item.has_certificate ? (
                            <button
                              type="button"
                              className="tv-btn tv-btn-primary"
                              onClick={async () => {
                                const result = await api.getVerification(token, item.verification_id)
                                setVerificationResult(result)
                                router.push('/certificate')
                              }}
                            >
                              <Award size={16} />
                              Certificate
                            </button>
                          ) : null}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
