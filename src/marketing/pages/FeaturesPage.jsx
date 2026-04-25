import { BarChart3, Brain, FileCheck2, Gauge, Image as ImageIcon, Layers3, Mic, ScanSearch, ShieldCheck, Sparkles, Video } from 'lucide-react'
import { CardGrid, ContentSection, MarketingLayout, SectionIntro } from '../MarketingLayout.jsx'

const featureItems = [
  {
    title: 'Text Detection',
    description: 'Assess language patterns, repetition, and confidence indicators to separate human-authored writing from AI-assisted output.',
    icon: Brain,
  },
  {
    title: 'Image Analysis',
    description: 'Inspect visual artifacts, generation patterns, and tampering signals to flag synthetic or manipulated imagery.',
    icon: ImageIcon,
  },
  {
    title: 'Audio Verification',
    description: 'Review voice consistency, synthesis indicators, and acoustic fingerprints to surface cloned or artificial audio.',
    icon: Mic,
  },
  {
    title: 'Video Scanning',
    description: 'Check frames, motion continuity, and authenticity cues to identify deepfakes and misleading edits.',
    icon: Video,
  },
  {
    title: 'Unified Reporting',
    description: 'Bring every verification result into one readable output with confidence scores, signal summaries, and review notes.',
    icon: FileCheck2,
  },
  {
    title: 'Operational Visibility',
    description: 'Track review outcomes and verification health over time so teams can maintain trust across channels.',
    icon: BarChart3,
  },
]

const capabilityCells = [
  { label: 'Text', value: '84%', icon: Brain },
  { label: 'Images', value: '92%', icon: ImageIcon },
  { label: 'Audio', value: '91%', icon: Mic },
  { label: 'Video', value: '100%', icon: Video },
]

const workflowItems = [
  ['Detect', 'Surface format-specific authenticity signals across text, images, audio, and video.'],
  ['Explain', 'Translate technical signals into readable summaries that reviewers can understand quickly.'],
  ['Route', 'Move outputs into moderation, compliance, editorial, or team review workflows.'],
]

function FeaturesHeroVisual() {
  return (
    <div className="relative mx-auto max-w-xl lg:ml-auto">
      <div className="absolute -inset-5 rounded-[44px] bg-[radial-gradient(circle_at_25%_20%,rgba(37,99,235,0.18),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(226,232,240,0.58))] blur-sm" />
      <div className="relative overflow-hidden rounded-[38px] border border-white/80 bg-white/86 p-5 shadow-[0_34px_90px_-56px_rgba(15,23,42,0.34)] backdrop-blur-xl sm:p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-blue-600">Capability matrix</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.045em] text-slate-950">One platform, every signal</h2>
          </div>
          <div className="rounded-2xl bg-slate-950 p-3 text-white">
            <Sparkles className="size-5" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {capabilityCells.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="rounded-[24px] bg-slate-50/90 p-4 ring-1 ring-slate-100">
                <div className="flex items-center justify-between gap-3">
                  <Icon className="size-5 text-slate-950" />
                  <span className="text-2xl font-extrabold tracking-[-0.05em] text-slate-950">{item.value}</span>
                </div>
                <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full rounded-full bg-blue-600" style={{ width: item.value }} />
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-4 rounded-[26px] bg-slate-950 p-5 text-white">
          <div className="flex items-center gap-3">
            <Gauge className="size-5 text-blue-300" />
            <p className="font-extrabold">Unified reporting layer</p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            {['Detect', 'Score', 'Export'].map((item) => (
              <div key={item} className="rounded-2xl bg-white/8 px-3 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-slate-200 ring-1 ring-white/10">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FeaturesPage() {
  return (
    <MarketingLayout
      eyebrow="Features"
      title="See every verification capability in one consistent platform."
      description="AIAUTHY combines content analysis, authenticity signals, and reporting into one clean verification workflow."
      heroVisual={<FeaturesHeroVisual />}
    >
      <ContentSection>
        <SectionIntro
          eyebrow="Capabilities"
          title="Built to verify across formats, teams, and review moments."
          description="Each feature is designed to feel fast, understandable, and operationally useful whether your team is reviewing one file or scaling verification across many channels."
        />
        <div className="pt-12">
          <CardGrid items={featureItems} columns="md:grid-cols-2 xl:grid-cols-3" />
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="flex flex-col justify-center space-y-6">
            <SectionIntro
              eyebrow="Unified report"
              title="Every signal becomes a review-ready decision layer."
              description="Instead of scattering results across different tools, AIAUTHY turns multi-format analysis into one calm, structured output your team can read and act on."
            />
            <div className="grid gap-3 sm:grid-cols-3">
              {workflowItems.map(([title, copy]) => (
                <div key={title} className="h-full rounded-3xl border border-white/80 bg-white/72 p-5 shadow-[0_18px_46px_-36px_rgba(15,23,42,0.22)] backdrop-blur-md">
                  <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-600">{title}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-full overflow-hidden rounded-[38px] border border-white/80 bg-slate-950 p-6 text-white shadow-[0_38px_90px_-54px_rgba(15,23,42,0.55)]">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="relative flex w-full flex-col justify-between">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-blue-300">Authenticity report</p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.04em]">Cross-format analysis</h3>
                </div>
                <div className="rounded-full bg-emerald-400/12 px-3 py-1 text-xs font-extrabold text-emerald-200 ring-1 ring-emerald-300/20">Verified</div>
              </div>
              <div className="grid gap-3">
                {[
                  ['Text models', '84%', 'Language pattern confidence'],
                  ['Frame authenticity', '100%', 'Visual continuity check'],
                  ['Audio consistency', '91%', 'Voice signal review'],
                ].map(([label, value, copy]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-extrabold">{label}</p>
                        <p className="mt-1 text-sm text-slate-300">{copy}</p>
                      </div>
                      <p className="text-3xl font-extrabold tracking-[-0.05em]">{value}</p>
                    </div>
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-blue-400" style={{ width: value }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="rounded-[40px] border border-white/80 bg-white/72 p-7 shadow-[0_30px_80px_-56px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-9">
          <SectionIntro
            eyebrow="Platform view"
            title="Capability depth without tool sprawl."
            description="AIAUTHY keeps the workflow focused: one platform for input, analysis, reporting, and team alignment."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: ScanSearch, title: 'Scan every format', copy: 'Run text, image, audio, and video checks from a single review flow.' },
              { icon: Layers3, title: 'Compare signals', copy: 'Give reviewers a consistent way to interpret confidence and risk.' },
              { icon: ShieldCheck, title: 'Act with clarity', copy: 'Route questionable content into the right next step without confusion.' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="h-full rounded-[28px] bg-slate-50/85 p-6 ring-1 ring-slate-100">
                  <Icon className="size-7 text-slate-950" />
                  <h3 className="mt-5 text-xl font-extrabold tracking-[-0.035em] text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.copy}</p>
                </div>
              )
            })}
          </div>
        </div>
      </ContentSection>
    </MarketingLayout>
  )
}
