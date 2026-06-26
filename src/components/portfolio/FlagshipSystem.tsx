import { FOUNDER_NARRATIVE } from '../../content/founderNarrative'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function FlagshipSystem() {
  const flagship = FOUNDER_NARRATIVE.flagship

  return (
    <Section id="flagship" tone="base">
      <div className="space-y-12">
        <Heading
          eyebrow={flagship.eyebrow}
          title={flagship.title}
          description={flagship.operatorSignal}
        />

        {/* Problem + System Overview */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900/50">
            <div className="space-y-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Problem
              </p>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                {flagship.problem}
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900/50">
            <div className="space-y-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                System Built
              </p>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                {flagship.systemBuilt}
              </p>
            </div>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900/50">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6">
            Architecture
          </p>
          <div className="space-y-4 text-sm">
            <div className="flex items-center justify-between px-4 py-3 rounded bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
              <span className="text-gray-700 dark:text-gray-300">Data Ingestion Layer</span>
              <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Streaming</span>
            </div>
            <div className="flex justify-center">
              <span className="text-gray-400">↓</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 rounded bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
              <span className="text-gray-700 dark:text-gray-300">Knowledge Graph</span>
              <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">Graph DB</span>
            </div>
            <div className="flex justify-center">
              <span className="text-gray-400">↓</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 rounded bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
              <span className="text-gray-700 dark:text-gray-300">Semantic Router + Multi-hop Reasoning</span>
              <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">LLM</span>
            </div>
            <div className="flex justify-center">
              <span className="text-gray-400">↓</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 rounded bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
              <span className="text-gray-700 dark:text-gray-300">Domain Agent Execution</span>
              <span className="text-xs px-2 py-1 rounded bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">Agentic</span>
            </div>
            <div className="flex justify-center">
              <span className="text-gray-400">↓</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 rounded bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
              <span className="text-gray-700 dark:text-gray-300">Feedback Loop & KB Optimization</span>
              <span className="text-xs px-2 py-1 rounded bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">Continuous</span>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {flagship.impact.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/50"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {metric.label}
              </p>
              <p className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>

        {/* What it replaces */}
        <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900/50">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6">
            What it replaces
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {flagship.replaces.map((item) => (
              <div key={item} className="flex items-center gap-3 px-4 py-3 rounded bg-gray-50 dark:bg-gray-800/50">
                <span className="text-gray-900 dark:text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900/50">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
            Outcome
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {flagship.closing}
          </p>
        </div>
      </div>
    </Section>
  )
}
