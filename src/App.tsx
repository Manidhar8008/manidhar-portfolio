import { useEffect, useState } from 'react'
import Contact from './components/portfolio/Contact'
import Hero from './components/portfolio/Hero'
import Operate from './components/portfolio/Operate'
import PortfolioFooter from './components/portfolio/PortfolioFooter'
import PortfolioNav from './components/portfolio/PortfolioNav'
import Projects from './components/portfolio/Projects'
import Roadmap from './components/portfolio/Roadmap'
import Systems from './components/portfolio/Systems'

type ThemeMode = 'light' | 'dark'

const THEME_STORAGE_KEY = 'manidhar-portfolio-theme'

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  return savedTheme === 'dark' ? 'dark' : 'light'
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  return (
    <div className="min-h-screen">
      <PortfolioNav
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))}
      />

      <main>
        <Hero />
        <Projects />
        <Operate />
        <Systems />
        <Roadmap />
        <Contact />
      </main>

      <PortfolioFooter />
    </div>
  )
}
