import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA/CTA'
import './pages.css'
import './Career.css'

const vp = { once: true, margin: '-30px' }
const up = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: vp,
  transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] },
})

const WHY = [
  { n: '01', title: 'Ownership Culture', body: 'You own your work end-to-end. No micro-management, no hand-holding — just outcomes and accountability.' },
  { n: '02', title: 'Fast Career Growth', body: 'We promote from within. Top performers move from junior to senior in 12–18 months, not years.' },
  { n: '03', title: 'Real Impact', body: 'Your work directly shapes client revenue. Every campaign, every page, every line of code — it counts.' },
  { n: '04', title: 'Learning First', body: '₹25K annual learning budget, bi-weekly skill sessions, and full access to premium tools and courses.' },
]

const PROCESS = [
  { n: '01', title: 'Apply', body: 'Send your CV and a short note on why Trendox.' },
  { n: '02', title: 'Interview', body: '30-min culture and skills conversation.' },
  { n: '03', title: 'Assessment', body: 'A focused take-home task — never more than 2 hours.' },
  { n: '04', title: 'Offer', body: 'Quick decision. Offer within 5 business days.' },
]

const POSITIONS = [
  { title: 'Senior SEO Strategist', type: 'Full-Time', location: 'Lucknow / Remote', dept: 'SEO', desc: 'Lead SEO strategy for 10+ client accounts. Own technical audits, content planning, and link acquisition. 3+ years experience required.' },
  { title: 'React / Next.js Developer', type: 'Full-Time', location: 'Lucknow / Remote', dept: 'Development', desc: 'Build high-performance websites and web apps for our clients. Strong proficiency in React, Next.js, and modern CSS required.' },
  { title: 'Performance Marketing Manager', type: 'Full-Time', location: 'Lucknow', dept: 'PPC', desc: 'Manage Google Ads and Meta Ads campaigns across multiple client accounts. Experience with ₹5L+ monthly budgets preferred.' },
  { title: 'UI/UX Designer', type: 'Full-Time', location: 'Lucknow / Remote', dept: 'Design', desc: 'Design conversion-focused websites and landing pages. Proficiency in Figma and a strong portfolio of web design work required.' },
  { title: 'Social Media Manager', type: 'Full-Time', location: 'Lucknow', dept: 'SMM', desc: 'Manage social media presence for 8–12 client brands. Content planning, community management, and paid social experience needed.' },
  { title: 'Content Strategist', type: 'Contract', location: 'Remote', dept: 'Content', desc: 'Create SEO-optimised blog content, case studies, and landing page copy for B2B and B2C clients across various industries.' },
]

const careerFloatCards = [
  {
    cls: 'ph-float--1',
    icon: '✦',
    value: '6',
    label: 'Open Roles',
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
    icon: '◆',
    value: '12–18mo',
    label: 'Avg. Promotion',
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
    value: '₹25K',
    label: 'Learning Budget',
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: [0, -6, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 1.15 },
      y:       { duration: 5.2, delay: 1.15, repeat: Infinity, ease: 'easeInOut' },
    },
  },
]

