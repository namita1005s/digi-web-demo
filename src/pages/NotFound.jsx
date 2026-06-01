import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './pages.css'

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container page-hero__inner">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        >
          404
        </motion.span>
        <motion.h1
          className="page-hero__title"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.06 }}
        >
          Page Not Found
        </motion.h1>
        <motion.p
          className="page-hero__subtitle"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.12 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.18 }}
        >
          <Link to="/" className="btn-primary">← Back to Home</Link>
        </motion.div>
      </div>
    </section>
  )
}
