import { BookOpen, ChevronDown, HelpCircle, LifeBuoy, MessageSquareMore, Search, ShieldCheck, Wrench } from 'lucide-react'
import { CardGrid, ContentSection, FaqList, MarketingLayout, SectionIntro } from '../MarketingLayout.jsx'

const supportCards = [
  {
    title: 'Getting started',
    description: 'Understand core workflow steps, verification concepts, and onboarding essentials.',
    icon: BookOpen,
  },
  {
    title: 'Account and access',
    description: 'Find guidance for account setup, login issues, and workspace-related questions.',
    icon: LifeBuoy,
  },
  {
    title: 'Verification outputs',
    description: 'Learn how to read confidence scores, signal summaries, and authenticity indicators.',
    icon: ShieldCheck,
  },
  {
    title: 'Troubleshooting',
    description: 'Use support pathways when something looks off or when your workflow needs attention.',
    icon: Wrench,
  },
]

const supportFaq = [
  {
    question: 'Where should a new team start?',
    answer: 'Start with workflow basics, then align on how your team will interpret verification outputs and what should trigger escalation.',
  },
  {
    question: 'What if a result needs a second review?',
    answer: 'Use the support and review pathways to compare context, signals, and operational risk before making a final decision.',
  },
  {
    question: 'How should teams handle unusual outputs?',
    answer: 'Treat them as review prompts rather than isolated labels, and guide them through the same structured decision path your team already trusts.',
  },
]

const quickTopics = ['Reading confidence scores', 'Managing team access', 'Supported file types', 'Escalating a review']

function SupportHeroVisual() {
  return (
    <div className="relative mx-auto max-w-xl lg:ml-auto">
      <div className="absolute -inset-5 rounded-[44px] bg-[radial-gradient(circle_at_65%_10%,rgba(37,99,235,0.18),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(226,232,240,0.58))] blur-sm" />
      <div className="relative overflow-hidden rounded-[38px] border border-white/80 bg-white/86 p-6 shadow-[0_34px_90px_-56px_rgba(15,23,42,0.34)] backdrop-blur-xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-blue-600">Help center</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.045em] text-slate-950">Find answers fast</h2>
          </div>
          <div className="rounded-2xl bg-blue-50 p-3 text-blue-600 ring-1 ring-blue-100">
            <HelpCircle className="size-5" />
          </div>
        </div>

        <div className="rounded-[26px] border border-slate-200 bg-slate-50/90 p-3 shadow-inner">
          <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-100">
            <Search className="size-5 text-slate-400" />
            <span className="text-sm font-semibold text-slate-400">Search guides, outputs, access...</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            ['Guides', 'Workflow setup'],
            ['FAQ', 'Common blockers'],
            ['Access', 'Account help'],
            ['Escalate', 'Human support'],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-[22px] bg-slate-50/95 p-4 ring-1 ring-slate-100">
              <p className="font-extrabold text-slate-950">{title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-[26px] bg-slate-950 p-5 text-white">
          <p className="text-sm font-extrabold text-blue-300">Support status</p>
          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold tracking-[-0.045em]">Self-service ready</p>
            <span className="rounded-full bg-emerald-400/12 px-3 py-1 text-xs font-extrabold text-emerald-200 ring-1 ring-emerald-300/20">Online</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SupportPage() {
  return (
    <MarketingLayout
      eyebrow="Support"
      title="A support experience designed to keep verification clear."
      description="Use this page as a clean entry point for common help topics, workflow questions, and team guidance."
      heroVisual={<SupportHeroVisual />}
    >
      <ContentSection>
        <div className="rounded-[40px] border border-white/80 bg-white/82 p-7 shadow-[0_32px_84px_-58px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-9">
          <SectionIntro
            eyebrow="Help center"
            title="Search the guidance your team needs next."
            description="Start with a topic, scan common pathways, or use the escalation block when a review needs extra context."
            align="center"
          />
          <div className="mx-auto mt-10 max-w-3xl rounded-[28px] border border-slate-200 bg-slate-50/90 p-3 shadow-inner">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 ring-1 ring-slate-100">
              <Search className="size-5 text-slate-400" />
              <input className="w-full bg-transparent text-slate-950 outline-none placeholder:text-slate-400" placeholder="Search support topics, outputs, account access..." />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {quickTopics.map((topic) => (
              <button key={topic} type="button" className="rounded-full border border-slate-200 bg-white/86 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-blue-200 hover:text-blue-600">
                {topic}
              </button>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <SectionIntro
          eyebrow="Support paths"
          title="Find the help route that matches your need."
          description="Whether you need onboarding guidance, help interpreting outputs, or troubleshooting support, the page is designed to be easy to scan and easy to follow."
        />
        <div className="pt-12">
          <CardGrid items={supportCards} columns="md:grid-cols-2 xl:grid-cols-4" />
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="flex h-full flex-col justify-between rounded-[34px] border border-white/80 bg-slate-950 p-7 text-white shadow-[0_32px_84px_-58px_rgba(15,23,42,0.55)] sm:p-8">
            <div>
              <MessageSquareMore className="size-8 text-blue-300" />
              <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.05em]">Need a human review path?</h2>
              <p className="mt-4 leading-8 text-slate-300">When an output is unusual or business-critical, route the question to support with the source format, confidence score, and review context.</p>
            </div>
            <div className="mt-8 rounded-[26px] border border-white/10 bg-white/8 p-5">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-300">Escalation checklist</p>
              <div className="mt-4 space-y-3 text-sm font-semibold text-slate-200">
                <p>Source format and file context</p>
                <p>Verification score or output</p>
                <p>Decision urgency and team owner</p>
              </div>
            </div>
            <button type="button" className="mt-8 w-fit rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-950">Contact support</button>
          </div>
          <div className="flex h-full flex-col rounded-[34px] border border-white/80 bg-white/72 p-7 shadow-[0_28px_76px_-54px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-8">
            <SectionIntro
              eyebrow="Common questions"
              title="Quick answers for frequent support needs."
              description="Use these as a starting point before escalating to a deeper support conversation."
            />
            <div className="pt-10">
              <FaqList items={supportFaq} />
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="rounded-[34px] border border-blue-100 bg-blue-50/70 p-7 backdrop-blur-md sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-blue-600">Self-service pathway</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-slate-950">Keep your team aligned on support rules.</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">Document when to accept, re-check, or escalate outputs so every reviewer follows the same operational standard.</p>
            </div>
            <ChevronDown className="hidden size-8 text-blue-600 md:block" />
          </div>
        </div>
      </ContentSection>
    </MarketingLayout>
  )
}