export default function Career() {
  return (
    <div className="cp">

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
              <span className="hero__trust-badge-text">Careers at Trendox</span>
            </motion.div>
            <motion.h1 className="ph__title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              Build the Future<br />
              <span className="hero__title-accent">of Digital Growth</span>
            </motion.h1>
            <motion.p className="ph__subtitle" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              Join a team of specialists obsessed with results. We're growing fast and looking for exceptional people to grow with us.
            </motion.p>
            <motion.div className="hero__actions" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <a href="#openings" className="hero__btn-primary">View Open Roles <span className="hero__btn-arrow">→</span></a>
              <Link to="/contact" className="hero__btn-ghost">Send Your CV</Link>
            </motion.div>
            <motion.div className="hero__trust-indicators" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}>
              {['Remote-Friendly', '₹25K Learning Budget', 'Promote Within 18mo'].map(item => (
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
                  <span className="ph__panel-title">Open Positions</span>
                  <span className="ph__panel-badge">Hiring Now</span>
                </div>
                <div className="ph__topics">
                  {[['Senior SEO Strategist', 'Full-Time'], ['React / Next.js Developer', 'Full-Time'], ['Performance Marketing Mgr', 'Full-Time'], ['UI/UX Designer', 'Full-Time'], ['Social Media Manager', 'Full-Time'], ['Content Strategist', 'Contract']].map(([role, type]) => (
                    <div key={role} className="ph__topic-row">
                      <span className="ph__topic-dot" />
                      <span className="ph__topic-name">{role}</span>
                      <span className="ph__topic-count">{type}</span>
                    </div>
                  ))}
                </div>
                <div className="ph__panel-divider" />
                <div className="ph__readtime">
                  <span className="ph__readtime-label">Response Time</span>
                  <span className="ph__readtime-value">5 days</span>
                </div>
              </motion.div>
              {careerFloatCards.map(card => (
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

      {/* ── 2. WHY JOIN ── */}
      <section className="cp-why">
        <div className="container">
          <motion.div className="cp-why__head" {...up(0)}>
            <span className="cp-tag">Why Join Trendox</span>
            <h2 className="cp-h2">A place where<br /><em>careers accelerate.</em></h2>
          </motion.div>
          <div className="cp-why__grid">
            {WHY.map((w, i) => (
              <motion.div key={w.n} className="cp-why__card" {...up(i * 0.07)}>
                <span className="cp-why__num">{w.n}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </motion.div>
            ))}
          </div> 
        </div>
      </section>

      {/* ── 3. HIRING PROCESS ── */}
      <section className="cp-process">
        <div className="cp-process__grid-bg" aria-hidden="true" />
        <div className="container">
          <motion.div className="cp-section-head cp-section-head--center" {...up(0)}>
            <span className="cp-tag">Hiring Process</span>
            <h2 className="cp-h2">Simple, fast,<br /><em>respectful.</em></h2>
          </motion.div>

          <div className="cp-process__track" aria-hidden="true">
            <motion.div
              className="cp-process__connector-fill"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            />
          </div>

          <div className="cp-process__row">
            {PROCESS.map((s, i) => (
              <motion.div
                key={s.n}
                className="cp-process__card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              >
                <span className="cp-process__ghost" aria-hidden="true">{s.n}</span>
                <div className="cp-process__step">{s.n}</div>
                <h3 className="cp-process__title">{s.title}</h3>
                <p className="cp-process__body">{s.body}</p>
                {i < PROCESS.length - 1 && <span className="cp-process__arrow" aria-hidden="true">→</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. OPEN POSITIONS ── */}
      <section className="cp-positions" id="openings">
        <div className="container">
          <motion.div className="cp-section-head" {...up(0)}>
            <span className="cp-tag">Open Positions</span>
            <h2 className="cp-h2">We're hiring<br /><em>across all teams.</em></h2>
            <p className="cp-section-sub">{POSITIONS.length} open roles — find yours below.</p>
          </motion.div>
          <div className="cp-jobs">
            {POSITIONS.map((pos, i) => (
              <motion.div key={pos.title} className="cp-job" {...up(i * 0.06)}>
                <div className="cp-job__left">
                  <div className="cp-job__meta">
                    <span className="cp-job__dept">{pos.dept}</span>
                    <span className="cp-job__dot-sep" />
                    <span className="cp-job__type">{pos.type}</span>
                    <span className="cp-job__dot-sep" />
                    <span className="cp-job__location">📍 {pos.location}</span>
                  </div>
                  <h3 className="cp-job__title">{pos.title}</h3>
                  <p className="cp-job__desc">{pos.desc}</p>
                </div>
                <Link to="/contact" className="cp-job__btn">Apply Now →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA ── */}
      <section className="cp-cta">
        <div className="container cp-cta__wrap">
          <motion.h2 className="cp-cta__h2" {...up(0)}>
            Don't See The Right Role?
          </motion.h2>
          <motion.p className="cp-cta__sub" {...up(0.1)}>
            We're always looking for talented people who can help build exceptional digital experiences and drive meaningful growth.
          </motion.p>
          <motion.div className="cp-cta__actions" {...up(0.18)}>
            <Link to="/contact" className="cp-cta__btn-primary">Contact Us →</Link>
            <Link to="/contact" className="cp-cta__btn-ghost">Send Your Resume</Link>
          </motion.div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
