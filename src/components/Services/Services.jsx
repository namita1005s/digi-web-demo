import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Services.css'

const services = [
  { id: 'design', icon: '✦', title: 'Website Design', desc: 'Beautiful, conversion-focused websites crafted to represent your brand with precision and purpose.' },
  { id: 'dev',    icon: '⬡', title: 'Web Development', desc: 'Fast, scalable, and secure web solutions built with modern technologies and clean architecture.' },
  { id: 'seo',   icon: '◎', title: 'SEO Optimization', desc: 'Rank higher, drive consistent organic traffic, and dominate search results with proven strategies.' },
  { id: 'social',icon: '◈', title: 'Social Media Marketing', desc: 'Build brand awareness and engage your audience across all major social platforms at scale.' },
  { id: 'ppc',   icon: '◆', title: 'PPC Advertising', desc: 'Maximize ROI with targeted paid campaigns that deliver measurable results across every channel.' },
  { id: 'brand', icon: '❋', title: 'Brand Strategy', desc: 'Create a powerful brand identity that stands out, resonates, and leaves a lasting impression.' },
]

export default function Services() {
  const navigate = useNavigate()
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services__header">
          <div>
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">Services Built for<br />Measurable Growth</h2>
          </div>
          <p className="section-subtitle services__header-sub">
            Every service we offer is engineered around one goal — growing your business with strategy and precision.
          </p>
        </div>

        <div className="services__bento">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              className="svc-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
            >
              <span className="svc-card__icon">{s.icon}</span>
              <div className="svc-card__body">
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__desc">{s.desc}</p>
              </div>
              <span className="svc-card__arrow">→</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="services__footer-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="sfb__glow" aria-hidden />
          <p className="sfb__text">
            Growth, Performance &amp; Digital Excellence
            <span className="sfb__text-light"> Under One Roof</span>
          </p>
          <button className="sfb__cta" onClick={() => navigate('/contact')}>
            Discuss Your Requirements →
          </button>
        </motion.div>

      </div>
    </section>
  )
}
