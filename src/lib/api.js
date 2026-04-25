const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.VITE_API_BASE_URL || 'http://localhost:8000'

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, options)
  const contentType = response.headers.get('content-type') || ''
  const data = contentType.includes('application/json') ? await response.json() : null
  if (!response.ok) throw new Error(data?.detail || data?.message || `Request failed with status ${response.status}`)
  return data
}

export const api = {
  baseUrl: API_BASE,
  register: (payload) =>
    request('/api/v1/auth/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }),
  login: (payload) =>
    request('/api/v1/auth/login-json', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }),
  me: (token) =>
    request('/api/v1/auth/me', { headers: { Authorization: `Bearer ${token}` } }),
  updateProfile: (token, payload) =>
    request('/api/v1/auth/me', { method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(payload) }),
  getUserStats: (token) =>
    request('/api/v1/auth/me/stats', { headers: { Authorization: `Bearer ${token}` } }),
  upload: (token, file) => {
    const form = new FormData()
    form.append('file', file)
    return request('/api/v1/uploads', { method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: form })
  },
  startVerification: (token, uploadId, payload) =>
    request(`/api/v1/verifications/${uploadId}/start`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(payload) }),
  getVerification: (token, verificationId) =>
    request(`/api/v1/verifications/${verificationId}`, { headers: { Authorization: `Bearer ${token}` } }),
  getVerificationStatus: (token, verificationId) =>
    request(`/api/v1/verifications/${verificationId}/status`, { headers: { Authorization: `Bearer ${token}` } }),
  getHistory: (token) =>
    request('/api/v1/history', { headers: { Authorization: `Bearer ${token}` } }),
  getCertificateMetadata: (token, verificationId) =>
    request(`/api/v1/certificates/${verificationId}/metadata`, { headers: { Authorization: `Bearer ${token}` } }),
  downloadCertificate: async (token, verificationId) => {
    const response = await fetch(`${API_BASE}/api/v1/certificates/${verificationId}/download`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
    if (!response.ok) throw new Error(`Download failed with status ${response.status}`)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `certificate_${verificationId}.pdf`
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.URL.revokeObjectURL(url)
  },
  getCertificateDownloadUrl: (verificationId) => `${API_BASE}/api/v1/certificates/${verificationId}/download`,
}
