import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useApp } from '../src/App.jsx'

export default function NotFoundRedirect() {
  const router = useRouter()
  const { user, isHydrated } = useApp()

  useEffect(() => {
    if (!isHydrated) return
    router.replace(user ? '/dashboard' : '/')
  }, [isHydrated, router, user])

  return null
}
