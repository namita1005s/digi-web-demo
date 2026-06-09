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

      {/* Mountain-style layered white waves */}
      <svg className="hero__mountains" viewBox="0 0 1440 560" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        {/* Back range — faintest, tallest peaks */}
        <path d="M0,560 L0,380 C80,340 160,260 280,220 C380,185 420,260 520,240 C620,220 680,140 800,120 C920,100 980,200 1080,180 C1160,165 1240,100 1340,130 L1440,110 L1440,560 Z"
          fill="rgba(255,255,255,0.03)" />
        {/* Mid range */}
        <path d="M0,560 L0,420 C100,400 180,320 300,300 C400,282 460,360 560,340 C660,318 720,240 860,210 C980,184 1040,280 1160,260 C1260,244 1360,200 1440,220 L1440,560 Z"
          fill="rgba(255,255,255,0.05)" />
        {/* Front range — brightest, lowest peaks */}
        <path d="M0,560 L0,460 C120,440 200,380 340,360 C460,342 520,420 640,400 C760,378 840,300 980,280 C1080,264 1160,340 1280,320 C1360,306 1400,280 1440,290 L1440,560 Z"
          fill="rgba(255,255,255,0.08)" />
        {/* Foreground ridge — solid edge line */}
        <path d="M0,560 L0,500 C100,490 200,450 320,430 C440,412 520,470 660,455 C780,440 880,390 1020,375 C1120,363 1220,410 1340,395 L1440,385 L1440,560 Z"
          fill="rgba(255,255,255,0.06)" />
        {/* Crisp outline on foreground ridge */}
        <path d="M0,500 C100,490 200,450 320,430 C440,412 520,470 660,455 C780,440 880,390 1020,375 C1120,363 1220,410 1340,395 L1440,385"
          fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
        {/* Mid range outline */}
        <path d="M0,420 C100,400 180,320 300,300 C400,282 460,360 560,340 C660,318 720,240 860,210 C980,184 1040,280 1160,260 C1260,244 1360,200 1440,220"
          fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
        {/* Back range outline */}
        <path d="M0,380 C80,340 160,260 280,220 C380,185 420,260 520,240 C620,220 680,140 800,120 C920,100 980,200 1080,180 C1160,165 1240,100 1340,130 L1440,110"
          fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
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
