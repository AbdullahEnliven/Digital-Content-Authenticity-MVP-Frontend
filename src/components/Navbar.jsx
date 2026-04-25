import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowRight } from 'lucide-react'
import { useApp } from '../App.jsx'

export default function Navbar() {
  const router = useRouter()
  const { user } = useApp()

  return (
    <nav className="tv-public-nav">
      <Link href={user ? '/dashboard' : '/'} className="tv-brand">
        <span className="tv-brand-mark">A</span>
        <span>AI AUTHY by TrustVerify</span>
      </Link>

      <div className="tv-public-actions">
        {user ? (
          <button type="button" className="tv-btn tv-btn-primary" onClick={() => router.push('/dashboard')}>
            Open Dashboard
            <ArrowRight size={16} />
          </button>
        ) : (
          <>
            <Link href="/login" className="tv-btn tv-btn-secondary">
              Sign In
            </Link>
            <Link href="/signup" className="tv-btn tv-btn-primary">
              Get Started
              <ArrowRight size={16} />
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}
