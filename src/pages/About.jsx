import { motion } from 'framer-motion'
import AboutSection from '../components/About/About'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Stats from '../components/Stats/Stats'
import Testimonials from '../components/Testimonials/Testimonials'
import CTA from '../components/CTA/CTA'
import './About.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const team = [
  { name: 'Aryan Verma',  role: 'Founder & CEO',    init: 'A' },
  { name: 'Priya Sharma', role: 'Head of Design',    init: 'P' },
  { name: 'Rahul Gupta',  role: 'Lead Developer',    init: 'R' },
  { name: 'Neha Singh',   role: 'SEO Strategist',    init: 'N' },
  { name: 'Vikram Patel', role: 'PPC Manager',       init: 'V' },
  { name: 'Sneha Joshi',  role: 'Content Lead',      init: 'S' },
]

const values = [
  { icon: '◎', title: 'Results First',        desc: 'Every decision is driven by data and measured by impact on your bottom line.' },
  { icon: '✦', title: 'Radical Transparency', desc: 'No jargon, no fluff. You always know exactly what we\'re doing and why.' },
  { icon: '◈', title: 'Long-Term Thinking',   desc: 'We build strategies that compound over time, not quick fixes that fade.' },
  { icon: '◆', title: 'Client Partnership',   desc: 'We treat your business like our own — your growth is our growth.' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <motion.span className="section-tag" {...fadeUp(0)}>About Us</motion.span>
          <motion.h1 className="page-hero__title" {...fadeUp(0.06)}>
            We Are <span className="highlight">Trendox</span>
          </motion.h1>
          <motion.p className="page-hero__subtitle" {...fadeUp(0.12)}>
            A results-driven digital marketing agency helping ambitious businesses grow online since 2019.
          </motion.p>
        </div>
      </section>

      <AboutSection />
      <Stats />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">What Drives<br />Everything We Do</h2>
          </div>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="about-value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
              >
                <span className="about-value-card__icon">{v.icon}</span>
                <h3 className="about-value-card__title">{v.title}</h3>
                <p className="about-value-card__desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Team</span>
            <h2 className="section-title">The People Behind<br />Your Growth</h2>
            <p className="section-subtitle">A tight-knit team of specialists obsessed with delivering results.</p>
          </div>
          <div className="about-team__grid">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                className="team-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
              >
                <div className="team-card__avatar">{m.init}</div>
                <h3 className="team-card__name">{m.name}</h3>
                <span className="team-card__role">{m.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  )
}
