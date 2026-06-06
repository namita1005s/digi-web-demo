import { motion } from 'framer-motion'
import './Process.css'

const STEPS = [
  {
    n: '01', title: 'Discover',
    body: 'We audit your brand, research competitors and identify the exact growth levers for your market.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
  },
  {
    n: '02', title: 'Strategy',
    body: '90-day roadmap with clear KPIs, channel priorities, and budget allocation tailored to your goals.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M6 20V10l6-6 6 6v10"/><path d="M10 20v-5h4v5"/>
      </svg>
    ),
  },
  {
    n: '03', title: 'Execute',
    body: 'Creative, campaigns, and content shipped fast — then iterated even faster based on live data.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    n: '04', title: 'Optimize',
    body: 'Monthly performance reviews and continuous optimisation compound into sustainable, scalable growth.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
]

const up = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] },
})

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process__grid-bg" aria-hidden="true" />
      <div className="container">
        <motion.div className="process__head" {...up(0)}>
          <span className="section-tag">How We Work</span>
          <h2 className="section-title">A Process Built for <em>Results.</em></h2>
          <p className="process__sub">A proven framework that transforms strategy into measurable business growth.</p>
        </motion.div>

        <div className="process__track" aria-hidden="true">
          <motion.div
            className="process__connector-fill"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          />
        </div>

        <div className="process__row">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              className="process__card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            >
              <span className="process__ghost" aria-hidden="true">{s.n}</span>
              <div className="process__icon-wrap">{s.icon}</div>
              <div className="process__step">{s.n}</div>
              <h3 className="process__title">{s.title}</h3>
              <p className="process__body">{s.body}</p>
              {i < STEPS.length - 1 && (
                <span className="process__arrow" aria-hidden="true">→</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
