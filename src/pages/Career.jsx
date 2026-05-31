import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA/CTA'
import './About.css'
import './Career.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const positions = [
  {
    title: 'Senior SEO Strategist',
    type: 'Full-Time',
    location: 'Lucknow / Remote',
    dept: 'SEO',
    desc: 'Lead SEO strategy for 10+ client accounts. Own technical audits, content planning, and link acquisition. 3+ years experience required.',
  },
  {
    title: 'React / Next.js Developer',
    type: 'Full-Time',
    location: 'Lucknow / Remote',
    dept: 'Development',
    desc: 'Build high-performance websites and web apps for our clients. Strong proficiency in React, Next.js, and modern CSS required.',
  },
  {
    title: 'Performance Marketing Manager',
    type: 'Full-Time',
    location: 'Lucknow',
    dept: 'PPC',
    desc: 'Manage Google Ads and Meta Ads campaigns across multiple client accounts. Experience with ₹5L+ monthly budgets preferred.',
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-Time',
    location: 'Lucknow / Remote',
    dept: 'Design',
    desc: 'Design conversion-focused websites and landing pages. Proficiency in Figma and a strong portfolio of web design work required.',
  },
  {
    title: 'Social Media Manager',
    type: 'Full-Time',
    location: 'Lucknow',
    dept: 'SMM',
    desc: 'Manage social media presence for 8–12 client brands. Content planning, community management, and paid social experience needed.',
  },
  {
    title: 'Content Strategist',
    type: 'Contract',
    location: 'Remote',
    dept: 'Content',
    desc: 'Create SEO-optimised blog content, case studies, and landing page copy for B2B and B2C clients across various industries.',
  },
]

const perks = [
  { icon: '◎', title: 'Remote-Friendly', desc: 'Most roles offer hybrid or fully remote options. Work from wherever you do your best thinking.' },
  { icon: '✦', title: 'Growth Budget', desc: '₹25,000/year learning budget for courses, conferences, and certifications.' },
  { icon: '◈', title: 'Performance Bonus', desc: 'Quarterly bonuses tied to client results — when clients win, you win.' },
  { icon: '◆', title: 'Health Coverage', desc: 'Comprehensive health insurance for you and your immediate family.' },
]

export default function Career() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <motion.span className="section-tag" {...fadeUp(0)}>Careers</motion.span>
          <motion.h1 className="page-hero__title" {...fadeUp(0.06)}>
            Build the Future of<br />Digital Marketing
          </motion.h1>
          <motion.p className="page-hero__subtitle" {...fadeUp(0.12)}>
            Join a team of specialists obsessed with results. We're growing fast and looking for exceptional people to grow with us.
          </motion.p>
          <motion.div style={{ display: 'flex', gap: 12, marginTop: 8 }} {...fadeUp(0.18)}>
            <a href="#openings" className="btn-primary">View Open Roles ↓</a>
            <Link to="/contact" className="btn-outline">Send Your CV</Link>
          </motion.div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Trendox</span>
            <h2 className="section-title">Perks That Actually<br />Matter</h2>
            <p className="section-subtitle">We invest in our team the same way we invest in our clients — seriously.</p>
          </div>
          <div className="about-values__grid">
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                className="about-value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
              >
                <span className="about-value-card__icon">{p.icon}</span>
                <h3 className="about-value-card__title">{p.title}</h3>
                <p className="about-value-card__desc">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="openings">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Open Positions</span>
            <h2 className="section-title">We're Hiring<br />Across All Teams</h2>
            <p className="section-subtitle">{positions.length} open roles — find yours below.</p>
          </div>
          <div className="career-list">
            {positions.map((pos, i) => (
              <motion.div
                key={pos.title}
                className="career-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
              >
                <div className="career-card__left">
                  <div className="career-card__meta">
                    <span className="career-card__dept">{pos.dept}</span>
                    <span className="career-card__type">{pos.type}</span>
                    <span className="career-card__location">📍 {pos.location}</span>
                  </div>
                  <h3 className="career-card__title">{pos.title}</h3>
                  <p className="career-card__desc">{pos.desc}</p>
                </div>
                <Link to="/contact" className="btn-primary career-card__cta">
                  Apply Now →
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="career-open-app"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="career-open-app__text">
              Don't see a role that fits? We're always open to exceptional talent.
            </p>
            <Link to="/contact" className="btn-outline">Send an Open Application →</Link>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  )
}
