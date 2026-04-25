import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { FOOTER_GROUPS, SITE_LINKS } from './siteConfig.js'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

const containerReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export function MarketingLayout({ eyebrow, title, description, heroVisual, children, ctaLabel = 'Get started free' }) {
  const router = useRouter()

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7f9fb] text-slate-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute right-[8%] top-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute left-[10%] top-[42rem] h-72 w-72 rounded-full bg-slate-200/50 blur-3xl" />

      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/72 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-4 sm:px-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid size-[26px] grid-cols-2 gap-1">
              <div className="rounded-full bg-blue-600" />
              <div className="rounded-full bg-slate-950" />
              <div className="rounded-full bg-slate-950" />
              <div className="rounded-full bg-slate-950" />
            </div>
            <span className="font-['Inter:Extra_Bold',sans-serif] text-[17px] font-extrabold tracking-[-0.04em] text-slate-950">
              AIAUTHY
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {SITE_LINKS.map((item) => {
              const active = router.pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    active ? 'text-slate-950' : 'text-slate-500 hover:text-slate-950'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </header>

      <main className="relative">
        <section className="pt-16 sm:pt-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-5">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerReveal}
              className={`grid gap-10 lg:items-center ${heroVisual ? 'lg:grid-cols-[1.02fr_0.98fr]' : ''}`}
            >
              <motion.div variants={reveal} className="max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-blue-600 shadow-[0_8px_24px_-18px_rgba(37,99,235,0.45)] backdrop-blur-sm">
                  <Sparkles className="size-3.5" />
                  <span>{eyebrow}</span>
                </div>
                <div className="space-y-4">
                  <h1 className="font-['Inter:Extra_Bold',sans-serif] text-4xl font-extrabold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-[3.75rem] lg:leading-[0.95]">
                    {title}
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
                </div>
              </motion.div>

              {heroVisual ? (
                <motion.div variants={reveal} className="relative">
                  {heroVisual}
                </motion.div>
              ) : null}
            </motion.div>
          </div>
        </section>

        <div className="relative pt-12 sm:pt-16">{children}</div>

        <section className="pt-24 sm:pt-28">
          <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-5">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="relative overflow-hidden rounded-[42px] border border-white/70 bg-[linear-gradient(180deg,rgba(248,250,252,0.9),rgba(255,255,255,0.98))] px-6 py-14 text-center shadow-[0_40px_90px_-50px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:px-10 sm:py-20"
            >
              <div className="pointer-events-none absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />
              <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-200/25 blur-3xl" />
              <div className="mx-auto max-w-3xl space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-blue-600 shadow-[0_8px_24px_-18px_rgba(37,99,235,0.45)] backdrop-blur-sm">
                  <Sparkles className="size-3.5" />
                  <span>Next step</span>
                </div>
                <h2 className="font-['Inter:Extra_Bold',sans-serif] text-4xl font-extrabold tracking-[-0.055em] text-slate-950 sm:text-5xl">
                  Bring verification into your daily workflow.
                </h2>
                <p className="text-lg leading-8 text-slate-600">
                  Explore the platform, understand the workflow, and see how AIAUTHY fits into your team's review process.
                </p>
                <button
                  type="button"
                  onClick={() => router.push('/signup')}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_36px_-16px_rgba(37,99,235,0.55)]"
                >
                  {ctaLabel}
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="relative pt-8">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-5">
          <div className="rounded-[32px] border border-white/70 bg-white/72 px-6 py-10 shadow-[0_28px_70px_-50px_rgba(15,23,42,0.3)] backdrop-blur-xl sm:px-8">
            <div className="grid gap-10 border-t border-slate-200/80 pt-10 md:grid-cols-[1.5fr_1fr_1fr]">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="grid size-[26px] grid-cols-2 gap-1">
                    <div className="rounded-full bg-blue-600" />
                    <div className="rounded-full bg-slate-950" />
                    <div className="rounded-full bg-slate-950" />
                    <div className="rounded-full bg-slate-950" />
                  </div>
                  <p className="font-['Inter:Extra_Bold',sans-serif] text-xl font-extrabold tracking-[-0.04em] text-slate-950">AIAUTHY</p>
                </div>
                <p className="max-w-sm leading-7 text-slate-500">
                  A unified verification platform for detecting synthetic text, visuals, audio, and video.
                </p>
              </div>
              {FOOTER_GROUPS.map((group) => (
                <div key={group.title} className="space-y-5">
                  <p className="text-base font-extrabold text-slate-950">{group.title}</p>
                  <div className="space-y-3 text-[15px] font-medium text-slate-500">
                    {group.links.map((link) => (
                      <Link key={link.href} href={link.href} className="block transition-colors duration-200 hover:text-slate-950">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export function SectionIntro({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`flex max-w-3xl flex-col gap-5 ${alignClass}`}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-blue-600 shadow-[0_8px_24px_-18px_rgba(37,99,235,0.45)] backdrop-blur-sm">
        <Sparkles className="size-3.5" />
        <span>{eyebrow}</span>
      </div>
      <div className="space-y-4">
        <h2 className="font-['Inter:Extra_Bold',sans-serif] text-3xl font-extrabold tracking-[-0.055em] text-slate-950 sm:text-4xl">
          {title}
        </h2>
        <p className="text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </motion.div>
  )
}

export function ContentSection({ className = '', children }) {
  return (
    <section className={`relative pt-24 sm:pt-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-5">{children}</div>
    </section>
  )
}

export function CardGrid({ items, columns = 'md:grid-cols-2 xl:grid-cols-3' }) {
  return (
    <motion.div
      variants={containerReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      className={`grid gap-6 ${columns}`}
    >
      {items.map((item) => {
        const Icon = item.icon
        return (
          <motion.article
            key={item.title}
            variants={reveal}
            className="rounded-[28px] border border-white/80 bg-white/82 p-7 shadow-[0_28px_70px_-44px_rgba(15,23,42,0.24)] backdrop-blur-md"
          >
            <div className="mb-5 flex items-center gap-4">
              {Icon ? (
                <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-3 text-slate-900 ring-1 ring-slate-100">
                  <Icon className="size-6" />
                </div>
              ) : null}
              <h3 className="font-['Inter:Extra_Bold',sans-serif] text-2xl font-extrabold tracking-[-0.04em] text-slate-950">
                {item.title}
              </h3>
            </div>
            <p className="leading-7 text-slate-600">{item.description}</p>
          </motion.article>
        )
      })}
    </motion.div>
  )
}

export function EditorialList({ items, columns = 'md:grid-cols-2 xl:grid-cols-3' }) {
  return (
    <motion.div
      variants={containerReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      className={`grid gap-x-8 gap-y-8 ${columns}`}
    >
      {items.map((item) => {
        const Icon = item.icon
        return (
          <motion.article key={item.title} variants={reveal} className="relative border-l border-slate-200/70 pl-6">
            <div className="mb-5 flex items-center gap-4">
              {Icon ? (
                <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-3 text-slate-900 ring-1 ring-slate-100">
                  <Icon className="size-6" />
                </div>
              ) : null}
              <h3 className="font-['Inter:Extra_Bold',sans-serif] text-2xl font-extrabold tracking-[-0.04em] text-slate-950">
                {item.title}
              </h3>
            </div>
            <p className="leading-7 text-slate-600">{item.description}</p>
            <div className="mt-6 h-px w-14 bg-gradient-to-r from-slate-300 to-transparent" />
          </motion.article>
        )
      })}
    </motion.div>
  )
}

export function FaqList({ items }) {
  return (
    <motion.div
      variants={containerReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      className="grid gap-4"
    >
      {items.map((item) => (
        <motion.div
          key={item.question}
          variants={reveal}
          className="rounded-[24px] border border-white/80 bg-white/80 p-6 shadow-[0_18px_42px_-34px_rgba(15,23,42,0.18)] backdrop-blur-md"
        >
          <h3 className="text-lg font-extrabold text-slate-950">{item.question}</h3>
          <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
