type ContactProps = {
  githubUrl?: string
  linkedinUrl?: string
}

function SocialLink({
  href,
  label,
}: {
  href: string
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-neutral-600 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
    >
      {label}
    </a>
  )
}

export default function Contact({ githubUrl, linkedinUrl }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-20 w-full bg-black text-white"
      aria-label="Contact"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-xs tracking-widest uppercase text-neutral-400">
            Contact
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Let’s build something impactful
          </h2>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/30 p-6 sm:p-8">
          <p className="text-neutral-200 leading-relaxed">
            If you’re building AI products where behavior, decision-making, and
            execution matter, I’ll help you design systems that learn from
            reality and improve outcomes over time.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            {githubUrl ? <SocialLink href={githubUrl} label="GitHub" /> : null}
            {linkedinUrl ? (
              <SocialLink href={linkedinUrl} label="LinkedIn" />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

