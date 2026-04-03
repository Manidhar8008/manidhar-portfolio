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
  headline: 'I build AI systems that turn behavior into measurable outcomes.',
  subheadline: 'From tracking -> decision -> intervention loops.',
  proofLine: 'Built 6 systems | 8,400+ signals/month | 65% time saved in automated workflows',
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
        'AI-powered behavior tracking + media management system that transforms daily actions into measurable signals, then uses local LLM coaching and automation to reinforce discipline.',
      problem:
        'Personal discipline systems fail because they lack real-time feedback loops. Traditional habit trackers record what happened but do not intervene. Without immediate reinforcement tied to actual behavior, people do not course-correct. Media workflows also require manual orchestration across multiple platforms, burning 8+ hours per week.',
      systemBuilt:
        'Janani AI combines real-time behavior logging, constrained LLM coaching based on actual behavior patterns, and automation orchestration for content generation, scheduling, publishing, and analytics in a single feedback loop.',
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
        'Janani AI proves that AI systems become high-leverage when they log, analyze, and intervene in real time instead of just reporting after the fact.',
      githubUrl: 'https://github.com/Manidhar8008',
    },
    {
      id: 'algo-trading-ml',
      title: 'Algo Trading ML System',
      summary:
        'ML-driven trading strategy system with backtesting, execution automation, and real-time analytics for decision automation.',
      problem:
        'Most retail traders operate on intuition or delayed signals, which leads to inconsistent execution, large drawdowns, and no reliable decision logging. Without systematic validation and rapid retraining, alpha disappears fast.',
      systemBuilt:
        'Built an end-to-end trading decision system with feature engineering from long-range market data, backtesting across rolling windows, ensemble models with confidence scoring, automated execution logging, and a monitoring layer that triggers retraining when performance degrades.',
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
        'This system shows that structured logging, continuous evaluation, and decision automation outperform reactive human judgment in high-stakes environments.',
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
      detail:
        'Behavioral tracking infrastructure that converts actions into measurable signals, supports category-level logging, and creates the raw material for intervention loops.',
      signal: '8,400+ signals/month',
    },
    {
      title: 'AI Intervention Engine',
      detail:
        'A constrained coaching layer that turns logged behavior into real-time interventions, increasing relevance and reducing generic advice.',
      signal: '3.2 seconds to intervention',
    },
    {
      title: 'Automation Pipelines',
      detail:
        'Automation systems for content, operations, and SMB tooling that reduce manual orchestration and create repeatable execution leverage.',
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
    message: 'Let’s build systems that drive outcomes.',
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
