import { useState } from 'react'
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  Brain,
  Check,
  Copy,
  Eye,
  FolderLock,
  GitPullRequest,
  Package,
  PenLine,
  Terminal,
} from 'lucide-react'

import heroImage from '../images/SCR-20260801-uayn.jpeg'
import runImage from '../images/SCR-20260801-ubce.png'
import squareImage from '../images/SCR-20260801-uakw.png'
import demoVideo from './assets/demo.mp4'
import openaiLogo from './assets/logos/openai.svg'
import kimiLogo from './assets/logos/kimi.svg'
import claudeLogo from './assets/logos/claude.svg'

const installCommand = 'pip install recodeai'

const tools = [
  ['read_file', 'reads any file inside the current workspace', Eye],
  ['writing_code', 'writes or overwrites a file in the workspace', PenLine],
  ['remember', 'stores a fact for later recall during the session', Brain],
]

const showcaseTabs = [
  {
    label: 'Reads & writes',
    title: 'Natural language in, real file changes out',
    body: 'recode finds the relevant files, reasons about the change you asked for, and writes the result back to disk. Then it tells you what it did.',
    visual: 'screenshot',
  },
  {
    label: 'Sandboxed',
    title: 'Jailed to the folder you launch it from',
    body: 'The agent can only read and write inside the directory you start it in — never anywhere else on your system. No surprises, no stray edits.',
    visual: 'sandbox',
  },
  {
    label: 'Memory',
    title: 'It remembers what matters',
    body: 'Conventions, preferences, decisions — recode can store facts and recall them later in the session, so you stop repeating yourself.',
    visual: 'memory',
  },
  {
    label: 'Hackable',
    title: 'Small enough to read in one sitting',
    body: "Built on smolagents' CodeAgent. The whole agent is a handful of readable files — inspect the loop, change the tools, learn how agents work.",
    visual: 'hackable',
  },
]

const models = [
  ['OpenAI', openaiLogo],
  ['Kimi', kimiLogo],
  ['Z.ai', null],
  ['Claude', claudeLogo],
]

const resources = [
  {
    title: 'Documentation',
    body: 'Installation, configuration and the full tool reference.',
    link: 'Read on GitHub',
    href: 'https://github.com/arobaseSuulei/recode-ai#readme',
    Icon: BookOpen,
  },
  {
    title: 'PyPI package',
    body: 'recodeai is published on PyPI — one pip install away.',
    link: 'View package',
    href: 'https://pypi.org/project/recodeai/',
    Icon: Package,
  },
  {
    title: 'Built on smolagents',
    body: "The Hugging Face framework behind recode's CodeAgent loop.",
    link: 'Explore smolagents',
    href: 'https://github.com/huggingface/smolagents',
    Icon: Braces,
  },
  {
    title: 'Contribute',
    body: 'Issues and pull requests are welcome — it is a learning resource too.',
    link: 'Open an issue',
    href: 'https://github.com/arobaseSuulei/recode-ai/issues',
    Icon: GitPullRequest,
  },
]

