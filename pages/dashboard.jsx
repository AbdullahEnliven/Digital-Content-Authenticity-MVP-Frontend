import Dashboard from '../src/pages/Dashboard.jsx'
import ProtectedPage from '../src/components/ProtectedPage.jsx'

export default function DashboardRoute() {
  return (
    <ProtectedPage>
      <Dashboard />
    </ProtectedPage>
  )
}
