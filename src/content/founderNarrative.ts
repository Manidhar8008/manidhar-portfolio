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
    title: 'Vasuki OS - Personal Intelligence Operating System',
    problem:
      'Useful personal context is fragmented across files, apps, devices and projects. Most assistants only see the current prompt and forget the history that should shape the next action.',
    systemBuilt:
      'A local-first personal intelligence architecture for ingestion, metadata, entities, relationships, retrieval, memory and agent execution. The memory layer is designed to become the durable source of context across tools and workflows.',
    replaces: [
      'scattered personal context',
      'repeated manual lookup',
      'tool-by-tool workflows',
    ],
    closing:
      'Vasuki is the clearest expression of how I think: collect context, make it retrievable, reason over it, then turn the result into action.',
    impact: [
      { label: 'Memory model', value: 'Graph + vector', detail: 'Structured entities and semantic retrieval working together.' },
      { label: 'Design constraint', value: 'Local-first', detail: 'Privacy, user control and offline capability are first-class constraints.' },
      { label: 'Core loop', value: 'Memory → action', detail: 'Context is meant to feed useful execution, not sit in storage.' },
      { label: 'System shape', value: 'Ingestion → agents', detail: 'The architecture connects collection, retrieval, reasoning and execution.' },
    ],
    operatorSignal:
      'The flagship project behind my current work: a personal operating layer that turns accumulated context into usable intelligence.',
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
      title: 'Jan.AI',
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
