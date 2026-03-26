import './components/portfolio/design.css'
import About from './components/portfolio/About'
import Contact from './components/portfolio/Contact'
import Hero from './components/portfolio/Hero'
import Lab from './components/portfolio/Lab'
import Projects from './components/portfolio/Projects'
import Roadmap from './components/portfolio/Roadmap'
import Skills from './components/portfolio/Skills'
import PortfolioEffects from './components/portfolio/PortfolioEffects'
import PortfolioFooter from './components/portfolio/PortfolioFooter'
import PortfolioNav from './components/portfolio/PortfolioNav'

export default function App() {
  return (
    <>
      <PortfolioNav />
      <PortfolioEffects />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Lab />
      <Roadmap />
      <Contact />
      <PortfolioFooter />
    </>
  )
}