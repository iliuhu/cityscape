import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Clock,
  Home,
  Building2,
  Search,
  LineChart,
  FileSignature,
  Handshake,
  Menu,
  X,
  Upload,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ----------------------------------------------------------------
   Constants / Content
---------------------------------------------------------------- */
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES_FULL = [
  {
    icon: Home,
    title: 'Residential Sales',
    text: 'From first viewing to final signature, we represent buyers and sellers of distinctive homes with quiet, meticulous care.',
  },
  {
    icon: Building2,
    title: 'Commercial Property',
    text: 'Offices, retail and mixed-use assets, sourced and negotiated with a clear-eyed view of yield and long-term value.',
  },
  {
    icon: LineChart,
    title: 'Investment Advisory',
    text: 'Portfolio thinking for private investors — acquisition modelling, market timing and hold-side strategy in one place.',
  },
  {
    icon: Search,
    title: 'Property Search',
    text: 'A retained, off-market search service for clients who know what they want and would rather not spend their weekends finding it.',
  },
  {
    icon: FileSignature,
    title: 'Valuation & Appraisal',
    text: 'Evidence-led opinions of value, grounded in comparable transactions and the specifics of the building, not the headline.',
  },
  {
    icon: Handshake,
    title: 'Negotiation & Closing',
    text: 'We handle the back-and-forth, the diligence and the paperwork — so the deal that is agreed is the deal that completes.',
  },
]

const HERO_IMG =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80'

const PROTOCOL_IMAGES = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
]

/* ----------------------------------------------------------------
   Navbar
---------------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-primary/10' : 'bg-transparent'
        } rounded-full px-4 sm:px-6 py-2.5 w-[calc(100%-2rem)] max-w-5xl`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary">
              <Building2 className="h-5 w-5 text-white" strokeWidth={2.2} />
              <span className="absolute inset-0 rounded-full ring-2 ring-primary/30 group-hover:ring-primary/50 transition" />
            </span>
            <span
              className={`font-display font-bold tracking-tight text-lg ${
                scrolled ? 'text-ink' : 'text-white'
              } transition-colors`}
            >
              Cityscape
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-tight lift-on-hover ${
                  scrolled ? 'text-ink/70 hover:text-primary' : 'text-white/90 hover:text-white'
                } transition-colors`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden lg:inline-flex magnetic-btn items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/30"
          >
            Book a consultation
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>

          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden p-2 rounded-full ${scrolled ? 'text-ink' : 'text-white'}`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-deep/90 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 right-0 bg-background rounded-b-5xl px-6 pt-8 pb-12 transition-transform duration-500 ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-display font-bold text-xl text-ink">Cityscape</span>
            <button onClick={() => setOpen(false)} className="p-2 rounded-full bg-divider/40" aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold text-ink py-3 border-b border-divider"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 magnetic-btn flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-full font-semibold w-full"
          >
            Book a consultation
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  )
}

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.3 })
      gsap.from('.hero-line-2', { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 })
      gsap.from('.hero-cta, .hero-meta', {
        y: 24, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.8, stagger: 0.12,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-[100dvh] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Contemporary architectural interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-deep/85 via-deep/50 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />
      </div>

      {/* Floating brass accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[18%] h-2 w-2 rounded-full bg-accent/70 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[55%] right-[10%] h-1.5 w-1.5 rounded-full bg-white/40 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[40%] right-[26%] h-1 w-1 rounded-full bg-primary-light/80 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[32%] right-[8%] h-1.5 w-1.5 rounded-full bg-accent/40 animate-float" style={{ animationDelay: '2.2s' }} />
      </div>

      {/* Top frame */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center text-center">
        <div className="px-6 sm:px-10 lg:px-16 max-w-4xl">
          <p className="hero-meta font-mono text-xs uppercase tracking-[0.25em] text-accent mb-7">
            Boutique property advisory · Est. 2009
          </p>
          <h1 className="font-display font-extrabold text-white leading-[0.95] tracking-tight">
            <span className="hero-line-1 block text-4xl sm:text-5xl md:text-6xl">
              A city is made of spaces.
            </span>
            <span
              className="hero-line-2 block font-serif italic font-medium text-accent text-6xl sm:text-7xl md:text-8xl lg:text-9xl mt-2"
              style={{ lineHeight: '0.92' }}
            >
              Find yours.
            </span>
          </h1>

          <p className="hero-meta mx-auto max-w-xl text-white/75 text-base sm:text-lg mt-8 leading-relaxed">
            We advise on homes, commercial assets and investments with the patience of a curator
            and the rigour of an analyst.{' '}
            <span className="text-white">The right property is worth waiting for.</span>
          </p>

          <div className="hero-cta mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="magnetic-btn group inline-flex items-center justify-center gap-2 bg-accent text-deep font-semibold px-7 py-4 rounded-full shadow-2xl shadow-accent/40"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:+12125550142"
              className="lift-on-hover inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium px-7 py-4 rounded-full"
            >
              <Phone className="h-4 w-4" />
              +1 212 555 0142
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 sm:right-12 hidden md:flex flex-col items-center gap-2 text-white/50">
          <span className="font-mono uppercase text-[10px] tracking-[0.3em]">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Feature Card 1 — Portfolio Shuffler
