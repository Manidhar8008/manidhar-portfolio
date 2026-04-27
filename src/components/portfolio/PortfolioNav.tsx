import { PORTFOLIO } from '../../content/portfolio'
import Container from './ui/Container'

const NAV_LINKS = [
  { href: '#flagship', label: 'Flagship' },
  { href: '#startup', label: 'Janani.AI' },
  { href: '#projects', label: 'Systems' },
  { href: '#case-studies', label: 'Cases' },
  { href: '#experience', label: 'Experience' },
  { href: '#how-i-think', label: 'Thinking' },
  { href: '#ai-lab', label: 'Lab' },
  { href: '#writing', label: 'Writing' },
  { href: '#contact', label: 'Contact' },
]

type PortfolioNavProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function PortfolioNav({ theme, onToggleTheme }: PortfolioNavProps) {
  const isDarkMode = theme === 'dark'

  return (
    <header className="sticky top-0 z-40 bg-stone-50/88 backdrop-blur dark:bg-slate-950/78">
      <Container className="flex min-h-[76px] items-center justify-between gap-6">
        <a href="#hero" className="text-lg font-semibold tracking-[-0.04em] text-slate-900 dark:text-stone-100 sm:text-xl">
          {PORTFOLIO.name}
        </a>

        <div className="flex items-center gap-4">
          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium tracking-[0.01em] text-slate-500 transition-colors hover:text-teal-800 dark:text-stone-400 dark:hover:text-teal-300"
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
            className="inline-flex items-center gap-3 rounded-full bg-white/82 px-3 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_20px_rgba(15,23,42,0.05)] transition-colors hover:bg-white dark:bg-white/[0.06] dark:text-stone-200 dark:hover:bg-white/[0.12]"
          >
            <span className="relative h-5 w-10 rounded-full bg-slate-200 dark:bg-slate-700">
              <span
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform dark:bg-teal-300 ${
                  isDarkMode ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </span>
            <span>{isDarkMode ? 'Dark' : 'Light'}</span>
          </button>
        </div>
      </Container>
    </header>
  )
}
