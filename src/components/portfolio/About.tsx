import { PORTFOLIO } from '../../content/portfolio'
import Section from './ui/Section'

export default function About() {
  return (
    <Section id="about" tone="alt">
      <div className="split split--about">
        <div>
          <p className="eyebrow">About</p>
          <h2>Part operator, part engineer, increasingly interested in the space between them.</h2>
        </div>
        <div className="about-copy">
          <p>{PORTFOLIO.snapshot[0]}</p>
          <p>{PORTFOLIO.snapshot[1]}</p>
          <p>{PORTFOLIO.snapshot[4]}</p>
        </div>
      </div>
    </Section>
  )
}
