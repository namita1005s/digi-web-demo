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


const handleMouseMove = (e, cardRef) => {
  const r = cardRef.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width
  const y = (e.clientY - r.top) / r.height
  const rx = (y - 0.5) * -16
  const ry = (x - 0.5) * 16
  cardRef.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(12px) scale(1.02)`
  const shine = cardRef.querySelector('.pf-card__shine')
  if (shine) {
    shine.style.setProperty('--mx', `${x * 100}%`)
    shine.style.setProperty('--my', `${y * 100}%`)
  }
  const img = cardRef.querySelector('.pf-card__img')
  if (img) {
    img.style.transform = `scale(1.06) translate(${(x - 0.5) * -6}px, ${(y - 0.5) * -6}px)`
  }
}

const handleMouseLeave = (cardRef) => {
  cardRef.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)'
  const img = cardRef.querySelector('.pf-card__img')
  if (img) img.style.transform = 'scale(1) translate(0px, 0px)'
}

const cases = [
  {
    tag: 'SEO Campaign', client: 'Nexora Tech', industry: 'SaaS',
    result: '+180% Organic Traffic', metric: '+180%', metricLabel: 'Traffic Growth',
    desc: 'Technical SEO overhaul and content strategy that tripled search visibility in 4 months.',
    services: ['SEO', 'Content Strategy', 'Link Building'],
    glow: 'rgba(99,153,255,0.55)',
    grad: 'linear-gradient(90deg,#4f8bff,#a78bfa)',
    tagColor: 'rgba(167,139,250,0.85)',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    tag: 'Website Redesign', client: 'Veltrix Solutions', industry: 'B2B Services',
    result: '+60% Conversion Rate', metric: '+60%', metricLabel: 'More Conversions',
    desc: 'Full website transformation with UX-first design that dramatically improved lead quality.',
    services: ['Website Design', 'Web Development', 'CRO'],
    glow: 'rgba(52,211,153,0.55)',
    grad: 'linear-gradient(90deg,#34d399,#06b6d4)',
    tagColor: 'rgba(52,211,153,0.85)',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    tag: 'PPC Advertising', client: 'Brandify Co.', industry: 'E-Commerce',
    result: '4.5x ROAS', metric: '4.5x', metricLabel: 'Return on Ad Spend',
    desc: 'Managed $20K/month ad budget across Google and Meta, achieving consistent 4.5x return.',
    services: ['Google Ads', 'Meta Ads', 'Analytics'],
    glow: 'rgba(251,146,60,0.55)',
    grad: 'linear-gradient(90deg,#fb923c,#f59e0b)',
    tagColor: 'rgba(251,146,60,0.85)',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
  {
    tag: 'Social Media Marketing', client: 'Optica Retail', industry: 'Retail',
    result: '+220% Engagement', metric: '+220%', metricLabel: 'Engagement Lift',
    desc: 'Rebranded social presence with editorial content strategy that turned followers into buyers.',
    services: ['SMM', 'Content Creation', 'Influencer Outreach'],
    glow: 'rgba(244,114,182,0.55)',
    grad: 'linear-gradient(90deg,#f472b6,#c084fc)',
    tagColor: 'rgba(244,114,182,0.85)',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
  },
  {
    tag: 'Digital Marketing', client: 'FinEdge Capital', industry: 'Finance',
    result: '3.2x Lead Volume', metric: '3.2x', metricLabel: 'Lead Growth',
    desc: 'Full-funnel digital strategy combining SEO, PPC, and email nurture to scale qualified leads.',
    services: ['SEO', 'PPC', 'Email Marketing'],
    glow: 'rgba(56,189,248,0.55)',
    grad: 'linear-gradient(90deg,#38bdf8,#818cf8)',
    tagColor: 'rgba(56,189,248,0.85)',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
  },
  {
    tag: 'Web Development', client: 'Luminary Studios', industry: 'Creative Agency',
    result: '98 PageSpeed Score', metric: '98', metricLabel: 'PageSpeed Score',
    desc: 'Custom React build with headless CMS delivering sub-second load times and flawless UX.',
    services: ['Web Development', 'Performance', 'CMS Integration'],
    glow: 'rgba(163,230,53,0.55)',
    grad: 'linear-gradient(90deg,#a3e635,#34d399)',
    tagColor: 'rgba(163,230,53,0.85)',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
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
      {/* ── Hero ─────────────────────────────────────── */}
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

      {/* ── Case Studies Grid ─────────────────────────── */}
      <section className="section" id="cases">
        <div className="container">
          <div className="pf-grid">
            {cases.map((c, i) => (
              <motion.div
                key={c.client}
                className="pf-card"
                style={{
                  '--glow-col': c.glow,
                  '--accent-grad': c.grad,
                  '--tag-color': c.tagColor,
                }}
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
              >
                {/* shine overlay */}
                <div className="pf-card__shine" />

                {/* ── Image visual panel ── */}
                <div className="pf-card__visual">
                  <img
                    src={c.image}
                    alt={c.client}
                    className="pf-card__img"
                    loading="lazy"
                  />

                  {/* gradient overlay */}
                  <div className="pf-card__img-overlay" />

                  {/* coloured glow blob */}
                  <div className="pf-card__img-glow" />

                  {/* metric chip — bottom-left */}
                  <div className="pf-card__metric-chip">
                    <motion.span
                      className="pf-card__metric-big"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.25 + i * 0.06 }}
                    >
                      {c.metric}
                    </motion.span>
                    <span className="pf-card__metric-label">{c.metricLabel}</span>
                  </div>

                  {/* tag pill — top-left */}
                  <span className="pf-card__img-tag">{c.tag}</span>
                </div>

                {/* ── Card body (unchanged styles) ── */}
                <div className="pf-card__body">
                  <div className="pf-card__meta">
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