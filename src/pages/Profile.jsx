import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Activity, Award, BadgeCheck, Bot, Briefcase, Building2, Mail, Save, ShieldAlert, ShieldCheck } from 'lucide-react'
import DashboardLayout from '../components/DashboardLayout.jsx'
import { PageIntro } from '../components/DashboardCard.jsx'
import { useApp } from '../App.jsx'
import { api } from '../lib/api.js'

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <div style={{ display: 'grid', gap: 6 }}>
      {eyebrow ? <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tv-primary)' }}>{eyebrow}</div> : null}
      <h2 style={{ margin: 0, fontSize: 20, fontWeight: 850, letterSpacing: '-0.03em' }}>{title}</h2>
      {copy ? <p className="tv-muted" style={{ margin: 0, lineHeight: 1.6 }}>{copy}</p> : null}
    </div>
  )
}

function StatTile({ label, value, icon, tone = 'var(--tv-primary)' }) {
  return (
    <div className="tv-card tv-card-soft" style={{ padding: 18, minHeight: 118, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ width: 38, height: 38, borderRadius: 14, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: `${tone}18`, color: tone }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 28, fontWeight: 850, letterSpacing: '-0.04em' }}>{value}</div>
        <div className="tv-muted" style={{ marginTop: 3, fontSize: 13 }}>{label}</div>
      </div>
    </div>
  )
}

