export type ProjectLink = {
  label: 'GitHub' | 'Demo' | 'Video'
  href: string
}

export type PortfolioProject = {
  id: 'discipline' | 'hiring-assistant' | 'analytics'
  title: string
  oneLiner: string
  description: string
  tech: string[]
  links: ProjectLink[]
  bullets: string[]
}

export type CaseStudy = {
  positioning: string
  problem: {
    title: string
    bullets: string[]
  }
  solution: {
    title: string
    bullets: string[]
  }
  howItWorks: {
    title: string
    bullets: string[]
  }
  results: {
    title: string
    bullets: string[]
  }
  future: {
    title: string
    bullets: string[]
  }
}

export const CASE_STUDY: CaseStudy = {
  positioning:
    'I build AI systems that fix human behavior using AI, psychology, and automation.',
  problem: {
    title: 'The problem I’m solving',
    bullets: [
      'Most “productivity” systems fail because they rely on willpower instead of feedback loops.',
      'People don’t need more motivation—they need friction removed and consequences made visible.',
      'Execution breaks when tracking is manual, insights are delayed, and reinforcement is inconsistent.',
    ],
  },
  solution: {
    title: 'The solution: a Personal AI System (not a chatbot)',
    bullets: [
      'A discipline engine that converts daily behavior into signals, then applies reinforcement loops.',
      'An AI Hiring Assistant that standardizes evaluation and reduces noisy interviews.',
      'Analytics projects that prove I can turn raw data into decisions (SQL + Python + dashboards).',
    ],
  },
  howItWorks: {
    title: 'How it works (system design)',
    bullets: [
      'Event capture → store in PostgreSQL as atomic actions (what happened, when, context).',
      'Policy layer → rules + prompts that choose the right intervention (nudge, plan, constraint).',
      'LLM layer (Ollama local) → reasoning + coaching, but constrained by logged behavior.',
      'Feedback loop → interventions are evaluated by subsequent actions, not vibes.',
    ],
  },
  results: {
    title: 'Results (current)',
    bullets: [
      'MVP architecture defined as a multi-service system: API + DB + local LLM + web frontend.',
      'Portfolio is structured as a case-study product page—proof-first, not resume-first.',
      'Next measurable outputs are designed in (discipline adherence, interview scoring consistency, analytics latency).',
    ],
  },
  future: {
    title: 'Future improvements',
    bullets: [
      'Add a “Behavior Score” model: leading indicators + drift tracking over time.',
      'Introduce an evaluation harness for prompts/tools (regression tests for interventions).',
      'Add role-specific hiring rubrics + calibration datasets for consistent candidate scoring.',
      'Deploy backend on a small VM with HTTPS + background workers for scheduled interventions.',
    ],
  },
}

export const PROJECTS: PortfolioProject[] = [
  {
    id: 'discipline',
    title: 'Personal AI Discipline System',
    oneLiner: 'Agentic discipline engine built on feedback loops.',
    description:
      'An agentic AI system that tracks behavior, reinforces habits, and improves discipline using feedback loops.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Ollama'],
    links: [],
    bullets: [
      'Behavior tracking that turns daily actions into measurable signals.',
      'Feedback loops that adapt reinforcement based on what actually happened.',
      'Interventions designed to reduce friction and increase follow-through.',
    ],
  },
  {
    id: 'hiring-assistant',
    title: 'AI Hiring Assistant',
    oneLiner: 'Interview simulation + dynamic evaluation.',
    description:
      'LLM-powered chatbot that simulates interviews and evaluates candidate responses dynamically.',
    tech: ['Python', 'LLM APIs', 'Streamlit'],
    links: [],
    bullets: [
      'Adaptive interview flow based on candidate responses.',
      'Dynamic evaluation aligned to the target role’s rubric.',
      'A fast UI for iteration and better interviewer consistency.',
    ],
  },
  {
    id: 'analytics',
    title: 'Data Analytics Systems',
    oneLiner: 'SQL + Python analytics that drive decisions.',
    description:
      'Data analytics projects focused on turning operational data into reliable dashboards, insights, and automation triggers.',
    tech: ['Python', 'SQL', 'Dashboards', 'Automation'],
    links: [],
    bullets: [
      'Clean metrics definitions and consistent transformations.',
      'Dashboards that surface leading indicators (not vanity metrics).',
      'Automation hooks that turn insights into action.',
    ],
  },
]

