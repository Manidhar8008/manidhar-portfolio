import { PORTFOLIO } from '../../content/portfolio'
import Container from './ui/Container'

export default function PortfolioFooter() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
      <Container className="flex flex-col gap-4 text-sm text-gray-600 dark:text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">{PORTFOLIO.name}</p>
          <p className="text-xs mt-1">AI Systems Engineer · Knowledge Graphs · Agentic Workflows</p>
        </div>
        <p className="text-xs">Built with React, TypeScript, and Tailwind CSS</p>
      </Container>
    </footer>
  )
}
