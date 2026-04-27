import { PORTFOLIO } from '../../content/portfolio'
import Container from './ui/Container'

export default function PortfolioFooter() {
  return (
    <footer className="py-8">
      <Container className="flex flex-col gap-2 text-sm text-slate-500 dark:text-stone-400 sm:flex-row sm:items-center sm:justify-between">
        <p>{PORTFOLIO.name}</p>
        <p>Founder narrative system</p>
      </Container>
    </footer>
  )
}
