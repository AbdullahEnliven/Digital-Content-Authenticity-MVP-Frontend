import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  Briefcase,
  Building2,
  CheckCircle2,
  FlaskConical,
  Gauge,
  GraduationCap,
  Image as ImageIcon,
  Layers3,
  Mic,
  Newspaper,
  ScanSearch,
  Shield,
  Sparkles,
  Upload,
  Video,
} from 'lucide-react'
import { HeroSection } from './Body.jsx'
import LandingAuthPopup from '../components/LandingAuthPopup.jsx'

const LANDING_ANIMATIONS = `
  nav a, nav button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  nav a:hover, nav button:hover {
    transform: translateY(-1px);
  }

  [data-name="Link"]:hover {
    transform: translateY(-2px) scale(1.02);
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  [data-name*="Background"]:not([data-name*="Shadow"]) {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  [data-name*="Background"]:hover {
    transform: translateY(-4px);
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(var(--rotation)); }
    50% { transform: translateY(-10px) rotate(var(--rotation)); }
  }

  @keyframes float-slow {
    0%, 100% { transform: translateY(0px) rotate(var(--rotation)); }
    50% { transform: translateY(-15px) rotate(var(--rotation)); }
  }

  [data-name="Overlay+OverlayBlur"],
  [data-name="Overlay+Shadow+OverlayBlur"] {
    animation: float 6s ease-in-out infinite;
  }

  [data-name="Overlay+OverlayBlur"]:first-of-type {
    animation-delay: 0s;
    --rotation: -6deg;
  }

  [data-name="Overlay+Shadow+OverlayBlur"] {
    animation: float-slow 7s ease-in-out infinite;
    animation-delay: 1s;
    --rotation: 3deg;
  }

  [data-name="Overlay+OverlayBlur"]:nth-of-type(2) {
    animation-delay: 2s;
    --rotation: 6deg;
  }

  [data-name="Overlay+OverlayBlur"]:nth-of-type(3) {
    animation: float-slow 8s ease-in-out infinite;
    animation-delay: 1.5s;
    --rotation: -3deg;
  }

  @keyframes gradient-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.9; }
  }

  [data-name="Blur"] {
    animation: gradient-pulse 3s ease-in-out infinite;
  }

  [data-name*="Background9"],
  [data-name*="Background10"],
  [data-name*="Background11"],
  [data-name*="Background12"],
  [data-name*="Background13"],
  [data-name*="Background14"],
  [data-name*="Background15"],
  [data-name*="Background16"] {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
  }

  [data-name*="Background9"]:hover,
  [data-name*="Background10"]:hover,
  [data-name*="Background11"]:hover,
  [data-name*="Background12"]:hover,
  [data-name*="Background13"]:hover,
  [data-name*="Background14"]:hover,
  [data-name*="Background15"]:hover,
  [data-name*="Background16"]:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(15, 23, 36, 0.08);
  }

  [data-name*="iconify-icon"] {
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  [data-name*="Background"]:hover [data-name*="iconify-icon"] {
    transform: scale(1.1) rotate(5deg);
  }

  html {
    scroll-behavior: smooth;
  }

  button, a, [role="button"] {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  [data-name="Overlay"] {
    transition: all 0.3s ease;
  }

  [data-name="Overlay"]:hover {
    transform: scale(1.05);
  }

  [data-name*="Gradient"] {
    animation: shimmer 2s ease-in-out infinite;
  }

  @keyframes shimmer {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.85; }
  }

  [data-name="Nav"] {
    transition: all 0.3s ease;
    left: 50% !important;
    right: auto !important;
    transform: translateX(-50%);
    width: min(1000px, calc(100% - 40px));
  }

  [data-name="Nav"]:hover {
    transform: translateX(-50%);
    backdrop-filter: blur(12px);
  }

  [data-name="Link1"] a,
  [data-name="Link2"],
  [data-name="Link3"],
  [data-name="Link4"],
  [data-name="Link5"],
  [data-name="Link6"] {
    cursor: pointer;
    transition: all 0.2s ease;
  }

  [data-name="Link1"]:hover,
  [data-name="Link2"]:hover,
  [data-name="Link3"]:hover,
  [data-name="Link4"]:hover,
  [data-name="Link5"]:hover {
    transform: translateY(-1px);
  }

  [data-name="Link6"]:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(15, 23, 36, 0.25);
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const containerReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const featureCards = [
  {
    title: 'Text Detection',
    description: 'Detect AI-written vs human-written text with probability scoring.',
    icon: Brain,
    accent: 'from-blue-50 to-blue-100 text-blue-600 ring-blue-100',
  },
  {
    title: 'Image Analysis',
    description: 'Identify synthetic or AI-generated visuals using advanced forensics.',
    icon: ImageIcon,
    accent: 'from-amber-50 to-amber-100 text-amber-600 ring-amber-100',
  },
  {
    title: 'Audio Verification',
    description: 'Detect voice cloning and neural synthesis in audio files.',
    icon: Mic,
    accent: 'from-fuchsia-50 to-fuchsia-100 text-fuchsia-600 ring-fuchsia-100',
  },
  {
    title: 'Video Scanning',
    description: 'Analyze frames to detect deepfakes and manipulated video content.',
    icon: Video,
    accent: 'from-emerald-50 to-emerald-100 text-emerald-600 ring-emerald-100',
  },
]

const workflowSteps = [
  {
    step: '1',
    title: 'Upload or Paste Content',
    description: 'Add text, image, audio, or video.',
    icon: Upload,
  },
  {
    step: '2',
    title: 'Run AI Analysis',
    description: 'Our system evaluates patterns and signals.',
    icon: ScanSearch,
  },
  {
    step: '3',
    title: 'Get Instant Results',
    description: 'Receive a confidence score and classification.',
    icon: BadgeCheck,
  },
]

const useCases = [
  {
    title: 'Educators',
    description: 'Detect AI-written assignments before grading and support fair academic review.',
    icon: GraduationCap,
  },
  {
    title: 'Recruiters',
    description: 'Verify candidate submissions and reduce synthetic content in hiring pipelines.',
    icon: Briefcase,
  },
  {
    title: 'Media Teams',
    description: 'Validate content authenticity before publishing visuals, scripts, and audio assets.',
    icon: Newspaper,
  },
  {
    title: 'Researchers',
    description: 'Analyze generated data and separate human-authored signals from synthetic patterns.',
    icon: FlaskConical,
  },
  {
    title: 'Security Teams',
    description: 'Detect synthetic media and suspicious manipulation in high-risk communication channels.',
    icon: Shield,
  },
  {
    title: 'Enterprise Ops',
    description: 'Standardize verification workflows across internal teams handling public-facing content.',
    icon: Building2,
  },
]

const footerGroups = [
  {
    title: 'Pages',
    links: ['Features', 'How It Works', 'Use Cases'],
  },
  {
    title: 'Help',
    links: ['Contact', 'Support'],
  },
]

const stats = [
  { label: 'Text models', value: '84%' },
  { label: 'Frame authenticity', value: '100%' },
  { label: 'Results in seconds', value: '1.8s' },
]

function Reveal({ children, className = '', delay = 0, amount = 0.2 }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-blue-600 shadow-[0_8px_24px_-18px_rgba(37,99,235,0.45)] backdrop-blur-sm">
      <Sparkles className="size-3.5" />
      <span>{children}</span>
    </div>
  )
}

function SectionHeading({ eyebrow, title, description, align = 'center', className = '' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`mx-auto flex max-w-3xl flex-col gap-5 ${alignment} ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="space-y-4">
        <h2 className="font-['Inter:Extra_Bold',sans-serif] text-4xl font-extrabold tracking-[-0.055em] text-slate-950 sm:text-5xl">
          {title}
        </h2>
        <p className="text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </div>
  )
}

