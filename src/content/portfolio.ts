export type CaseStudyMetric = {
  label: string
  value: string
  detail: string
}

export type CaseStudy = {
  id: 'janani-ai' | 'algo-trading-ml'
  title: string
  summary: string
  problem: string
  systemBuilt: string
  impact: CaseStudyMetric[]
  closing: string
  githubUrl: string
  demoUrl?: string
}

export type PlaybookItem = {
  title: string
  detail: string
}

export type SystemItem = {
  title: string
  detail: string
  signal: string
}

export type RoadmapItem = {
  title: string
  detail: string
}

export type ContactLink = {
  label: 'Email' | 'LinkedIn' | 'GitHub'
  value: string
  href: string
}

export type PortfolioData = {
  name: string
  headline: string
  subheadline: string
  proofLine: string
  proofStats: string[]
  snapshot: string[]
  caseStudies: CaseStudy[]
  playbook: PlaybookItem[]
  systems: SystemItem[]
  roadmap: RoadmapItem[]
  contact: {
    message: string
    links: ContactLink[]
  }
}

export const PORTFOLIO: PortfolioData = {
  name: 'Manidhar Pati',
  headline: 'I turn behavior into measurable systems.',
  subheadline: 'From tracking -> decision -> intervention loops.',
  proofLine: '6 systems built · 8,400+ signals/month · 65% time saved',
  proofStats: ['6 production systems', '8,400+ signals/month', '65% time saved'],
  snapshot: [
    'Enterprise ops at Cognizant & Genpact: led $5.5M O2C collections, recovered $2M, built automation + MIS dashboards with measurable P&L impact.',
    'Production AI: behavioral tracking + LLM coaching (Janani AI), ML trading with backtesting & live execution (1.84 Sharpe ratio).',
    'Recent projects: NLP resume analyzer (spaCy), crypto strategy with full backtesting, Power BI dashboards, social automation.',
    'Operationalized psychology + data skills -> full AI builder practice. No tutorials. Only systems that solve real problems.',
    'Running mw.ai: behavioral systems, automation infrastructure, SMB AI tools.',
  ],
  caseStudies: [
    {
      id: 'janani-ai',
      title: 'Janani AI',
      summary:
        'Behavior tracking + coaching system that turns daily actions into signals, then intervenes with local LLM coaching and automation.',
      problem:
        'Habit tools log history but never intervene. Media workflows were manual and slow, burning hours each week.',
      systemBuilt:
        'Real-time behavior logging + constrained LLM coaching + automation for content creation/scheduling inside one feedback loop.',
      impact: [
        {
          label: 'Intervention Delivery',
          value: '3.2 seconds',
          detail: 'Average latency from action detection to AI coaching prompt delivery.',
        },
        {
          label: 'Behavior Signal Processing',
          value: '8,400+ signals/month',
          detail: 'Tracked across 12 behavior categories with full audit logs.',
        },
        {
          label: 'Workflow Automation',
          value: '65% time saved',
          detail: 'End-to-end content generation + scheduling reduced from 8 hrs to 2.8 hrs/week.',
        },
      ],
      closing:
        'Proves that logging + analysis + real-time intervention beats post-hoc tracking.',
      githubUrl: 'https://github.com/Manidhar8008',
    },
    {
      id: 'algo-trading-ml',
      title: 'Algo Trading ML System',
      summary:
        'ML trading strategy with backtesting, automated execution, and real-time analytics.',
      problem:
        'Retail trading was intuition-driven, inconsistent, and unlogged—no fast validation or retraining.',
      systemBuilt:
        'End-to-end decision system: feature generation, rolling backtests, ensemble with confidence, automated execution + monitoring for retrains.',
      impact: [
        {
          label: 'Production Sharpe Ratio',
          value: '1.84',
          detail: 'Risk-adjusted returns significantly above buy-and-hold over an 18-month live run.',
        },
        {
          label: 'Max Drawdown Control',
          value: '8.3% vs 19.7%',
          detail: 'Algorithm-driven execution versus typical discretionary trading.',
        },
        {
          label: 'Decision Latency',
          value: '87 milliseconds',
          detail: 'From market data ingestion to trade execution.',
        },
      ],
      closing:
        'Shows that structured logging + continuous evaluation + automation outperform reactive trading.',
      githubUrl: 'https://github.com/Manidhar8008',
    },
  ],
  playbook: [
    {
      title: 'Rapid validation (<48 hrs)',
      detail:
        'I prototype with real data or real users quickly, pressure test the assumption, and avoid writing long specs before the signal exists.',
    },
    {
      title: 'Risk-first MVP',
      detail:
        'I start with the riskiest assumption, build the smallest possible system that can kill the idea, and only expand after evidence.',
    },
    {
      title: 'Measure -> iterate -> kill fast',
      detail:
        'If the feedback loop is weak, I tighten it. If the signal is weak, I cut it. The goal is better systems, not more activity.',
    },
    {
      title: 'Outcome over activity',
      detail:
        'The work is only useful if it moves a real metric, creates operating leverage, or gives the team a sharper decision surface.',
    },
  ],
  systems: [
    {
      title: 'Behavior Tracking System',
      detail: 'Converts actions into signals and audit logs so interventions have ground truth.',
      signal: '8,400+ signals/month',
    },
    {
      title: 'AI Intervention Engine',
      detail: 'Constrained coaching layer that turns logged behavior into real-time, relevant prompts.',
      signal: '3.2 seconds to intervention',
    },
    {
      title: 'Automation Pipelines',
      detail: 'Pipelines for content and ops that remove manual orchestration and keep cadence.',
      signal: '65% workflow time saved',
    },
  ],
  roadmap: [
    {
      title: 'Multi-agent systems',
      detail:
        'Expand from isolated tools into linked agents that share context across behavior, consumption, and finance decision loops.',
    },
    {
      title: 'Personal AI infrastructure',
      detail:
        'Build a durable operating layer for personal systems: tracking, memory, intervention, and execution support under one architecture.',
    },
    {
      title: 'Evaluation harness',
      detail:
        'Add scoring for interventions and leading indicators so systems can be measured, improved, and trusted over time.',
    },
  ],
  contact: {
    message: "Let's build systems that drive outcomes.",
    links: [
      {
        label: 'Email',
        value: 'patimanidhar23@gmail.com',
        href: 'mailto:patimanidhar23@gmail.com',
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/manidhar-pati-1723811b0',
        href: 'https://www.linkedin.com/in/manidhar-pati-1723811b0/',
      },
      {
        label: 'GitHub',
        value: 'github.com/Manidhar8008',
        href: 'https://github.com/Manidhar8008',
      },
    ],
  },
}
