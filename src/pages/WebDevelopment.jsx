import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Testimonials from '../components/Testimonials/Testimonials'
import CTA from '../components/CTA/CTA'
import Pricing from '../components/Pricing/Pricing'
import './About.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const features = [
  { icon: '⬡', title: 'React & Next.js', desc: 'Modern component-based architecture for fast, scalable, and maintainable web apps.' },
  { icon: '◎', title: 'Performance First', desc: '98+ PageSpeed scores through optimised code, lazy loading, and CDN delivery.' },
  { icon: '◈', title: 'CMS Integration', desc: 'Headless CMS setups with Sanity, Contentful, or WordPress for easy content management.' },
  { icon: '◆', title: 'API & Backend', desc: 'RESTful and GraphQL APIs, serverless functions, and third-party integrations.' },
  { icon: '✦', title: 'Security Hardened', desc: 'SSL, OWASP best practices, and regular audits to keep your site protected.' },
  { icon: '❋', title: 'Ongoing Support', desc: 'Post-launch maintenance, updates, and monitoring so you never have to worry.' },
]

const stack = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'Sanity', 'Vercel', 'AWS']

export default function WebDevelopment() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <motion.span className="section-tag" {...fadeUp(0)}>Web Development</motion.span>
          <motion.h1 className="page-hero__title" {...fadeUp(0.06)}>
            Fast, Scalable Websites<br />Built to Last
          </motion.h1>
          <motion.p className="page-hero__subtitle" {...fadeUp(0.12)}>
            Custom web development using modern technologies — engineered for performance, security, and growth.
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
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title">Everything You Need<br />Under One Roof</h2>
            <p className="section-subtitle">From landing pages to complex web applications — we build it all.</p>
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
            <span className="section-tag">Tech Stack</span>
            <h2 className="section-title">Technologies We<br />Work With</h2>
            <p className="section-subtitle">We use battle-tested, modern tools to build reliable products.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {stack.map((t, i) => (
              <motion.span
                key={t}
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
                {t}
              </motion.span>
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