function FloatingOrb({ className, style }) {
  return <motion.div aria-hidden="true" className={className} style={style} />
}

function SectionShell({ children, className = '', innerClassName = '', glowClassName = '' }) {
  return (
    <section className={`relative ${className}`}>
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-80 ${glowClassName}`} />
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className={`relative ${innerClassName}`}>{children}</div>
      </div>
    </section>
  )
}

function StatPills() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {stats.map((item) => (
        <motion.div
          key={item.label}
          whileHover={{ y: -4 }}
          className="rounded-[20px] bg-white/66 px-5 py-4 ring-1 ring-slate-200/70 backdrop-blur-sm"
        >
          <p className="text-[13px] font-semibold leading-5 text-slate-500">{item.label}</p>
          <p className="mt-2 text-[2rem] font-extrabold tracking-[-0.06em] text-slate-950">{item.value}</p>
        </motion.div>
      ))}
    </div>
  )
}

function FeatureHighlight() {
  return (
    <Reveal className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,rgba(255,255,255,0.58),rgba(239,246,255,0.46))] px-6 py-8 sm:px-8 sm:py-10">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[44%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.10),transparent_72%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent" />
      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] lg:items-center">
        <div className="space-y-5">
          <Eyebrow>Continuous verification</Eyebrow>
          <div className="space-y-5">
            <h3 className="max-w-2xl font-['Inter:Extra_Bold',sans-serif] text-3xl font-extrabold tracking-[-0.06em] text-slate-950 sm:text-4xl lg:text-[3.25rem] lg:leading-[0.95]">
              Analyze and verify content across all major formats with one unified system.
            </h3>
            <p className="max-w-xl text-[17px] leading-8 text-slate-600 sm:text-lg">
              A single verification layer for text, visuals, audio, and video, designed to feel fast, trustworthy, and operationally calm.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[24px] bg-white/54 p-3 ring-1 ring-white/80 backdrop-blur-md">
            <StatPills />
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function FeaturesSection() {
  return (
    <SectionShell
      className="relative pt-12 sm:pt-20"
      innerClassName="space-y-14 sm:space-y-16"
      glowClassName="bg-[linear-gradient(180deg,rgba(247,249,251,0)_0%,rgba(247,249,251,0.92)_22%,rgba(247,249,251,1)_100%)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_62%)]" />
      <FeatureHighlight />
      <Reveal className="relative z-10 pt-4">
        <SectionHeading
          eyebrow="Features"
          title="Multi-format AI Detection"
          description="Analyze and verify content across all major formats with one unified system."
        />
      </Reveal>
      <motion.div
        className="grid gap-x-8 gap-y-8 border-t border-slate-200/70 pt-10 md:grid-cols-2 xl:grid-cols-4"
        variants={containerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        {featureCards.map(({ title, description, icon: Icon, accent }) => (
          <motion.article
            key={title}
            variants={reveal}
            className="group relative border-l border-slate-200/70 pl-6"
          >
            <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br p-3 ring-1 ${accent}`}>
              <Icon className="size-6" />
            </div>
            <div className="space-y-3">
              <h3 className="font-['Inter:Extra_Bold',sans-serif] text-2xl font-extrabold tracking-[-0.04em] text-slate-950">
                {title}
              </h3>
              <p className="leading-7 text-slate-600">{description}</p>
            </div>
            <div className="mt-6 h-px w-14 bg-gradient-to-r from-blue-300/80 to-transparent transition-all duration-500 group-hover:w-24" />
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  )
}

