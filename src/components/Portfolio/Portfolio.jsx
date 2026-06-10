import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './Portfolio.css'

const pillars = [
  { title: 'Strategy & Growth', desc: 'Data-driven planning that maps every growth lever to measurable business outcomes.' },
  { title: 'Content & SEO', desc: 'Authority content and technical SEO that compounds organic visibility over time.' },
  { title: 'Performance Marketing', desc: 'Precision paid campaigns engineered for lead generation and maximum ROAS.' },
  { title: 'Automation & Analytics', desc: 'Smart automation pipelines and real-time analytics to optimise and scale fast.' },
]

const achievements = [
  'Data-driven growth strategies',
  'High-converting marketing funnels',
  'SEO & content optimization',
  'Performance marketing excellence',
  'Analytics-backed decision making',
  'Continuous growth improvements',
]

const badges = [
  { label: 'ROI',             value: '4.8×', angle: 0   },
  { label: 'Leads',           value: '+320%', angle: 90  },
  { label: 'Growth',          value: '+180%', angle: 180 },
  { label: 'Conv. Rate',      value: '+64%',  angle: 270 },
]

function OrbitBadge({ label, value, angle }) {
  const progress = useMotionValue(angle)
  const r = 170
  const toRad = (deg) => (deg * Math.PI) / 180
  const x = useTransform(progress, (deg) => Math.cos(toRad(deg)) * r)
  const y = useTransform(progress, (deg) => Math.sin(toRad(deg)) * r)

  useAnimationFrame((t) => {
    progress.set(angle + t * 0.012)
  })

  return (
    <motion.div className="impact__badge" style={{ x, y }}>
      <span className="impact__badge-val">{value}</span>
      <span className="impact__badge-lbl">{label}</span>
    </motion.div>
  )
}

const revealLeft  = { initial: { opacity: 0, x: -32 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, margin: '-60px' } }
const revealRight = { initial: { opacity: 0, x:  32 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, margin: '-60px' } }
const revealUp    = { initial: { opacity: 0, y:  24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' } }

export default function Portfolio() {
  return (
    <section className="impact" id="portfolio">
      {/* ambient orbs */}
      <div className="impact__orb impact__orb--a" aria-hidden />
      <div className="impact__orb impact__orb--b" aria-hidden />

      <div className="impact__inner">
        {/* ── Header ── */}
        <motion.div className="impact__header" {...revealUp} transition={{ duration: 0.7 }}>
          <span className="impact__label">OUR IMPACT</span>
          <h2 className="impact__heading">
            We are <span className="impact__gradient">growth partners</span> that drive results
          </h2>
        </motion.div>

        {/* ── 3-col grid ── */}
        <div className="impact__grid">

          {/* LEFT */}
          <motion.div
            className="impact__col impact__col--left"
            {...revealLeft}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                className="impact__pillar"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09, ease: 'easeOut' }}
                whileHover="hover"
              >
                <motion.div
                  className="impact__pillar-inner"
                  variants={{ hover: { x: 6 } }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="impact__pillar-title">{p.title}</h3>
                  <p className="impact__pillar-desc">{p.desc}</p>
                </motion.div>
                {i < pillars.length - 1 && <div className="impact__divider" />}
              </motion.div>
            ))}
          </motion.div>

          {/* CENTER */}
          <div className="impact__col impact__col--center">
            <div className="impact__orbit-wrap">
              {/* rotating gradient ring */}
              <div className="impact__ring" aria-hidden />
              {/* floating image */}
              <motion.div
                className="impact__circle"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="impact__circle-glow" aria-hidden />
                {/* SVG dashboard illustration */}
                <svg viewBox="0 0 260 260" className="impact__svg" aria-label="Growth analytics dashboard">
                  {/* bg */}
                  <circle cx="130" cy="130" r="130" fill="#d8d5d0" />
                  {/* subtle inner shadow ring */}
                  <circle cx="130" cy="130" r="128" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="4"/>
                  {/* grid lines */}
                  {[50,80,110,140,170,200].map(y => (
                    <line key={y} x1="20" y1={y} x2="240" y2={y} stroke="rgba(0,0,0,0.07)" strokeWidth="1"/>
                  ))}
                  {/* 3D isometric bar chart */}
                  {[
                    [30,190,16,80],
                    [52,175,16,95],
                    [74,160,16,110],
                    [96,145,16,125],
                    [118,128,16,142],
                    [140,110,16,160],
                    [162,95,16,175],
                    [184,78,16,192],
                  ].map(([x,y,w,h],i) => (
                    <g key={i}>
                      {/* right face */}
                      <polygon
                        points={`${x+w},${y} ${x+w+8},${y-8} ${x+w+8},${260-30-8} ${x+w},${260-30}`}
                        fill={i===7?'rgba(0,0,0,0.55)':i>=5?'rgba(0,0,0,0.28)':'rgba(0,0,0,0.12)'}
                      />
                      {/* top face */}
                      <polygon
                        points={`${x},${y} ${x+w},${y} ${x+w+8},${y-8} ${x+8},${y-8}`}
                        fill={i===7?'rgba(0,0,0,0.4)':i>=5?'rgba(0,0,0,0.22)':'rgba(0,0,0,0.09)'}
                      />
                      {/* front face */}
                      <rect x={x} y={y} width={w} height={260-y-30}
                        rx="2"
                        fill={i===7?'rgba(0,0,0,0.72)':i>=5?'rgba(0,0,0,0.38)':'rgba(0,0,0,0.14)'}
                      />
                    </g>
                  ))}
                  {/* trend line */}
                  <polyline
                    points="38,188 60,173 82,158 104,143 126,126 148,108 170,93 192,76"
                    fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  />
                  {/* dots on trend */}
                  {[[38,188],[60,173],[82,158],[104,143],[126,126],[148,108],[170,93],[192,76]].map(([cx,cy],i) => (
                    <circle key={i} cx={cx} cy={cy} r="3" fill="rgba(0,0,0,0.65)" />
                  ))}
                </svg>
              </motion.div>
              {/* orbiting badges */}
              <div className="impact__orbit">
                {badges.map(b => <OrbitBadge key={b.label} {...b} />)}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            className="impact__col impact__col--right"
            {...revealRight}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {achievements.map((a, i) => (
              <motion.div
                key={a}
                className="impact__achieve"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover="hover"
              >
                <motion.div
                  className="impact__achieve-inner"
                  variants={{ hover: { x: 5 } }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="impact__check"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.2 + i * 0.08, type: 'spring', stiffness: 260 }}
                  >
                    ✓
                  </motion.span>
                  <span className="impact__achieve-text">{a}</span>
                </motion.div>
                {i < achievements.length - 1 && <div className="impact__divider" />}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
