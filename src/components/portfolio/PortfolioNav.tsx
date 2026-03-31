const NAV_LINKS: Array<{ href: string; label: string }> = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#lab', label: 'Lab' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#contact', label: 'Contact' },
]

export default function PortfolioNav() {
  return (
    <nav>
      <a href="#hero" className="nav-logo">
        MW.AI
      </a>
      <ul className="nav-links">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

