import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ServicesSection from '../components/Services/Services'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'
import './pages.css'

const servicesFloatCards = [
  {
    cls: 'ph-float--1',
    icon: '◆',
    value: '15+',
    label: 'Services Offered',
    initial: { opacity: 0, x: 20, y: -10 },
    animate: { opacity: 1, x: 0, y: [0, -8, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 0.85 },
      x:       { duration: 0.5, delay: 0.85 },
      y:       { duration: 4.4, delay: 0.85, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  {
    cls: 'ph-float--2',
    icon: '↑',
    value: '4.2×',
    label: 'Avg. ROAS',
    initial: { opacity: 0, x: -20, y: 10 },
    animate: { opacity: 1, x: 0, y: [0, 7, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 1.0 },
      x:       { duration: 0.5, delay: 1.0 },
      y:       { duration: 5.0, delay: 1.0, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  {
    cls: 'ph-float--3',
    icon: '✦',
    value: '60+',
    label: 'Brands Scaled',
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: [0, -6, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 1.15 },
      y:       { duration: 5.2, delay: 1.15, repeat: Infinity, ease: 'easeInOut' },
    },
  },
]

export default function ServicesPage() {
  return (
    <div>
      <section className="ph">
        <div className="ph__bg-glow" />
        <div className="ph__noise" />
        <svg className="ph__mountains" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,320 L0,180 C80,150 200,90 340,70 C460,52 520,130 660,110 C780,92 880,30 1020,20 C1140,10 1260,80 1440,60 L1440,320 Z" fill="rgba(255,255,255,0.03)" />
          <path d="M0,320 L0,220 C120,200 240,150 380,130 C500,112 560,180 700,165 C820,150 940,90 1080,75 C1200,62 1320,120 1440,105 L1440,320 Z" fill="rgba(255,255,255,0.05)" />
          <path d="M0,265 C100,250 220,210 360,192 C480,176 560,235 700,220 C820,206 960,160 1100,148 C1220,138 1340,185 1440,172" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
          <path d="M0,320 L0,265 C100,250 220,210 360,192 C480,176 560,235 700,220 C820,206 960,160 1100,148 C1220,138 1340,185 1440,172 L1440,320 Z" fill="rgba(255,255,255,0.07)" />
        </svg>
        <div className="container ph__inner">
          <div className="ph__content">
            <motion.div className="hero__trust-badge" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
              <span className="hero__badge-pulse" />
              <span className="hero__trust-badge-text">What We Offer</span>
            </motion.div>
            <motion.h1 className="ph__title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              Full-Stack Digital<br />
              <span className="hero__title-accent">Growth Services</span>
            </motion.h1>
            <motion.p className="ph__subtitle" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              From SEO to paid media, web development to brand strategy — every service we offer is tied to one goal: growing your revenue.
            </motion.p>
            <motion.div className="hero__actions" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <a href="#services" className="hero__btn-primary">Explore Services <span className="hero__btn-arrow">→</span></a>
              <Link to="/contact" className="hero__btn-ghost">Get a Free Quote</Link>
            </motion.div>
            <motion.div className="hero__trust-indicators" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}>
              {['Strategy-led', 'No lock-in contracts', 'Senior team only'].map(item => (
                <div key={item} className="hero__trust-item">
                  <span className="hero__trust-check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="ph__visual"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ph__visual-glow" />
            <div className="ph__parallax">
              <motion.div
                className="ph__panel"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="ph__panel-header">
                  <span className="ph__panel-title">Our Services</span>
                  <span className="ph__panel-badge">Full-Funnel</span>
                </div>
                <div className="ph__topics">
                  {[['SEO & Content', '3–6 mo results'], ['PPC Advertising', 'Immediate ROI'], ['Social Media', 'Brand + Leads'], ['Web Development', 'Speed & UX'], ['UI/UX Design', 'Conversions first'], ['AI Automation', 'Save 20h/week']].map(([svc, note]) => (
                    <div key={svc} className="ph__topic-row">
                      <span className="ph__topic-dot" />
                      <span className="ph__topic-name">{svc}</span>
                      <span className="ph__topic-count">{note}</span>
                    </div>
                  ))}
                </div>
                <div className="ph__panel-divider" />
                <div className="ph__readtime">
                  <span className="ph__readtime-label">Avg. Client Growth</span>
                  <span className="ph__readtime-value">+168%</span>
                </div>
              </motion.div>
              {servicesFloatCards.map(card => (
                <motion.div
                  key={card.cls}
                  className={`hero__float-card ph-float ${card.cls}`}
                  initial={card.initial}
                  animate={card.animate}
                  transition={card.transition}
                >
                  <span className="hero__float-icon">{card.icon}</span>
                  <div>
                    <div className="hero__float-value">{card.value}</div>
                    <div className="hero__float-label">{card.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="ph__wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--bg)" />
          </svg>
        </div>
      </section>
        <ServicesSection />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  )
}
