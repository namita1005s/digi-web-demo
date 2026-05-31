import { motion } from 'framer-motion'
import CTA from '../components/CTA/CTA'
import Testimonials from '../components/Testimonials/Testimonials'
import './About.css'
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

export default function Portfolio() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <motion.span className="section-tag" {...fadeUp(0)}>Our Work</motion.span>
          <motion.h1 className="page-hero__title" {...fadeUp(0.06)}>
            Results That Speak<br />for Themselves
          </motion.h1>
          <motion.p className="page-hero__subtitle" {...fadeUp(0.12)}>
            A curated selection of campaigns and projects that delivered measurable business impact.
          </motion.p>
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
