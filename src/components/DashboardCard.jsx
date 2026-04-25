export function DashboardCard({ children, className = '', style }) {
  return (
    <div className={`tv-card ${className}`.trim()} style={style}>
      <div className="tv-card-pad">{children}</div>
    </div>
  )
}

export function PageIntro({ title, copy, actions }) {
  return (
    <div className="tv-page-header">
      <div>
        <h1 className="tv-page-title">{title}</h1>
        {copy ? <p className="tv-page-copy">{copy}</p> : null}
      </div>
      {actions ? <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>{actions}</div> : null}
    </div>
  )
}

export function StatCard({ title, value, icon, tone = '#2563eb' }) {
  return (
    <div className="tv-card">
      <div className="tv-card-pad">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18 }}>
          <div>
            <div className="tv-muted" style={{ fontSize: 14 }}>{title}</div>
            <div style={{ marginTop: 8, fontSize: 34, fontWeight: 800 }}>{value}</div>
          </div>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: `${tone}18`,
              color: tone,
            }}
          >
            {icon}
          </div>
        </div>
      </div>
    </div>
  )
}
