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
                  <defs>
                    <linearGradient id="port-bg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C8C4BE"/><stop offset="100%" stopColor="#B0ACA6"/>
                    </linearGradient>
                    <linearGradient id="port-bar-lo" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#A8A49E"/><stop offset="100%" stopColor="#888480"/>
                    </linearGradient>
                    <linearGradient id="port-bar-hi" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#585654"/><stop offset="100%" stopColor="#383634"/>
                    </linearGradient>
                    <linearGradient id="port-bar-md" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#787674"/><stop offset="100%" stopColor="#545250"/>
                    </linearGradient>
                    <filter id="port-glow"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <filter id="port-shadow"><feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#00000030"/></filter>
                  </defs>
                  {/* bg circle */}
                  <circle cx="130" cy="130" r="130" fill="url(#port-bg)"/>
                  {/* inner bevel ring */}
                  <circle cx="130" cy="130" r="128" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2"/>
                  <circle cx="130" cy="130" r="126" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5"/>
                  {/* grid lines */}
                  {[60,90,120,150,180,210].map(y => (
                    <line key={y} x1="18" y1={y} x2="242" y2={y} stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
                  ))}
                  {/* floor shadow */}
                  <ellipse cx="130" cy="232" rx="90" ry="6" fill="rgba(0,0,0,0.08)"/>
                  {/* 3D isometric bars */}
                  {[
                    {x:28, y:190, h:42, g:'port-bar-lo'},
                    {x:50, y:175, h:57, g:'port-bar-lo'},
                    {x:72, y:160, h:72, g:'port-bar-lo'},
                    {x:94, y:145, h:87, g:'port-bar-md'},
                    {x:116,y:128, h:104,g:'port-bar-md'},
                    {x:138,y:110, h:122,g:'port-bar-hi'},
                    {x:160,y:94,  h:138,g:'port-bar-hi'},
                    {x:182,y:78,  h:154,g:'port-bar-hi'},
                  ].map(({x,y,h,g},i) => (
                    <g key={i}>
                      {/* right face — darker */}
                      <polygon
                        points={`${x+16},${y} ${x+24},${y-8} ${x+24},${224} ${x+16},${232}`}
                        fill={i>=5?'rgba(30,28,26,0.55)':i>=3?'rgba(60,58,56,0.35)':'rgba(80,78,76,0.22)'}
                      />
                      {/* top face — lighter highlight */}
                      <polygon
                        points={`${x},${y} ${x+16},${y} ${x+24},${y-8} ${x+8},${y-8}`}
                        fill={i>=5?'rgba(140,136,130,0.9)':i>=3?'rgba(160,156,150,0.85)':'rgba(180,176,170,0.8)'}
                      />
                      {/* top edge highlight */}
                      <line x1={x} y1={y} x2={x+8} y2={y-8} stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
                      <line x1={x+8} y1={y-8} x2={x+24} y2={y-8} stroke="rgba(255,255,255,0.22)" strokeWidth="0.8"/>
                      {/* front face */}
                      <rect x={x} y={y} width={16} height={232-y} rx="1" fill={`url(#${g})`}/>
                    </g>
                  ))}
                  {/* trend line */}
                  <polyline
                    points="36,188 58,173 80,158 102,143 124,126 146,108 168,92 190,76"
                    fill="none" stroke="rgba(40,38,36,0.65)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    filter="url(#port-glow)"
                  />
                  {/* trend area fill */}
                  <polygon
                    points="36,188 58,173 80,158 102,143 124,126 146,108 168,92 190,76 190,232 36,232"
                    fill="rgba(0,0,0,0.06)"
                  />
                  {/* peak dot with halo */}
                  <circle cx="190" cy="76" r="8" fill="rgba(60,58,56,0.15)"/>
                  <circle cx="190" cy="76" r="4" fill="#484644" filter="url(#port-glow)"/>
                  {/* other dots */}
                  {[[36,188],[58,173],[80,158],[102,143],[124,126],[146,108],[168,92]].map(([cx,cy],i) => (
                    <circle key={i} cx={cx} cy={cy} r="2.5" fill="rgba(60,58,54,0.6)"/>
                  ))}
                  {/* stat badge */}
                  <g filter="url(#port-shadow)" transform="translate(18,18)">
                    <polygon points="88,6 94,12 94,44 88,38" fill="rgba(40,38,36,0.35)"/>
                    <polygon points="6,38 12,44 94,44 88,38" fill="rgba(30,28,26,0.25)"/>
                    <rect width="88" height="38" rx="8" fill="rgba(40,38,36,0.82)"/>
                    <rect x="0" y="0" width="88" height="1.5" rx="1" fill="rgba(255,255,255,0.18)"/>
                    <text x="10" y="16" fontSize="6" fill="rgba(200,196,190,0.6)" fontFamily="Inter,sans-serif">Growth</text>
                    <text x="10" y="31" fontSize="13" fontWeight="900" fill="#C8C4BE" fontFamily="Inter,sans-serif">+180%</text>
                  </g>
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
