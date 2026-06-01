import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Testimonials from '../components/Testimonials/Testimonials'
import CTA from '../components/CTA/CTA'
import './pages.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const channels = [
  { icon: '◎', title: 'Search Marketing', desc: 'Dominate Google with a combined SEO and PPC strategy that captures demand at every stage.' },
  { icon: '◈', title: 'Social Media', desc: 'Organic and paid social campaigns that build community and drive qualified traffic.' },
  { icon: '✦', title: 'Email Marketing', desc: 'Automated nurture sequences and broadcast campaigns that convert leads into customers.' },
  { icon: '◆', title: 'Content Marketing', desc: 'Strategic content that educates, builds trust, and ranks — driving inbound leads 24/7.' },
  { icon: '⬡', title: 'Conversion Rate Optimisation', desc: 'A/B testing, heatmaps, and UX improvements that turn more visitors into buyers.' },
  { icon: '❋', title: 'Analytics & Reporting', desc: 'Full-funnel attribution and monthly dashboards so you always know your ROI.' },
]

export default function DigitalMarketing() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <motion.span className="section-tag" {...fadeUp(0)}>Digital Marketing</motion.span>
          <motion.h1 className="page-hero__title" {...fadeUp(0.06)}>
            Full-Funnel Marketing<br />That Drives Revenue
          </motion.h1>
          <motion.p className="page-hero__subtitle" {...fadeUp(0.12)}>
            Integrated digital marketing strategies that connect every channel into a single, high-performing growth engine.
          </motion.p>
          <motion.div style={{ display: 'flex', gap: 12, marginTop: 8 }} {...fadeUp(0.18)}>
            <Link to="/contact" className="btn-primary">Get Your Strategy →</Link>
            <Link to="/portfolio" className="btn-outline">See Case Studies</Link>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Channels & Services</span>
            <h2 className="section-title">Every Channel.<br />One Cohesive Strategy.</h2>
            <p className="section-subtitle">We connect the dots across all digital touchpoints to maximise your marketing ROI.</p>
          </div>
          <div className="about-values__grid">
            {channels.map((c, i) => (
              <motion.div
                key={c.title}
                className="about-value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
              >
                <span className="about-value-card__icon">{c.icon}</span>
                <h3 className="about-value-card__title">{c.title}</h3>
                <p className="about-value-card__desc">{c.desc}</p>
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
