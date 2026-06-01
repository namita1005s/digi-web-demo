import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Testimonials from '../components/Testimonials/Testimonials'
import CTA from '../components/CTA/CTA'
import Pricing from '../components/Pricing/Pricing'
import './pages.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const features = [
  { icon: '✦', title: 'UX-First Design', desc: 'Every layout decision is rooted in user psychology and conversion principles.' },
  { icon: '◎', title: 'Brand-Aligned Visuals', desc: 'Designs that authentically reflect your brand identity and speak to your audience.' },
  { icon: '◈', title: 'Mobile-Responsive', desc: 'Pixel-perfect across all devices — desktop, tablet, and mobile.' },
  { icon: '◆', title: 'CRO Optimised', desc: 'Strategic placement of CTAs, trust signals, and flow to maximise conversions.' },
  { icon: '❋', title: 'Fast Load Times', desc: 'Optimised assets and clean code ensure sub-2-second load performance.' },
  { icon: '⬡', title: 'Scalable Systems', desc: 'Design systems built to grow with your brand — consistent and maintainable.' },
]

const process = [
  { num: '01', title: 'Discovery', desc: 'We learn your brand, audience, and goals through a structured onboarding process.' },
  { num: '02', title: 'Wireframing', desc: 'Low-fidelity layouts map out structure, hierarchy, and user flow before any visuals.' },
  { num: '03', title: 'Visual Design', desc: 'High-fidelity mockups bring your brand to life with typography, colour, and imagery.' },
  { num: '04', title: 'Handoff & Build', desc: 'Designs are handed off to development with full specs, assets, and documentation.' },
]

export default function WebsiteDesign() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <motion.span className="section-tag" {...fadeUp(0)}>Website Design</motion.span>
          <motion.h1 className="page-hero__title" {...fadeUp(0.06)}>
            Websites That Convert<br />Visitors Into Clients
          </motion.h1>
          <motion.p className="page-hero__subtitle" {...fadeUp(0.12)}>
            Premium, brand-aligned website design crafted to make a powerful first impression and drive measurable results.
          </motion.p>
          <motion.div style={{ display: 'flex', gap: 12, marginTop: 8 }} {...fadeUp(0.18)}>
            <Link to="/contact" className="btn-primary">Start Your Project →</Link>
            <Link to="/portfolio" className="btn-outline">View Our Work</Link>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What's Included</span>
            <h2 className="section-title">Design That Performs<br />on Every Level</h2>
            <p className="section-subtitle">We don't just make things look good — we design for outcomes.</p>
          </div>
          <div className="about-values__grid">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="about-value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
              >
                <span className="about-value-card__icon">{f.icon}</span>
                <h3 className="about-value-card__title">{f.title}</h3>
                <p className="about-value-card__desc">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Process</span>
            <h2 className="section-title">How We Design<br />Your Website</h2>
          </div>
          <div className="about-values__grid" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
            {process.map((p, i) => (
              <motion.div
                key={p.num}
                className="about-value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
              >
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-subtle)' }}>{p.num}</span>
                <h3 className="about-value-card__title">{p.title}</h3>
                <p className="about-value-card__desc">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />
      <Testimonials />
      <CTA />
    </>
  )
}
