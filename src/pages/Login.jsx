import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { useApp } from '../App.jsx'
import { api } from '../lib/api.js'

export default function Login() {
  const router = useRouter()
  const { login, showToast } = useApp()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const response = await api.login(form)
      login(response)
      showToast('success', 'Signed in successfully', 'Success')
      router.push('/dashboard')
    } catch (error) {
      showToast('error', error.message, 'Error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="tv-auth-shell">
      <div className="tv-hero-card">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.12)', fontSize: 12, fontWeight: 700 }}>
          <ShieldCheck size={14} />
          Secure sign in
        </div>
        <h1 style={{ fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.02, margin: '20px 0 12px', fontWeight: 800 }}>
          Welcome back to the integrated AI AUTHY workspace.
        </h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: 17, lineHeight: 1.7 }}>
          Sign in with your existing backend account and continue verifying files, reviewing trust scores, and downloading certificates.
        </p>
      </div>

      <div className="tv-card tv-auth-card">
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 28, fontWeight: 800 }}>Sign in</div>
          <p className="tv-page-copy">Use your current integrated backend credentials.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
          <label className="tv-field">
            <span className="tv-label">Email address</span>
            <input className="tv-input" type="email" value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} required />
          </label>
          <label className="tv-field">
            <span className="tv-label">Password</span>
            <input className="tv-input" type="password" value={form.password} onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))} required />
          </label>
          <button type="submit" className="tv-btn tv-btn-primary" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
            <ArrowRight size={16} />
          </button>
        </form>

        <p className="tv-page-copy" style={{ marginTop: 18 }}>
          Need an account? <Link href="/signup" style={{ color: 'var(--tv-primary)', fontWeight: 700 }}>Create one here.</Link>
        </p>
      </div>
    </div>
  )
}
