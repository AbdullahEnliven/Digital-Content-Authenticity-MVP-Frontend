import Results from '../src/pages/Results.jsx'
import ProtectedPage from '../src/components/ProtectedPage.jsx'

export default function ResultsRoute() {
  return (
    <ProtectedPage>
      <Results />
    </ProtectedPage>
  )
}
