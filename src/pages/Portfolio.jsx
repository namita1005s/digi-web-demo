import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA/CTA'
import Testimonials from '../components/Testimonials/Testimonials'
import './pages.css'
import './Portfolio.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})
 
const cases = [
  {
    tag: 'SEO Campaign',
    client: 'Nexora Tech',
    industry: 'SaaS',
    result: '+180% Organic Traffic',
    metric: '180%',
    metricLabel: 'Traffic Growth',
    desc: 'Technical SEO overhaul and content strategy that tripled search visibility in 4 months.',
    services: ['SEO', 'Content Strategy', 'Link Building'],
  },
  {
    tag: 'Website Redesign',
    client: 'Veltrix Solutions',
    industry: 'B2B Services',
    result: '+60% Conversion Rate',
    metric: '60%',
    metricLabel: 'More Conversions',
    desc: 'Full website transformation with UX-first design that dramatically improved lead quality.',
    services: ['Website Design', 'Web Development', 'CRO'],
  },
  {
    tag: 'PPC Advertising',
    client: 'Brandify Co.',
    industry: 'E-Commerce',
    result: '4.5x ROAS',
    metric: '4.5x',
    metricLabel: 'Return on Ad Spend',
    desc: 'Managed $20K/month ad budget across Google and Meta, achieving consistent 4.5x return.',
    services: ['Google Ads', 'Meta Ads', 'Analytics'],
  },
  {
    tag: 'Social Media Marketing',
    client: 'Optica Retail',
    industry: 'Retail',
    result: '+220% Engagement',
    metric: '220%',
    metricLabel: 'Engagement Lift',
    desc: 'Rebranded social presence with editorial content strategy that turned followers into buyers.',
    services: ['SMM', 'Content Creation', 'Influencer Outreach'],
  },
  {
    tag: 'Digital Marketing',
    client: 'FinEdge Capital',
    industry: 'Finance',
    result: '3.2x Lead Volume',
    metric: '3.2x',
    metricLabel: 'Lead Growth',
    desc: 'Full-funnel digital strategy combining SEO, PPC, and email nurture to scale qualified leads.',
    services: ['SEO', 'PPC', 'Email Marketing'],
  },
  {
    tag: 'Web Development',
    client: 'Luminary Studios',
    industry: 'Creative Agency',
    result: '98 PageSpeed Score',
    metric: '98',
    metricLabel: 'PageSpeed Score',
    desc: 'Custom React build with headless CMS delivering sub-second load times and flawless UX.',
    services: ['Web Development', 'Performance', 'CMS Integration'],
  },
]

const pfFloatCards = [
  {
    cls: 'ph-float--1',
    icon: '◆',
    value: '100+',
    label: 'Projects Delivered',
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
    icon: '✦',
    value: '4.8x',
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
    icon: '↑',
    value: '95%',
    label: 'Client Retention',
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: [0, -6, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 1.15 },
      y:       { duration: 5.2, delay: 1.15, repeat: Infinity, ease: 'easeInOut' },
    },
  },
]

export default function Portfolio() {
  return (
    <>
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
              <span className="hero__trust-badge-text">Our Work</span>
            </motion.div>
            <motion.h1 className="ph__title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              Results That Speak<br />
              <span className="hero__title-accent">for Themselves</span>
            </motion.h1>
            <motion.p className="ph__subtitle" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              A curated selection of campaigns and projects that delivered measurable business impact.
            </motion.p>
            <motion.div className="hero__actions" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <a href="#cases" className="hero__btn-primary">View Case Studies <span className="hero__btn-arrow">→</span></a>
              <Link to="/contact" className="hero__btn-ghost">Start a Project</Link>
            </motion.div>
            <motion.div className="hero__trust-indicators" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}>
              {['100+ Projects', '4.8x Avg. ROAS', '95% Retention'].map(item => (
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
                  <span className="ph__panel-title">Impact Overview</span>
                  <span className="ph__panel-badge">All Time</span>
                </div>
                <div className="ph__topics">
                  {[['Nexora Tech', '+180% Traffic'], ['Veltrix Solutions', '+60% Conversions'], ['Brandify Co.', '4.5x ROAS'], ['Optica Retail', '+220% Engagement'], ['FinEdge Capital', '3.2x Leads'], ['Luminary Studios', '98 PageSpeed']].map(([client, result]) => (
                    <div key={client} className="ph__topic-row">
                      <span className="ph__topic-dot" />
                      <span className="ph__topic-name">{client}</span>
                      <span className="ph__topic-count">{result}</span>
                    </div>
                  ))}
                </div>
                <div className="ph__panel-divider" />
                <div className="ph__readtime">
                  <span className="ph__readtime-label">Avg. Growth</span>
                  <span className="ph__readtime-value">+168%</span>
                </div>
              </motion.div>
              {pfFloatCards.map((card) => (
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

      <section className="section">
        <div className="container">
          <div className="pf-grid">
            {cases.map((c, i) => (
              <motion.div
                key={c.client}
                className="pf-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              >
                <div className="pf-card__visual">
                  <div className="pf-card__metric-big">{c.metric}</div>
                  <div className="pf-card__metric-label">{c.metricLabel}</div>
                  <div className="pf-card__bars">
                    {[40, 55, 45, 70, 58, 82, 68, 100].map((h, j) => (
                      <motion.div
                        key={j}
                        className="pf-card__bar"
                        style={{ height: `${h}%` }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + j * 0.04 }}
                      />
                    ))}
                  </div>
                </div>
                <div className="pf-card__body">
                  <div className="pf-card__meta">
                    <span className="pf-card__tag">{c.tag}</span>
                    <span className="pf-card__industry">{c.industry}</span>
                  </div>
                  <h3 className="pf-card__client">{c.client}</h3>
                  <p className="pf-card__desc">{c.desc}</p>
                  <div className="pf-card__services">
                    {c.services.map(s => (
                      <span key={s} className="pf-card__service">{s}</span>
                    ))}
                  </div>
                  <span className="pf-card__result">{c.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  )
}
