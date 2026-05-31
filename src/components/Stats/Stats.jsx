import { motion } from 'framer-motion'
import './Stats.css'

const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+',  label: 'Happy Clients' },
  { value: '95%',  label: 'Client Retention' },
  { value: '4+',   label: 'Years Experience' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="stats__item"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
          >
            <span className="stats__value">{s.value}</span>
            <span className="stats__label">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
