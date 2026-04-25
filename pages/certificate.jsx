import Certificate from '../src/pages/Certificate.jsx'
import ProtectedPage from '../src/components/ProtectedPage.jsx'

export default function CertificateRoute() {
  return (
    <ProtectedPage>
      <Certificate />
    </ProtectedPage>
  )
}
