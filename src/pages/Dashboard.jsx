import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AlertTriangle, Award, CheckCircle, FileText, Plus } from 'lucide-react'
import DashboardLayout from '../components/DashboardLayout.jsx'
import { PageIntro, StatCard } from '../components/DashboardCard.jsx'
import { useApp } from '../App.jsx'
import { api } from '../lib/api.js'

function badgeClass(status) {
  if (status === 'Verified') return 'tv-badge tv-badge-success'
  if (status === 'Suspicious') return 'tv-badge tv-badge-warning'
  return 'tv-badge tv-badge-danger'
}

export default function Dashboard() {
  const router = useRouter()
  const { user, token, setVerificationResult, showToast } = useApp()
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .getHistory(token)
      .then(setHistory)
      .catch((error) => showToast('error', error.message, 'Error'))
      .finally(() => setLoading(false))
  }, [token, showToast])

  const stats = {
    total: history.length,
    verified: history.filter((item) => item.trust_classification === 'Verified').length,
    suspicious: history.filter((item) => item.trust_classification === 'Suspicious').length,
    certificates: history.filter((item) => item.has_certificate).length,
  }

  return (
    <DashboardLayout>
      <div style={{ display: 'grid', gap: 24 }}>
        <PageIntro
          title={`Welcome back, ${user?.name?.split(' ')[0] || 'there'}`}
          copy="Track recent checks, trust signals, and certificate activity from one clear dashboard."
          actions={(
            <button type="button" className="tv-btn tv-btn-primary" onClick={() => router.push('/upload')}>
              <Plus size={16} />
              New Verification
            </button>
          )}
        />

        <div className="tv-grid-4">
          <StatCard title="Total Verifications" value={stats.total} icon={<FileText size={24} />} tone="#2563eb" />
          <StatCard title="Verified" value={stats.verified} icon={<CheckCircle size={24} />} tone="#16a34a" />
          <StatCard title="Suspicious" value={stats.suspicious} icon={<AlertTriangle size={24} />} tone="#d97706" />
          <StatCard title="Certificates" value={stats.certificates} icon={<Award size={24} />} tone="#ca8a04" />
        </div>

        <div className="tv-card">
          <div className="tv-card-pad">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 20, fontWeight: 800 }}>Recent Verifications</div>
                <div className="tv-muted" style={{ marginTop: 6 }}>Review your latest verification activity and open any result in one click.</div>
              </div>
              <button type="button" className="tv-btn tv-btn-secondary" onClick={() => router.push('/history')}>
                View all
              </button>
            </div>

            {loading ? (
              <div className="tv-empty">Loading verification history...</div>
            ) : history.length === 0 ? (
              <div className="tv-empty">No verifications yet. Upload your first file to begin.</div>
            ) : (
              <table className="tv-table">
                <thead>
                  <tr>
                    <th>File</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {history.slice(0, 5).map((item) => (
                    <tr
                      key={item.verification_id}
                      style={{ cursor: 'pointer' }}
                      onClick={async () => {
                        const result = await api.getVerification(token, item.verification_id)
                        setVerificationResult(result)
                        router.push('/results')
                      }}
                    >
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
