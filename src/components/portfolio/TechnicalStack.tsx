import Section from './ui/Section'

const groups = [
  ['Core', 'Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript'],
  ['AI', 'LLM integration', 'RAG', 'Embeddings', 'Agentic workflows', 'Local inference'],
  ['Data', 'SQL', 'Pandas', 'NumPy', 'Power BI', 'EDA'],
  ['Systems', 'Git', 'Docker', 'Linux', 'APIs', 'Automation'],
]

export default function TechnicalStack() {
  return (
    <Section id="technical-stack" tone="alt">
      <div className="stack-band">
        <div>
          <p className="eyebrow">Tools I reach for</p>
          <h2>Enough stack to ship. Enough systems thinking to know what not to use.</h2>
        </div>
        <div className="stack-grid">
          {groups.map(([title, ...items]) => (
            <div className="stack-group" key={title}>
              <span>{title}</span>
              <div>{items.map((item) => <em key={item}>{item}</em>)}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
