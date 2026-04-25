const COLORS = {
  success: 'var(--tv-success)',
  error: 'var(--tv-danger)',
  info: 'var(--tv-primary)',
  warning: 'var(--tv-warning)',
}

export default function ToastContainer({ toasts }) {
  return (
    <div className="tv-toast-wrap">
      {toasts.map((toast) => (
        <div key={toast.id} className="tv-toast" style={{ borderLeft: `4px solid ${COLORS[toast.type] || COLORS.info}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <strong style={{ color: COLORS[toast.type] || COLORS.info, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {toast.icon || 'Info'}
            </strong>
            <span>{toast.message}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
