import Profile from '../src/pages/Profile.jsx'
import ProtectedPage from '../src/components/ProtectedPage.jsx'

export default function ProfileRoute() {
  return (
    <ProtectedPage>
      <Profile />
    </ProtectedPage>
  )
}
