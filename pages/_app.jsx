import { AppProvider } from '../src/App.jsx'
import AppShell from '../src/components/AppShell.jsx'
import { api } from '../src/lib/api.js'
import '../src/styles/global.css'

export default function NextApp({ Component, pageProps }) {
  return (
    <AppProvider api={api}>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </AppProvider>
  )
}