function CopyButton({ value, children, variant = 'dark', className = '' }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1400)
  }

  const styles =
    variant === 'light'
      ? 'border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.1]'
      : 'border-ink/10 bg-ink text-paper hover:bg-ink/90'

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex min-h-11 items-center gap-3 rounded-md border px-4 font-mono text-sm transition ${styles} ${className}`}
    >
      {children}
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4 opacity-70" />}
    </button>
  )
}

function TerminalFrame({ children, label = '~/your-project', dark = false, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-xl border bg-[#101010] ${dark ? 'border-white/10' : 'border-ink/10 shadow-soft'} ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 bg-[#181818] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-xs text-white/42">{label}</span>
      </div>
      {children}
    </div>
  )
}

function PromptLine({ children, className = '' }) {
  return (
    <p className={`font-mono text-sm leading-8 ${className}`}>
      <span className="mr-2 text-white/35">$</span>
      <span className="text-white/85">{children}</span>
    </p>
  )
}

function InstallBox({ className = '' }) {
  return (
    <CopyButton value={installCommand} className={`rounded-full px-5 ${className}`}>
      <span className="text-paper/55">$</span>
      <code>{installCommand}</code>
    </CopyButton>
  )
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 font-semibold text-ink">
          <Terminal className="h-4 w-4" />
          recode
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted sm:flex">
          <a href="#how-it-works" className="transition hover:text-ink">How it works</a>
          <a href="#features" className="transition hover:text-ink">Features</a>
          <a href="https://github.com/arobaseSuulei/recode-ai#readme" className="transition hover:text-ink">Docs</a>
          <a href="https://github.com/arobaseSuulei/recode-ai" className="transition hover:text-ink">GitHub</a>
        </nav>
        <a
          href="#get-started"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:bg-ink/90"
        >
          Install
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(213,177,0,0.09),transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          open-source coding agent · cli
        </p>
        <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-7xl">
          Ship code with an agent,
          <span className="block text-muted">right from your terminal.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
          recode reads and edits your files using the LLM of your choice, through a small, hackable set of tools.
          Built to be understood, not just used.
        </p>
        <div className="mt-9 flex justify-center">
          <InstallBox />
        </div>

        <TerminalFrame label="~/your-project — recode" className="mx-auto mt-16 max-w-4xl text-left">
          <video
            src={demoVideo}
            poster={heroImage}
            autoPlay
            muted
            loop
            playsInline
            className="aspect-video w-full bg-[#101010] object-cover"
          />
        </TerminalFrame>
      </div>
    </section>
  )
}

function CompatibleModels() {
  return (
    <section className="border-b border-line py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-muted">
          bring your own model
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {models.map(([name, logo]) => (
            <div
              key={name}
              className="flex items-center gap-2.5 opacity-50 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            >
              {logo && <img src={logo} alt={`${name} logo`} className="h-6 w-6" />}
              <span className="text-xl font-semibold tracking-tight text-ink">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = ['Thought', 'Action', 'Observation', '...', 'Final Answer']

  return (
    <section id="how-it-works" className="border-b border-line py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">ReAct loop</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Reason. Act. Repeat.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            The same pattern used by most modern coding agents — except the model writes real,
            executable Python to act, not brittle JSON blobs.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 font-mono text-sm text-ink">
          {steps.map((step, index) => (
            <span key={`${step}-${index}`} className="flex items-center gap-3">
              <span className={step === 'Final Answer'
                ? 'rounded-full bg-ink px-4 py-2.5 text-paper'
                : 'rounded-full border border-line bg-white/55 px-4 py-2.5'}>
                {step}
              </span>
              {index < steps.length - 1 && <ArrowRight className="h-4 w-4 text-muted" />}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <TerminalFrame label="agent run" className="shadow-panel">
            <img src={runImage} alt="Recode running through steps in a terminal" className="h-full w-full object-cover" />
          </TerminalFrame>

          <div className="rounded-xl border border-line bg-white/50 p-6 shadow-panel">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">available tools</p>
            <div className="mt-4 divide-y divide-line">
              {tools.map(([name, body, Icon]) => (
                <div key={name} className="flex items-start gap-4 py-4 first:pt-1 last:pb-0">
                  <span className="mt-0.5 rounded-lg border border-line bg-paper p-2">
                    <Icon className="h-4 w-4 text-ink" />
                  </span>
                  <div>
                    <code className="font-mono text-sm font-semibold text-ink">{name}</code>
                    <p className="mt-1 text-sm leading-6 text-muted">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-lg border border-line bg-paper px-4 py-3 text-sm leading-6 text-muted">
              All file operations are restricted to the launch directory — the agent cannot touch anything else.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function UpAndRunning() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_55%_60%_at_50%_0%,rgba(213,177,0,0.13),transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
          30 seconds to agent
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
          Up and running in one command.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-paper/60">
          Install once, then run it from any project folder. Your API key is never stored or transmitted by the project.
        </p>

        <TerminalFrame dark label="quick-start.sh" className="mx-auto mt-12 max-w-2xl text-left shadow-2xl">
          <div className="p-5 sm:p-6">
            <PromptLine>pip install recodeai</PromptLine>
            <PromptLine>
              export OPENAI_API_KEY=your_key_here
              <span className="ml-3 text-white/30"># never stored, never sent</span>
            </PromptLine>
            <PromptLine>cd your-project</PromptLine>
            <PromptLine>recode</PromptLine>
            <p className="mt-3 font-mono text-sm leading-8 text-gold">
              -- Recode.ai, What are we going to build chief --
            </p>
            <div className="mt-5">
              <CopyButton
                variant="light"
                value={'pip install recodeai\nexport OPENAI_API_KEY=your_key_here\ncd your-project\nrecode'}
              >
                copy quick start
              </CopyButton>
            </div>
          </div>
        </TerminalFrame>

        <p className="mx-auto mt-8 flex max-w-xl items-start justify-center gap-2 text-left text-sm leading-6 text-paper/45">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
          recode can overwrite files without confirmation — run it inside a git repo so you can always roll back.
        </p>
      </div>
    </section>
  )
}

function ShowcaseVisual({ kind }) {
  if (kind === 'screenshot') {
    return (
      <TerminalFrame label="agent run" className="shadow-panel">
        <img src={squareImage} alt="Recode editing a file from a natural language prompt" className="h-full w-full object-cover" />
      </TerminalFrame>
    )
  }

  if (kind === 'sandbox') {
    return (
      <TerminalFrame label="~/my-project" className="shadow-panel">
        <div className="p-5 sm:p-6">
          <PromptLine>cd ~/my-project</PromptLine>
          <PromptLine>recode</PromptLine>
          <p className="mt-3 font-mono text-sm leading-8 text-gold">
            -- Recode.ai, What are we going to build chief --
          </p>
          <div className="mt-5 flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-3 font-mono text-xs text-white/55">
            <FolderLock className="h-4 w-4 shrink-0 text-gold/80" />
            workspace locked — read &amp; write jailed to ~/my-project
          </div>
        </div>
      </TerminalFrame>
    )
  }

  if (kind === 'memory') {
    return (
      <TerminalFrame label="session" className="shadow-panel">
        <div className="p-5 sm:p-6">
          <p className="font-mono text-sm leading-8 text-gold">&gt; remember that we use pytest, not unittest</p>
          <p className="font-mono text-sm leading-8 text-white/70">
            <span className="mr-2 text-emerald-400">✓</span>
            noted — I&apos;ll use pytest from now on
          </p>
          <p className="mt-4 font-mono text-sm leading-8 text-gold">&gt; add tests for the new parser</p>
          <p className="font-mono text-sm leading-8 text-white/70">
            <span className="mr-2 text-emerald-400">✓</span>
            wrote test_parser.py using pytest
          </p>
        </div>
      </TerminalFrame>
    )
  }

  return (
    <TerminalFrame label="tree recode-ai" className="shadow-panel">
      <div className="p-5 font-mono text-sm leading-7 sm:p-6">
        <p className="text-white/85">recode-ai/</p>
        <p className="text-white/85">└── src/recode/</p>
        <p className="text-white/70">&nbsp;&nbsp;&nbsp;&nbsp;├── agent.py <span className="text-white/30"># model + tools + loop</span></p>
        <p className="text-white/70">&nbsp;&nbsp;&nbsp;&nbsp;├── cli.py <span className="text-white/30"># entry point</span></p>
        <p className="text-white/70">&nbsp;&nbsp;&nbsp;&nbsp;└── tools/</p>
        <p className="text-white/70">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── files.py <span className="text-white/30"># read_file, writing_code</span></p>
        <p className="text-white/70">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── memory.py <span className="text-white/30"># remember</span></p>
      </div>
    </TerminalFrame>
  )
}

function FeaturesShowcase() {
  const [active, setActive] = useState(0)
  const tab = showcaseTabs[active]

  return (
    <section id="features" className="border-b border-line bg-[#efeae0] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            recode stays small on purpose — a compact tool loop you can actually understand, not a black box.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {showcaseTabs.map(({ label }, index) => (
            <button
              key={label}
              type="button"
              onClick={() => setActive(index)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                index === active
                  ? 'border-ink bg-ink text-paper'
                  : 'border-line bg-white/45 text-muted hover:bg-white/75 hover:text-ink'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div key={active} className="animate-fade-slide mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-lg">
            <h3 className="text-3xl font-semibold tracking-tight text-ink">{tab.title}</h3>
            <p className="mt-4 text-lg leading-8 text-muted">{tab.body}</p>
          </div>
          <ShowcaseVisual kind={tab.visual} />
        </div>
      </div>
    </section>
  )
}

function LearnMore() {
  return (
    <section className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Learn more</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {resources.map(({ title, body, link, href, Icon }) => (
            <a
              key={title}
              href={href}
              className="group rounded-xl border border-line bg-white/50 p-6 shadow-panel transition hover:bg-white/80"
            >
              <Icon className="mb-5 h-5 w-5 text-ink" />
              <h3 className="text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                {link}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section id="get-started" className="py-28 text-center sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">Try recode.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted">
          One pip install. Any project folder. Your own model.
        </p>
        <div className="mt-9 flex justify-center">
          <InstallBox />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const columns = [
    {
      title: 'Project',
      links: [
        ['GitHub', 'https://github.com/arobaseSuulei/recode-ai'],
        ['PyPI', 'https://pypi.org/project/recodeai/'],
        ['Issues', 'https://github.com/arobaseSuulei/recode-ai/issues'],
      ],
    },
    {
      title: 'Resources',
      links: [
        ['Documentation', 'https://github.com/arobaseSuulei/recode-ai#readme'],
        ['smolagents', 'https://github.com/huggingface/smolagents'],
        ['ReAct paper', 'https://arxiv.org/abs/2210.03629'],
      ],
    },
    {
      title: 'Connect',
      links: [
        ['X — @4ssulei', 'https://x.com/4ssulei'],
        ['GitHub', 'https://github.com/arobaseSuulei'],
      ],
    },
  ]

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-[1.2fr_repeat(3,1fr)] sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <Terminal className="h-4 w-4" />
            recode
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-paper/55">
            A coding agent that lives in your terminal. Open source, and built to be understood.
          </p>
        </div>
        {columns.map(({ title, links }) => (
          <div key={title}>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-paper/45">{title}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-paper/75 transition hover:text-gold">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 font-mono text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>© 2026 recode — open source</span>
          <span>$ pip install recodeai</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper">
      <Nav />
      <main>
        <Hero />
        <CompatibleModels />
        <UpAndRunning />
        <HowItWorks />
        <FeaturesShowcase />
        <LearnMore />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
