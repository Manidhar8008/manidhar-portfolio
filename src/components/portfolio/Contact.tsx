import { PORTFOLIO } from '../../content/portfolio'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <Heading eyebrow="Contact" title={PORTFOLIO.contact.message} />

        <div className="space-y-5">
          {PORTFOLIO.contact.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? undefined : '_blank'}
              rel={link.label === 'Email' ? undefined : 'noreferrer'}
              className="flex flex-col gap-2 rounded-[24px] bg-white/86 px-5 py-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 transition-colors hover:ring-teal-800/40 dark:bg-slate-900/70 dark:ring-white/10 dark:hover:ring-teal-300/40 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-800 dark:text-teal-300">
                {link.label}
              </span>
              <span className="text-sm leading-6 text-slate-700 dark:text-stone-200">{link.value}</span>
            </a>
          ))}

          <div className="flex flex-col gap-3 pt-3 sm:flex-row">
            <a
              href={PORTFOLIO.contact.links[0].href}
              className="inline-flex items-center justify-center rounded-full bg-teal-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-950 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
            >
              Contact
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-teal-800 hover:text-teal-800 dark:border-white/10 dark:bg-white/[0.04] dark:text-stone-200 dark:hover:border-teal-300 dark:hover:text-teal-300"
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
