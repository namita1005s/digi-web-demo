import { motion } from 'framer-motion'
import './WhyChooseUs.css'

const steps = [
  {
    num: '01',
    title: 'Strategy',
    desc: 'We audit your brand, research your market, and build a data-backed growth roadmap tailored to your goals.',
  },
  {
    num: '02',
    title: 'Execution',
    desc: 'Our specialists execute across design, development, SEO, and paid media with precision and speed.',
  },
  {
    num: '03',
    title: 'Optimization',
    desc: 'We continuously test, measure, and refine every campaign to maximize performance and reduce waste.',
  },
  {
    num: '04',
    title: 'Growth',
    desc: 'Sustainable, compounding growth that scales with your business — not just a one-time spike.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section why section--alt" id="why">
      <div className="container">
        <div className="why__header">
          <span className="section-tag">Our Process</span>
          <h2 className="section-title">How We Drive<br /><span className="accent">Consistent Results</span></h2>
          <p className="section-subtitle">
            A proven four-step framework that turns strategy into sustainable business growth.
          </p>
        </div>

        <div className="why__grid">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="why-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            >
              <span className="why-card__num">{s.num}</span>
              <h3 className="why-card__title">{s.title}</h3>
              <p className="why-card__desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
