import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import './Hero.css'

const fadeUp = (delay = 0, duration = 0.65) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
})

const chartBars = [14, 22, 18, 36, 28, 50, 42, 63, 52, 74, 61, 100]

const kpis = [
  { label: 'Total Revenue', value: '$284K', change: '+32.4%' },
  { label: 'Leads Generated', value: '12.4K', change: '+58.1%' },
  { label: 'Avg. ROAS', value: '4.8x', change: '+12.3%' },
]

const channels = [['SEO', '42%'], ['PPC', '28%'], ['Social', '30%']]

const floatCards = [
  {
    cls: 'hero__float-card--1',
    icon: '↑',
    value: '+184%',
    label: 'Organic Growth',
    initial: { opacity: 0, x: 20, y: -10 },
    animate: { opacity: 1, x: 0, y: [0, -8, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 0.85 },
      x:       { duration: 0.5, delay: 0.85 },
      y:       { duration: 4.4, delay: 0.85, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  {
    cls: 'hero__float-card--2',
    icon: '◆',
    value: '4.8x',
    label: 'ROAS',
    initial: { opacity: 0, x: -20, y: 10 },
    animate: { opacity: 1, x: 0, y: [0, 7, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 1.0 },
      x:       { duration: 0.5, delay: 1.0 },
      y:       { duration: 5.0, delay: 1.0, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  {
    cls: 'hero__float-card--3',
    icon: '✦',
    value: '1,200+',
    label: 'Leads Generated',
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: [0, -6, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 1.15 },
      y:       { duration: 5.2, delay: 1.15, repeat: Infinity, ease: 'easeInOut' },
    },
  },
]

export default function Hero() {
  const visualRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 90, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 90, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = visualRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section className="hero">
      <div className="hero__bg-glow" />
      <div className="hero__noise" />

      <div className="container hero__inner">

        {/* ── LEFT CONTENT ── */}
        <div className="hero__content">

          {/* Agency Badge */}
          <motion.div className="hero__trust-badge" {...fadeUp(0)}>
            <span className="hero__badge-pulse" />
            <span className="hero__trust-badge-text">Growth-Focused Digital Agency</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 className="hero__title" {...fadeUp(0.1)}>
            Helping Brands Achieve<br />
            <span className="hero__title-accent">Sustainable Digital</span> Growth
          </motion.h1>

          {/* Subheadline */}
          <motion.p className="hero__subtitle" {...fadeUp(0.2)}>
            We combine strategy, design, development and performance marketing to help
            ambitious businesses generate leads, increase visibility and scale revenue.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="hero__actions" {...fadeUp(0.3)}>
            <Link to="/contact" className="hero__btn-primary">
              Book Strategy Call <span className="hero__btn-arrow">→</span>
            </Link>
            <Link to="/services" className="hero__btn-ghost">
              Explore Services
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div className="hero__trust-indicators" {...fadeUp(0.42)}>
            {['100+ Projects Delivered', '50+ Happy Clients', '95% Client Retention'].map((item) => (
              <div key={item} className="hero__trust-item">
                <span className="hero__trust-check">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT VISUAL ── */}
        <motion.div
          className="hero__visual"
          ref={visualRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { mouseX.set(0); mouseY.set(0) }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1200 }}
        >
          <div className="hero__visual-glow" />

          <motion.div
            className="hero__parallax"
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          >
            {/* Browser Frame */}
            <motion.div
              className="hero__browser"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="hero__browser-bar">
                <div className="hero__browser-dots">
                  <span className="dot dot--red" />
                  <span className="dot dot--yellow" />
                  <span className="dot dot--green" />
                </div>
                <div className="hero__browser-url">
                  <span className="hero__url-lock">🔒</span>
                  growthanalytics.io/dashboard
                </div>
                <div className="hero__browser-actions">
                  <span /><span />
                </div>
              </div>

              {/* Dashboard body */}
              <div className="hero__dashboard">
                <div className="hero__dash-header">
                  <span className="hero__dash-title">Growth Analytics</span>
                  <span className="hero__dash-period">Last 12 months</span>
                </div>

                <div className="hero__dash-kpis">
                  {kpis.map((k) => (
                    <div key={k.label} className="hero__kpi">
                      <span className="hero__kpi-label">{k.label}</span>
                      <span className="hero__kpi-value">{k.value}</span>
                      <span className="hero__kpi-change">{k.change}</span>
                    </div>
                  ))}
                </div>

                <div className="hero__chart">
                  <div className="hero__chart-label">Revenue Growth</div>
                  <div className="hero__bars">
                    {chartBars.map((h, i) => (
                      <motion.div
                        key={i}
                        className={`hero__bar ${i >= 9 ? 'hero__bar--hi' : i >= 7 ? 'hero__bar--mid' : ''}`}
                        style={{ height: `${h}%` }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                      />
                    ))}
                  </div>
                  <div className="hero__chart-months">
                    {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m, i) => (
                      <span key={i}>{m}</span>
                    ))}
                  </div>
                </div>

                <div className="hero__dash-channels">
                  {channels.map(([ch, pct]) => (
                    <div key={ch} className="hero__channel">
                      <span className="hero__channel-dot" />
                      <span className="hero__channel-name">{ch}</span>
                      <span className="hero__channel-pct">{pct}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Cards */}
            {floatCards.map((card) => (
              <motion.div
                key={card.cls}
                className={`hero__float-card ${card.cls}`}
                initial={card.initial}
                animate={card.animate}
                transition={card.transition}
              >
                <span className="hero__float-icon">{card.icon}</span>
                <div>
                  <div className="hero__float-value">{card.value}</div>
                  <div className="hero__float-label">{card.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
