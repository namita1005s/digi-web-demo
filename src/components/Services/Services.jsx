import { motion } from 'framer-motion'
import './Services.css'

const services = [
  {
    icon: '📈',
    title: 'SEO Optimization',
    desc: 'Rank higher on search engines and drive organic traffic with data-driven SEO strategies.',
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    desc: 'Build brand awareness and engage your audience across all major social platforms.',
  },
  {
    icon: '✍️',
    title: 'Content Marketing',
    desc: 'Create compelling content that attracts, educates, and converts your target audience.',
  },
  {
    icon: '💰',
    title: 'Paid Advertising',
    desc: 'Maximize ROI with targeted Google Ads and social media ad campaigns.',
  },
  {
    icon: '📧',
    title: 'Email Marketing',
    desc: 'Nurture leads and retain customers with personalized email automation campaigns.',
  },
  {
    icon: '🎨',
    title: 'Web Design & Dev',
    desc: 'Build fast, beautiful, conversion-optimized websites that represent your brand.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">
            Services That <span className="highlight">Drive Results</span>
          </h2>
          <p className="section-subtitle">
            From strategy to execution, we cover every aspect of digital marketing to grow your business.
          </p>
        </div>

        <div className="grid-3 services__grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
