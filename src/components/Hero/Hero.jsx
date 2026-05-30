import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Hero.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay } }),
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-glow" />
      <div className="container hero__inner">
        <motion.span
          className="section-tag"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Digital Marketing Agency
        </motion.span>

        <motion.h1
          className="hero__title"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
        >
          Grow Your Business With<br />
          <span className="hero__title--accent">Smart Digital Marketing</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          Trendox Marketing Solutions helps businesses generate more leads, improve
          visibility, and increase revenue through modern digital marketing strategies.
        </motion.p>

        <motion.div
          className="hero__actions"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
        >
          <Link to="/contact" className="btn-hero-primary">Get Quote</Link>
          <Link to="/contact" className="btn-hero-outline">Contact Us</Link>
        </motion.div>
      </div>
    </section>
  )
}
