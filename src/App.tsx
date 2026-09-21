import { useEffect, useState } from 'react'
import About from './components/portfolio/About'
import AiLabSection from './components/portfolio/AiLabSection'
import CaseStudiesSection from './components/portfolio/CaseStudiesSection'
import Contact from './components/portfolio/Contact'
import ExecutionUnits from './components/portfolio/ExecutionUnits'
import ExperienceSection from './components/portfolio/ExperienceSection'
import FlagshipSystem from './components/portfolio/FlagshipSystem'
import Hero from './components/portfolio/Hero'
import HowIThinkSection from './components/portfolio/HowIThinkSection'
import PortfolioFooter from './components/portfolio/PortfolioFooter'
import PortfolioNav from './components/portfolio/PortfolioNav'
import TechnicalStack from './components/portfolio/TechnicalStack'
import PortfolioEffects from './components/portfolio/PortfolioEffects'
import WritingSection from './components/portfolio/WritingSection'

type ThemeMode = 'light' | 'dark'
const THEME_STORAGE_KEY = 'manidhar-portfolio-theme'

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light'
  return window.localStorage.getItem(THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light'
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  return (
    <div className="site-shell">
      <PortfolioNav
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
      />
      <PortfolioEffects />
      <main>
        <Hero />
        <About />
        <FlagshipSystem />
        <CaseStudiesSection />
        <ExperienceSection />
        <ExecutionUnits />
        <HowIThinkSection />
        <TechnicalStack />
        <AiLabSection />
        <WritingSection />
        <Contact />
      </main>
      <PortfolioFooter />
    </div>
  )
}
