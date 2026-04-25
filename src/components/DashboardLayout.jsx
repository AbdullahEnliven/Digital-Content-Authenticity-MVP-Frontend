import { Bell, Moon, Sun } from 'lucide-react'
import Sidebar from './Sidebar.jsx'
import { useApp } from '../App.jsx'

export default function DashboardLayout({ children }) {
  const { theme, setTheme } = useApp()
  const isDark = theme === 'dark'

  return (
    <div className="tv-page">
      <Sidebar />
      <main className="tv-main">
        <div className="tv-topbar">
          <button type="button" className="tv-btn tv-btn-secondary" style={{ minHeight: 40, paddingInline: 12 }}>
            <Bell size={16} />
          </button>
          <button
            type="button"
            className="tv-btn tv-btn-secondary"
            style={{ minHeight: 40, paddingInline: 12 }}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
        <div className="tv-main-inner">{children}</div>
      </main>
    </div>
  )
}
