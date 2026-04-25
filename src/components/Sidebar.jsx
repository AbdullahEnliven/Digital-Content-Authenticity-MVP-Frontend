import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  Award,
  BadgeDollarSign,
  ChevronDown,
  ChevronUp,
  FileKey,
  FileText,
  History,
  Image,
  LayoutDashboard,
  LogOut,
  Mic,
  Upload,
  User,
  Video,
} from 'lucide-react'
import { useApp } from '../App.jsx'
import { CREDIT_COSTS, DAILY_CREDIT_LIMIT } from '../lib/credits.js'

const MAIN_ITEMS = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Upload', path: '/upload', icon: Upload },
  { label: 'History', path: '/history', icon: History },
  { label: 'Certificates', path: '/certificate', icon: Award },
]

const ACCOUNT_ITEMS = [
  { label: 'Profile', path: '/profile', icon: User },
  { label: 'API Keys', path: '/api-keys', icon: FileKey },
]

const MOBILE_ITEMS = [
  MAIN_ITEMS[0],
  MAIN_ITEMS[1],
  MAIN_ITEMS[2],
  MAIN_ITEMS[3],
  ACCOUNT_ITEMS[0],
]

const CREDIT_ITEMS = [
  { label: 'Text', value: CREDIT_COSTS.text, icon: FileText },
  { label: 'Audio', value: CREDIT_COSTS.audio, icon: Mic },
  { label: 'Image', value: CREDIT_COSTS.image, icon: Image },
  { label: 'Video', value: CREDIT_COSTS.video, icon: Video },
]

function NavButton({ item, pathname, onClick }) {
  const Icon = item.icon
  return (
    <button type="button" className={`tv-nav-item${pathname === item.path ? ' active' : ''}`} onClick={() => onClick(item.path)}>
      <span className="tv-nav-icon">
        <Icon size={18} />
      </span>
      <span>{item.label}</span>
    </button>
  )
}

export default function Sidebar() {
  const router = useRouter()
  const { pathname } = router
  const { logout, showToast, user } = useApp()
  const [creditsExpanded, setCreditsExpanded] = useState(false)
  const dailyLimit = user?.daily_credit_limit ?? DAILY_CREDIT_LIMIT
  const creditsRemaining = user?.credits_remaining ?? dailyLimit
  const creditsUsed = Math.max(0, dailyLimit - creditsRemaining)
  const usagePct = dailyLimit > 0 ? Math.min(100, Math.round((creditsUsed / dailyLimit) * 100)) : 0

  const handleRoute = (path) => router.push(path)

  const handleLogout = () => {
    logout()
    showToast('info', 'Signed out successfully', 'Session')
    router.push('/login')
  }

  return (
    <>
      <aside className="tv-sidebar">
        <div className="tv-sidebar-header">
          <span className="tv-brand-mark">A</span>
          <div>
            <div className="tv-sidebar-title">AI AUTHY</div>
          </div>
        </div>

        <div className="tv-sidebar-body">
          <div>
            <div className="tv-nav-group-title">Main</div>
            {MAIN_ITEMS.map((item) => (
              <NavButton key={item.path} item={item} pathname={pathname} onClick={handleRoute} />
            ))}
          </div>

          <div>
            <div className="tv-nav-group-title">Account</div>
            {ACCOUNT_ITEMS.map((item) => (
              <NavButton key={item.path} item={item} pathname={pathname} onClick={handleRoute} />
            ))}
            <button type="button" className="tv-nav-item tv-nav-item-danger" onClick={handleLogout}>
              <span className="tv-nav-icon">
                <LogOut size={18} />
              </span>
              <span>Sign Out</span>
            </button>
          </div>

          <div className="tv-sidebar-footer">
            <button
              type="button"
              onClick={() => setCreditsExpanded((current) => !current)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, width: '100%', padding: 0, border: 0, background: 'transparent', color: 'inherit', textAlign: 'left' }}
              aria-expanded={creditsExpanded}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 34, height: 34, borderRadius: 12, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(37, 99, 235, 0.12)', color: 'var(--tv-primary)' }}>
                  <BadgeDollarSign size={18} />
                </span>
                <span>
                  <span style={{ display: 'block', fontSize: 12, color: 'var(--tv-text-soft)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800 }}>
                    Daily Credits
                  </span>
                  <span style={{ display: 'block', marginTop: 3, fontSize: 20, fontWeight: 850, letterSpacing: '-0.04em' }}>
                    {creditsRemaining}
                    <span className="tv-muted" style={{ fontSize: 12, fontWeight: 700 }}> / {dailyLimit}</span>
                  </span>
                </span>
              </span>
              {creditsExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <div style={{ marginTop: 12 }}>
              <div className="tv-progress">
                <span style={{ width: `${usagePct}%` }} />
              </div>
              <div className="tv-muted" style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginTop: 7, fontSize: 11 }}>
                <span>{creditsUsed} used</span>
                <span>{creditsRemaining} left</span>
              </div>
            </div>
            {creditsExpanded ? (
              <>
                <div className="tv-muted" style={{ marginTop: 12, fontSize: 12, lineHeight: 1.5 }}>
                  Credits refresh daily. Each verification uses credits by format.
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 8, marginTop: 14 }}>
                  {CREDIT_ITEMS.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '8px 9px', borderRadius: 12, background: 'var(--tv-surface-soft)', border: '1px solid var(--tv-border)' }}>
                        <Icon size={14} color="var(--tv-primary)" />
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: 11, fontWeight: 800 }}>{item.value}</div>
                          <div className="tv-muted" style={{ fontSize: 10 }}>{item.label}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </aside>

      <div className="tv-mobile-tabbar">
        {MOBILE_ITEMS.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.path
          return (
            <button
              key={item.path}
              type="button"
              onClick={() => handleRoute(item.path)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                padding: '8px 6px',
                border: 0,
                borderRadius: 12,
                background: isActive ? 'rgba(37, 99, 235, 0.12)' : 'transparent',
                color: isActive ? 'var(--tv-primary)' : 'var(--tv-text-muted)',
              }}
            >
              <Icon size={18} />
              <span style={{ fontSize: 10, fontWeight: 700 }}>{item.label}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}
