import { useCallback, useMemo, useRef, useState } from 'react'
import { FileAudio, FileImage, FileText, UploadCloud, X } from 'lucide-react'

const MAX_SIZE_MB = 15

const FILE_GROUPS = {
  image: {
    label: 'Image',
    icon: FileImage,
    extensions: ['.jpg', '.jpeg', '.png', '.webp'],
    description: 'Supports JPG, PNG, and WebP up to 15 MB.',
    color: 'var(--tv-primary)',
    bg: 'rgba(37, 99, 235, 0.12)',
  },
  audio: {
    label: 'Audio',
    icon: FileAudio,
    extensions: ['.mp3', '.wav', '.m4a', '.ogg', '.flac', '.mp4', '.webm', '.mov'],
    description: 'Supports MP3, WAV, M4A, OGG, FLAC, MP4, WebM, and MOV up to 15 MB.',
    color: 'var(--tv-success)',
    bg: 'rgba(16, 185, 129, 0.12)',
  },
  text: {
    label: 'Text',
    icon: FileText,
    extensions: ['.txt'],
    description: 'Upload .txt files for text-auth verification up to 15 MB.',
    color: 'var(--tv-danger)',
    bg: 'rgba(220, 38, 38, 0.12)',
  },
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

export default function FileUploader({ mode = 'image', onModeChange, onFileReady }) {
  const inputRef = useRef(null)
  const [file, setFile] = useState(null)
  const [error, setError] = useState('')
  const [dragOver, setDragOver] = useState(false)

  const currentGroup = FILE_GROUPS[mode] || FILE_GROUPS.image
  const acceptedExtensions = currentGroup.extensions

  const processFile = useCallback((selectedFile) => {
    const ext = `.${selectedFile.name.split('.').pop().toLowerCase()}`

    if (!acceptedExtensions.includes(ext)) {
      setError(`Unsupported format for ${currentGroup.label.toLowerCase()}: ${ext}`)
      return
    }

    if (selectedFile.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`File too large. Max ${MAX_SIZE_MB} MB.`)
      return
    }

    setError('')
    setFile({
      raw: selectedFile,
      name: selectedFile.name,
      ext,
      size: formatSize(selectedFile.size),
      mode,
    })
    onFileReady?.(selectedFile)
  }, [acceptedExtensions, currentGroup.label, mode, onFileReady])

  const clearFile = useCallback(() => {
    setFile(null)
    setError('')
    if (inputRef.current) inputRef.current.value = ''
    onFileReady?.(null)
  }, [onFileReady])

  const handleModeSelect = (nextMode) => {
    if (nextMode === mode) return
    clearFile()
    onModeChange?.(nextMode)
  }

  const fileTone = useMemo(() => {
    const group = FILE_GROUPS[file?.mode || mode] || FILE_GROUPS.image
    const Icon = group.icon
    return {
      bg: group.bg,
      color: group.color,
      icon: <Icon size={24} />,
    }
  }, [file?.mode, mode])

  return (
    <div className="tv-card">
      <div className="tv-card-pad" style={{ display: 'grid', gap: 18 }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {Object.entries(FILE_GROUPS).map(([key, group]) => {
            const Icon = group.icon
            const active = key === mode
            return (
              <button
                key={key}
                type="button"
                className="tv-btn"
                onClick={() => handleModeSelect(key)}
                style={{
                  minHeight: 42,
                  paddingInline: 14,
                  background: active ? group.bg : 'var(--tv-surface-soft)',
                  color: active ? group.color : 'var(--tv-text)',
                  border: `1px solid ${active ? group.color : 'var(--tv-border)'}`,
                }}
              >
                <Icon size={16} />
                {group.label}
              </button>
            )
          })}
        </div>

        <div
          onClick={() => !file && inputRef.current?.click()}
          onDragOver={(event) => {
            event.preventDefault()
            setDragOver(true)
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(event) => {
            event.preventDefault()
            setDragOver(false)
            const selectedFile = event.dataTransfer.files?.[0]
            if (selectedFile) processFile(selectedFile)
          }}
          style={{
            border: `2px dashed ${dragOver ? currentGroup.color : 'var(--tv-border-strong)'}`,
            borderRadius: 18,
            padding: file ? 20 : 42,
            background: dragOver ? currentGroup.bg : 'var(--tv-surface-soft)',
            transition: '0.2s ease',
            cursor: file ? 'default' : 'pointer',
            position: 'relative',
          }}
        >
          <input
            ref={inputRef}
            type="file"
            accept={acceptedExtensions.join(',')}
            style={{ display: 'none' }}
            onChange={(event) => {
              const selectedFile = event.target.files?.[0]
              if (selectedFile) processFile(selectedFile)
            }}
          />

          {file ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: fileTone.bg,
                  color: fileTone.color,
                }}
              >
                {fileTone.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file.name}</div>
                <div className="tv-muted" style={{ marginTop: 4, fontSize: 13 }}>
                  {file.size} - {file.ext.replace('.', '').toUpperCase()}
                </div>
              </div>
              <button type="button" className="tv-btn tv-btn-secondary" style={{ minHeight: 38, paddingInline: 10 }} onClick={clearFile}>
                <X size={16} />
              </button>
            </div>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  margin: '0 auto 16px',
                  borderRadius: 18,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: currentGroup.bg,
                  color: currentGroup.color,
                }}
              >
                <UploadCloud size={30} />
              </div>
              <div style={{ fontSize: 17, fontWeight: 800 }}>
                {mode === 'text' ? 'Upload your .txt file here, or browse' : `Drop your ${currentGroup.label.toLowerCase()} file here, or browse`}
              </div>
              <p className="tv-page-copy" style={{ marginTop: 8 }}>
                {currentGroup.description}
              </p>
            </div>
          )}
        </div>

        {error ? <div style={{ color: 'var(--tv-danger)', fontSize: 13, fontWeight: 600 }}>{error}</div> : null}
      </div>
    </div>
  )
}