---------------------------------------------------------------- */
function PortfolioShuffler() {
  const items = [
    { tag: 'Residential', label: 'Penthouse · Upper East Side', value: '$4.2M' },
    { tag: 'Commercial', label: 'Flagship retail · SoHo', value: '6.1% yield' },
    { tag: 'Investment', label: 'Mixed-use · Brooklyn', value: 'Off market' },
  ]
  const [stack, setStack] = useState(items)

  useEffect(() => {
    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-44 w-full">
      {stack.map((item, i) => {
        const offset = i
        const total = stack.length
        return (
          <div
            key={item.tag}
            style={{
              transform: `translate(${offset * 14}px, ${offset * 14}px) scale(${1 - offset * 0.05})`,
              zIndex: total - offset,
              opacity: 1 - offset * 0.25,
              transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
            }}
            className="absolute inset-0 bg-white border border-divider rounded-3xl p-5 shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-1 rounded-full">
                {item.tag}
              </span>
              <span className="font-mono text-xs text-accent-dark">{item.value}</span>
            </div>
            <div className="mt-4 font-display text-lg font-semibold text-ink leading-tight">
              {item.label}
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              {Array.from({ length: 24 }).map((_, idx) => (
                <span
                  key={idx}
                  className="h-1 w-1 rounded-full"
                  style={{ background: idx < 24 - offset * 6 ? '#708C9E' : '#E3E3DF' }}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 2 — SIGNATURE ANIMATION (real estate re-skin)
   Falling map pins + keys from a roofline, pulsing on a ground line.
   Reuses rain-fall / rain-ripple / rain-fadein keyframes.
---------------------------------------------------------------- */
function ListingPulse() {
  const [statusIdx, setStatusIdx] = useState(0)
  const [count, setCount] = useState(12)

  const statuses = [
    { text: '12 curated listings · live', label: 'Listing', tone: 'emerald' },
    { text: 'Private viewings · Thu–Sat', label: 'Open house', tone: 'primary' },
    { text: 'Offer received · 41 Waverly', label: 'Offer', tone: 'accent' },
    { text: 'Keys handed over · closed', label: 'Closed', tone: 'emerald' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((idx) => {
        const next = (idx + 1) % statuses.length
        if (statuses[next].label === 'Closed') setCount((c) => c + 1)
        return next
      })
    }, 2300)
    return () => clearInterval(interval)
  }, [])

  // Map pins + keys descending from the roofline
  const drops = [
    { left: '15%', delay: '0.0s', dur: '2.6s', size: 18, kind: 'pin' },
    { left: '25%', delay: '1.3s', dur: '3.0s', size: 15, kind: 'key' },
    { left: '38%', delay: '0.6s', dur: '2.8s', size: 20, kind: 'pin' },
    { left: '50%', delay: '1.8s', dur: '2.4s', size: 16, kind: 'key' },
    { left: '62%', delay: '0.9s', dur: '3.1s', size: 19, kind: 'pin' },
    { left: '74%', delay: '2.0s', dur: '2.7s', size: 15, kind: 'key' },
    { left: '85%', delay: '0.4s', dur: '2.9s', size: 18, kind: 'pin' },
  ]

  const ripples = [
    { left: '22%', delay: '0.2s' },
    { left: '48%', delay: '1.0s' },
    { left: '76%', delay: '1.8s' },
  ]

  const status = statuses[statusIdx]
  const toneText =
    status.tone === 'emerald' ? 'text-emerald-700' :
    status.tone === 'accent' ? 'text-accent-dark' :
    'text-primary-dark'
  const toneDot =
    status.tone === 'emerald' ? 'bg-emerald-500' :
    status.tone === 'accent' ? 'bg-accent' :
    'bg-primary'

  return (
    <div
      className="relative h-44 w-full rounded-3xl overflow-hidden border border-primary/15"
      style={{ background: 'linear-gradient(180deg, #F1F1ED 0%, #D8D4C6 70%, #B8B19D 100%)' }}
    >
      {/* Soft atmosphere */}
      <div className="absolute -top-8 -left-6 h-20 w-32 rounded-full bg-white/60 blur-2xl" />
      <div className="absolute top-2 right-10 h-14 w-24 rounded-full bg-white/50 blur-xl" />

      {/* Header strip */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-primary-dark" strokeWidth={2.2} />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-dark">
            Live portfolio
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-sm text-ink tabular-nums">
            {String(count).padStart(2, '0')}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted">active</span>
        </div>
      </div>

      {/* Roofline source SVG */}
      <svg className="absolute left-3 right-3 top-9 h-6" viewBox="0 0 400 24" preserveAspectRatio="none">
        <path d="M0 22 L0 16 L60 16 L60 6 L120 6 L120 16 L200 16 L200 4 L280 4 L280 16 L340 16 L340 10 L400 10 L400 22 Z"
          fill="#556E7E" fillOpacity="0.18" />
        <path d="M0 16 L60 16 L60 6 L120 6 L120 16 L200 16 L200 4 L280 4 L280 16 L340 16 L340 10 L400 10"
          fill="none" stroke="#556E7E" strokeOpacity="0.55" strokeWidth="1.4" strokeLinejoin="round" />
        {[60, 120, 200, 280, 340].map((x) => (
          <rect key={x} x={x - 1.5} y="17" width="3" height="6" fill="#C2A15B" fillOpacity="0.75" />
        ))}
      </svg>

      {/* Falling pin/key field */}
      <div className="absolute inset-x-0 top-14 bottom-11 overflow-hidden">
        {drops.map((d, i) => (
          <svg
            key={i}
            className="absolute top-0"
            style={{
              left: d.left,
              width: `${d.size}px`,
              height: `${Math.round(d.size * 1.5)}px`,
              animation: `rain-fall ${d.dur} cubic-bezier(0.55,0.05,0.7,0.45) ${d.delay} infinite`,
              filter: 'drop-shadow(0 1px 2px rgba(85,110,126,0.35))',
              transform: 'translateX(-50%)',
            }}
            viewBox="0 0 24 36"
          >
            <defs>
              <linearGradient id={`re-drop-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E0CD97" />
                <stop offset="55%" stopColor="#C2A15B" />
                <stop offset="100%" stopColor="#8A7440" />
              </linearGradient>
            </defs>
            {d.kind === 'pin' ? (
              <>
                <path
                  d="M12 2 C 6.5 2, 3 6.5, 3 11.5 C 3 18, 12 27, 12 27 C 12 27, 21 18, 21 11.5 C 21 6.5, 17.5 2, 12 2 Z"
                  fill={`url(#re-drop-${i})`}
                />
                <circle cx="12" cy="11" r="3.6" fill="#F1F1ED" fillOpacity="0.9" />
              </>
            ) : (
              <>
                <circle cx="9" cy="9" r="5.2" fill="none" stroke={`url(#re-drop-${i})`} strokeWidth="3" />
                <path d="M12.5 12.5 L21 21 M17 16.5 L20 13.5 M19 19 L22 16"
                  fill="none" stroke={`url(#re-drop-${i})`} strokeWidth="3" strokeLinecap="round" />
              </>
            )}
          </svg>
        ))}
      </div>

      {/* Ground line with property tick marks */}
      <svg className="absolute bottom-9 left-3 right-3 h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
        <line x1="0" y1="7" x2="200" y2="7" stroke="#556E7E" strokeOpacity="0.5" strokeWidth="1.2" />
        {[10, 35, 60, 95, 130, 165, 190].map((x) => (
          <line key={x} x1={x} y1="4" x2={x} y2="10" stroke="#556E7E" strokeOpacity="0.35" strokeWidth="1" />
        ))}
      </svg>

      {/* Map-pin pulses on the ground line */}
      <div className="absolute bottom-[34px] left-3 right-3 h-2">
        {ripples.map((r, i) => (
          <span
            key={i}
            className="absolute top-0 -translate-x-1/2 rounded-full border border-accent-dark/50"
            style={{
              left: r.left,
              width: '4px',
              height: '4px',
              animation: `rain-ripple 2.4s ease-out ${r.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* Bottom status */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`relative h-2 w-2 rounded-full ${toneDot}`}>
            {status.tone === 'accent' && (
              <span className={`absolute inset-0 rounded-full ${toneDot} animate-ping`} />
            )}
          </span>
          <span
            key={status.text}
            className={`font-mono text-[10px] truncate ${toneText}`}
            style={{ animation: 'rain-fadein 0.35s ease-out' }}
          >
            {status.text}
          </span>
        </div>
        <span className={`font-mono text-[9px] uppercase tracking-[0.2em] whitespace-nowrap pl-2 ${toneText}`}>
          {status.label}
        </span>
      </div>

      <style>{`
        @keyframes rain-fall {
          0%   { transform: translate(-50%, -10px); opacity: 0; }
          12%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { transform: translate(-50%, 95px); opacity: 0; }
        }
        @keyframes rain-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.9; }
          80%  { transform: translateX(-50%) scale(3.5); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
        }
        @keyframes rain-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 3 — Viewing Scheduler (cursor on calendar)
---------------------------------------------------------------- */
function ViewingScheduler() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const [step, setStep] = useState(0)
  const activeDay = 3

  useEffect(() => {
    const interval = setInterval(() => setStep((prev) => (prev + 1) % 5), 1400)
    return () => clearInterval(interval)
  }, [])

  const cursorPos = (() => {
    switch (step) {
      case 0: return { x: 8, y: 110, opacity: 0 }
      case 1: return { x: 60, y: 60, opacity: 1 }
      case 2: return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 3: return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 4: return { x: 130, y: 130, opacity: 1 }
      default: return { x: 8, y: 110, opacity: 0 }
    }
  })()

  return (
    <div className="relative h-44 w-full bg-white border border-divider rounded-3xl p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Week 46 · November</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-0.5 rounded-full">
          Viewing
        </span>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((d, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center h-9 rounded-xl text-xs font-medium transition-all duration-300 ${
              step >= 3 && idx === activeDay
                ? 'bg-accent text-deep scale-110 shadow-lg shadow-accent/30'
                : 'bg-background text-ink'
            }`}
          >
            <span className="font-mono text-[9px] text-muted">{d}</span>
            <span className="font-display font-semibold text-sm">{idx + 10}</span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-2.5 rounded-2xl font-medium text-xs transition-all duration-300 ${
          step === 4 ? 'bg-primary text-white scale-[1.02] shadow-md shadow-primary/30' : 'bg-divider/40 text-muted'
        }`}
      >
        {step >= 3 ? '✓ Viewing confirmed' : 'Select a day'}
      </button>

      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          opacity: cursorPos.opacity,
          transform: step === 3 ? 'scale(0.85)' : 'scale(1)',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="#1A1D20" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Features Section
---------------------------------------------------------------- */
function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', once: true },
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
      })
      gsap.from('.feature-heading > *', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 95%', once: true },
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const cards = [
    {
      eyebrow: '01 / Portfolio',
      heading: 'Curated Property',
      sub: 'Chosen, not listed',
      text: 'A deliberately small portfolio of homes and assets, each one visited, verified and understood before it ever reaches you.',
      Component: PortfolioShuffler,
    },
    {
      eyebrow: '02 / Live desk',
      heading: 'Market Intelligence',
      sub: 'Always in motion',
      text: 'Listings, private viewings and offers tracked in real time. Nothing sits in an inbox, and no opportunity goes cold.',
      Component: ListingPulse,
    },
    {
      eyebrow: '03 / Client care',
      heading: 'Private Viewings',
      sub: 'On your schedule',
      text: 'Viewings arranged around your week, with an advisor who knows the building, the street and the numbers behind both.',
      Component: ViewingScheduler,
    },
  ]

  return (
    <section id="expertise" ref={sectionRef} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="feature-heading max-w-3xl mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ Our expertise</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            Three disciplines.
            <span className="block font-serif italic font-medium text-primary-dark mt-1">One standard.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="feature-card group relative bg-surface border border-divider rounded-5xl p-7 hover:border-primary/40 transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{card.eyebrow}</span>
                <ArrowUpRight
                  className="h-5 w-5 text-ink/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  strokeWidth={1.8}
                />
              </div>
              <card.Component />
              <div className="mt-6">
                <h3 className="font-display font-bold text-2xl text-ink leading-tight">{card.heading}</h3>
                <p className="font-serif italic text-primary-dark text-sm mt-1">{card.sub}</p>
                <p className="text-muted text-[15px] mt-4 leading-relaxed">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   CountUp
---------------------------------------------------------------- */
function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const elemRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = elemRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const startTime = performance.now()
            const animate = (now) => {
              const progress = Math.min((now - startTime) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(target * eased))
              if (progress < 1) requestAnimationFrame(animate)
              else setCount(target)
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={elemRef}>{count}</span>
}

/* ----------------------------------------------------------------
   Pillars
---------------------------------------------------------------- */
function Pillars() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      n: '01', title: 'Experience', target: 17, suffix: '+', label: 'years of advisory',
      desc: 'Seventeen years across cycles and neighbourhoods. We have negotiated in rising markets and protected value in falling ones.',
    },
    {
      n: '02', title: 'Discretion', target: 100, suffix: '%', label: 'client-first',
      desc: 'We act for you alone on retained searches. No dual representation, no conflicting interests, no quiet compromises.',
    },
    {
      n: '03', title: 'Access', target: 24, suffix: '/7', label: 'advisor availability',
      desc: 'Property decisions rarely keep office hours. Your advisor is reachable when a document, a question or an opportunity arrives.',
    },
  ]

  return (
    <section id="philosophy" ref={ref} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[44rem] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary-dark mb-5">╱ Three principles</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight">
              The numbers behind
              <span className="block font-serif italic font-medium text-primary-dark">the trust.</span>
            </h2>
          </div>
          <p className="text-muted text-lg leading-relaxed max-w-md lg:text-right">
            Three commitments that define how we work. Not marketing language — just what we deliver, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider rounded-5xl overflow-hidden border border-divider shadow-xl shadow-primary/5">
          {pillars.map((p, i) => (
            <article
              key={i}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
              className={`pillar-card relative bg-surface p-9 sm:p-12 group overflow-hidden transition-all duration-1000 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">{p.n} / {p.title}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-accent group-hover:scale-150 transition-all duration-500" />
              </div>

              <div className="flex items-end gap-1 leading-none">
                <span className="font-display font-extrabold text-[6rem] sm:text-[8rem] md:text-[9rem] leading-[0.85] text-ink tabular-nums tracking-tight">
                  <CountUp target={p.target} duration={1800 + i * 200} />
                </span>
                <span className="font-serif italic font-medium text-4xl sm:text-5xl md:text-6xl text-primary-dark mb-3 sm:mb-4">
                  {p.suffix}
                </span>
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-dark mt-5">{p.label}</p>
              <p className="text-muted text-[15px] mt-6 leading-relaxed max-w-xs">{p.desc}</p>

              <div className="absolute bottom-0 left-9 right-9 sm:left-12 sm:right-12 h-px bg-divider overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-transparent via-accent to-transparent"
                  style={{ animation: `pillar-sweep 4s ease-in-out ${i * 0.4}s infinite` }}
                />
              </div>

              <span className="absolute top-9 right-9 sm:top-12 sm:right-12 font-mono text-[9px] uppercase tracking-widest text-primary/30">
                {p.n}.city
              </span>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pillar-sweep {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}

/* ----------------------------------------------------------------
   Protocol — Sticky Stacking Cards
---------------------------------------------------------------- */
function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top top+=100',
            endTrigger: cards[cards.length - 1],
            end: 'top top+=120',
            scrub: 1,
          },
          scale: 0.92,
          filter: 'blur(6px) saturate(0.7)',
          opacity: 0.5,
          ease: 'none',
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      num: '01', title: 'The Brief', tagline: 'We listen first.',
      text: 'We start with a conversation, not a listing feed. Your budget, your timeline, the way you actually live or intend to use the space — and the things you would rather not compromise on.',
      image: PROTOCOL_IMAGES[0], alt: 'Architectural consultation in a bright interior', meta: 'Step 1 / Listen',
    },
    {
      num: '02', title: 'The Search', tagline: 'We find the fit.',
      text: 'On-market and off, we shortlist only what clears the brief. Every property is visited, its numbers checked, and its story explained — including the reasons to walk away.',
      image: PROTOCOL_IMAGES[1], alt: 'Considered residential interior with natural light', meta: 'Step 2 / Curate',
    },
    {
      num: '03', title: 'The Close', tagline: 'We stay with it.',
      text: 'Negotiation, diligence, conveyancing and handover, coordinated end to end. A completed transaction is the beginning of a relationship, not the end of a file.',
      image: PROTOCOL_IMAGES[2], alt: 'Sunlit living space at handover', meta: 'Step 3 / Complete',
    },
  ]

  return (
    <section id="process" ref={containerRef} className="relative px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto mb-16 px-2 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ How we work</span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
          Three steps.
          <span className="block font-serif italic font-medium text-primary-dark">No surprises.</span>
        </h2>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <article
            key={idx}
            className="protocol-card sticky top-24 sm:top-28 mx-auto max-w-6xl bg-gradient-to-br from-surface to-background border border-divider rounded-6xl overflow-hidden shadow-2xl shadow-primary/5"
          >
            <div className="grid lg:grid-cols-5 gap-0 min-h-[60vh] lg:min-h-[70vh]">
              <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{step.meta}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2.5 py-1 rounded-full">
                    Cityscape Protocol
                  </span>
                </div>

                <div className="my-12">
                  <span className="font-display font-extrabold text-[7rem] sm:text-[10rem] leading-none text-primary/15 -mb-4 block">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-serif italic text-primary-dark text-2xl sm:text-3xl mt-3">{step.tagline}</p>
                </div>

                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">{step.text}</p>
              </div>

              <div className="lg:col-span-2 relative overflow-hidden min-h-[300px] lg:min-h-full bg-deep">
                <img src={step.image} alt={step.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-deep/15" />
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink">Step {step.num}</span>
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-white/70">
                  {step.num} / Cityscape
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Services Grid
---------------------------------------------------------------- */
function ServicesGrid() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
        y: 30, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.06,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-24 px-6 sm:px-10 lg:px-16 bg-deep text-white overflow-hidden rounded-t-6xl">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">╱ Everything we do</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
              The full brief,
              <span className="block font-serif italic font-medium text-accent">under one roof.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-base leading-relaxed">
            From a first home to a multi-asset portfolio. Private clients, investors and occupiers, advised with the same attention.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-4xl overflow-hidden">
          {SERVICES_FULL.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div key={i} className="svc-tile group bg-deep p-7 sm:p-9 hover:bg-white/[0.02] transition-colors duration-500 relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-500">
                    <Icon className="h-5 w-5 text-primary-light group-hover:text-deep" strokeWidth={2} />
                  </div>
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mb-3">{svc.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{svc.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Trust Signals
---------------------------------------------------------------- */
function TrustSignals() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const badges = [
    {
      Icon: ShieldCheck, title: 'Licensed & bonded',
      text: 'Fully licensed brokerage with segregated client accounts and independent oversight on every transaction we handle.',
    },
    {
      Icon: Award, title: 'REALTOR® member',
      text: 'Bound by a code of ethics and continuing education standards, with access to the widest verified market data.',
    },
    {
      Icon: Clock, title: '17 years in the market',
      text: 'Advisors who have worked through multiple cycles — and learned which advice holds up when conditions change.',
    },
  ]

  return (
    <section ref={ref} className="relative py-14 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ Why clients stay</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink mt-3 tracking-tight">
            More than a transaction.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {badges.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
              className={`bg-white border border-divider rounded-4xl p-6 hover:border-accent/50 transition-all duration-700 ease-out shadow-sm ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Icon className="h-6 w-6 text-accent-dark mb-3" strokeWidth={1.8} />
              <h3 className="font-display font-bold text-lg text-ink mb-1.5">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="magnetic-btn inline-flex items-center gap-2 bg-accent text-deep font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-accent/30">
            Start a conversation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Contact Form
---------------------------------------------------------------- */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', zip: '', message: '' })
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const dropRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  const handleFiles = (newFiles) => {
    const images = Array.from(newFiles).filter((f) => f.type.startsWith('image/'))
    setFiles((prev) => [...prev, ...images].slice(0, 5))
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ Contact</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
              Tell us what
              <span className="block font-serif italic font-medium text-primary-dark">you are looking for.</span>
            </h2>
            <p className="text-muted text-lg mt-6 leading-relaxed max-w-md">
              Share a few details and an advisor will be in touch to arrange a conversation — no pressure, no automated pitch.
            </p>

            <div className="mt-10 space-y-4">
              <a href="tel:+12125550142" className="lift-on-hover flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Phone className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Call the desk</span>
                  <span className="font-display font-semibold text-ink text-lg">+1 212 555 0142</span>
                </span>
              </a>

              <a href="mailto:hello@cityscape.properties" className="lift-on-hover flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Mail className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Write to us</span>
                  <span className="font-display font-semibold text-ink text-lg">hello@cityscape.properties</span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Visit the studio</span>
                  <span className="font-display font-semibold text-ink text-lg">418 West 14th St, New York</span>
                </span>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-3xl bg-primary/5 border border-primary/15">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary-dark mb-2">Confidentiality</p>
              <p className="text-sm text-muted leading-relaxed">
                Your enquiry stays with your advisor. We never sell or share your details, and we do not add you to third-party marketing lists.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-surface border border-divider rounded-5xl p-7 sm:p-10 shadow-xl shadow-primary/5">
              {status !== 'sent' ? (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                    <Field label="Email address" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                    <Field label="Phone number" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                    <Field label="Postcode / ZIP" value={form.zip} onChange={(v) => setForm({ ...form, zip: v })} />
                  </div>

                  <div className="mt-5">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">Your brief *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="Tell us about the property, area or investment you have in mind..."
                      className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition resize-none font-body"
                    />
                  </div>

                  {/* File upload zone */}
                  <div
                    ref={dropRef}
                    onDragOver={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.add('!border-primary', '!bg-primary/5')
                    }}
                    onDragLeave={() => dropRef.current?.classList.remove('!border-primary', '!bg-primary/5')}
                    onDrop={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.remove('!border-primary', '!bg-primary/5')
                      handleFiles(e.dataTransfer.files)
                    }}
                    className="mt-5 border-2 border-dashed border-divider rounded-3xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <input
                      type="file" multiple id="file-up" className="hidden"
                      onChange={(e) => handleFiles(e.target.files)} accept="image/*"
                    />
                    <label htmlFor="file-up" className="cursor-pointer block">
                      <Upload className="h-6 w-6 mx-auto text-primary-dark mb-2" />
                      <p className="font-display font-semibold text-ink text-sm">Attach images or floor plans</p>
                      <p className="text-xs text-muted mt-1">Click or drag files here (max 5 images)</p>
                      {files.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                          {files.map((f, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary-dark text-xs px-3 py-1.5 rounded-full font-mono">
                              <CheckCircle2 className="h-3 w-3" />
                              {f.name.length > 22 ? f.name.slice(0, 22) + '…' : f.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </label>
                  </div>

                  <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-muted">An advisor will reply personally. Fields marked * are required.</p>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/30 disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Sending…' : 'Send enquiry'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="h-16 w-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-accent-dark" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink mb-3">Thank you for reaching out.</h3>
                  <p className="text-muted max-w-md mx-auto">
                    An advisor will be in touch shortly to arrange a conversation about your brief.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, type = 'text', required, value, onChange }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition font-body"
      />
    </div>
  )
}

/* ----------------------------------------------------------------
   Footer
---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative bg-deep text-white rounded-t-6xl mt-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-primary/20 blur-3xl" />

      <div className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-10 max-w-7xl mx-auto">
        {/* Top: big tagline */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl leading-[0.92] tracking-tight">
            Find a space
            <span className="font-serif italic font-medium text-accent block">worth belonging to.</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-8 gap-6">
            <p className="text-white/50 max-w-md">
              Cityscape — a boutique property advisory in New York, working with clients across the city and beyond.
            </p>
            <a href="#contact" className="magnetic-btn inline-flex items-center gap-2 bg-accent text-deep font-semibold px-7 py-3.5 rounded-full self-start sm:self-auto">
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
                <Building2 className="h-5 w-5 text-white" strokeWidth={2.2} />
              </span>
              <span className="font-display font-bold text-lg">Cityscape</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Considered advice on residential, commercial and investment property. Licensed, independent and quietly thorough.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mt-6">
              Mon–Fri 9–6 · Sat by appointment
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">Expertise</p>
            <ul className="space-y-2.5">
              {SERVICES_FULL.slice(0, 4).map((s, i) => (
                <li key={i}>
                  <a href="#expertise" className="text-white/65 hover:text-accent transition text-sm">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">Company</p>
            <ul className="space-y-2.5">
              <li><a href="#philosophy" className="text-white/65 hover:text-accent transition text-sm">Philosophy</a></li>
              <li><a href="#process" className="text-white/65 hover:text-accent transition text-sm">Process</a></li>
              <li><a href="#contact" className="text-white/65 hover:text-accent transition text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li><a href="tel:+12125550142" className="text-white/65 hover:text-accent transition text-sm">+1 212 555 0142</a></li>
              <li><a href="mailto:hello@cityscape.properties" className="text-white/65 hover:text-accent transition text-sm">hello@cityscape.properties</a></li>
              <li className="text-white/65 text-sm">418 West 14th St, New York</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">
              Advisory desk open · accepting new briefs
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/50 text-xs font-mono">
            <Link to="/privacy" className="hover:text-accent transition">Privacy</Link>
            <Link to="/terms" className="hover:text-accent transition">Terms</Link>
            <span>© 2026 Cityscape</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------------------------------------------
   App
---------------------------------------------------------------- */
export default function App() {
  useEffect(() => {
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200)
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pillars />
        <Protocol />
        <ServicesGrid />
        <TrustSignals />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
