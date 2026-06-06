import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './WhyChooseUs.css'

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We audit your brand, research competitors and identify the exact growth levers for your market.',
    dark: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'A data-backed growth roadmap tailored to your goals — channels, budget, timelines and KPIs.',
    dark: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Execution',
    desc: 'Our specialists ship across design, development, SEO and paid media with speed and precision.',
    dark: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Growth',
    desc: 'Compounding, sustainable growth that scales with your business — measured, reported, optimised.',
    dark: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
]

const stats = [
  { value: '3×', label: 'Avg. ROI' },
  { value: '97%', label: 'Retention' },
  { value: '8yr', label: 'Experience' },
]

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.15 + i * 0.13, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="why" id="why" ref={ref}>
      <div className="why__noise" aria-hidden />

      <div className="container">

        {/* ── Header row ── */}
        <motion.div
          className="why__top"
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="why__heading-col">
            <span className="section-tag">The Trendox Method</span>
            <h2 className="section-title">
              A Process Built for <em className="why__accent">Results</em>
            </h2>
            <p className="why__sub">How We Drive Consistent Results</p>
          </div>

          {/* Compact stats block */}
          <div className="why__stats">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="why__stat"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="why__stat-val">{s.value}</span>
                <span className="why__stat-lbl">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Staggered process grid ── */}
        <div className="why__grid">
          {steps.map((step, i) => (
            <motion.article
              key={step.num}
              className={`why-card ${step.dark ? 'why-card--dark' : ''} why-card--${i}`}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover="hover"
            >
              {/* Large bg number */}
              <span className="why-card__bg-num" aria-hidden>{step.num}</span>

              {/* Connecting line to next card */}
              {i < steps.length - 1 && (
                <motion.span
                  className="why-card__connector"
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                />
              )}

              {/* Icon + badge */}
              <div className="why-card__top">
                <motion.div
                  className="why-card__icon"
                  variants={{ hover: { scale: 1.12, rotate: -6 } }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  {step.icon}
                </motion.div>
                <span className="why-card__badge">{step.num}</span>
              </div>

              {/* Text */}
              <div className="why-card__body">
                <h3 className="why-card__title">{step.title}</h3>
                <p className="why-card__desc">{step.desc}</p>
              </div>

              {/* Bottom hover accent */}
              <motion.span
                className="why-card__bar"
                aria-hidden
                variants={{ hover: { scaleX: 1 } }}
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
