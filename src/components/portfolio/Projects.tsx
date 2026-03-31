import { PORTFOLIO } from '../../content/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">03 / Projects</span>
          <h2 className="section-title">
            Proof of <em>execution</em>
          </h2>
        </div>

        <div className="grid gap-12 md:gap-16 mt-16 md:mt-20">
          {PORTFOLIO.projects.map((project, idx) => (
            <article
              key={project.id}
              className="border border-white/8 rounded-xl p-6 md:p-10 bg-gradient-to-br from-[rgba(0,245,196,0.03)] to-[rgba(124,92,252,0.02)] hover:border-white/12 transition-all duration-300"
            >
              {/* HEADER */}
              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-xs font-bold tracking-wider text-accent">
                    CASE STUDY / {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs tracking-wider text-muted">PRODUCTION</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-text">
                  {project.title}
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-muted max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* PROBLEM STATEMENT - COLLAPSIBLE */}
              <details className="mb-6 group">
                <summary className="flex items-center gap-2 cursor-pointer text-sm font-semibold tracking-wide text-accent select-none hover:text-accent/80 transition-colors">
                  <span className="inline-block transition-transform duration-200">▶</span>
                  THE PROBLEM
                </summary>
                <div className="mt-4 pl-6 border-l-2 border-accent/30">
                  <p className="text-sm leading-relaxed text-text/85">
                    {project.fullProblemStatement}
                  </p>
                </div>
              </details>

              {/* SOLUTION + TECH */}
              <div className="mb-8">
                <h3 className="text-xs font-bold tracking-wider text-accent mb-3">SOLUTION</h3>
                <p className="text-sm leading-relaxed text-text/85 mb-4">
                  {project.solution}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 bg-accent/8 border border-accent/20 rounded text-accent font-medium hover:bg-accent/12 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* IMPACT METRICS */}
              <div className="mb-8">
                <h3 className="text-xs font-bold tracking-wider text-accent mb-4">IMPACT</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-auto gap-3 md:gap-4">
                  {project.impact.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 bg-accent/5 border border-accent/15 rounded-lg hover:border-accent/30 hover:bg-accent/8 transition-all duration-200"
                    >
                      <div className="text-xs font-bold text-accent tracking-wider mb-2">
                        {item.metric}
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-text mb-1">
                        {item.value}
                      </div>
                      <div className="text-xs text-muted leading-snug">
                        {item.context}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WHAT FAILED - COLLAPSIBLE */}
              <details className="mb-6 group">
                <summary className="flex items-center gap-2 cursor-pointer text-sm font-semibold tracking-wide text-accent3 select-none hover:text-accent3/80 transition-colors">
                  <span className="inline-block transition-transform duration-200">▶</span>
                  WHAT FAILED & LESSONS
                </summary>
                <div className="mt-4 pl-6 border-l-2 border-accent3/30">
                  <ul className="text-sm leading-relaxed text-text/85 space-y-2 list-inside list-disc">
                    {project.whatFailed.map((failure, i) => (
                      <li key={i}>{failure}</li>
                    ))}
                  </ul>
                </div>
              </details>

              {/* KEY LEARNINGS - COLLAPSIBLE */}
              <details className="mb-6 group">
                <summary className="flex items-center gap-2 cursor-pointer text-sm font-semibold tracking-wide text-accent2 select-none hover:text-accent2/80 transition-colors">
                  <span className="inline-block transition-transform duration-200">▶</span>
                  KEY LEARNINGS
                </summary>
                <div className="mt-4 pl-6 border-l-2 border-accent2/30">
                  <ul className="text-sm leading-relaxed text-text/85 space-y-2 list-inside list-disc">
                    {project.keyLearnings.map((learning, i) => (
                      <li key={i}>{learning}</li>
                    ))}
                  </ul>
                </div>
              </details>

              {/* FUTURE PLANS */}
              <div className="mb-8">
                <h3 className="text-xs font-bold tracking-wider text-accent mb-3">FUTURE PLANS</h3>
                <ul className="text-sm leading-relaxed text-text/85 space-y-1.5 list-inside list-disc pl-1">
                  {project.futurePlans.map((plan, i) => (
                    <li key={i}>{plan}</li>
                  ))}
                </ul>
              </div>

              {/* WHY IT MATTERS */}
              <div className="mb-8 pt-6 border-t border-white/8">
                <h3 className="text-xs font-bold tracking-wider text-accent mb-3">WHY IT MATTERS</h3>
                <p className="text-sm leading-relaxed text-text/85 italic">
                  {project.whyItMatters}
                </p>
              </div>

              {/* MEDIA ASSETS */}
              {(project.screenshotUrl || project.architectureDiagram) && (
                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.screenshotUrl && (
                    <div className="rounded-lg overflow-hidden border border-white/8 bg-black/30 hover:border-white/12 transition-colors">
                      <img
                        src={project.screenshotUrl}
                        alt={`${project.title} screenshot`}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  {project.architectureDiagram && (
                    <div className="rounded-lg overflow-hidden border border-white/8 bg-black/30 hover:border-white/12 transition-colors">
                      <img
                        src={project.architectureDiagram}
                        alt={`${project.title} architecture diagram`}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-accent bg-accent/10 border border-accent/30 rounded-lg hover:bg-accent/20 hover:border-accent/50 transition-all duration-200"
                >
                  View on GitHub →
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-accent2 bg-accent2/10 border border-accent2/30 rounded-lg hover:bg-accent2/20 hover:border-accent2/50 transition-all duration-200"
                  >
                    View Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        details summary span { transition: transform 0.2s ease-out; }
        details[open] > summary span { transform: rotate(90deg); }
      `}</style>
    </section>
  )
}

