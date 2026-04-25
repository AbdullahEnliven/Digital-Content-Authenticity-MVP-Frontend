import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useApp } from '../App.jsx'

export default function ProtectedPage({ children }) {
  const router = useRouter()
  const { user, isHydrated } = useApp()

  useEffect(() => {
    if (!isHydrated || user) return
    router.replace('/login')
  }, [isHydrated, router, user])

  if (!isHydrated) {
    return null
  }

  if (!user) {
    return null
  }

  return children
}
