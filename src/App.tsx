import AILab from './components/portfolio/AILab'
import Contact from './components/portfolio/Contact'
import DeveloperMode from './components/portfolio/DeveloperMode'
import Experience from './components/portfolio/Experience'
import Hero from './components/portfolio/Hero'
import HowItWorks from './components/portfolio/HowItWorks'
import Problem from './components/portfolio/Problem'
import Projects from './components/portfolio/Projects'
import Solution from './components/portfolio/Solution'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Problem />
      <Solution />
      <Projects />
      <HowItWorks />
      <DeveloperMode />
      <AILab />
      <Experience />
      <Contact />
    </div>
  )
}