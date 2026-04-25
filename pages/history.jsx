import History from '../src/pages/History.jsx'
import ProtectedPage from '../src/components/ProtectedPage.jsx'

export default function HistoryRoute() {
  return (
    <ProtectedPage>
      <History />
    </ProtectedPage>
  )
}
