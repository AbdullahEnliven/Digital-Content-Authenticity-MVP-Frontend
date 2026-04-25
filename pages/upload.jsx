import Upload from '../src/pages/Upload.jsx'
import ProtectedPage from '../src/components/ProtectedPage.jsx'

export default function UploadRoute() {
  return (
    <ProtectedPage>
      <Upload />
    </ProtectedPage>
  )
}
