import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    desc: 'Perfect for small businesses getting started online.',
    features: ['SEO Audit', 'Social Media Setup', '5 Blog Posts/Month', 'Monthly Report', 'Email Support'],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$599',
    period: '/month',
    desc: 'Ideal for growing businesses ready to scale.',
    features: ['Full SEO Management', 'Social Media Management', '10 Blog Posts/Month', 'PPC Campaign', 'Weekly Reports', 'Priority Support'],
    cta: 'Get Started',
    featured: true,
  },
  {
    name: 'Premium',
    price: '$999',
    period: '/month',
    desc: 'Complete solution for established brands.',
    features: ['Advanced SEO', 'Full Social Media', 'Unlimited Content', 'PPC + Display Ads', 'Branding Package', 'Dedicated Manager', 'Daily Reports'],
    cta: 'Get Started',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Pricing Plans</span>
          <h2 className="section-title">Simple, <span className="highlight">Transparent</span> Pricing</h2>
          <p className="section-subtitle">No hidden fees. Choose the plan that fits your business goals.</p>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {plan.featured && <span className="pricing-card__badge">Most Popular</span>}
              <h3 className="pricing-card__name">{plan.name}</h3>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">{plan.price}</span>
                <span className="pricing-card__period">{plan.period}</span>
              </div>
              <p className="pricing-card__desc">{plan.desc}</p>
              <ul className="pricing-card__features">
                {plan.features.map(f => (
                  <li key={f}>
                    <span className="pricing-card__check">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={plan.featured ? 'btn-primary pricing-card__cta' : 'btn-outline pricing-card__cta'}>
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
