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
  { icon: '◎', title: 'Content Strategy', desc: 'Platform-native content calendars built around your audience, brand voice, and business goals.' },
  { icon: '✦', title: 'Community Management', desc: 'Daily engagement, comment moderation, and DM handling to build a loyal, active community.' },
  { icon: '◈', title: 'Paid Social Ads', desc: 'Targeted Meta, Instagram, and LinkedIn ad campaigns that drive traffic, leads, and sales.' },
  { icon: '◆', title: 'Influencer Outreach', desc: 'Micro and macro influencer partnerships that expand your reach to qualified audiences.' },
  { icon: '⬡', title: 'Creative Production', desc: 'Scroll-stopping graphics, reels, and carousels designed to perform on every platform.' },
  { icon: '❋', title: 'Analytics & Reporting', desc: 'Monthly performance reports with reach, engagement, follower growth, and conversion data.' },
]

const platforms = ['Instagram', 'Facebook', 'LinkedIn', 'X (Twitter)', 'YouTube', 'Pinterest', 'TikTok', 'Threads']

export default function SMM() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <motion.span className="section-tag" {...fadeUp(0)}>Social Media Marketing</motion.span>
          <motion.h1 className="page-hero__title" {...fadeUp(0.06)}>
            Turn Followers Into<br />Loyal Customers
          </motion.h1>
          <motion.p className="page-hero__subtitle" {...fadeUp(0.12)}>
            Strategic social media management that builds brand authority, grows engaged audiences, and converts attention into revenue.
          </motion.p>
          <motion.div style={{ display: 'flex', gap: 12, marginTop: 8 }} {...fadeUp(0.18)}>
            <Link to="/contact" className="btn-primary">Start Growing →</Link>
            <Link to="/portfolio" className="btn-outline">See Results</Link>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What's Included</span>
            <h2 className="section-title">Everything Your Social<br />Presence Needs</h2>
            <p className="section-subtitle">From strategy to execution — we handle every aspect of your social media growth.</p>
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
            <span className="section-tag">Platforms</span>
            <h2 className="section-title">We Manage Every<br />Major Platform</h2>
            <p className="section-subtitle">Wherever your audience is, we show up with the right content at the right time.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {platforms.map((p, i) => (
              <motion.span
                key={p}
                style={{
                  padding: '10px 20px',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  background: 'var(--surface)',
                }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                {p}
              </motion.span>
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
