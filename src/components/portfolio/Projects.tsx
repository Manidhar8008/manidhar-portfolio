import { useMemo, useState } from 'react'
import { PROJECTS } from '../../content/portfolio'
import Section from './Section'

export default function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const activeProject = useMemo(
    () => PROJECTS.find((p) => p.id === activeId) ?? null,
    [activeId],
  )

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Proof of work: systems that change behavior"
    >
        <div className="grid gap-6">
          {PROJECTS.map((project) => {
            const isActive = project.id === activeId

            return (
              <article
                key={project.id}
                className={[
                  'rounded-2xl border bg-neutral-950/30 p-6 transition-colors',
                  'border-neutral-800 hover:border-neutral-600',
                  isActive ? 'border-neutral-600' : '',
                ].join(' ')}
                aria-label={project.title}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-400">
                        {project.oneLiner}
                      </p>
                      <p className="mt-2 text-neutral-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <button
                        type="button"
                        onClick={() => setActiveId(isActive ? null : project.id)}
                        className={[
                          'rounded-lg px-4 py-2 text-sm font-semibold',
                          'transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
                          isActive
                            ? 'bg-neutral-200 text-black hover:bg-neutral-200/90'
                            : 'bg-white/10 text-white hover:bg-white/15 border border-white/10',
                        ].join(' ')}
                      >
                        View Project
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-neutral-800 bg-black/40 px-3 py-1 text-xs text-neutral-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-1">
                      {project.links.map((l) => (
                        <a
                          key={`${project.id}-${l.label}`}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-semibold text-white/90 underline decoration-white/20 underline-offset-4 hover:decoration-white/50"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {isActive && (
                  <div className="mt-5 border-t border-neutral-800 pt-4">
                    <p className="text-sm text-neutral-200 font-medium">
                      System highlights
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                      {project.bullets.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-500" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs text-neutral-500">
                      Click “View Project” again to collapse.
                    </p>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        <div className="mt-8 text-center text-sm text-neutral-500">
          {activeProject ? (
            <span>
              Currently showing:{' '}
              <span className="text-neutral-300">{activeProject.title}</span>
            </span>
          ) : (
            <span>Select a project to see highlights.</span>
          )}
        </div>
    </Section>
  )
}

