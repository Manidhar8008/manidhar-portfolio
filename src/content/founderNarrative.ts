import { PORTFOLIO } from './portfolio'
import { normalizeCopy } from '../utils/normalizeCopy'

export const FOUNDER_NARRATIVE = {
  hero: {
    eyebrow: `${PORTFOLIO.name} | Founder narrative system`,
    headline: normalizeCopy(PORTFOLIO.headline),
    subheadline: normalizeCopy(PORTFOLIO.subheadline),
    proofLine: normalizeCopy(PORTFOLIO.proofLine),
    replacementSignals: [
      'Manual operations replaced with systems that observe and act.',
      'Slow decision loops replaced with tighter automated responses.',
      'Reactive workflows replaced with measurable operating leverage.',
    ],
  },
  flagship: {
    eyebrow: 'Flagship System',
    title: 'AI Decision System for Micro-Mobility',
    problem:
      'Micro-mobility operations rely on delayed human decisions, leading to revenue leakage, poor fleet utilization, and slow response to demand changes.',
    systemBuilt:
      'Built a decision system that ingests real-time operational data, detects patterns in usage, churn, and demand, triggers automated interventions, and optimizes fleet distribution and operational actions.',
    replaces: [
      'manual fleet monitoring',
      'delayed decision-making',
      'reactive operations',
    ],
    closing:
      'faster response cycles, improved utilization, reduced dependency on human intervention, measurable operational efficiency',
    impact: [
      { label: 'Response cycles', value: 'Faster', detail: 'Operational decisions move sooner.' },
      { label: 'Utilization', value: 'Improved', detail: 'Fleet distribution aligns more closely to demand.' },
      { label: 'Intervention model', value: 'Automated', detail: 'Less dependency on manual monitoring and handoffs.' },
      { label: 'Efficiency', value: 'Measurable', detail: 'Operational efficiency becomes visible and trackable.' },
    ],
    operatorSignal:
      'Built to move operations from delayed human monitoring to system-led decisions and interventions.',
  },
  startup: {
    eyebrow: 'Startup | Janani.AI',
    title: 'Janani.AI - Personal Behavioral Operating System',
    summary:
      'Tracks user behavior, converts actions into signals, and applies a decision layer to generate real-time interventions.',
    systemBuilt:
      'behavior tracking, pattern recognition, intervention engine (LLM-based), feedback loop',
    replaces: [
      'passive habit tracking',
      'generic self-help systems',
      'non-actionable insights',
    ],
    impact: [
      { label: 'Outcome', value: 'Real-time behavior correction', detail: '' },
      { label: 'Outcome', value: 'Measurable consistency', detail: '' },
      { label: 'Outcome', value: 'Automated decision support', detail: '' },
    ],
    closing: 'real-time behavior correction, measurable consistency, automated decision support',
    operatorSignal:
      'Built as a system that turns behavior into signals, signals into decisions, and decisions into interventions.',
  },
  executionUnits: [
    {
      title: 'JAN.AI',
      context: 'Execution unit',
      detail:
        'An intelligent automation framework designed to orchestrate complex multi-platform workflows and execute autonomous decision-making.',
      replaces: 'Eliminates high-friction manual processes and repetitive operational overhead.',
      outcome:
        'Establishes a robust layer of system-level control, enabling seamless automated execution across diverse environments.',
    },
    {
      title: 'AIM1000: Autonomous Career Deployment Engine',
      context: 'Execution unit',
      detail:
        'An end-to-end execution system that transforms the job search into a measurable, automated data pipeline, converting unstructured market data into tailored application packages.',
      replaces: 'Unstructured goal setting and high-friction manual data entry.',
      outcome:
        'Consistent daily execution, highly personalized outreach at scale, and data-driven conversion tracking from application to interview.',
    },
  ],
  experience: [
    {
      title: 'Cognizant + Genpact',
      context: 'Enterprise execution layer',
      detail: normalizeCopy(PORTFOLIO.snapshot[0]),
      signal: '$5.5M O2C led | $2M recovered',
    },
    {
      title: 'Operations -> systems builder',
      context: 'Problem framing shift',
      detail:
        'I came from enterprise operations at Cognizant and Genpact - IoT analytics, financial modeling, NLP automation - and turned that problem-solving discipline into a full AI systems practice.',
      signal: 'IoT analytics | FP&A | NLP automation',
    },
    {
      title: 'mw.ai data systems',
      context: 'Founder-operated lab',
      detail: normalizeCopy(PORTFOLIO.snapshot[4]),
      signal: 'Behavior systems | automation infrastructure',
    },
  ],
  thinking: PORTFOLIO.playbook.map((item) => ({
    title: normalizeCopy(item.title),
    detail: normalizeCopy(item.detail),
  })),
  lab: {
    intro:
      'My personal AI lab and solopreneur entity. Systems are built, tested, and evolved here - not for demos, but for real deployment.',
    detail:
      'Current experiments: multi-agent behavioral ecosystems, social media automation pipelines, local LLM fine-tuning, and AI-driven SMB automation tools.',
    products: [
      { name: 'JANANI.AI', status: 'beta' },
      { name: 'ANI.AI', status: 'building' },
    ],
  },
  writing: {
    intro: 'Coming soon.',
    themes: [],
  },
  contact: {
    message: 'Let’s build systems that drive outcomes.',
    intro: 'If you’re working on systems where decisions matter, let’s talk.',
    links: PORTFOLIO.contact.links.map((link) => ({
      ...link,
      value: normalizeCopy(link.value),
    })),
  },
}
