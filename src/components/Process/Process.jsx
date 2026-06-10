import { motion, useInView, useAnimation, animate } from 'framer-motion'
import { useRef, useEffect, useState, useCallback } from 'react'
import './Process.css'

const STEPS = [
  { id: 0, label: 'Strategy',            icon: '◎' },
  { id: 1, label: 'Content Creation',    icon: '✦' },
  { id: 2, label: 'Knowledge Base',      icon: '⬡' },
  { id: 3, label: 'Content Updates',     icon: '↺' },
  { id: 4, label: 'Auditing',            icon: '⬖' },
  { id: 5, label: 'Strategy Refinement', icon: '◈' },
]

/* ── Floating particles background ── */
function Particles() {
  const dots = Array.from({ length: 18 }, (_, i) => i)
  return (
    <div className="tm-particles" aria-hidden>
      {dots.map(i => (
        <motion.span
          key={i}
          className="tm-particle"
          style={{ left: `${5 + (i * 5.5) % 92}%`, top: `${10 + (i * 17) % 78}%` }}
          animate={{ y: [0, -14, 0], opacity: [0.18, 0.45, 0.18] }}
          transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: (i * 0.37) % 3, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

/* ── Desktop: horizontal flow with SVG arc ── */
function DesktopFlow({ active, inView }) {
  const svgRef = useRef(null)
  const [pathLen, setPathLen] = useState(0)
  const [particlePos, setParticlePos] = useState({ x: 0, y: 0 })

  // viewBox: 1600×380 — big canvas, lots of breathing room
  // Cards: 170×96, wave amplitude 130px so top cards and bottom cards are clearly separated
  const cardW = 170, cardH = 96
  const vbW = 1600, vbH = 380

  // 6 cards spread across full width, alternating top (cy=40) and bottom (cy=220)
  // Path entry/exit points are at card bottom-center (top row) or card top-center (bottom row)
  // so the line leaves/enters cards cleanly and never overlaps text
  const colX = [80, 356, 632, 908, 1184, 1460]
  const positions = [
    { cx: colX[0], cy: 30  },   // top
    { cx: colX[1], cy: 215 },   // bottom
    { cx: colX[2], cy: 30  },   // top
    { cx: colX[3], cy: 215 },   // bottom
    { cx: colX[4], cy: 30  },   // top
    { cx: colX[5], cy: 215 },   // bottom
  ]

  // Path connection points: exit from bottom of top-cards, enter top of bottom-cards
  const pts = positions.map((p, i) =>
    i % 2 === 0
      ? { x: p.cx, y: p.cy + cardH + 18 }   // 18px below card bottom (top-row card)
      : { x: p.cx, y: p.cy - 18 }            // 18px above card top (bottom-row card)
  )

  function cubicPath(points) {
    let d = `M ${points[0].x} ${points[0].y}`
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1], curr = points[i]
      const mid = (curr.x - prev.x) / 2
      d += ` C ${prev.x + mid} ${prev.y}, ${prev.x + mid} ${curr.y}, ${curr.x} ${curr.y}`
    }
    // return loop sweeps below all cards at y=350
    const last = points[points.length - 1]
    d += ` C ${last.x + 100} ${last.y + 110}, ${points[0].x - 100} ${points[0].y + 110}, ${points[0].x} ${points[0].y}`
    return d
  }

  const pathD = cubicPath(pts)

  useEffect(() => {
    if (!svgRef.current) return
    const p = svgRef.current.querySelector('#tm-flow-path')
    if (p) setPathLen(p.getTotalLength())
  }, [])

  useEffect(() => {
    if (!pathLen || !inView || !svgRef.current) return
    const path = svgRef.current.querySelector('#tm-flow-path')
    let raf, start = null, dur = 7000
    function step(ts) {
      if (!start) start = ts
      const t = ((ts - start) % dur) / dur
      const pt = path.getPointAtLength(t * pathLen)
      setParticlePos({ x: pt.x, y: pt.y })
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [pathLen, inView])

  return (
    <div className="tm-desktop">
      <svg ref={svgRef} className="tm-svg" viewBox={`0 0 ${vbW} ${vbH}`} preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="tm-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="rgba(255,255,255,0.2)" stopOpacity="1"/>
            <stop offset="50%"  stopColor="rgba(255,255,255,0.08)" stopOpacity="1"/>
            <stop offset="100%" stopColor="rgba(255,255,255,0.2)" stopOpacity="1"/>
          </linearGradient>
          <filter id="tm-glow">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <radialGradient id="tm-particle-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="1"/>
            <stop offset="100%" stopColor="rgba(255,255,255,0)" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* Main flow path */}
        <motion.path
          id="tm-flow-path"
          d={pathD}
          fill="none"
          stroke="url(#tm-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#tm-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Moving particle */}
        {inView && pathLen > 0 && (
          <>
            <circle cx={particlePos.x} cy={particlePos.y} r="12" fill="url(#tm-particle-grad)" opacity="0.2"/>
            <circle cx={particlePos.x} cy={particlePos.y} r="4.5" fill="#ffffff" filter="url(#tm-glow)" opacity="0.85"/>
          </>
        )}

        {/* Cards rendered as foreignObject */}
        {STEPS.map((step, i) => {
          const pos = positions[i]
          const isActive = active === i
          return (
            <foreignObject
              key={step.id}
              x={pos.cx - cardW / 2}
              y={pos.cy}
              width={cardW}
              height={cardH}
              style={{ overflow: 'visible' }}
            >
              <div
                className={`tm-card${isActive ? ' tm-card--active' : ''}`}
                style={{ width: cardW, height: cardH }}
              >
                {isActive && <span className="tm-pulse" />}
                <span className="tm-card__icon">{step.icon}</span>
                <span className="tm-card__label">{step.label}</span>
              </div>
            </foreignObject>
          )
        })}

        {/* Loop label sits inside the return arc, well below cards */}
        <text x={vbW / 2} y="368" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.2)" opacity="1" fontFamily="sans-serif" letterSpacing="3">
          ↺  CONTINUOUS LOOP
        </text>
      </svg>
    </div>
  )
}

/* ── Mobile: vertical flow ── */
function MobileFlow({ active, inView }) {
  return (
    <div className="tm-mobile">
      {STEPS.map((step, i) => (
        <div key={step.id} className="tm-mobile__item">
          <motion.div
            className={`tm-card tm-card--mobile${active === i ? ' tm-card--active' : ''}`}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {active === i && <span className="tm-pulse" />}
            <span className="tm-card__icon">{step.icon}</span>
            <span className="tm-card__label">{step.label}</span>
          </motion.div>
          {i < STEPS.length - 1 ? (
            <div className="tm-mobile__connector">
              <motion.div
                className="tm-mobile__line"
                style={{ background: `linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.04))` }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              />
            </div>
          ) : (
            <div className="tm-mobile__loop">↺ loops back to Strategy</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!inView) return
    const id = setInterval(() => setActive(a => (a + 1) % STEPS.length), 2000)
    return () => clearInterval(id)
  }, [inView])

  return (
    <section className="tm" ref={ref}>
      <Particles />
      <div className="tm__orb tm__orb--1" />
      <div className="tm__orb tm__orb--2" />
      <div className="tm__grid" aria-hidden />

      <div className="container">
        <motion.div
          className="tm__head"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="tm__badge">The Trendox Method</span>
          <h2 className="tm__title">A Process Built for <em>Results</em></h2>
          <p className="tm__desc">
            A continuous growth framework where strategy, content, insights, optimization,
            and refinement work together in an ongoing cycle to drive measurable business growth.
          </p>
        </motion.div>

        <DesktopFlow active={active} inView={inView} />
        <MobileFlow  active={active} inView={inView} />
      </div>
    </section>
  )
}
