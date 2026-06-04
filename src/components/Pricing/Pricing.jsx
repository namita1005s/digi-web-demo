import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Pricing.css'

const benefits = [
  'Tailored Solutions',
  'Flexible Engagement Models',
  'Dedicated Team Support',
  'Transparent Deliverables',
  'Scalable Growth Plans',
  'No Hidden Charges',
]

export default function Pricing() {
  const navigate = useNavigate()

  return (
    <section className="section custom-pricing" id="pricing">
      <div className="container">
        <motion.div
          className="custom-pricing__card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glow orbs */}
          <div className="cp-orb cp-orb--1" aria-hidden />
          <div className="cp-orb cp-orb--2" aria-hidden />
          <div className="cp-orb cp-orb--3" aria-hidden />

          <div className="custom-pricing__inner">
            {/* Left */}
            <div className="custom-pricing__left">
              <motion.span
                className="section-tag cp-tag"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Custom Pricing
              </motion.span>

              <motion.h2
                className="custom-pricing__headline"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.18 }}
              >
                Every Business Has<br />Different Goals.
              </motion.h2>

              <motion.p
                className="custom-pricing__sub"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.26 }}
              >
                We create custom growth strategies and pricing based on your
                business size, goals, industry, and requirements.
              </motion.p>

              <motion.div
                className="custom-pricing__ctas"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.34 }}
              >
                <div className="cp-cta-glow" aria-hidden />
                <button
                  className="cp-btn-primary"
                  onClick={() => navigate('/contact')}
                >
                  Get Custom Quote →
                </button>
                <button
                  className="cp-btn-secondary"
                  onClick={() => navigate('/contact')}
                >
                  Schedule A Free Consultation
                </button>
              </motion.div>

              <motion.p
                className="custom-pricing__trust"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.44 }}
              >
                ✦ Most proposals are delivered within 24 hours.
              </motion.p>
            </div>

            {/* Right */}
            <motion.div
              className="custom-pricing__right"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="cp-benefits-label">What's Included</p>
              <ul className="cp-benefits">
                {benefits.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  >
                    <span className="cp-check" aria-hidden>✓</span>
                    {b}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
