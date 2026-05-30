import { motion } from 'framer-motion'
import './Stats.css'

const stats = [
  { value: '20+', label: 'Happy Clients' },
  { value: '50+', label: 'Completed Projects' },
  { value: '10+', label: 'Team Members' },
  { value: '5+', label: 'Years Experience' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="stats__item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="stats__value">{s.value}</span>
            <span className="stats__label">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
