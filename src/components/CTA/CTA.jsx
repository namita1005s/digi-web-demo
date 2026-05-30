import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <motion.div
          className="cta__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Get Started</span>
          <h2 className="cta__title">
            Ready To <span className="highlight">Grow Your Business?</span>
          </h2>
          <p className="cta__subtitle">
            Let's build a strategy that drives real results. Book a free consultation today.
          </p>
          <Link to="/contact" className="btn-primary cta__btn">
            Get Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
