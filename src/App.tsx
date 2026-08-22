import { useEffect, useState } from 'react'
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
import Solopreneurship90Days from './components/portfolio/Solopreneurship90Days'
import StartupSystem from './components/portfolio/StartupSystem'
import WritingSection from './components/portfolio/WritingSection'

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

      <main className="relative z-10">
        <Hero />
        <FlagshipSystem />
        <StartupSystem />
        <ExecutionUnits />
        <CaseStudiesSection />
        <ExperienceSection />
        <HowIThinkSection />
        <AiLabSection />
        <WritingSection />
        <Contact />
        <Solopreneurship90Days />
      </main>

      <PortfolioFooter />
    </div>
  )
}