function DetailPill({ icon, label, value }) {
  return (
    <div className="tv-card tv-card-soft" style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
      <div style={{ width: 34, height: 34, borderRadius: 12, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(37, 99, 235, 0.12)', color: 'var(--tv-primary)', flexShrink: 0 }}>
        {icon}
      </div>
      <div style={{ minWidth: 0 }}>
        <div className="tv-muted" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800 }}>{label}</div>
        <div style={{ marginTop: 3, fontWeight: 750, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value || '-'}</div>
      </div>
    </div>
  )
}

export default function ProfilePage() {
  const { user, token, login, showToast } = useApp()
  const [stats, setStats] = useState(null)
  const [loadingStats, setLoadingStats] = useState(true)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    first: user?.full_name?.split(' ')[0] || '',
    last: user?.full_name?.split(' ').slice(1).join(' ') || '',
    email: user?.email || '',
    organization: user?.organization || '',
    role: user?.job_role || '',
    bio: user?.bio || '',
  })

  useEffect(() => {
    setForm({
      first: user?.full_name?.split(' ')[0] || '',
      last: user?.full_name?.split(' ').slice(1).join(' ') || '',
      email: user?.email || '',
      organization: user?.organization || '',
      role: user?.job_role || '',
      bio: user?.bio || '',
    })
  }, [user])

  useEffect(() => {
    if (!token) return
    api
      .getUserStats(token)
      .then(setStats)
      .catch(() => showToast('warning', 'Unable to load activity overview', 'Alert'))
      .finally(() => setLoadingStats(false))
  }, [token, showToast])

  const saveProfile = async () => {
    setSaving(true)
    try {
      const updatedUser = await api.updateProfile(token, {
        full_name: `${form.first} ${form.last}`.trim(),
        organization: form.organization || null,
        job_role: form.role || null,
        bio: form.bio || null,
      })
      login({ access_token: token, user: updatedUser })
      showToast('success', 'Profile updated successfully', 'Success')
    } catch (error) {
      showToast('error', error.message, 'Error')
    } finally {
      setSaving(false)
    }
  }

  const initials = (user?.initials || 'TV').slice(0, 2)
  const accountCompletion = useMemo(() => {
    const values = [form.first, form.last, form.email, form.organization, form.role, form.bio]
    return Math.round((values.filter(Boolean).length / values.length) * 100)
  }, [form])

  return (
    <DashboardLayout>
      <motion.div initial="hidden" animate="visible" variants={reveal} style={{ display: 'grid', gap: 24 }}>
        <PageIntro title="Profile" copy="Manage your account identity, workspace details, and verification activity from one polished control center." />

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(320px, 0.9fr)', gap: 24, alignItems: 'stretch' }} className="profile-hero-grid">
          <div className="tv-card" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 12% 0%, rgba(37, 99, 235, 0.22), transparent 34%), radial-gradient(circle at 90% 10%, rgba(74, 222, 128, 0.1), transparent 28%)', pointerEvents: 'none' }} />
            <div className="tv-card-pad" style={{ position: 'relative', display: 'grid', gap: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
                <div style={{ width: 76, height: 76, borderRadius: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, var(--tv-primary), var(--tv-primary-strong))', color: '#fff', fontSize: 26, fontWeight: 850, boxShadow: '0 18px 40px rgba(37, 99, 235, 0.28)' }}>
                  {initials}
                </div>
                <div style={{ flex: 1, minWidth: 220 }}>
                  <div className="tv-badge tv-badge-success" style={{ marginBottom: 10 }}>Active Account</div>
                  <h2 style={{ margin: 0, fontSize: 30, lineHeight: 1.05, fontWeight: 850, letterSpacing: '-0.05em' }}>{user?.full_name || 'TrustVerify User'}</h2>
                  <p className="tv-muted" style={{ margin: '8px 0 0', fontSize: 14 }}>{user?.email || 'Signed in'}</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }} className="profile-detail-grid">
                <DetailPill icon={<Mail size={16} />} label="Email" value={form.email} />
                <DetailPill icon={<Building2 size={16} />} label="Organization" value={form.organization || 'Not set'} />
                <DetailPill icon={<Briefcase size={16} />} label="Role" value={form.role || 'Not set'} />
              </div>

              <div className="tv-card tv-card-soft" style={{ padding: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 14, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(220, 38, 38, 0.1)', color: 'var(--tv-danger)', flexShrink: 0 }}>
                    <ShieldAlert size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800 }}>Change password</div>
                    <div className="tv-muted" style={{ marginTop: 6, fontSize: 13, lineHeight: 1.55 }}>Send yourself a password reset email to secure your account.</div>
                  </div>
                </div>
                <button type="button" className="tv-btn tv-btn-secondary" onClick={() => showToast('info', 'Password change email sent', 'Session')}>
                  Request reset
                </button>
              </div>
            </div>
          </div>

          <div className="tv-card" style={{ overflow: 'hidden' }}>
            <div className="tv-card-pad" style={{ display: 'grid', gap: 18, height: '100%' }}>
              <SectionHeader eyebrow="Account health" title="Profile completion" copy="Complete profiles make team review and certificate records easier to understand." />
              <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 16 }}>
                <div style={{ fontSize: 56, lineHeight: 1, fontWeight: 850, letterSpacing: '-0.06em', color: 'var(--tv-primary)' }}>{accountCompletion}%</div>
                <ShieldCheck size={34} color="var(--tv-success)" />
              </div>
              <div className="tv-progress">
                <span style={{ width: `${accountCompletion}%` }} />
              </div>
              <div className="tv-card tv-card-soft" style={{ padding: 14, display: 'flex', gap: 12 }}>
                <BadgeCheck size={18} color="var(--tv-primary)" />
                <div className="tv-muted" style={{ lineHeight: 1.55, fontSize: 13 }}>
                  Your email is locked for account security. Update your public profile and workspace details below.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(320px, 380px)', gap: 24, alignItems: 'start' }} className="profile-main-grid">
          <div className="tv-card">
            <div className="tv-card-pad" style={{ display: 'grid', gap: 24 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                <SectionHeader eyebrow="Personal information" title="Account details" copy="Keep the profile information used across verification history, certificates, and workspace records up to date." />
                <button type="button" className="tv-btn tv-btn-primary" onClick={saveProfile} disabled={saving}>
                  <Save size={16} />
                  {saving ? 'Saving...' : 'Save changes'}
                </button>
              </div>

              <div className="tv-grid-2">
                <label className="tv-field">
                  <span className="tv-label">First Name</span>
                  <input className="tv-input" value={form.first} onChange={(event) => setForm((current) => ({ ...current, first: event.target.value }))} />
                </label>
                <label className="tv-field">
                  <span className="tv-label">Last Name</span>
                  <input className="tv-input" value={form.last} onChange={(event) => setForm((current) => ({ ...current, last: event.target.value }))} />
                </label>
              </div>

              <div className="tv-grid-2">
                <label className="tv-field">
                  <span className="tv-label">Email Address</span>
                  <input className="tv-input" value={form.email} disabled />
                </label>
                <label className="tv-field">
                  <span className="tv-label">Organization</span>
                  <input className="tv-input" value={form.organization} onChange={(event) => setForm((current) => ({ ...current, organization: event.target.value }))} placeholder="Company or team" />
                </label>
              </div>

              <label className="tv-field">
                <span className="tv-label">Role</span>
                <input className="tv-input" value={form.role} onChange={(event) => setForm((current) => ({ ...current, role: event.target.value }))} placeholder="Founder, analyst, reviewer..." />
              </label>

              <label className="tv-field">
                <span className="tv-label">Bio</span>
                <textarea className="tv-textarea" value={form.bio} onChange={(event) => setForm((current) => ({ ...current, bio: event.target.value }))} placeholder="Add a short note about your verification role or workflow." style={{ minHeight: 150 }} />
              </label>
            </div>
          </div>

          <div style={{ display: 'grid', gap: 24 }}>
            <div className="tv-card">
              <div className="tv-card-pad" style={{ display: 'grid', gap: 18 }}>
                <SectionHeader eyebrow="Activity" title="Verification overview" copy="A quick summary of your account activity." />
                {loadingStats ? (
                  <div className="tv-muted">Loading activity...</div>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
                    <StatTile label="Total checks" value={stats?.total_verifications ?? 0} icon={<Activity size={18} />} />
                    <StatTile label="Verified" value={stats?.verified_authentic ?? 0} icon={<ShieldCheck size={18} />} tone="var(--tv-success)" />
                    <StatTile label="AI detected" value={stats?.ai_detected ?? 0} icon={<Bot size={18} />} tone="var(--tv-danger)" />
                    <StatTile label="Certificates" value={stats?.certificates_issued ?? 0} icon={<Award size={18} />} tone="var(--tv-warning)" />
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  )
}
