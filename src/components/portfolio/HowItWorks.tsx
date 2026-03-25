import { CASE_STUDY } from '../../content/portfolio'
import Section from './Section'

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title={CASE_STUDY.howItWorks.title}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/30 p-6 sm:p-8">
          <p className="text-sm font-semibold text-white">Architecture diagram</p>
          <div className="mt-4 overflow-hidden rounded-xl border border-neutral-800 bg-black/30 p-4">
            <pre className="text-xs leading-relaxed text-neutral-200 whitespace-pre-wrap">
{`flowchart TB
  subgraph Frontend[Portfolio Website (React + TS + Tailwind)]
    UI[Case-study sections + project cards]
  end

  subgraph Backend[Personal AI System (FastAPI)]
    API[REST API]
    SVC[Services: behavior, interventions, hiring]
  end

  subgraph DB[PostgreSQL]
    E[(Events)]
    I[(Interventions)]
    R[(Rubrics / Evaluations)]
  end

  subgraph LLM[Local LLM (Ollama)]
    M[Model: local inference]
  end

  UI -->|links / docs| API
  API --> SVC
  SVC --> E
  SVC --> I
  SVC --> R
  SVC -->|prompt + context| M
  M -->|structured output| SVC`}
            </pre>
          </div>
          <p className="mt-3 text-xs text-neutral-500">
            Mermaid source shown above (ready to paste into docs / README).
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/30 p-6 sm:p-8">
          <p className="text-sm font-semibold text-white">System design</p>
          <ul className="mt-4 space-y-3 text-neutral-300">
            {CASE_STUDY.howItWorks.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-500" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

