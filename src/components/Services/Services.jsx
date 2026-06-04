import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Services.css'

const services = [
  {
    id: 'seo',
    label: 'SEO',
    metric: { value: '+184%', label: 'Organic Traffic Growth' },
    challenge: 'Buried on page 3+ for all high-intent keywords. Organic traffic plateaued at 4K/month with no growth trajectory.',
    solution: 'Deep technical audit, site architecture restructure, 200+ backlinks, and a topic-cluster content strategy targeting commercial-intent queries.',
    results: ['184% increase in organic traffic', '47 keywords on Page 1 of Google', '3.2x growth in leads from organic search'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 'web',
    label: 'Web Development',
    metric: { value: '+60%', label: 'Conversion Rate Lift' },
    challenge: '78% bounce rate, 6.4s load time, and unclear CTAs costing thousands in lost signups monthly.',
    solution: 'Full rebuild in React — sub-2s load, A/B-tested landing pages, and conversion-optimised funnel pages.',
    results: ['60% conversion rate improvement', 'Lighthouse score: 34 → 94', '41% bounce rate reduction in 30 days'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
  },
  {
    id: 'ppc',
    label: 'Performance Marketing',
    metric: { value: '+4.8x', label: 'Return on Ad Spend' },
    challenge: '1.2x ROAS with broad targeting and no creative testing. The account was entirely reactive.',
    solution: 'Rebuilt Google & Meta infrastructure with campaign tiers, dynamic product ads, creative rotation, and attribution modeling.',
    results: ['4.8x ROAS within 60 days', 'CPA dropped by 62%', 'Paid revenue grew 3.1x YoY'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 'smm',
    label: 'Social Media Marketing',
    metric: { value: '+310%', label: 'Engagement Growth' },
    challenge: '12K followers, near-zero engagement. Content was inconsistent and failing to convert.',
    solution: 'Social identity playbook, Reels-first strategy, creator partnerships, and engagement cadence across Instagram & TikTok.',
    results: ['310% engagement growth', 'Followers: 12K → 68K organically', '22% of monthly revenue from social'],
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80',
  },
  {
    id: 'content',
    label: 'Content Marketing',
    metric: { value: '+240%', label: 'Inbound Lead Growth' },
    challenge: 'Zero content presence. No inbound pipeline, no thought leadership, no search footprint.',
    solution: 'Editorial calendar, 60+ long-form articles, 12 whitepapers, and a weekly newsletter grown to 8,000 subscribers.',
    results: ['240% growth in inbound demos', '8,000 newsletter subscribers', 'Domain authority: 14 → 41'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
  },
  {
    id: 'ai',
    label: 'AI Automation',
    metric: { value: '-68%', label: 'Operational Cost Reduction' },
    challenge: 'Manual reporting and repetitive tasks consuming 40+ hrs/week, limiting the team\'s growth capacity.',
    solution: 'AI reporting dashboards, automated nurture sequences, GPT content workflows, and full CRM automation.',
    results: ['68% less time on manual ops', 'Reporting: 6 hrs → 20 mins', 'Capacity to take on 3x more clients'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
  },
]

export default function Services() {
  const [active, setActive] = useState('seo')
  const navigate = useNavigate()
  const current = services.find(s => s.id === active)

  return (
    <section className="section svc-explorer" id="services">
      <div className="container">

        <div className="svc-explorer__head">
          <span className="section-tag">What We Offer</span>
          <h1 className="svc-explorer__title">
            Our <em>Services</em>
          </h1>
          <p className="svc-explorer__sub">
            Full-service digital marketing solutions tailored to grow your business online.
          </p>
        </div>

        <div className="svc-pills">
          {services.map(s => (
            <button
              key={s.id}
              className={`svc-pill${active === s.id ? ' svc-pill--active' : ''}`}
              onClick={() => setActive(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="svc-panel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="svc-panel__left">
              <div className="svc-metric">
                <span className="svc-metric__value">{current.metric.value}</span>
                <span className="svc-metric__label">{current.metric.label}</span>
              </div>

              <div className="svc-block">
                <h4 className="svc-block__title">
                  <span className="svc-block__icon svc-block__icon--challenge">⚠</span>
                  The Challenge
                </h4>
                <p>{current.challenge}</p>
              </div>

              <div className="svc-block">
                <h4 className="svc-block__title">
                  <span className="svc-block__icon svc-block__icon--solution">◎</span>
                  The Solution
                </h4>
                <p>{current.solution}</p>
              </div>

              <div className="svc-block">
                <h4 className="svc-block__title">
                  <span className="svc-block__icon svc-block__icon--results">✦</span>
                  The Results
                </h4>
                <ul className="svc-results">
                  {current.results.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <button className="svc-cta" onClick={() => navigate('/contact')}>
                Get Similar Results →
              </button>
            </div>

            <div className="svc-panel__right">
              <div className="svc-img-wrap">
                <img src={current.image} alt={current.label} className="svc-img" />
                <div className="svc-img-overlay" />
                <div className="svc-img-badge">
                  <span className="svc-img-badge__value">{current.metric.value}</span>
                  <span className="svc-img-badge__label">{current.metric.label}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
