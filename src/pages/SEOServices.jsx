import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Stats from '../components/Stats/Stats'
import Testimonials from '../components/Testimonials/Testimonials'
import CTA from '../components/CTA/CTA'
import './About.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const features = [
  { icon: '◎', title: 'Technical SEO', desc: 'Site audits, crawl fixes, Core Web Vitals, schema markup, and indexation optimisation.' },
  { icon: '✦', title: 'On-Page SEO', desc: 'Keyword-optimised content, meta tags, internal linking, and semantic HTML structure.' },
  { icon: '◈', title: 'Link Building', desc: 'High-authority backlink acquisition through ethical, white-hat outreach strategies.' },
  { icon: '◆', title: 'Local SEO', desc: 'Google Business Profile optimisation and local citation building for geo-targeted visibility.' },
  { icon: '⬡', title: 'Content Strategy', desc: 'Topic clusters, pillar pages, and editorial calendars that build topical authority.' },
  { icon: '❋', title: 'SEO Reporting', desc: 'Monthly reports with rankings, traffic, and ROI data — no vanity metrics.' },
]

const results = [
  { metric: '+180%', label: 'Avg. Organic Traffic Growth' },
  { metric: '3–6mo', label: 'Typical Time to Results' },
  { metric: 'Page 1', label: 'Target Keyword Rankings' },
  { metric: '95%', label: 'Client Retention Rate' },
]

export default function SEOServices() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <motion.span className="section-tag" {...fadeUp(0)}>SEO Services</motion.span>
          <motion.h1 className="page-hero__title" {...fadeUp(0.06)}>
            Rank Higher. Drive More<br />Organic Traffic.
          </motion.h1>
          <motion.p className="page-hero__subtitle" {...fadeUp(0.12)}>
            Data-driven SEO strategies that build long-term search visibility and deliver compounding organic growth.
          </motion.p>
          <motion.div style={{ display: 'flex', gap: 12, marginTop: 8 }} {...fadeUp(0.18)}>
            <Link to="/contact" className="btn-primary">Get SEO Audit →</Link>
            <Link to="/portfolio" className="btn-outline">See Results</Link>
          </motion.div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag--dark">Results</span>
            <h2 className="section-title section-title--dark">Numbers That<br />Speak for Themselves</h2>
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
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>{r.metric}</div>
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
            <h2 className="section-title">Full-Spectrum SEO<br />Management</h2>
            <p className="section-subtitle">Every angle covered — from technical foundations to content and authority.</p>
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
