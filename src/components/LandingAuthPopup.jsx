import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useApp } from '../App.jsx'
import { api } from '../lib/api.js'

const SHELL_STYLE = {
  position: 'fixed',
  inset: 0,
  zIndex: 70,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 24,
  background: 'rgba(15, 23, 36, 0.18)',
  backdropFilter: 'blur(16px)',
}

const CARD_STYLE = {
  width: '100%',
  maxWidth: 392,
  borderRadius: 28,
  overflow: 'hidden',
  background:
    'radial-gradient(circle at top right, rgba(167, 139, 250, 0.32), transparent 22%), linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(248,250,252,0.98) 48%, rgba(239,246,255,0.98) 100%)',
  border: '1px solid rgba(37, 99, 235, 0.14)',
  boxShadow: '0 28px 80px rgba(37, 99, 235, 0.18)',
  color: '#0f172a',
  position: 'relative',
}

const INPUT_STYLE = {
  width: '100%',
  height: 46,
  borderRadius: 12,
  border: '1px solid rgba(37, 99, 235, 0.18)',
  background: 'rgba(255,255,255,0.85)',
  color: '#0f172a',
  padding: '0 14px',
  outline: 'none',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
}

export default function LandingAuthPopup({ mode, onClose, onSwitchMode }) {
  const router = useRouter()
  const { login, showToast } = useApp()
  const [loading, setLoading] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [form, setForm] = useState({ full_name: '', email: '', password: '' })

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  const isSignup = mode === 'signup'

  const submit = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const response = isSignup
        ? await api.register({
            full_name: form.full_name,
            email: form.email,
            password: form.password,
          })
        : await api.login({
            email: form.email,
            password: form.password,
          })

      login(response)
      showToast('success', isSignup ? 'Account created successfully' : 'Signed in successfully', 'Success')
      onClose()
      router.push('/dashboard')
    } catch (error) {
      showToast('error', error.message, 'Error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={SHELL_STYLE} onClick={onClose}>
      <div style={CARD_STYLE} onClick={(event) => event.stopPropagation()}>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, transparent 0%, transparent 50%, rgba(255,255,255,0.24) 67%, rgba(167, 139, 250, 0.28) 78%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', padding: '30px 26px 24px' }}>
          <button
            type="button"
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 14,
              right: 14,
              width: 32,
              height: 32,
              borderRadius: 10,
              border: '1px solid rgba(37, 99, 235, 0.12)',
              background: 'rgba(255,255,255,0.72)',
              color: '#64748b',
            }}
          >
            x
          </button>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 999, background: 'rgba(37, 99, 235, 0.08)', color: '#2563eb', fontSize: 12, fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            {isSignup ? 'Join Now' : 'Sign In'}
          </div>
          <div style={{ marginTop: 14, fontSize: 30, lineHeight: 1.05, fontWeight: 800, letterSpacing: '-0.04em' }}>
            {isSignup ? 'Create your AI Authy account' : 'Welcome back'}
          </div>
          <p style={{ margin: '10px 0 0', color: '#64748b', fontSize: 14, lineHeight: 1.6 }}>
            {isSignup ? 'Open your account right here on the landing page and jump into the integrated dashboard.' : 'Sign in without leaving the landing page and continue into your verification workspace.'}
          </p>

          <form onSubmit={submit} style={{ display: 'grid', gap: 12, marginTop: 24 }}>
            {isSignup ? (
              <input
                style={INPUT_STYLE}
                placeholder="Full name"
                value={form.full_name}
                onChange={(event) => setForm((current) => ({ ...current, full_name: event.target.value }))}
                required
              />
            ) : null}

            <input
              style={INPUT_STYLE}
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              required
            />

            <div style={{ position: 'relative' }}>
              <input
                style={{ ...INPUT_STYLE, paddingRight: 68 }}
                placeholder="Password"
                type={passwordVisible ? 'text' : 'password'}
                value={form.password}
                minLength={isSignup ? 8 : undefined}
                onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
                required
              />
              <button
                type="button"
                onClick={() => setPasswordVisible((current) => !current)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: 12,
                  transform: 'translateY(-50%)',
                  border: 0,
                  background: 'transparent',
                  color: '#2563eb',
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            </div>

            {!isSignup ? (
              <button
                type="button"
                onClick={() => showToast('info', 'Password reset flow can be connected next.', 'Info')}
                style={{
                  justifySelf: 'start',
                  border: 0,
                  background: 'transparent',
                  color: '#64748b',
                  padding: 0,
                  fontSize: 13,
                }}
              >
                Forgot Password
              </button>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: 4,
                height: 46,
                borderRadius: 12,
                border: 0,
                color: '#fff',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 55%, #1d4ed8 100%)',
                boxShadow: '0 14px 30px rgba(37, 99, 235, 0.28)',
              }}
            >
              {loading ? (isSignup ? 'Creating account...' : 'Signing in...') : isSignup ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div style={{ marginTop: 18, textAlign: 'center', fontSize: 13, color: '#64748b' }}>
            {isSignup ? 'Already have an account?' : 'New to AI Authy?'}{' '}
            <button
              type="button"
              onClick={() => onSwitchMode(isSignup ? 'login' : 'signup')}
              style={{
                border: 0,
                background: 'transparent',
                color: '#2563eb',
                fontWeight: 700,
                padding: 0,
              }}
            >
              {isSignup ? 'Sign In' : 'Join Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
