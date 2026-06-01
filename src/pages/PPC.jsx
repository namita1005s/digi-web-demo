import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Testimonials from '../components/Testimonials/Testimonials'
import CTA from '../components/CTA/CTA'
import Stats from '../components/Stats/Stats'
import './pages.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const features = [
  { icon: '◎', title: 'Google Search Ads', desc: 'Capture high-intent buyers at the exact moment they search for your product or service.' },
  { icon: '✦', title: 'Google Display & YouTube', desc: 'Visual campaigns that build brand awareness and retarget warm audiences across the web.' },
  { icon: '◈', title: 'Meta & Instagram Ads', desc: 'Precision-targeted social ads that drive traffic, leads, and purchases at scale.' },
  { icon: '◆', title: 'LinkedIn Ads', desc: 'B2B campaigns targeting decision-makers by job title, industry, and company size.' },
  { icon: '⬡', title: 'Retargeting Campaigns', desc: 'Re-engage visitors who didn\'t convert with personalised ads that bring them back.' },
  { icon: '❋', title: 'Conversion Tracking', desc: 'Full attribution setup so every rupee spent is tied to a real business outcome.' },
]

const results = [
  { metric: '4.5x', label: 'Average ROAS' },
  { metric: '38%', label: 'Lower Cost Per Lead' },
  { metric: '$2M+', label: 'Ad Spend Managed' },
  { metric: '95%', label: 'Client Retention Rate' },
]

export default function PPC() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <motion.span className="section-tag" {...fadeUp(0)}>PPC Advertising</motion.span>
          <motion.h1 className="page-hero__title" {...fadeUp(0.06)}>
            Paid Ads That Deliver<br />Measurable ROI
          </motion.h1>
          <motion.p className="page-hero__subtitle" {...fadeUp(0.12)}>
            Data-driven PPC campaigns across Google, Meta, and LinkedIn — engineered to maximise return on every rupee spent.
          </motion.p>
          <motion.div style={{ display: 'flex', gap: 12, marginTop: 8 }} {...fadeUp(0.18)}>
            <Link to="/contact" className="btn-primary">Launch Your Campaign →</Link>
            <Link to="/portfolio" className="btn-outline">See Results</Link>
          </motion.div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag--dark">Performance</span>
            <h2 className="section-title section-title--dark">Numbers That<br />Justify Every Rupee</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
            {results.map((r, i) => (
              <motion.div
                key={r.label}
                style={{
                  background: 'var(--bg-dark-card)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '32px 24px',
                  textAlign: 'center',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-inverse)', letterSpacing: '-0.04em', lineHeight: 1 }}>{r.metric}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: 8, fontWeight: 500 }}>{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What's Included</span>
            <h2 className="section-title">Every Platform.<br />Every Funnel Stage.</h2>
            <p className="section-subtitle">We manage the full paid media mix — from awareness to conversion.</p>
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

      <Stats />
      <Testimonials />
      <CTA />
    </>
  )
}
