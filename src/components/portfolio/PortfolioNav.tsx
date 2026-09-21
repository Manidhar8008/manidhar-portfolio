import { useEffect, useState } from 'react'
import { PORTFOLIO } from '../../content/portfolio'
import Container from './ui/Container'

const NAV_LINKS = [
  { href: '#flagship', label: 'Vasuki' },
  { href: '#case-studies', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#how-i-think', label: 'Thinking' },
  { href: '#ai-lab', label: 'Lab' },
  { href: '#contact', label: 'Contact' },
]

type Props = { theme: 'light' | 'dark'; onToggleTheme: () => void }

export default function PortfolioNav({ theme, onToggleTheme }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const isDark = theme === 'dark'

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const go = (href: string) => {
    setMenuOpen(false)
    window.requestAnimationFrame(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <header className="site-nav">
      <Container className="site-nav__inner">
        <a href="#hero" className="brand" onClick={() => setMenuOpen(false)}>
          {PORTFOLIO.name}
        </a>

        <nav aria-label="Primary" className="site-nav__links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault()
                go(link.href)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-nav__actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            <span aria-hidden="true">{isDark ? '☀' : '◐'}</span>
            <span className="theme-toggle__label">{isDark ? 'Light' : 'Dark'}</span>
          </button>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </Container>

      <div id="mobile-navigation" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <Container className="mobile-menu__inner">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault()
                go(link.href)
              }}
            >
              <span>{link.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </Container>
      </div>
    </header>
  )
}
