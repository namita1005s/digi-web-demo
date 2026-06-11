import { motion } from 'framer-motion'
import './GrowthMetrics.css'

const services = [
  {
    icon: '◎',
    title: 'Strategy & Growth',
    desc: 'Data-driven planning that maps every growth lever to measurable business outcomes.',
  },
  {
    icon: '✦',
    title: 'Content & SEO',
    desc: 'Authority content and technical SEO that compounds organic visibility over time.',
  },
  {
    icon: '◈',
    title: 'Performance Marketing',
    desc: 'Precision paid campaigns engineered for lead generation and maximum ROAS.',
  },
  {
    icon: '⬡',
    title: 'Automation & Analytics',
    desc: 'Smart automation pipelines and real-time analytics to optimise and scale fast.',
  },
]

const metrics = [
  { value: '4.8×', label: 'ROI' },
  { value: '+320%', label: 'Leads' },
  { value: '+180%', label: 'Growth' },
  { value: '+64%', label: 'Conv. Rate' },
]

const checks = [
  'Data-driven growth strategies',
  'High-converting marketing funnels',
  'SEO & content optimization',
  'Performance marketing excellence',
]

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
})

export default function GrowthMetrics() {
  return (
    <section className="gm">
      <div className="container gm__inner">

        {/* ── Left ── */}
        <div className="gm__left">
          <motion.span className="section-tag" {...fadeUp(0)}>Who We Are</motion.span>
          <motion.h2 className="gm__headline" {...fadeUp(1)}>
            We are growth partners that<br />
            <em>drive results</em>
          </motion.h2>

          <div className="gm__cards">
            {services.map((s, i) => (
              <motion.div key={s.title} className="gm__card" {...fadeUp(i + 2)}>
                <span className="gm__card-icon">{s.icon}</span>
                <div>
                  <h4 className="gm__card-title">{s.title}</h4>
                  <p className="gm__card-desc">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Right ── */}
        <div className="gm__right">
          <motion.div className="gm__metrics-grid" {...fadeUp(2)}>
            {metrics.map((m, i) => (
              <motion.div key={m.label} className="gm__metric" {...fadeUp(i + 3)}>
                <span className="gm__metric-value">{m.value}</span>
                <span className="gm__metric-label">{m.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.ul className="gm__checks" {...fadeUp(7)}>
            {checks.map((c) => (
              <li key={c} className="gm__check-item">
                <span className="gm__check-icon">✓</span>
                {c}
              </li>
            ))}
          </motion.ul>
        </div>

      </div>
    </section>
  )
}