function WorkflowSection() {
  return (
    <SectionShell
      className="pt-24 sm:pt-28"
      innerClassName="px-1"
      glowClassName="bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.05),transparent_72%)]"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Workflow"
          title="How it works"
          description="Run a consistent verification process across every content type in a few fast steps."
        />
      </Reveal>
      <motion.div
        className="relative mt-14 grid gap-6 lg:grid-cols-3"
        variants={containerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-9 hidden h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent lg:block" />
        {workflowSteps.map(({ step, title, description, icon: Icon }) => (
          <motion.article
            key={title}
            variants={reveal}
            className="relative rounded-[28px] border border-slate-200/70 bg-white/70 p-7 shadow-[0_16px_38px_-30px_rgba(15,23,42,0.16)] backdrop-blur-md"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-slate-950 text-sm font-extrabold text-white shadow-[0_10px_24px_-10px_rgba(15,23,42,0.7)]">
                {step}
              </div>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 ring-1 ring-blue-100">
                <Icon className="size-6" />
              </div>
            </div>
            <h3 className="font-['Inter:Extra_Bold',sans-serif] text-2xl font-extrabold tracking-[-0.04em] text-slate-950">
              {title}
            </h3>
            <p className="mt-3 leading-7 text-slate-600">{description}</p>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  )
}

function ProductSection() {
  return (
    <SectionShell
      className="pt-24 sm:pt-28"
      innerClassName="space-y-14"
      glowClassName="bg-[linear-gradient(180deg,rgba(248,250,252,0.1),rgba(248,250,252,0.78)_16%,rgba(248,250,252,0.88)_86%,rgba(248,250,252,0.24))]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-8 h-56 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_70%)]" />
      <Reveal>
        <SectionHeading
          eyebrow="Product"
          title="Built for real-time verification"
          description="Upload content and get instant AI vs human analysis. Teams that need trustworthy verification without slowing down their workflow."
          align="left"
        />
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <Reveal className="relative overflow-hidden rounded-[34px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,250,252,0.86))] p-6 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.28)] backdrop-blur-xl lg:p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="flex flex-col gap-4 rounded-[24px] border border-slate-200/80 bg-white/88 px-4 py-4 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.45)] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">Live workspace</p>
              <h3 className="mt-1 font-['Inter:Extra_Bold',sans-serif] text-xl font-extrabold tracking-[-0.04em] text-slate-950">
                Upload content and get instant AI vs human analysis.
              </h3>
            </div>
            <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 sm:items-center sm:gap-2">
              <CheckCircle2 className="mr-2 inline size-4 sm:mr-0" />
              Scanning live
            </div>
          </div>
          <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.92fr]">
              <div className="rounded-[28px] bg-slate-950 p-6 text-white shadow-[0_28px_64px_-40px_rgba(2,6,23,0.88)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">Signal summary</p>
                  <p className="mt-2 text-3xl font-extrabold tracking-[-0.05em]">Likely AI-generated</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-3 text-blue-200">
                  <Layers3 className="size-6" />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                {[
                  ['Pattern repetition', 'High'],
                  ['Stylistic consistency', 'Elevated'],
                  ['Human variation', 'Low'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-sm font-semibold text-slate-200">{label}</span>
                    <span className="text-sm font-bold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
              <div className="flex flex-col gap-5">
              <div className="rounded-[26px] border border-slate-200/80 bg-white/82 p-6 shadow-[0_18px_42px_-32px_rgba(15,23,42,0.22)]">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-3 text-blue-600 ring-1 ring-blue-100">
                    <Gauge className="size-6" />
                  </div>
                  <div>
                    <p className="font-['Inter:Extra_Bold',sans-serif] text-2xl font-extrabold tracking-[-0.05em] text-slate-950">1.8s</p>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Results in seconds</p>
                  </div>
                </div>
                <p className="mt-4 leading-7 text-slate-600">
                  Fast enough for live classroom, newsroom, and hiring workflows.
                </p>
              </div>
              <div className="rounded-[26px] border border-slate-200/80 bg-white/82 p-6 shadow-[0_18px_42px_-32px_rgba(15,23,42,0.22)]">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 p-3 text-emerald-600 ring-1 ring-emerald-100">
                    <BadgeCheck className="size-6" />
                  </div>
                  <div>
                    <p className="font-['Inter:Extra_Bold',sans-serif] text-2xl font-extrabold tracking-[-0.05em] text-slate-950">Cross-format checks</p>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">One system</p>
                  </div>
                </div>
                <div className="mt-5 space-y-4">
                  {[
                    ['Text models', '84%', 'bg-blue-500'],
                    ['Frame authenticity', '100%', 'bg-emerald-500'],
                  ].map(([label, value, bar]) => (
                    <div key={label} className="space-y-2">
                      <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100">
                        <div className={`h-2 rounded-full ${bar}`} style={{ width: value }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <motion.div
          className="grid gap-5"
          variants={containerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {[
            'Teams that need trustworthy verification without slowing down their workflow.',
            'Run instant AI authenticity checks across text, images, audio, and video from one clean workspace.',
          ].map((copy, index) => (
            <motion.div
              key={copy}
              variants={reveal}
              className={`rounded-[28px] border p-6 shadow-[0_16px_38px_-30px_rgba(15,23,42,0.18)] ${
                index === 0
                  ? 'border-blue-100/80 bg-[linear-gradient(135deg,rgba(239,246,255,0.92),rgba(255,255,255,0.95))]'
                  : 'border-slate-200/70 bg-white/72'
              }`}
            >
              <p className="text-lg leading-8 text-slate-800">{copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  )
}

function UseCasesSection() {
  return (
    <SectionShell
      className="pt-24 sm:pt-28"
      innerClassName="space-y-14"
      glowClassName="bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_70%)]"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Use cases"
          title="Who is this for?"
          description="Teams that need trustworthy verification without slowing down their workflow."
        />
      </Reveal>
      <motion.div
        className="grid gap-x-8 gap-y-8 md:grid-cols-2 xl:grid-cols-3"
        variants={containerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        {useCases.map(({ title, description, icon: Icon }) => (
          <motion.article
            key={title}
            variants={reveal}
            className="relative border-l border-slate-200/70 pl-6"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-3 text-slate-900 ring-1 ring-slate-100">
                <Icon className="size-6" />
              </div>
              <h3 className="font-['Inter:Extra_Bold',sans-serif] text-2xl font-extrabold tracking-[-0.04em] text-slate-950">
                {title}
              </h3>
            </div>
            <p className="leading-7 text-slate-600">{description}</p>
            <div className="mt-6 h-px w-14 bg-gradient-to-r from-slate-300 to-transparent" />
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  )
}

function StartSection() {
  return (
    <SectionShell
      className="pt-24 sm:pt-28"
      innerClassName="pb-8"
      glowClassName="bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-[42px] border border-white/70 bg-[linear-gradient(180deg,rgba(248,250,252,0.9),rgba(255,255,255,0.98))] px-6 py-14 text-center shadow-[0_40px_90px_-50px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:px-10 sm:py-20">
          <div className="pointer-events-none absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-200/25 blur-3xl" />
          <SectionHeading
            eyebrow="Start now"
            title="Start verifying content today"
            description="Run instant AI authenticity checks across text, images, audio, and video from one clean workspace."
          />
          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_36px_-16px_rgba(37,99,235,0.55)]"
          >
            Get started free
            <ArrowRight className="size-4" />
          </motion.button>
        </div>
      </Reveal>
    </SectionShell>
  )
}

function FooterSection() {
  return (
    <footer id="footer" className="relative pt-8">
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
            {footerGroups.map((group) => (
              <div key={group.title} className="space-y-5">
                <p className="text-base font-extrabold text-slate-950">{group.title}</p>
                <div className="space-y-3 text-[15px] font-medium text-slate-500">
                  {group.links.map((link) => (
                    <Link
                      key={link}
                      href={
                        link === 'Features'
                          ? '/features'
                          : link === 'How It Works'
                            ? '/how-it-works'
                            : link === 'Use Cases'
                              ? '/use-cases'
                              : link === 'Contact'
                                ? '/contact'
                                : '/support'
                      }
                      className="block transition-colors duration-200 hover:text-slate-950"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function ScrollingStory() {
  const prefersReducedMotion = useReducedMotion()
  const storyRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ['start end', 'end start'],
  })

  const slowFloat = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -120])
  const mediumFloat = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -80])
  const rotate = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 18])

  return (
    <div ref={storyRef} className="relative pb-8 pt-2 sm:pt-4">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/0 via-[#f7f9fb]/56 to-[#f7f9fb]" />
      <FloatingOrb
        className="pointer-events-none absolute left-[8%] top-28 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"
        style={{ y: slowFloat }}
      />
      <FloatingOrb
        className="pointer-events-none absolute right-[8%] top-[26rem] h-80 w-80 rounded-full bg-slate-200/40 blur-3xl"
        style={{ y: mediumFloat, rotate }}
      />
      <FloatingOrb
        className="pointer-events-none absolute left-1/2 top-[72rem] h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl"
        style={{ y: slowFloat }}
      />
      <main className="relative overflow-hidden">
        <FeaturesSection />
        <WorkflowSection />
        <ProductSection />
        <UseCasesSection />
        <StartSection />
        <FooterSection />
      </main>
    </div>
  )
}

export default function EnhancedLanding() {
  const router = useRouter()
  const [authMode, setAuthMode] = useState(null)

  const routeTargets = useMemo(
    () => ({
      features: '/features',
      'how it works': '/how-it-works',
      'use cases': '/use-cases',
      contact: '/contact',
      support: '/support',
    }),
    []
  )

  const syncAuthRoute = (nextMode) => {
    if (!router.isReady) {
      setAuthMode(nextMode)
      return
    }

    if (nextMode) {
      router.replace({ pathname: '/', query: { auth: nextMode } }, undefined, { shallow: true })
    } else {
      router.replace({ pathname: '/' }, undefined, { shallow: true })
    }

    setAuthMode(nextMode)
  }

  useEffect(() => {
    if (!router.isReady) return

    const queryMode = router.query.auth
    if (queryMode === 'login' || queryMode === 'signup') {
      setAuthMode(queryMode)
    } else {
      setAuthMode(null)
    }
  }, [router.isReady, router.query.auth])

  useEffect(() => {
    const handleNavigation = (event) => {
      const target = event.target
      if (!(target instanceof HTMLElement)) return

      const button = target.closest('[data-name="Link"]')
      if (!button) return

      const label = button.textContent?.trim().toLowerCase() || ''

      if (label.includes('get started free') || label.includes('create account')) {
        event.preventDefault()
        syncAuthRoute('signup')
        return
      }

      const targetRoute = routeTargets[label]
      if (!targetRoute) return
      event.preventDefault()
      router.push(targetRoute)
    }

    document.addEventListener('click', handleNavigation)
    return () => document.removeEventListener('click', handleNavigation)
  }, [routeTargets, router])

  return (
    <div className="relative size-full overflow-hidden bg-[#f7f9fb]">
      <HeroSection />
      <ScrollingStory />
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: LANDING_ANIMATIONS }} />
      {authMode ? <LandingAuthPopup mode={authMode} onClose={() => syncAuthRoute(null)} onSwitchMode={syncAuthRoute} /> : null}
    </div>
  )
}
