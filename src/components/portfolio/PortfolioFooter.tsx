import { PORTFOLIO } from '../../content/portfolio'
import Container from './ui/Container'

export default function PortfolioFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <p><strong>{PORTFOLIO.name}</strong> — AI systems, automation, and founder-built software.</p>
        <a href="#hero">Back to top ↑</a>
      </Container>
    </footer>
  )
}
