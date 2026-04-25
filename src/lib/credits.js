export const DAILY_CREDIT_LIMIT = 250

export const CREDIT_COSTS = {
  text: 20,
  audio: 30,
  image: 50,
  video: 70,
}

const AUDIO_EXTENSIONS = ['mp3', 'wav', 'm4a', 'ogg', 'flac']
const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp']
const VIDEO_EXTENSIONS = ['mp4', 'mov', 'webm', 'mkv']

export function creditTypeForFile(file) {
  const type = file?.type || ''
  const ext = file?.name?.split('.').pop()?.toLowerCase() || ''

  if (type.startsWith('image/') || IMAGE_EXTENSIONS.includes(ext)) return 'image'
  if (type.startsWith('audio/') || AUDIO_EXTENSIONS.includes(ext)) return 'audio'
  if (type.startsWith('video/') || VIDEO_EXTENSIONS.includes(ext)) return 'video'
  return 'text'
}

export function creditCostForFile(file) {
  return CREDIT_COSTS[creditTypeForFile(file)]
}

export function creditLabel(type) {
  return type.charAt(0).toUpperCase() + type.slice(1)
}
