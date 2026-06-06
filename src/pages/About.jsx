import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA/CTA'
import Process from '../components/Process/Process'
import './About.page.css'

const vp = { once: true, margin: '-30px' }
const up = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: vp,
  transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] },
})

const STATS = [
  { val: '150+', label: 'Campaigns Launched', sub: 'Across 12 industries' },
  { val: '93%',  label: 'Client Retention',   sub: 'Year over year'       },
  { val: '4.2×', label: 'Average ROAS',        sub: 'Paid media portfolio' },
  { val: '60+',  label: 'Brands Scaled',       sub: 'Seed to Series B'    },
]

const WHY = [
  { title: 'Outcome-led',      body: 'Every decision traces back to a number that matters to your business.'   },
  { title: 'Radical honesty',  body: "We tell you what won't work as clearly as what will."                    },
  { title: 'No bloat',         body: 'The people who pitch you are the people who execute for you.'            },
  { title: 'Always iterating', body: "We don't set-and-forget. We optimise until the numbers stop improving."  },
]

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

export default function About() {
  return (
    <div className="ap">

      {/* 1 · HERO */}
      <section className="ap-hero">
        <div className="ap-hero__bg">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format" alt="" aria-hidden="true" />
          <div className="ap-hero__overlay" />
        </div>
        <div className="ap-hero__content container">
          <motion.p className="ap-eyebrow" {...up(0.05)}>
            <span className="ap-dot" />Est. 2019 · Growth Agency · 15 Specialists
          </motion.p>
          <motion.h1 className="ap-hero__h1" {...up(0.15)}>
            We don't manage<br />
            <em>campaigns.</em><br />
            <span className="ap-hero__stroke">We build growth.</span>
          </motion.h1>
          <motion.div className="ap-hero__foot" {...up(0.26)}>
            <div className="ap-hero__kpis">
              <div className="ap-kpi"><b>60+</b><span>brands scaled</span></div>
              <div className="ap-kpi-sep" />
              <div className="ap-kpi"><b>4.2×</b><span>avg. ROAS</span></div>
              <div className="ap-kpi-sep" />
              <div className="ap-kpi"><b>93%</b><span>retention</span></div>
            </div>
            <Link to="/contact" className="ap-hero__btn">Start a project →</Link>
          </motion.div>
        </div>
      </section>

      {/* 2 · STATS */}
      <section className="ap-stats">
        <div className="container ap-stats__grid">
          {STATS.map((s, i) => (
            <motion.div key={s.label} className="ap-stats__cell" {...up(i * 0.07)}>
              <div className="ap-stats__num"><Counter target={s.val} /></div>
              <div className="ap-stats__label">{s.label}</div>
              <div className="ap-stats__sub">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3 · WHO WE ARE */}
      <section className="ap-who">
        <div className="container ap-who__layout">
          <motion.div className="ap-who__img-wrap" {...up(0)}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format"
              alt="Team collaborating around a table"
              className="ap-who__img"
            />
          </motion.div>
          <motion.div className="ap-who__body" {...up(0.12)}>
            <span className="ap-tag">Who We Are</span>
            <h2 className="ap-h2">A team that treats<br /><em>your revenue</em> as ours.</h2>
            <p>Trendox is a performance-led growth agency. We work with ambitious brands — from seed-stage startups to established companies — who are done settling for vanity metrics.</p>
            <p>We stay intentionally small. Smaller means sharper. Every client gets senior attention, not junior handoffs.</p>
            <div className="ap-who__sig">
              <div className="ap-sig-text">Aryan</div>
              <div>
                <strong>Aryan Verma</strong>
                <span>Founder &amp; CEO</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4 · PROCESS */}
      <Process />

      {/* 5 · WHY CHOOSE US */}
      <section className="ap-why">
        <div className="container">
          <motion.div className="ap-why__head" {...up(0)}>
            <span className="ap-tag">Why Choose Trendox</span>
            <h2 className="ap-h2">What makes us<br /><em>different.</em></h2>
          </motion.div>
          <div className="ap-why__grid">
            {WHY.map((w, i) => (
              <motion.div key={w.title} className="ap-why__card" {...up(i * 0.07)}>
                <span className="ap-why__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · CTA */}
      <CTA />
    </div>
  )
}
