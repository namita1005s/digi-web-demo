import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import './Hero.css'

const fadeUp = (delay = 0, duration = 0.65) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
})

const serviceCards = [
  {
    icon: '📈',
    title: 'SEO Optimization',
    desc: 'Rank higher, get found faster',
    color: '#333333',
    delay: 0.7,
  },
  {
    icon: '🎯',
    title: 'PPC Advertising',
    desc: 'Targeted ads that convert',
    color: '#555555',
    delay: 0.85,
  },
  {
    icon: '📱',
    title: 'Social Media',
    desc: 'Build audience & engagement',
    color: '#111111',
    delay: 1.0,
  },
  {
    icon: '✉️',
    title: 'Email Marketing',
    desc: 'Nurture leads into customers',
    color: '#777777',
    delay: 1.15,
  },
]

const statBadges = [
  { value: '+184%', label: 'Organic Traffic', icon: '↑', cls: 'hero__badge--tl', delay: 0.9 },
  { value: '4.8x', label: 'Avg. ROAS', icon: '◆', cls: 'hero__badge--br', delay: 1.1 },
]

export default function Hero() {
  const visualRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), { stiffness: 80, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), { stiffness: 80, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = visualRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__bloom" />
      <div className="hero__noise" />

      {/* Mountain-style layered white waves — bottom of hero */}
      <svg className="hero__mountains" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        {/* Back range */}
        <path d="M0,320 L0,180 C80,150 200,90 340,70 C460,52 520,130 660,110 C780,92 880,30 1020,20 C1140,10 1260,80 1440,60 L1440,320 Z"
          fill="rgba(255,255,255,0.03)" />
        <path d="M0,180 C80,150 200,90 340,70 C460,52 520,130 660,110 C780,92 880,30 1020,20 C1140,10 1260,80 1440,60"
          fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        {/* Far-back extra range */}
        <path d="M0,320 L0,155 C60,135 160,80 300,55 C420,34 500,105 640,88 C760,72 860,15 1000,8 C1120,2 1240,65 1440,45 L1440,320 Z"
          fill="rgba(255,255,255,0.02)" />
        <path d="M0,155 C60,135 160,80 300,55 C420,34 500,105 640,88 C760,72 860,15 1000,8 C1120,2 1240,65 1440,45"
          fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        {/* Mid range */}
        <path d="M0,320 L0,220 C120,200 240,150 380,130 C500,112 560,180 700,165 C820,150 940,90 1080,75 C1200,62 1320,120 1440,105 L1440,320 Z"
          fill="rgba(255,255,255,0.05)" />
        <path d="M0,220 C120,200 240,150 380,130 C500,112 560,180 700,165 C820,150 940,90 1080,75 C1200,62 1320,120 1440,105"
          fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
        {/* Front range */}
        <path d="M0,320 L0,265 C100,250 220,210 360,192 C480,176 560,235 700,220 C820,206 960,160 1100,148 C1220,138 1340,185 1440,172 L1440,320 Z"
          fill="rgba(255,255,255,0.07)" />
        <path d="M0,265 C100,250 220,210 360,192 C480,176 560,235 700,220 C820,206 960,160 1100,148 C1220,138 1340,185 1440,172"
          fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
        {/* Foreground extra ridge */}
        <path d="M0,320 L0,290 C80,282 200,268 340,258 C460,248 560,275 700,268 C820,260 960,242 1100,236 C1220,230 1340,252 1440,245 L1440,320 Z"
          fill="rgba(255,255,255,0.05)" />
        <path d="M0,290 C80,282 200,268 340,258 C460,248 560,275 700,268 C820,260 960,242 1100,236 C1220,230 1340,252 1440,245"
          fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      </svg>

      <div className="container hero__inner">

        {/* ── LEFT CONTENT ── */}
        <div className="hero__content">

          <motion.div className="hero__badge-pill" {...fadeUp(0)}>
            <span className="hero__badge-dot" />
            <span>Growth-Focused Digital Agency</span>
          </motion.div>

          <motion.h1 className="hero__title" {...fadeUp(0.1)}>
            Helping Brands Achieve<br />
            <span className="hero__title-wave">Sustainable Digital</span> Growth
          </motion.h1>

          <motion.p className="hero__subtitle" {...fadeUp(0.2)}>
            We combine strategy, design, development and performance marketing to help
            ambitious businesses generate leads, increase visibility and scale revenue.
          </motion.p>

          <motion.div className="hero__actions" {...fadeUp(0.3)}>
            <Link to="/contact" className="hero__btn-primary">
              Book Strategy Call <span className="hero__btn-arrow">→</span>
            </Link>
            <Link to="/services" className="hero__btn-outline">
              Explore Services
            </Link>
          </motion.div>

          <motion.div className="hero__trust-row" {...fadeUp(0.42)}>
            {['100+ Projects Delivered', '50+ Happy Clients', '95% Retention Rate'].map((t) => (
              <div key={t} className="hero__trust-item">
                <span className="hero__trust-check">✓</span>
                <span>{t}</span>
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
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1200 }}
        >
          <motion.div
            className="hero__visual-inner"
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          >
            {/* Central glowing orb */}
            <div className="hero__orb" />

            {/* Service cards grid */}
            <div className="hero__cards-grid">
              {serviceCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="hero__service-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: card.delay },
                    y: { duration: 4 + i * 0.4, delay: card.delay, repeat: Infinity, ease: 'easeInOut' },
                  }}
                >
                  <span className="hero__card-icon" style={{ background: card.color }}>
                    {card.icon}
                  </span>
                  <div>
                    <div className="hero__card-title">{card.title}</div>
                    <div className="hero__card-desc">{card.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stat badges */}
            {statBadges.map((b) => (
              <motion.div
                key={b.label}
                className={`hero__stat-badge ${b.cls}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: b.delay }}
              >
                <span className="hero__stat-icon">{b.icon}</span>
                <div>
                  <div className="hero__stat-value">{b.value}</div>
                  <div className="hero__stat-label">{b.label}</div>
                </div>
              </motion.div>
            ))}

            {/* Central display card */}
            <motion.div
              className="hero__center-card"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="hero__center-card-header">
                <span className="hero__center-icon">🚀</span>
                <span className="hero__center-title">Campaign Performance</span>
              </div>
              <div className="hero__center-bars">
                {[40, 65, 45, 80, 55, 90, 70, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    className="hero__cbar"
                    style={{ height: `${h}%` }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  />
                ))}
              </div>
              <div className="hero__center-footer">
                <span className="hero__center-metric">+284% Growth</span>
                <span className="hero__center-period">Last 12 months</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="hero__wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--bg)" />
        </svg>
      </div>
    </section>
  )
}
