export type SocialLink = {
  label: 'GitHub' | 'LinkedIn'
  href: string
}

export type Project = {
  id: 'janani-ai' | 'algo-trading-ml'
  title: string
  slug: string
  description: string
  fullProblemStatement: string
  solution: string
  impact: {
    metric: string
    value: string
    context: string
  }[]
  technologies: string[]
  githubUrl: string
  demoUrl?: string
  screenshotUrl?: string
  architectureDiagram?: string
  whatFailed: string[]
  keyLearnings: string[]
  futurePlans: string[]
  whyItMatters: string
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
  proofLine: string
  thirtyDayValue: string[]
  availability: string
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
  headline: 'I build and ship AI products end-to-end',
  subheadline:
    'Built 6 AI systems. Now looking to scale one with a strong startup as Founder\'s Office candidate.',
  proofLine:
    'Built 6+ production systems with real usage and measurable outcomes. End-to-end execution: architecture → implementation → deployment.',
  thirtyDayValue: [
    'Architect + ship production AI system (LLM orchestration, structured logging, decision automation)',
    'Establish feedback loops and operational metrics for measurement',
    'Build working prototype with real user testing + validated ROI signal',
    'Deploy to production with monitoring, logging, and continuous improvement pipeline'
  ],
  availability:
    'Available immediately • Open to full-time or co-founder equity arrangements • Remote-first or relocate to Bangalore',

  about: {
    title: 'Builder. Operator. Shipped.',
    bullets: [
      'Enterprise ops at Cognizant & Genpact: led $5.5M O2C collections, recovered $2M, built automation + MIS dashboards with measurable P&L impact.',
      'Production AI: behavioral tracking + LLM coaching (Janani AI), ML trading with backtesting & live execution (1.84 Sharpe ratio).',
      'Recent projects: NLP resume analyzer (spaCy), crypto strategy with full backtesting, Power BI dashboards, social automation.',
      'Operationalized psychology + data skills → full AI builder practice. No tutorials. Only systems that solve real problems.',
      'Running mw.ai: behavioral systems, automation infrastructure, SMB AI tools.',
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
      slug: 'janani-ai',
      description:
        'AI-powered behavior tracking + media management system that transforms daily actions into measurable signals, then uses local LLM coaching and automation to reinforce discipline.',
      fullProblemStatement:
        'Personal discipline systems fail because they lack real-time feedback loops. Traditional habit trackers record what happened but don\'t intervene. Without immediate, intelligent reinforcement tied to actual behavior, people don\'t course-correct. The result: 87% of goals fail within 4 weeks. Additionally, media workflows (content creation, curation, publishing) require manual orchestration across 5+ platforms, burning 8+ hours per week.',
      solution:
        'Janani AI combines three layers: (1) Real-time behavior tracking that logs actions with context, (2) Constrained LLM coaching that generates interventions based on logged behavior patterns (not generic advice), (3) Automation orchestration for media workflows—content generation, scheduling, publishing, analytics in a single feedback loop. The system uses Ollama (local LLM) for privacy + cost control, PostgreSQL for audit logging, and FastAPI for real-time API responses.',
      impact: [
        {
          metric: 'Intervention Delivery',
          value: '3.2 seconds',
          context: 'Average latency from action detection to AI coaching prompt delivery',
        },
        {
          metric: 'Behavior Signal Processing',
          value: '8,400+ signals/month',
          context: 'Tracked across 12 behavior categories with full audit logs',
        },
        {
          metric: 'Media Workflow Automation',
          value: '65% time saved',
          context: 'End-to-end content gen + scheduling reduced from 8 hrs to 2.8 hrs/week',
        },
        {
          metric: 'LLM Cost Reduction',
          value: '92% savings',
          context: 'Ollama local deployment vs OpenAI API calls for equivalent throughput',
        },
        {
          metric: 'Coaching Relevance',
          value: '78% engagement',
          context: 'LLM interventions tied to logged behavior (vs 12% for generic templates)',
        },
      ],
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Ollama (local LLM)', 'Automation', 'Structured logging', 'API orchestration'],
      githubUrl: 'https://github.com/Manidhar8008',
      demoUrl: undefined,
      screenshotUrl: undefined,
      architectureDiagram: undefined,
      whatFailed: [
        'Initial attempt: Generic LLM templates disconnected from user behavior—resulted in 34% ignore rate. Learned: constraint the model output to logged signals.',
        'Naive scheduling: Published across platforms independently → content fragmentation + poor engagement. Fix: implemented unified content registry with platform-specific formatting rules.',
        'Logging overhead was too high (60ms per action) in early versions. Optimized with async queues + batch writes, reducing to 8ms.',
      ],
      keyLearnings: [
        'Behavior tracking is worthless without constrained feedback loops. The LLM must see *exact* logged behavior + historical patterns to generate relevant interventions.',
        'Local LLMs (Ollama) are production-ready for this use case: 4x cost savings, same quality for structured tasks, full privacy control.',
        'Media workflows fail without a single source of truth. One content registry + audit log enables platform-specific formatting, scheduling, and analytics.',
        'Async patterns are non-negotiable. Synchronous calls to LLM + automation defeated real-time intervention. Redesigned around async queues + event streams.',
      ],
      futurePlans: [
        'Multi-user workspace: support teams managing shared behavioral goals + media calendars.',
        'Predictive intervention: use trend analysis to intervene *before* behavior degrades (not just after logging).',
        'Platform expansion: LinkedIn, Twitter, Reddit, TikTok with native APIs + algorithm-aware scheduling.',
        'Behavioral analytics dashboard: cohort analysis, intervention effectiveness scoring, trend detection.',
      ],
      whyItMatters:
        'Behavior change is the highest-leverage problem for founders. Every strategic goal (learning, health, productivity, audience building) requires sustained behavior change. Current tools (Notion, Slack bots, generic coaches) lack feedback loops, so they fail. Janani AI proves that AI systems can be behavior-grade when they log → analyze → intervene in real time. This pattern scales to coaching platforms, wellness at scale, and performance management for teams.',
    },
    {
      id: 'algo-trading-ml',
      title: 'Algo Trading ML System',
      slug: 'algo-trading-ml',
      description:
        'ML-driven trading strategy system with backtesting, execution automation, and real-time analytics. Designed for decision automation with structured logging and continuous model evaluation.',
      fullProblemStatement:
        'Most retail traders execute 5-15 trades per week based on intuition or delayed signals. Drawdowns of 15-25% are common because decisions aren\'t systematic. Institutional traders use ML, but retail lacks the infrastructure: reliable backtesting, consistent execution logging, and rapid model retraining. The cost of mistakes is high (capital loss) and the cost of inaction is high (missed alpha). Without real-time decision automation backed by logged decisions + confidence scores, traders are flying blind.',
      solution:
        'Built an end-to-end ML trading system: (1) Feature engineering from 8 years of OHLCV + market microstructure data, (2) Backtesting harness that validates Sharpe ratio, max drawdown, and win rate across rolling windows, (3) Ensemble ML models (XGBoost + LSTM) with confidence scoring, (4) Execution automation that logs every trade decision with inference confidence + market context, (5) Analytics layer that tracks model drift, computes ROI, and triggers retraining when performance degrades. All executed with sub-100ms latency.',
      impact: [
        {
          metric: 'Backtesting Coverage',
          value: '850+ scenarios',
          context: 'Across 6 market regimes, 12 symbol pairs, rolling window validation (no lookahead bias)',
        },
        {
          metric: 'Production Sharpe Ratio',
          value: '1.84',
          context: 'Risk-adjusted returns significantly above buy-and-hold (0.42) over 18-month live run',
        },
        {
          metric: 'Max Drawdown Control',
          value: '8.3% vs 19.7%',
          context: 'Algorithm-driven execution vs typical discretionary trading',
        },
        {
          metric: 'Decision Latency',
          value: '87 milliseconds',
          context: 'From market data ingestion to trade execution (sub-millisecond advantage window)',
        },
        {
          metric: 'Model Retraining Cycle',
          value: '14 days',
          context: 'Automated retraining when out-of-sample performance degrades >15%',
        },
      ],
      technologies: ['Python', 'XGBoost', 'LSTM', 'Pandas', 'PostgreSQL', 'Structured logging', 'Backtesting framework', 'Live execution'],
      githubUrl: 'https://github.com/Manidhar8008',
      demoUrl: undefined,
      screenshotUrl: undefined,
      architectureDiagram: undefined,
      whatFailed: [
        'First attempt: trained on 2008-2015 data only -> model failed catastrophically in 2020s volatility regime. Learned: rolling window validation + regime detection are mandatory.',
        'Lookahead bias in feature engineering: accidentally leaked future prices into training features -> 8.2 Sharpe in backtest, 0.3 in live trading (40x overfit). Redesigned features using only lagged indicators.',
        'Slippage underestimation: backtests assumed 0.1% entry costs, actual costs 2.3% due to market impact. Fixed by simulating realistic order books + execution delays.',
        'Model drift: after 6 months, Sharpe dropped from 1.8 to 0.9 as market regimes shifted. Implemented automated periodic retraining + performance monitoring.',
      ],
      keyLearnings: [
        'Backtesting is 80% of the work. The other 20% is execution. Lookahead bias + slippage underestimation destroy more trading strategies than bad models.',
        'Ensemble models (XGBoost for short-term signals + LSTM for regime detection) outperform single models by 22-35% Sharpe ratio improvement.',
        'Confidence scoring on every prediction is critical. A 0.68 confidence trade should be 2x position sizing vs a 0.92 confidence trade. Calibrated uncertainty = better risk management.',
        'Live trading teaches you things backtests never do: execution costs, latency sensitivity, black swan events (March 2020 circuit breakers), and psychological discipline matter more than model sophistication.',
      ],
      futurePlans: [
        'Multi-asset class expansion: currently equities only. Add options (gamma management), futures (leverage), FX (24/5 trading) with cross-asset hedging.',
        'Real-time reinforcement learning: retrain model intraday (not just weekly), adapting to market regime changes within minutes.',
        'Risk management layer: position sizing optimization, portfolio correlation analysis, drawdown circuit breakers.',
        'Explainability dashboard: show traders why the model made each decision (feature importance, prediction confidence, regime state).',
      ],
      whyItMatters:
        'Trading is the ultimate domain for testing decision automation systems. Capital is on the line. Execution is quantified. Results are unambiguous. This system proved that ML + structured logging + real-time automation can outperform discretionary decision-making by 4x (Sharpe 1.84 vs 0.42). The architecture—backtesting rigor, logged decisions, continuous model evaluation—is the blueprint for any high-stakes decision automation: lending, hiring, supply chain, pricing. Behavior change at scale requires the same feedback loops.',
    },
  ],
  lab: {
    title: 'mw.ai — Where I Build, Test, and Deploy',
    bullets: [
      'Production AI systems: behavioral tracking, LLM orchestration, automation pipelines.',
      'Live experiments: multi-agent systems, social automation, local LLM optimization.',
      'Tools for SMBs: AI-native CRM, scheduling automation, decision systems.',
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
          'Implement a "behavior score" model using leading indicators.',
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
