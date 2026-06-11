import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Process from '../Process/Process'
import CTA from '../CTA/CTA'
import './ServicePage.css'

const vp = { once: true, margin: '-30px' }
const up = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: vp,
  transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] },
})

function Counter({ target }) {
  const [val, setVal] = useState('0')
  const ref = useRef(null)
  const started = useRef(false)
  const numeric = parseFloat(target)
  const suffix = target.replace(/[\d.]/g, '')
  const isFloat = target.includes('.')

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const steps = 55, dur = 1400
        let frame = 0
        const id = setInterval(() => {
          frame++
          const ease = 1 - Math.pow(1 - frame / steps, 3)
          const cur = numeric * ease
          if (frame >= steps) { setVal(target); clearInterval(id) }
          else setVal((isFloat ? cur.toFixed(1) : Math.round(cur)) + suffix)
        }, dur / steps)
      }
    }, { threshold: 0.4 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [numeric, suffix, isFloat, target])

  return <span ref={ref}>{val}</span>
}

function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="sp-faq__list">
      {items.map((item, i) => (
        <div key={i} className={`sp-faq__item${open === i ? ' sp-faq__item--open' : ''}`}>
          <button className="sp-faq__q" onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.q}</span>
            <span className="sp-faq__icon">{open === i ? '−' : '+'}</span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                className="sp-faq__a"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p>{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

/**
 * ServicePage — reusable template
 *
 * Props:
 *  badge         string   — pill label e.g. "SEO Services"
 *  headline      jsx/str  — hero h1 (can contain <br/>/<em>)
 *  description   string   — hero subtitle
 *  cta1          { label, to }
 *  cta2          { label, to }
 *  heroVisual    jsx      — right-column service illustration
 *  heroMetrics   [{ icon, val, label }] — floating metric cards (2–3)
 *  stats         [{ val, label, sub }]   — 4 items
 *  delivers      [{ icon, title, desc }] — 6 items (bento grid)
 *  why           [{ title, body }]       — 3-4 items
 *  caseStudy     { image, tag, title, results: [{val,label}], cta }
 *  faqs          [{ q, a }]
 */
export default function ServicePage({
  badge,
  headline,
  description,
  cta1 = { label: 'Get Started →', to: '/contact' },
  cta2 = { label: 'See Results', to: '/portfolio' },
  heroVisual,
  heroMetrics,
  stats,
  delivers,
  why,
  caseStudy,
  faqs,
}) {
  return (
    <div className="sp">

      {/* ── 1. HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero__bg-grid" aria-hidden />
        <div className="sp-hero__bloom" aria-hidden />
        <div className="sp-hero__noise" aria-hidden />

        {/* Mountain waves */}
        <svg className="sp-hero__mountains" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,320 L0,180 C80,150 200,90 340,70 C460,52 520,130 660,110 C780,92 880,30 1020,20 C1140,10 1260,80 1440,60 L1440,320 Z" fill="rgba(255,255,255,0.03)" />
          <path d="M0,320 L0,220 C120,200 240,150 380,130 C500,112 560,180 700,165 C820,150 940,90 1080,75 C1200,62 1320,120 1440,105 L1440,320 Z" fill="rgba(255,255,255,0.05)" />
          <path d="M0,265 C100,250 220,210 360,192 C480,176 560,235 700,220 C820,206 960,160 1100,148 C1220,138 1340,185 1440,172" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
          <path d="M0,320 L0,265 C100,250 220,210 360,192 C480,176 560,235 700,220 C820,206 960,160 1100,148 C1220,138 1340,185 1440,172 L1440,320 Z" fill="rgba(255,255,255,0.07)" />
        </svg>

        <div className="container sp-hero__inner">
          <div className="sp-hero__content">
            <motion.div className="sp-hero__pill" {...up(0)}>
              <span className="sp-hero__pill-dot" />
              <span>{badge}</span>
            </motion.div>
            <motion.h1 className="sp-hero__h1" {...up(0.08)}>{headline}</motion.h1>
            <motion.p className="sp-hero__desc" {...up(0.15)}>{description}</motion.p>
            <motion.div className="sp-hero__ctas" {...up(0.21)}>
              <Link to={cta1.to} className="btn-primary">{cta1.label}</Link>
              <Link to={cta2.to} className="btn-outline">{cta2.label}</Link>
            </motion.div>
          </div>
          {heroVisual && (
            <motion.div
              className="sp-hero__visual-wrap"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="sp-hero__visual">
                {heroVisual}
              </div>
              {heroMetrics?.map((m, i) => (
                <motion.div
                  key={i}
                  className={`sp-hero__metric sp-hero__metric--${i}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="sp-hero__metric-icon">{m.icon}</span>
                  <div>
                    <div className="sp-hero__metric-val">{m.val}</div>
                    <div className="sp-hero__metric-label">{m.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Bottom wave */}
        <div className="sp-hero__wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--bg)" />
          </svg>
        </div>
      </section>

      {/* ── 2. STATS ── */}
      {stats && (
        <section className="sp-stats">
          <div className="container sp-stats__grid">
            {stats.map((s, i) => (
              <motion.div key={s.label} className="sp-stats__cell" {...up(i * 0.07)}>
                <div className="sp-stats__num"><Counter target={s.val} /></div>
                <div className="sp-stats__label">{s.label}</div>
                {s.sub && <div className="sp-stats__sub">{s.sub}</div>}
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ── 3. WHAT WE DELIVER ── */}
      {delivers && (
        <section className="sp-delivers section">
          <div className="container">
            <motion.div className="sp-section-head" {...up(0)}>
              <span className="ap-tag">What We Deliver</span>
              <h2 className="ap-h2">Every angle,<br /><em>fully covered.</em></h2>
            </motion.div>
            <div className="sp-delivers__grid">
              {delivers.map((d, i) => (
                <motion.div key={d.title} className="sp-deliver-card" {...up(i * 0.07)}>
                  <span className="sp-deliver-card__icon">{d.icon}</span>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. PROCESS ── */}
      <Process />

      {/* ── 5. WHY CHOOSE TRENDOX ── */}
      {why && (
        <section className="sp-why">
          <div className="container">
            <motion.div className="sp-section-head" {...up(0)}>
              <span className="ap-tag">Why Choose Trendox</span>
              <h2 className="ap-h2">What makes us<br /><em>different.</em></h2>
            </motion.div>
            <div className="sp-why__grid">
              {why.map((w, i) => (
                <motion.div key={w.title} className="ap-why__card" {...up(i * 0.08)}>
                  <span className="ap-why__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{w.title}</h3>
                  <p>{w.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. CASE STUDY ── */}
      {caseStudy && (
        <section className="sp-case section--alt section">
          <div className="container sp-case__inner">
            <motion.div className="sp-case__img-wrap" {...up(0)}>
              <img src={caseStudy.image} alt={caseStudy.title} />
            </motion.div>
            <motion.div className="sp-case__body" {...up(0.12)}>
              <span className="ap-tag">{caseStudy.tag}</span>
              <h2 className="ap-h2" style={{ marginTop: 14, marginBottom: 20 }}>{caseStudy.title}</h2>
              <div className="sp-case__results">
                {caseStudy.results.map((r) => (
                  <div key={r.label} className="sp-case__stat">
                    <strong>{r.val}</strong>
                    <span>{r.label}</span>
                  </div>
                ))}
              </div>
              <Link to={caseStudy.cta?.to || '/portfolio'} className="btn-primary" style={{ marginTop: 28, alignSelf: 'flex-start' }}>
                {caseStudy.cta?.label || 'View Full Case Study →'}
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── 7. FAQ ── */}
      {faqs && (
        <section className="sp-faq section">
          <div className="container sp-faq__layout">
            <motion.div className="sp-faq__left" {...up(0)}>
              <span className="ap-tag">FAQ</span>
              <h2 className="ap-h2">Common<br /><em>questions.</em></h2>
              <p>Everything you need to know before getting started.</p>
            </motion.div>
            <motion.div {...up(0.1)}>
              <FAQAccordion items={faqs} />
            </motion.div>
          </div>
        </section>
      )}

      {/* ── 8. CTA ── */}
      <CTA />
    </div>
  )
}
