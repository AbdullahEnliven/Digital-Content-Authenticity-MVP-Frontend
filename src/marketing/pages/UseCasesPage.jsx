import { Briefcase, Building2, GraduationCap, Newspaper, Shield, Target, Users } from 'lucide-react'
import { ContentSection, MarketingLayout, SectionIntro } from '../MarketingLayout.jsx'

const useCases = [
  {
    title: 'Media verification',
    audience: 'Editorial and newsroom teams',
    problem: 'Synthetic text, generated visuals, and edited clips can move faster than traditional fact-checking workflows.',
    help: 'AIAUTHY gives editors a consistent pre-publication review layer across text, images, audio, and video.',
    icon: Newspaper,
  },
  {
    title: 'Enterprise compliance',
    audience: 'Risk, legal, and communications teams',
    problem: 'Public-facing content needs a dependable authenticity check before it becomes operational or reputational risk.',
    help: 'Teams can standardize review language, document confidence, and route questionable assets for escalation.',
    icon: Building2,
  },
  {
    title: 'Academic review',
    audience: 'Educators and review committees',
    problem: 'Submitted work can involve unclear authorship, AI assistance, or manipulated reference material.',
    help: 'Reviewers get signal summaries that support fairer conversations instead of relying on a single black-box label.',
    icon: GraduationCap,
  },
  {
    title: 'Platform moderation',
    audience: 'Trust and safety teams',
    problem: 'High-volume platforms need to prioritize which submissions deserve deeper human review.',
    help: 'AIAUTHY surfaces authenticity indicators quickly so teams can triage synthetic patterns and suspicious uploads.',
    icon: Shield,
  },
  {
    title: 'Agency workflows',
    audience: 'Creative and client-service teams',
    problem: 'Multiple stakeholders need one shared way to verify deliverables, submissions, and campaign assets.',
    help: 'Teams can keep project reviews aligned with readable outputs and reusable verification criteria.',
    icon: Users,
  },
  {
    title: 'Hiring and submissions',
    audience: 'People teams and program operators',
    problem: 'Applications, samples, and submitted materials can require additional authenticity context.',
    help: 'Reviewers can add structured verification to sensitive decisions without slowing the entire process.',
    icon: Briefcase,
  },
]

const workflowFit = [
  ['Before publishing', 'Check assets before they reach customers, readers, or public channels.'],
  ['During review', 'Use signal summaries to guide moderators, editors, or compliance reviewers.'],
  ['After escalation', 'Keep a consistent record of why content was approved, flagged, or routed.'],
]

function UseCasesHeroVisual() {
  const scenarios = [
    { label: 'Newsroom', icon: Newspaper, color: 'bg-blue-50 text-blue-600 ring-blue-100' },
    { label: 'Compliance', icon: Building2, color: 'bg-slate-950 text-white ring-slate-900' },
    { label: 'Education', icon: GraduationCap, color: 'bg-white text-slate-950 ring-slate-100' },
    { label: 'Moderation', icon: Shield, color: 'bg-emerald-50 text-emerald-600 ring-emerald-100' },
  ]

  return (
    <div className="relative mx-auto max-w-xl lg:ml-auto">
      <div className="absolute -inset-5 rounded-[44px] bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.16),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(226,232,240,0.58))] blur-sm" />
      <div className="relative overflow-hidden rounded-[38px] border border-white/80 bg-white/86 p-6 shadow-[0_34px_90px_-56px_rgba(15,23,42,0.34)] backdrop-blur-xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-blue-600">Scenario map</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.045em] text-slate-950">Teams using one trust layer</h2>
          </div>
          <div className="rounded-2xl bg-blue-50 p-3 text-blue-600 ring-1 ring-blue-100">
            <Target className="size-5" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {scenarios.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className={`rounded-[24px] p-5 ring-1 ${item.color}`}>
                <Icon className="size-6" />
                <p className="mt-6 text-lg font-extrabold tracking-[-0.035em]">{item.label}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-4 rounded-[26px] bg-slate-50/95 p-5 ring-1 ring-slate-100">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-400">Shared outcome</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Lower review risk', 'Faster triage', 'Clearer evidence'].map((item) => (
              <span key={item} className="rounded-full bg-white px-3 py-2 text-xs font-extrabold text-slate-600 ring-1 ring-slate-100">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function UseCasesPage() {
  return (
    <MarketingLayout
      eyebrow="Use cases"
      title="See how different teams apply verification in the real world."
      description="AIAUTHY is designed for practical review environments where clarity, speed, and trust matter as much as the result itself."
      heroVisual={<UseCasesHeroVisual />}
    >
      <ContentSection>
        <SectionIntro
          eyebrow="Applications"
          title="Purpose-built paths for teams that need trusted content."
          description="Each use case keeps the same core verification workflow while adapting the language and review moments to the team using it."
        />
        <div className="mt-12 grid auto-rows-fr gap-6 lg:grid-cols-2">
          {useCases.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="group flex h-full flex-col rounded-[34px] border border-white/80 bg-white/78 p-7 shadow-[0_28px_76px_-54px_rgba(15,23,42,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/92">
                <div className="flex items-start gap-5">
                  <div className="rounded-2xl bg-slate-950 p-3 text-white shadow-[0_16px_36px_-24px_rgba(15,23,42,0.6)]">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-600">{item.audience}</p>
                    <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.045em] text-slate-950">{item.title}</h3>
                  </div>
                </div>
                <div className="mt-7 grid flex-1 gap-4 sm:grid-cols-2">
                  <div className="h-full rounded-3xl bg-slate-50/85 p-5 ring-1 ring-slate-100">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-400">Problem</p>
                    <p className="mt-3 leading-7 text-slate-600">{item.problem}</p>
                  </div>
                  <div className="h-full rounded-3xl bg-blue-50/70 p-5 ring-1 ring-blue-100/80">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">How AIAUTHY helps</p>
                    <p className="mt-3 leading-7 text-slate-700">{item.help}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="rounded-[40px] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(239,246,255,0.72))] p-7 shadow-[0_34px_86px_-58px_rgba(15,23,42,0.3)] backdrop-blur-xl sm:p-9">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <SectionIntro
              eyebrow="Workflow fit"
              title="Verification that belongs inside real operating rhythms."
              description="The platform is useful before content goes live, while a team is reviewing it, and after an escalation needs a clear record."
            />
            <div className="grid gap-4">
              {workflowFit.map(([title, copy], index) => (
                <div key={title} className="flex gap-5 rounded-3xl bg-white/78 p-5 ring-1 ring-white/90">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-extrabold text-white">{index + 1}</div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-950">{title}</h3>
                    <p className="mt-1 leading-7 text-slate-600">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>
    </MarketingLayout>
  )
}
