export type CaseStudyMetric = {
  label: string
  value: string
  detail: string
}

export type CaseStudy = {
  id: 'vasuki-os' | 'janani-ai' | 'algo-trading-ml'
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
  headline: 'AI Systems Engineer · Knowledge Graphs · Agentic Workflows',
  subheadline: 'Building enterprise memory systems and autonomous decision engines.',
  proofLine: 'Vasuki OS (prod) · 12M+ KB operations/month · 94% decision accuracy',
  proofStats: ['Vasuki OS (production)', '12M+ KB operations/month', '94% decision accuracy'],
  snapshot: [
    'Enterprise ops at Cognizant & Genpact: led $5.5M O2C collections, recovered $2M, built automation + MIS dashboards with measurable P&L impact.',
    'Production AI: behavioral tracking + LLM coaching (Janani AI), ML trading with backtesting & live execution (1.84 Sharpe ratio).',
    'Recent projects: NLP resume analyzer (spaCy), crypto strategy with full backtesting, Power BI dashboards, social automation.',
    'Operationalized psychology + data skills -> full AI builder practice. No tutorials. Only systems that solve real problems.',
    'Running mw.ai: behavioral systems, automation infrastructure, SMB AI tools.',
  ],
  caseStudies: [
    {
      id: 'vasuki-os',
      title: 'Vasuki OS - Enterprise Memory System',
      summary:
        'Production knowledge graph engine with agentic retrieval, semantic routing, and autonomous decision execution. Powers enterprise-scale autonomous workflows.',
      problem:
        'Enterprises have fragmented data islands (docs, DBs, APIs). LLM-only systems hallucinate. Decision engines lack grounding in organizational memory. Autonomous agents fail without consistent context.',
      systemBuilt:
        'Hierarchical knowledge graph + multi-hop reasoning + semantic routing to domain agents + feedback loops for continuous KB optimization. Deployed with streaming ingestion, real-time indexing, and deterministic retrieval for 94%+ accuracy.',
      impact: [
        {
          label: 'Knowledge Graph Operations',
          value: '12M+/month',
          detail: 'Semantic queries, entity relationships, and multi-hop inference at enterprise scale.',
        },
        {
          label: 'Decision Accuracy',
          value: '94%',
          detail: 'Agent decisions grounded in organizational context, validated against knowledge base.',
        },
        {
          label: 'Query Latency',
          value: '240ms p95',
          detail: 'Sub-500ms response time from semantic query to routed agent execution.',
        },
      ],
      closing:
        'Demonstrates that enterprise autonomous systems require grounded memory, semantic reasoning, and feedback loops—not just prompt engineering.',
      githubUrl: 'https://github.com/Manidhar8008',
    },
    {
      id: 'janani-ai',
      title: 'Janani AI - Behavioral Operating System',
      summary:
        'Real-time behavior tracking + LLM coaching system. Converts actions into signals, then executes interventions. Deployed for personal workflow automation.',
      problem:
        'Habit tracking tools log history but never act. Workflow automation requires constant manual inputs. Coaching is asynchronous and disconnected from behavior.',
      systemBuilt:
        'Behavior event stream + semantic signal processing + constrained LLM coaching + automation engine in real-time feedback loop. Built with local LLMs for privacy.',
      impact: [
        {
          label: 'Signal Processing',
          value: '8,400+/month',
          detail: 'Across 12 behavior categories with cryptographically signed audit logs.',
        },
        {
          label: 'Intervention Latency',
          value: '3.2 seconds',
          detail: 'From behavior detection to AI coaching delivery via local inference.',
        },
        {
          label: 'Workflow Automation',
          value: '65% time saved',
          detail: 'End-to-end content + scheduling: 8 hrs/week → 2.8 hrs/week.',
        },
      ],
      closing:
        'Proves that real-time behavior systems with tight feedback loops outperform post-hoc analysis and generic coaching.',
      githubUrl: 'https://github.com/Manidhar8008',
    },
    {
      id: 'algo-trading-ml',
      title: 'ML Trading System - Autonomous Execution',
      summary:
        'Production trading engine with backtesting, feature engineering, ensemble predictions, and automated execution with monitoring.',
      problem:
        'Retail trading was discretionary and unlogged. No fast validation cycles. No continuous retraining. No systematic risk control.',
      systemBuilt:
        'Rolling backtests + feature generation + ensemble with confidence scoring + automated execution + retraining signals + live performance monitoring.',
      impact: [
        {
          label: 'Sharpe Ratio',
          value: '1.84',
          detail: 'Consistent risk-adjusted returns across 18-month production run.',
        },
        {
          label: 'Max Drawdown',
          value: '8.3% vs 19.7%',
          detail: 'Algorithm-controlled risk vs typical discretionary trading.',
        },
        {
          label: 'Decision Latency',
          value: '87ms',
          detail: 'From market data ingestion to live trade execution.',
        },
      ],
      closing:
        'Shows that systematic, monitored execution with continuous validation beats reactive decision-making.',
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
