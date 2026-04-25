import { KeyRound, Wrench } from 'lucide-react'
import DashboardLayout from '../components/DashboardLayout.jsx'
import { DashboardCard, PageIntro } from '../components/DashboardCard.jsx'

export default function ApiKeysPage() {
  return (
    <DashboardLayout>
      <div style={{ display: 'grid', gap: 24 }}>
        <PageIntro title="API Keys" copy="Manage developer access and generate secure credentials for future API workflows." />

        <DashboardCard>
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ width: 72, height: 72, margin: '0 auto 18px', borderRadius: 18, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(37, 99, 235, 0.12)', color: 'var(--tv-primary)' }}>
              <KeyRound size={32} />
            </div>
            <div style={{ fontSize: 24, fontWeight: 800 }}>API Key Management Coming Soon</div>
            <p className="tv-page-copy" style={{ maxWidth: 560, marginInline: 'auto' }}>
              This area is reserved for creating, rotating, and managing API credentials as the developer toolkit expands.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 16 }} className="tv-badge tv-badge-warning">
              <Wrench size={14} />
              Coming soon
            </div>
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  )
}
