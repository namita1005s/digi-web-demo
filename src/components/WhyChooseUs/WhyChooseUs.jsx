import { motion } from 'framer-motion'
import './WhyChooseUs.css'

const reasons = [
  { icon: '🏆', title: 'Experienced Team', desc: 'Our specialists bring years of hands-on digital marketing expertise across industries.' },
  { icon: '🎯', title: 'Result Driven Strategy', desc: 'Every campaign is built around measurable KPIs and real business outcomes.' },
  { icon: '💎', title: 'Affordable Pricing', desc: 'Premium quality services designed to fit budgets of all sizes without compromise.' },
  { icon: '🤝', title: 'Dedicated Support', desc: 'A dedicated account manager is always available to keep your campaigns on track.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section why" id="why">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why Trendox</span>
          <h2 className="section-title">Why Choose <span className="highlight">Us</span></h2>
          <p className="section-subtitle">We don't just run campaigns — we build growth engines for your business.</p>
        </div>

        <div className="grid-4 why__grid">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="why-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="why-card__icon">{r.icon}</div>
              <h3 className="why-card__title">{r.title}</h3>
              <p className="why-card__desc">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
