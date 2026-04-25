import { CheckCircle2, Clock3, Mail, MapPin, MessageSquareMore, Send, ShieldCheck } from 'lucide-react'
import { ContentSection, MarketingLayout, SectionIntro } from '../MarketingLayout.jsx'

const contactOptions = [
  { title: 'General inquiries', copy: 'Ask about the product, company, or verification workflow.', detail: 'hello@aiauthy.com', icon: Mail },
  { title: 'Sales conversations', copy: 'Discuss rollout needs, team workflows, and implementation timing.', detail: 'sales@aiauthy.com', icon: MessageSquareMore },
  { title: 'Support guidance', copy: 'Get help with account questions, outputs, or workflow interpretation.', detail: 'support@aiauthy.com', icon: ShieldCheck },
]

function ContactHeroVisual() {
  return (
    <div className="relative mx-auto max-w-xl lg:ml-auto">
      <div className="absolute -inset-5 rounded-[44px] bg-[radial-gradient(circle_at_35%_20%,rgba(37,99,235,0.16),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(226,232,240,0.58))] blur-sm" />
      <div className="relative overflow-hidden rounded-[38px] border border-white/80 bg-white/86 p-6 shadow-[0_34px_90px_-56px_rgba(15,23,42,0.34)] backdrop-blur-xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-blue-600">Inquiry desk</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.045em] text-slate-950">Route the right conversation</h2>
          </div>
          <div className="rounded-2xl bg-blue-50 p-3 text-blue-600 ring-1 ring-blue-100">
            <Send className="size-5" />
          </div>
        </div>

        <div className="grid gap-3">
          {[
            ['Product question', 'General team review', 'Queued'],
            ['Implementation', 'Workflow fit and rollout', 'Priority'],
            ['Support need', 'Output or access help', 'Guided'],
          ].map(([title, copy, status]) => (
            <div key={title} className="rounded-[24px] bg-slate-50/90 p-4 ring-1 ring-slate-100">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-extrabold text-slate-950">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{copy}</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-blue-600 ring-1 ring-blue-100">{status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-[24px] bg-slate-950 p-5 text-white">
            <Clock3 className="size-5 text-blue-300" />
            <p className="mt-4 text-xl font-extrabold tracking-[-0.04em]">Clear follow-up</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Requests include topic, context, and ownership.</p>
          </div>
          <div className="rounded-[24px] bg-blue-50 p-5 text-slate-950 ring-1 ring-blue-100">
            <CheckCircle2 className="size-5 text-blue-600" />
            <p className="mt-4 text-xl font-extrabold tracking-[-0.04em]">Credible routing</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Sales, support, and product paths stay distinct.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <MarketingLayout
      eyebrow="Contact"
      title="Get in touch with the team behind your verification workflow."
      description="Use the contact form for product questions, implementation conversations, or general inquiries. The form is UI-only unless connected to a backend."
      ctaLabel="Create account"
      heroVisual={<ContactHeroVisual />}
    >
      <ContentSection>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="relative flex h-full flex-col overflow-hidden rounded-[38px] border border-white/80 bg-white/84 p-7 shadow-[0_34px_86px_-58px_rgba(15,23,42,0.3)] backdrop-blur-xl sm:p-9">
            <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-100/70 blur-3xl" />
            <div className="relative flex h-full flex-col">
              <SectionIntro
                eyebrow="Form"
                title="Send a message"
                description="Share a few details and the right team can review the request. This form is designed as a clean UI layer until a backend is connected."
              />
              <form className="mt-10 grid flex-1 gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    Name
                    <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100" placeholder="Your name" />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    Email
                    <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100" placeholder="you@company.com" />
                  </label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    Topic
                    <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100" defaultValue="">
                      <option value="" disabled>Select a topic</option>
                      <option>Product question</option>
                      <option>Sales conversation</option>
                      <option>Support request</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    Company
                    <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100" placeholder="Company name" />
                  </label>
                </div>
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Message
                  <textarea className="min-h-[180px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100" placeholder="Tell us what you need." />
                </label>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button type="button" className="inline-flex w-fit items-center justify-center rounded-full bg-gradient-to-b from-blue-500 to-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_36px_-16px_rgba(37,99,235,0.55)]">
                    Send message
                  </button>
                  <p className="max-w-sm text-sm leading-6 text-slate-500">No automated submission is configured yet, so this button is intentionally UI-only.</p>
                </div>
              </form>
            </div>
          </div>

          <div className="grid h-full gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {contactOptions.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex h-full flex-col rounded-[28px] border border-white/80 bg-white/78 p-6 shadow-[0_22px_56px_-42px_rgba(15,23,42,0.22)] backdrop-blur-md">
                  <div className="mb-5 inline-flex w-fit rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-3 text-slate-900 ring-1 ring-slate-100">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-extrabold tracking-[-0.035em] text-slate-950">{item.title}</h3>
                  <p className="mt-2 flex-1 leading-7 text-slate-600">{item.copy}</p>
                  <p className="mt-4 text-sm font-extrabold text-blue-600">{item.detail}</p>
                </div>
              )
            })}
            <div className="rounded-[28px] border border-blue-100 bg-blue-50/72 p-6 backdrop-blur-md sm:col-span-2 lg:col-span-1">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                  <Clock3 className="size-7 text-blue-600" />
                  <h3 className="mt-4 text-xl font-extrabold tracking-[-0.035em] text-slate-950">Response expectations</h3>
                  <p className="mt-2 leading-7 text-slate-600">We prioritize product and support conversations by urgency, team size, and implementation context.</p>
                </div>
                <div>
                  <MapPin className="size-7 text-slate-950" />
                  <h3 className="mt-4 text-xl font-extrabold tracking-[-0.035em] text-slate-950">Remote-first team</h3>
                  <p className="mt-2 leading-7 text-slate-600">Built for distributed teams that need verification to stay clear across channels and time zones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </MarketingLayout>
  )
}
