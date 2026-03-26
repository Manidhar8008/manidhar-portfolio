import { useEffect } from 'react'

/**
 * Mirrors the behavior from the original `design.html`:
 * - smooth scrolling for anchor links
 * - intersection observer to highlight the active nav link
 * - scroll-triggered fade-in for cards
 */
export default function PortfolioEffects() {
  useEffect(() => {
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]')) as HTMLAnchorElement[]

    const onClick = (a: HTMLAnchorElement) => (e: Event) => {
      const href = a.getAttribute('href')
      if (!href) return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      ;(target as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const handlers: Array<() => void> = []
    anchors.forEach((a) => {
      const h = onClick(a)
      handlers.push(() => a.removeEventListener('click', h))
      a.addEventListener('click', h)
    })

    const sections = Array.from(document.querySelectorAll('section[id]'))
    const navLinks = Array.from(document.querySelectorAll('.nav-links a'))

    const navObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          navLinks.forEach((l) => {
            ;(l as HTMLElement).style.color = ''
          })

          const active = document.querySelector(
            `.nav-links a[href="#${(entry.target as HTMLElement).id}"]`,
          ) as HTMLAnchorElement | null

          if (active) active.style.color = 'var(--accent)'
        })
      },
      { threshold: 0.4 },
    )
    sections.forEach((s) => navObs.observe(s))

    const cards = Array.from(
      document.querySelectorAll(
        '.project-card, .skill-card, .identity-item, .roadmap-item',
      ),
    ) as HTMLElement[]

    cards.forEach((card) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(20px)'
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    })

    const cardObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          cardObs.unobserve(el)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )
    cards.forEach((card) => cardObs.observe(card))

    return () => {
      handlers.forEach((dispose) => dispose())
      navObs.disconnect()
      cardObs.disconnect()
    }
  }, [])

  return null
}

