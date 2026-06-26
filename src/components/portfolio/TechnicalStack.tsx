import Section from './ui/Section'
import Heading from './ui/Heading'

export default function TechnicalStack() {
  const stacks = [
    {
      category: 'Knowledge Graph',
      technologies: ['Neo4j', 'Graph Embedding', 'Multi-hop Reasoning', 'Semantic Indexing'],
    },
    {
      category: 'AI / LLM',
      technologies: ['GPT-4', 'Claude', 'Local LLMs', 'Vector Embeddings', 'Prompt Engineering'],
    },
    {
      category: 'Backend',
      technologies: ['FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
    },
    {
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    },
    {
      category: 'DevOps',
      technologies: ['Kubernetes', 'GitHub Actions', 'Monitoring', 'Logging', 'Alerts'],
    },
    {
      category: 'ML / Data',
      technologies: ['Feature Engineering', 'Backtesting', 'Time Series', 'MLOps'],
    },
  ]

  return (
    <Section id="technical-stack" tone="base">
      <Heading
        eyebrow="Technical Arsenal"
        title="Built with production-grade tools"
        description="Every technology chosen for reliability, scale, and measurable outcomes."
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {stacks.map((stack) => (
          <div
            key={stack.category}
            className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/50"
          >
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {stack.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
