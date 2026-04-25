import { BadgeCheck, CheckCircle2, Clock3, FileOutput, GitBranch, ScanSearch, ShieldCheck, Upload } from 'lucide-react'
import { ContentSection, FaqList, MarketingLayout, SectionIntro } from '../MarketingLayout.jsx'

const steps = [
  {
    title: 'Upload or input content',
    description: 'Submit text, visuals, audio, or video in the format your team already works with.',
    icon: Upload,
  },
  {
    title: 'Run AI analysis',
    description: 'AIAUTHY evaluates content signals, structure, and authenticity indicators in one pass.',
    icon: ScanSearch,
  },
  {
    title: 'Receive verification output',
    description: 'Get clear confidence scores, signal summaries, and a review-ready interpretation of the result.',
    icon: BadgeCheck,
  },
  {
    title: 'Review and act',
    description: 'Use the output to support moderation, editorial review, approval workflows, or risk-based escalation.',
    icon: ShieldCheck,
  },
]

const faqItems = [
  {
    question: 'How fast is the review process?',
    answer: 'The workflow is designed for near-immediate output so teams can keep content moving without sacrificing review quality.',
  },
  {
    question: 'Can different teams use the same workflow?',
    answer: 'Yes. The structure is intentionally consistent so education, media, operations, and compliance teams can review with the same shared language.',
  },
  {
    question: 'What makes the output trustworthy?',
    answer: 'Results are presented as explainable signal summaries and confidence-based outputs, not black-box labels without context.',
  },
]

function HowItWorksHeroVisual() {
  return (
    <div className="relative mx-auto max-w-xl lg:ml-auto">
      <div className="absolute -inset-5 rounded-[44px] bg-[radial-gradient(circle_at_70%_25%,rgba(37,99,235,0.2),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.9),rgba(226,232,240,0.58))] blur-sm" />
      <div className="relative overflow-hidden rounded-[38px] border border-white/80 bg-white/86 p-6 shadow-[0_34px_90px_-56px_rgba(15,23,42,0.34)] backdrop-blur-xl">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-blue-600">Review chain</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.045em] text-slate-950">From input to action</h2>
          </div>
          <div className="rounded-2xl bg-blue-50 p-3 text-blue-600 ring-1 ring-blue-100">
            <GitBranch className="size-5" />
          </div>
        </div>

        <div className="relative space-y-4">
          <div className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-blue-200 via-slate-200 to-transparent" />
          {[
            ['01', 'Upload', 'Content enters the queue'],
            ['02', 'Analyze', 'Signals are compared'],
            ['03', 'Decide', 'Output guides next step'],
          ].map(([number, title, copy]) => (
            <div key={title} className="relative flex gap-4 rounded-[24px] bg-slate-50/90 p-4 ring-1 ring-slate-100">
              <div className="z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-extrabold text-white">{number}</div>
              <div>
                <p className="font-extrabold text-slate-950">{title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{copy}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-[26px] border border-blue-100 bg-blue-50/70 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-extrabold text-slate-950">Decision output</p>
              <p className="mt-1 text-sm text-slate-600">Confidence, evidence, and action guidance</p>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-blue-600 ring-1 ring-blue-100">Ready</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorksPage() {
  return (
    <MarketingLayout
      eyebrow="How it works"
      title="A clean verification workflow from input to confident decision."
      description="The process is simple by design: bring content in, analyze it quickly, and turn the result into a practical next step."
      heroVisual={<HowItWorksHeroVisual />}
    >
      <ContentSection>
        <SectionIntro
          eyebrow="Process"
          title="Four steps, one calm verification path."
          description="Each stage gives reviewers enough structure to move quickly without losing the context behind the result."
        />
        <div className="relative mt-14 grid auto-rows-fr gap-5 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-8 right-8 top-12 hidden h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent lg:block" />
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <article key={step.title} className="relative flex h-full flex-col rounded-[30px] border border-white/80 bg-white/82 p-6 shadow-[0_26px_70px_-48px_rgba(15,23,42,0.28)] backdrop-blur-xl">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-extrabold text-white">0{index + 1}</div>
                  <div className="rounded-2xl bg-blue-50 p-3 text-blue-600 ring-1 ring-blue-100">
                    <Icon className="size-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold tracking-[-0.045em] text-slate-950">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
              </article>
            )
          })}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
          <div className="flex h-full flex-col justify-center rounded-[40px] border border-white/80 bg-white/76 p-7 shadow-[0_30px_80px_-56px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-9">
            <SectionIntro
              eyebrow="Input to output"
              title="What happens between upload and action."
              description="The system organizes the messy middle of verification into clear phases: normalize the content, analyze authenticity signals, summarize the result, and guide the next decision."
            />
            <div className="mt-10 grid gap-4">
              {[
                ['Normalize', 'Prepare the submitted content for a consistent review pass.'],
                ['Analyze', 'Evaluate signal groups that indicate generated, altered, or authentic patterns.'],
                ['Summarize', 'Present confidence, evidence, and context in language reviewers can use.'],
              ].map(([title, copy]) => (
                <div key={title} className="flex gap-4 rounded-3xl bg-slate-50/85 p-5 ring-1 ring-slate-100">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-blue-600" />
                  <div>
                    <h3 className="font-extrabold text-slate-950">{title}</h3>
                    <p className="mt-1 leading-7 text-slate-600">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid h-full gap-5">
            {[
              { icon: Clock3, title: 'Fast enough for live teams', copy: 'Designed for workflows where a slow review process creates operational drag.' },
              { icon: FileOutput, title: 'Outputs with context', copy: 'Confidence scores are paired with summaries so reviewers know what changed and why.' },
              { icon: ShieldCheck, title: 'Consistent decision language', copy: 'Teams can align around the same review categories, signals, and escalation rules.' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-[28px] border border-white/80 bg-white/70 p-6 shadow-[0_22px_56px_-42px_rgba(15,23,42,0.22)] backdrop-blur-md">
                  <Icon className="size-7 text-slate-950" />
                  <h3 className="mt-4 text-xl font-extrabold tracking-[-0.035em] text-slate-950">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.copy}</p>
                </div>
              )
            })}
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <SectionIntro
          eyebrow="Trust"
          title="Designed to reduce uncertainty, not add more of it."
          description="The output is meant to guide action with clarity. Teams can review quickly, compare signals, and decide what needs escalation."
        />
        <div className="pt-12">
          <FaqList items={faqItems} />
        </div>
      </ContentSection>
    </MarketingLayout>
  )
}
