import { FOUNDER_NARRATIVE } from '../../content/founderNarrative'
import Section from './ui/Section'

export default function Contact() {
  return (
    <Section id="contact" className="contact-section">
      <div className="contact">
        <div className="contact__lead">
          <p className="eyebrow">Contact</p>
          <h2>Bring me the messy problem.</h2>
          <p>{FOUNDER_NARRATIVE.contact.intro} I am most interested in work where software has to observe, reason and then do something useful.</p>
        </div>

        <div className="contact__links">
          {FOUNDER_NARRATIVE.contact.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? undefined : '_blank'}
              rel={link.label === 'Email' ? undefined : 'noreferrer'}
            >
              <span>{link.label}</span>
              <strong>{link.value}</strong>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
