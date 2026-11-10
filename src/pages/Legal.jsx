import { Link } from 'react-router-dom'
import { ArrowLeft, Building2 } from 'lucide-react'

const CONTENT = {
  privacy: {
    eyebrow: 'Legal / 01',
    title: 'Privacy Policy',
    intro: 'At Cityscape, your privacy is treated with the same care as your property. This policy explains what we collect, why we collect it, and how it is protected.',
    sections: [
      { h: 'Information we collect', p: 'When you submit an enquiry through our website we collect the name, email address, phone number, postcode and message you provide, along with any images you choose to attach. We also collect basic, anonymised usage data to understand how our site is used.' },
      { h: 'How we use it', p: 'Your details are used solely to respond to your enquiry, arrange viewings, and provide the property advice you asked for. We never sell your information, and we do not share it with third-party marketing networks.' },
      { h: 'How we protect it', p: 'Enquiry data is stored securely and accessible only to the Cityscape advisory team. We retain it only for as long as needed to serve your request or meet our legal obligations.' },
      { h: 'Your choices', p: 'You may request access to, correction of, or deletion of your personal information at any time by writing to hello@cityscape.properties.' },
    ],
  },
  terms: {
    eyebrow: 'Legal / 02',
    title: 'Terms of Service',
    intro: 'These terms govern the use of the Cityscape website and the general framework of our advisory relationship. They are written to be read, not decoded.',
    sections: [
      { h: 'Website content', p: 'Property descriptions, images, floor plans and indicative figures are provided in good faith and for information only. They do not constitute a contractual offer or a formal valuation.' },
      { h: 'Advisory relationship', p: 'Engaging Cityscape for a viewing or consultation does not create an exclusive brokerage agreement. The scope of any representation is set out in a separate written agreement before any transaction.' },
      { h: 'Accuracy', p: 'We take care to keep information current, but availability, pricing and specifications can change. Please confirm all material details with your advisor before making a decision.' },
      { h: 'Contact', p: 'Questions about these terms can be directed to hello@cityscape.properties.' },
    ],
  },
}

export default function Legal({ kind }) {
  const data = CONTENT[kind] || CONTENT.privacy

  return (
    <div className="min-h-screen bg-background text-ink">
      <div className="noise-overlay" />
      <header className="border-b border-divider">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
              <Building2 className="h-5 w-5 text-white" strokeWidth={2.2} />
            </span>
            <span className="font-display font-bold tracking-tight text-lg">Cityscape</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-primary transition lift-on-hover">
            <ArrowLeft className="h-4 w-4" /> Back to site
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ {data.eyebrow}</span>
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl tracking-tight mt-4 leading-[1.02]">
          {data.title}
        </h1>
        <p className="font-serif italic text-primary-dark text-xl sm:text-2xl mt-5 max-w-2xl leading-relaxed">
          {data.intro}
        </p>

        <div className="mt-16 space-y-10">
          {data.sections.map((s, i) => (
            <section key={i} className="border-t border-divider pt-8 grid sm:grid-cols-12 gap-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted sm:col-span-3">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="sm:col-span-9">
                <h2 className="font-display font-bold text-2xl mb-3">{s.h}</h2>
                <p className="text-muted leading-relaxed">{s.p}</p>
              </div>
            </section>
          ))}
        </div>

        <p className="font-mono text-[10px] uppercase tracking-widest text-muted/70 mt-16">
          Last updated November 2026 · Cityscape Property Advisory
        </p>
      </main>

      <footer className="bg-deep text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-white/50 font-mono text-xs">
          <span>© 2026 Cityscape</span>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition">Privacy</Link>
            <Link to="/terms" className="hover:text-primary transition">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
