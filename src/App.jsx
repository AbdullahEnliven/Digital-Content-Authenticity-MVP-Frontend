import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

export const AppContext = createContext(null)

export function useApp() {
  return useContext(AppContext)
}

function readStoredJson(key) {
  if (typeof window === 'undefined') return null

  try {
    return JSON.parse(window.localStorage.getItem(key) || 'null')
  } catch {
    return null
  }
}

function readStoredValue(key, fallback = '') {
  if (typeof window === 'undefined') return fallback
  return window.localStorage.getItem(key) || fallback
}

function normalizeUser(user) {
  const fullName = user?.full_name || user?.fullName || user?.name || user?.email || ''
  const initials = fullName
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return {
    ...user,
    name: fullName,
    full_name: fullName,
    initials,
  }
}

export function AppProvider({ children, api }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState('')
  const [verificationResult, setVerificationResultState] = useState(null)
  const [theme, setTheme] = useState('light')
  const [toasts, setToasts] = useState([])
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setUser(readStoredJson('tv-user'))
    setToken(readStoredValue('tv-token', ''))
    setVerificationResultState(readStoredJson('tv-last-result'))
    setTheme(readStoredValue('tv-theme', 'light'))
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (!isHydrated || typeof document === 'undefined') return

    document.documentElement.setAttribute('data-theme', theme === 'system' ? 'light' : theme)
    window.localStorage.setItem('tv-theme', theme)
  }, [isHydrated, theme])

  useEffect(() => {
    if (!isHydrated || typeof window === 'undefined') return
    if (user) window.localStorage.setItem('tv-user', JSON.stringify(user))
    else window.localStorage.removeItem('tv-user')
  }, [isHydrated, user])

  useEffect(() => {
    if (!isHydrated || typeof window === 'undefined') return
    if (token) window.localStorage.setItem('tv-token', token)
    else window.localStorage.removeItem('tv-token')
  }, [isHydrated, token])

  useEffect(() => {
    if (!isHydrated || typeof window === 'undefined') return
    if (verificationResult) window.localStorage.setItem('tv-last-result', JSON.stringify(verificationResult))
    else window.localStorage.removeItem('tv-last-result')
  }, [isHydrated, verificationResult])

  useEffect(() => {
    if (!isHydrated || !token || user) return

    api
      .me(token)
      .then((profile) => setUser(normalizeUser(profile)))
      .catch(() => {
        setToken('')
        setUser(null)
      })
  }, [api, isHydrated, token, user])

  const showToast = (type, message, icon = 'Info') => {
    const id = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`
    setToasts((prev) => [...prev, { id, type, message, icon }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id))
    }, 3200)
  }

  const login = (payload) => {
    setToken(payload.access_token)
    setUser(normalizeUser(payload.user))
  }

  const logout = () => {
    setToken('')
    setUser(null)
    setVerificationResultState(null)
  }

  const refreshUser = useCallback(async () => {
    if (!token) return null
    const profile = await api.me(token)
    const normalized = normalizeUser(profile)
    setUser(normalized)
    return normalized
  }, [api, token])

  const setVerificationResult = (value) => {
    setVerificationResultState(value)
  }

  const ctx = useMemo(
    () => ({
      user,
      token,
      login,
      logout,
      refreshUser,
      verificationResult,
      setVerificationResult,
      showToast,
      theme,
      setTheme,
      toasts,
      isHydrated,
    }),
    [user, token, refreshUser, verificationResult, theme, toasts, isHydrated],
  )

  return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>
}
