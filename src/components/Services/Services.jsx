import { motion } from 'framer-motion'
import './Services.css'

const services = [
  {
    icon: '🎨',
    title: 'Website Design',
    desc: 'Beautiful, modern websites crafted to represent your brand and convert visitors into customers.',
  },
  {
    icon: '⚙️',
    title: 'Website Development',
    desc: 'Fast, scalable, and secure web development solutions built with the latest technologies.',
  },
  {
    icon: '📈',
    title: 'SEO Services',
    desc: 'Rank higher on search engines and drive consistent organic traffic with proven SEO strategies.',
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    desc: 'Build brand awareness and engage your audience across all major social platforms.',
  },
  {
    icon: '💰',
    title: 'PPC Advertising',
    desc: 'Maximize ROI with targeted Google Ads and paid social campaigns that deliver real results.',
  },
  {
    icon: '✨',
    title: 'Branding Solutions',
    desc: 'Create a powerful brand identity that stands out and leaves a lasting impression.',
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
