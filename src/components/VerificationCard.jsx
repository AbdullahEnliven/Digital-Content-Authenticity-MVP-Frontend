import { useRouter } from 'next/router'
import { useApp } from '../App.jsx'

function scoreColor(s) { return s >= 80 ? 'var(--accent3)' : s >= 50 ? 'var(--accent5)' : 'var(--accent4)' }

function statusBadge(s) {
  const m = { authentic:['badge-green','✅ Authentic'], ai:['badge-red','🤖 AI Detected'], suspicious:['badge-amber','⚠️ Suspicious'] }
  const [cls, txt] = m[s] || ['badge-blue', s]
  return <span className={`badge ${cls}`}>{txt}</span>
}

const FILE_ICON = { Image:'🖼️', Document:'📄', Audio:'🎵', Video:'🎬' }

export default function VerificationCard({ item, onClick }) {
  const router = useRouter()
  const { setVerificationResult } = useApp()

  const handleClick = () => {
    if (onClick) { onClick(item); return }
    setVerificationResult({ filename:item.name, score:item.score, aiPct:100-item.score, date:item.date })
    router.push('/results')
  }

  return (
    <div onClick={handleClick}
      style={{ display:'flex', alignItems:'center', gap:12, padding:'14px 16px', background:'var(--glass)', border:'1px solid var(--border)', borderRadius:12, cursor:'pointer', transition:'all 0.18s' }}
      onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--glass2)'; e.currentTarget.style.borderColor = 'var(--border2)' }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--glass)'; e.currentTarget.style.borderColor = 'var(--border)' }}>
      <span style={{ fontSize:22, flexShrink:0 }}>{FILE_ICON[item.type] || '📁'}</span>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontSize:13, fontWeight:500, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{item.name}</div>
        <div style={{ fontSize:11, color:'var(--text3)', marginTop:2 }}>{item.date} · {item.size || item.type}</div>
      </div>
      {statusBadge(item.status)}
      <span style={{ fontFamily:'var(--font-display)', fontSize:16, fontWeight:800, color:scoreColor(item.score), flexShrink:0 }}>{item.score}</span>
    </div>
  )
}
