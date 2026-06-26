import { PORTFOLIO } from './portfolio'
import { normalizeCopy } from '../utils/normalizeCopy'

export const FOUNDER_NARRATIVE = {
  hero: {
    eyebrow: `${PORTFOLIO.name} | AI Systems Engineer`,
    headline: normalizeCopy(PORTFOLIO.headline),
    subheadline: normalizeCopy(PORTFOLIO.subheadline),
    proofLine: normalizeCopy(PORTFOLIO.proofLine),
    replacementSignals: [
      'Fragmented data silos replaced with unified knowledge graphs.',
      'Hallucinating LLMs replaced with grounded, memory-backed agents.',
      'Reactive systems replaced with autonomous decision engines.',
    ],
  },
  flagship: {
    eyebrow: 'Flagship System',
    title: 'Vasuki OS - Enterprise Memory & Agentic Workflows',
    problem:
      'Enterprises have siloed data (docs, databases, APIs) that LLMs cannot reason over. Autonomous agents hallucinate without grounding. Decision engines fail without organizational memory. Each data island requires manual integration.',
    systemBuilt:
      'Built a production knowledge graph engine with hierarchical semantic routing, multi-hop reasoning, and agentic feedback loops. Deployed for enterprise-scale autonomous workflows with streaming ingestion, real-time indexing, and deterministic retrieval.',
    replaces: [
      'manual data integration',
      'LLM hallucinations',
      'reactive decision flows',
    ],
    closing:
      'grounded autonomous agents, consistent organizational memory, measurable decision accuracy, enterprise-scale reasoning',
    impact: [
      { label: 'KB Operations', value: '12M+/month', detail: 'Semantic queries and entity reasoning at scale.' },
      { label: 'Decision Accuracy', value: '94%', detail: 'Agent decisions grounded in organizational context.' },
      { label: 'Query Latency', value: '240ms p95', detail: 'Sub-500ms from query to agent execution.' },
      { label: 'Feedback Loops', value: 'Continuous', detail: 'KB optimizes based on retrieval performance.' },
    ],
    operatorSignal:
      'Built to move enterprises from disconnected data to unified, reasoning-capable memory systems.',
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
