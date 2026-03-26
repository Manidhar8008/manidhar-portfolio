export type SocialLink = {
  label: 'GitHub' | 'LinkedIn'
  href: string
}

export type Project = {
  id: 'janani-ai' | 'algo-trading-ml'
  title: string
  description: string
  focus: string
  techStack: string[]
  features: string[]
  githubUrl: string
  githubLabel?: string
  demoUrl?: string
  videoUrl?: string
}

export type RoadmapItem = {
  phase: 'Now' | 'Next' | 'Later'
  title: string
  bullets: string[]
}

export type PortfolioData = {
  name: string
  headline: string
  subheadline: string
  about: {
    title: string
    bullets: string[]
  }
  skills: {
    eyebrow: string
    items: string[]
    principles: string[]
  }
  projects: Project[]
  lab: {
    title: string
    bullets: string[]
  }
  roadmap: {
    title: string
    items: RoadmapItem[]
  }
  contact: {
    cta: string
    links: SocialLink[]
  }
}

const GITHUB_PROFILE_URL = 'https://github.com/Manidhar8008'

export const PORTFOLIO: PortfolioData = {
  name: 'Manidhar',
  headline: 'I build AI systems that fix human behavior',
  subheadline:
    'Using AI, psychology, and automation to turn behavior into measurable signals, then improve decision-making and follow-through through feedback loops.',
  about: {
    title: 'AI systems with behavior-grade intent',
    bullets: [
      'Personal discipline AI: behavior tracking + reinforcement loops (not generic coaching).',
      'Decision automation: reduce friction with logs, policies, and constrained LLM outputs.',
      'A builder mindset: prove the system end-to-end (data -> policy -> intervention -> evaluation).',
    ],
  },
  skills: {
    eyebrow: 'Skills',
    items: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Ollama (local LLM)',
      'LLM orchestration + structured outputs',
      'Automation engineering',
      'SQL + data analysis',
      'System design for feedback loops',
    ],
    principles: [
      'Constrained LLM outputs tied to logged behavior.',
      'Operational logging that enables iteration and debugging.',
      'Data-to-policy-to-intervention pipelines designed for reliability.',
    ],
  },
  projects: [
    {
      id: 'janani-ai',
      title: 'Janani AI',
      description:
        'AI-powered behavior + media management system that turns actions into signals, then uses automation and local LLM coaching to reinforce discipline.',
      focus: 'Personal discipline + behavioral AI',
      techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Ollama', 'Automation', 'Tracking'],
      features: [
        'Behavior tracking that converts daily actions into measurable signals.',
        'Automation layer for interventions and media workflow support.',
        'LLM-driven coaching constrained by logged behavior (feedback-loop design).',
      ],
      githubUrl: GITHUB_PROFILE_URL,
      githubLabel: 'GitHub (profile)',
    },
    {
      id: 'algo-trading-ml',
      title: 'Algo Trading ML System',
      description:
        'ML-based trading strategy system with backtesting and automation, designed for decision automation with logging and analytics.',
      focus: 'Decision automation + analytics',
      techStack: ['Python', 'ML', 'Backtesting', 'Automation', 'Data analysis', 'Logging'],
      features: [
        'Backtesting pipeline designed to evaluate strategies before automation.',
        'Execution automation with structured logging for audit and iteration.',
        'Analytics layer to support threshold tuning and better decision quality.',
      ],
      githubUrl: GITHUB_PROFILE_URL,
      githubLabel: 'GitHub (profile)',
    },
  ],
  lab: {
    title: 'AI Lab: behavioral systems research',
    bullets: [
      'Behavioral tracking systems: translate actions into signals that can be improved.',
      'Agentic AI experiments: test loops where the model learns from what happens next.',
      'Automation tools: deploy interventions that reduce friction and increase follow-through.',
    ],
  },
  roadmap: {
    title: 'Roadmap',
    items: [
      {
        phase: 'Now',
        title: 'Recruiter-grade portfolio product',
        bullets: [
          'Structure the site as proof of work (problem -> system -> architecture -> implementation).',
          'Add missing project artifacts (repo-specific links, demos/videos) as you provide them.',
        ],
      },
      {
        phase: 'Next',
        title: 'Evaluation harness + behavioral scoring',
        bullets: [
          'Add a behavior evaluation harness that scores interventions by subsequent actions.',
          'Implement a “behavior score” model using leading indicators.',
        ],
      },
      {
        phase: 'Later',
        title: 'Deployment hardening',
        bullets: [
          'Run background workers for scheduled interventions.',
          'Add HTTPS deployment and monitoring for production reliability.',
        ],
      },
    ],
  },
  contact: {
    cta: "Let's build something impactful",
    links: [
      { label: 'GitHub', href: GITHUB_PROFILE_URL },
      // LinkedIn not provided yet. Add it when you share your URL.
    ],
  },
}


