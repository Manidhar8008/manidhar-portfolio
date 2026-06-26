import { PORTFOLIO } from '../../content/portfolio'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function CaseStudiesSection() {
  return (
    <Section id="case-studies" tone="base">
      <Heading
        eyebrow="Case Studies"
        title="Production systems with metrics"
        description="Evidence-based outcomes, not marketing claims."
      />

      <div className="mt-12 space-y-6">
        {PORTFOLIO.caseStudies.map((study) => (
          <article
            key={study.id}
            className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900/50"
          >
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{study.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{study.summary}</p>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    Problem
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{study.problem}</p>
                </div>

                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    System Built
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{study.systemBuilt}</p>
                </div>

                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                    Impact Metrics
                  </p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {study.impact.map((metric) => (
                      <div key={metric.label} className="rounded bg-gray-50 dark:bg-gray-800/50 p-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white mt-1">{metric.value}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{metric.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{study.closing}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
