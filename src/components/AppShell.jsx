import { useRouter } from 'next/router'
import ToastContainer from './ToastContainer.jsx'
import Navbar from './Navbar.jsx'
import { useApp } from '../App.jsx'

const PUBLIC_ROUTES = new Set(['/', '/login', '/signup', '/features', '/how-it-works', '/use-cases', '/contact', '/support'])
const MARKETING_ROUTES = new Set(['/', '/features', '/how-it-works', '/use-cases', '/contact', '/support'])

export default function AppShell({ children }) {
  const router = useRouter()
  const { toasts } = useApp()
  const isPublicRoute = PUBLIC_ROUTES.has(router.pathname)
  const isMarketingPage = MARKETING_ROUTES.has(router.pathname)

  return (
    <div className={isPublicRoute ? 'tv-public-shell' : 'tv-shell'}>
      <ToastContainer toasts={toasts} />
      {isPublicRoute ? (
        <>
          {!isMarketingPage ? <Navbar /> : null}
          {isMarketingPage ? children : <div className="tv-public-main">{children}</div>}
        </>
      ) : (
        children
      )}
    </div>
  )
}
