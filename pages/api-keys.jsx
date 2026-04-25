import ApiKeys from '../src/pages/ApiKeys.jsx'
import ProtectedPage from '../src/components/ProtectedPage.jsx'

export default function ApiKeysRoute() {
  return (
    <ProtectedPage>
      <ApiKeys />
    </ProtectedPage>
  )
}
