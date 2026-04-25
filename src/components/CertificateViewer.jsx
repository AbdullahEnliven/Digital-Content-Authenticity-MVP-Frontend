import { useRouter } from 'next/router'

function scoreColor(s) { return s >= 80 ? 'var(--accent3)' : s >= 50 ? 'var(--accent5)' : 'var(--accent4)' }

export default function CertificateViewer({ cert, compact = false }) {
  const router = useRouter()
  if (!cert) return null

  const validUntil = (() => {
    const d = new Date()
    d.setFullYear(d.getFullYear() + 2)
    return d.toLocaleDateString('en-US', { month:'long', year:'numeric' })
  })()

  if (compact) {
    return (
      <div style={{ background:'var(--surface3)', border:'1px solid var(--border2)', borderRadius:14, padding:'20px 22px', display:'flex', alignItems:'center', gap:16 }}>
        <div style={{ width:48, height:48, background:'linear-gradient(135deg, var(--accent), var(--accent2))', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, flexShrink:0 }}>🛡</div>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ fontSize:12, color:'var(--text3)', marginBottom:2 }}>Certificate of Authenticity</div>
          <div style={{ fontSize:14, fontWeight:600, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{cert.name}</div>
          <div style={{ fontSize:12, color:'var(--text3)', marginTop:2 }}>{cert.id} · Score: <span style={{ color:scoreColor(cert.score), fontWeight:700 }}>{cert.score}</span></div>
        </div>
        <button onClick={() => router.push('/certificate')} className="btn btn-secondary btn-sm">View →</button>
      </div>
    )
  }

  return (
    <div style={{ background:'linear-gradient(135deg, var(--surface2), var(--surface3))', border:'1px solid var(--border2)', borderRadius:20, padding:'36px 28px', textAlign:'center', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:8, border:'1px solid var(--border)', borderRadius:14, pointerEvents:'none' }} />
      <div style={{ position:'relative', zIndex:1 }}>
        <div style={{ fontSize:36, marginBottom:12 }}>🛡</div>
        <div style={{ fontSize:10, textTransform:'uppercase', letterSpacing:'0.15em', color:'var(--text3)', marginBottom:6 }}>Certificate of Digital Authenticity</div>
        <div className="text-gradient" style={{ fontFamily:'var(--font-display)', fontSize:24, fontWeight:800, marginBottom:8 }}>VERIFIED</div>
        <div style={{ fontFamily:'var(--font-display)', fontSize:36, fontWeight:800, color:scoreColor(cert.score), lineHeight:1 }}>{cert.score}</div>
        <div style={{ fontSize:12, color:'var(--text3)', marginBottom:16 }}>Trust Score / 100</div>
        <div className="divider" />
        <div style={{ fontSize:13, color:'var(--text2)', margin:'14px 0 6px' }}>Certifies</div>
        <div style={{ fontFamily:'var(--font-display)', fontSize:15, fontWeight:700, marginBottom:16, wordBreak:'break-all' }}>{cert.name}</div>
        <div className="divider" />
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginTop:16, textAlign:'left' }}>
          {[['ID', cert.id, true], ['Date', cert.date, false], ['By', 'TrustVerify', false], ['Until', validUntil, false]].map(([l, v, mono]) => (
            <div key={l}>
              <div style={{ fontSize:9, textTransform:'uppercase', color:'var(--text3)', marginBottom:2 }}>{l}</div>
              <div style={{ fontSize:11, fontFamily:mono ? 'monospace' : 'inherit', color: mono ? 'var(--accent)' : 'var(--text)', wordBreak:'break-all' }}>{v}</div>
            </div>
          ))}
        </div>
        <button onClick={() => router.push('/certificate')} className="btn btn-primary btn-sm btn-full" style={{ marginTop:18 }}>View Full Certificate →</button>
      </div>
    </div>
  )
}
