import Section from './ui/Section'

const notes = [
  'Building in public: what changes when AI becomes part of the operating system.',
  'Founder systems: turning vague goals into observable loops and execution surfaces.',
  'Personal intelligence: memory, context, automation and the edge between human intent and machine action.',
]

export default function WritingSection() {
  return (
    <Section id="writing" tone="alt">
      <div className="writing">
        <div>
          <p className="eyebrow">Writing</p>
          <h2>I write about the systems behind the systems.</h2>
          <p className="writing__intro">
            Notes from building Vasuki OS, Janani.AI, mw.ai and the many experiments that sit between them.
          </p>
        </div>
        <div className="writing__notes">
          {notes.map((note, index) => (
            <article key={note}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{note}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
