import { PORTFOLIO } from '../../content/portfolio'
import Container from './ui/Container'

const NAV_LINKS = [
  { href: '#flagship', label: 'Vasuki OS' },
  { href: '#deployment', label: 'Deployment' },
  { href: '#technical-stack', label: 'Stack' },
  { href: '#case-studies', label: 'Cases' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

type PortfolioNavProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function PortfolioNav({ theme, onToggleTheme }: PortfolioNavProps) {
  const isDarkMode = theme === 'dark'

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-black/80 dark:border-gray-800">
      <Container className="flex min-h-16 items-center justify-between gap-6">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          {PORTFOLIO.name}
        </a>

        <div className="flex items-center gap-6">
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            className="inline-flex items-center justify-center p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
          >
            {isDarkMode ? (
              <span className="text-lg">☀️</span>
            ) : (
              <span className="text-lg">🌙</span>
            )}
          </button>
        </div>
      </Container>
    </header>
  )
}
