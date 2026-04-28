import { FOUNDER_NARRATIVE } from '../../content/founderNarrative'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function Contact() {
  return (
    <Section id="contact" className="pb-10" divided tone="base">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <Heading
          eyebrow="Contact"
          title="Let’s build systems that drive outcomes."
          description="If you’re working on systems where decisions matter, let’s talk."
        />

        <div className="space-y-5">
          {FOUNDER_NARRATIVE.contact.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? undefined : '_blank'}
              rel={link.label === 'Email' ? undefined : 'noreferrer'}
              className="flex items-center justify-between gap-4 rounded-[26px] bg-white/82 px-5 py-5 text-sm font-semibold text-slate-700 shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-colors hover:bg-white dark:bg-slate-900/56 dark:text-stone-200 dark:hover:bg-slate-900/66"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
                {link.label}
              </span>
              <span>{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
