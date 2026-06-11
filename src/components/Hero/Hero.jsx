import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import './Hero.css'

const PARTICLES = [
  { x: '8%',  y: '18%', size: 3,   dur: 4.2, delay: 0   },
  { x: '15%', y: '72%', size: 2,   dur: 5.1, delay: 0.6 },
  { x: '22%', y: '42%', size: 4,   dur: 3.8, delay: 1.2 },
  { x: '31%', y: '85%', size: 2.5, dur: 6.0, delay: 0.3 },
  { x: '48%', y: '25%', size: 3,   dur: 4.5, delay: 0.9 },
  { x: '58%', y: '68%', size: 2,   dur: 5.5, delay: 1.5 },
  { x: '67%', y: '15%', size: 3.5, dur: 3.5, delay: 0.4 },
  { x: '76%', y: '55%', size: 2,   dur: 4.8, delay: 1.1 },
  { x: '85%', y: '35%', size: 3,   dur: 5.2, delay: 0.7 },
  { x: '92%', y: '78%', size: 2.5, dur: 4.0, delay: 1.8 },
]

function HeroParticles() {
  return (
    <div className="hero__particles" aria-hidden>
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="hero__particle"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{ y: [0, -12, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

const fadeUp = (delay = 0, duration = 0.65) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
})

/* Premium 3D dashboard SVG visual */
function HeroDashboard3D() {
  return (
    <svg viewBox="0 0 520 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
      <defs>
        <linearGradient id="hd-card-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a2a"/>
          <stop offset="100%" stopColor="#1a1a1a"/>
        </linearGradient>
        <linearGradient id="hd-bar1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#909090" stopOpacity="0.85"/>
          <stop offset="100%" stopColor="#606060" stopOpacity="0.3"/>
        </linearGradient>
        <linearGradient id="hd-bar2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7A7A7A" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#505050" stopOpacity="0.25"/>
        </linearGradient>
        <linearGradient id="hd-bar-peak" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B0B0B0" stopOpacity="0.95"/>
          <stop offset="100%" stopColor="#808080" stopOpacity="0.5"/>
        </linearGradient>
        <linearGradient id="hd-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(140,140,140,0.4)"/>
          <stop offset="50%" stopColor="rgba(180,180,180,0.85)"/>
          <stop offset="100%" stopColor="rgba(140,140,140,0.4)"/>
        </linearGradient>
        <linearGradient id="hd-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.12)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
        </linearGradient>
        <linearGradient id="hd-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.12)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.03)"/>
        </linearGradient>
        <linearGradient id="hd-silver-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#555"/>
          <stop offset="50%" stopColor="#8A8A8A"/>
          <stop offset="100%" stopColor="#555"/>
        </linearGradient>
        <linearGradient id="hd-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(192,192,192,0.6)"/>
          <stop offset="100%" stopColor="rgba(192,192,192,0)"/>
        </linearGradient>
        <filter id="hd-glow"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="hd-soft"><feGaussianBlur stdDeviation="2"/></filter>
        <filter id="hd-shadow"><feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#000" floodOpacity="0.6"/></filter>
        <clipPath id="hd-main-clip"><rect width="400" height="280" rx="20"/></clipPath>
      </defs>

      {/* ── Ambient glow orb ── */}
      <ellipse cx="260" cy="200" rx="180" ry="140" fill="rgba(192,192,192,0.04)" filter="url(#hd-soft)"/>

      {/* ── Floating geometric ring (back) ── */}
      <motion.g
        style={{transformOrigin:'260px 60px'}}
        animate={{rotate:[0,360]}}
        transition={{duration:18,repeat:Infinity,ease:'linear'}}
      >
        <ellipse cx="380" cy="48" rx="32" ry="12" stroke="url(#hd-ring)" strokeWidth="1.2" fill="none" opacity="0.5"/>
        <ellipse cx="380" cy="48" rx="20" ry="7" stroke="rgba(192,192,192,0.3)" strokeWidth="0.8" fill="none"/>
      </motion.g>

      {/* ── Floating glass sphere (back-left) ── */}
      <motion.g animate={{y:[0,-8,0]}} transition={{duration:5,repeat:Infinity,ease:'easeInOut',delay:0.5}}>
        <circle cx="68" cy="90" r="22" fill="url(#hd-glass)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
        <ellipse cx="62" cy="83" rx="8" ry="5" fill="rgba(255,255,255,0.12)" transform="rotate(-30,62,83)"/>
        <circle cx="68" cy="90" r="22" stroke="url(#hd-ring)" strokeWidth="0.6" fill="none"/>
      </motion.g>

      {/* ── MAIN DASHBOARD CARD ── */}
      <motion.g filter="url(#hd-shadow)" animate={{y:[0,-4,0]}} transition={{duration:6,repeat:Infinity,ease:'easeInOut'}}>
        <g transform="translate(60,80)">
          {/* Card body */}
          <rect width="400" height="280" rx="20" fill="url(#hd-card-bg)"/>
          <rect width="400" height="280" rx="20" stroke="rgba(255,255,255,0.10)" strokeWidth="1" fill="none"/>
          {/* Top gloss edge */}
          <rect x="1" y="1" width="398" height="1" rx="1" fill="rgba(255,255,255,0.18)"/>

          {/* Card header */}
          <rect x="20" y="20" width="120" height="6" rx="3" fill="rgba(255,255,255,0.5)"/>
          <rect x="20" y="32" width="70" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>

          {/* Live badge */}
          <rect x="320" y="18" width="60" height="20" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
          <circle cx="334" cy="28" r="3" fill="rgba(200,200,200,0.9)"/>
          <rect x="342" y="25" width="30" height="4" rx="2" fill="rgba(255,255,255,0.5)"/>

          {/* ── 3D Bar chart scene ── */}
          {/* Grid lines */}
          {[0,1,2,3].map(i => (
            <line key={i} x1="20" y1={80+i*30} x2="380" y2={80+i*30} stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          ))}

          {/* Bars — isometric 3D style */}
          {[
            {x:38, h:55, grad:'hd-bar1'},
            {x:85, h:80, grad:'hd-bar1'},
            {x:132,h:65, grad:'hd-bar2'},
            {x:179,h:100,grad:'hd-bar2'},
            {x:226,h:85, grad:'hd-bar1'},
            {x:273,h:118,grad:'hd-bar-peak'},
            {x:320,h:95, grad:'hd-bar1'},
          ].map(({x,h,grad},i) => (
            <g key={i}>
              {/* Side face */}
              <polygon
                points={`${x+28},${170-h} ${x+36},${162-h} ${x+36},162 ${x+28},170`}
                fill={`rgba(100,100,100,${0.15+i*0.02})`}
              />
              {/* Top face */}
              <polygon
                points={`${x},${170-h} ${x+28},${170-h} ${x+36},${162-h} ${x+8},${162-h}`}
                fill="url(#hd-silver-top)" opacity="0.9"
              />
              {/* Front face */}
              <rect x={x} y={170-h} width={28} height={h} fill={`url(#${grad})`} rx="2"/>
              {/* Label */}
              <text x={x+14} y={183} fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="Inter,sans-serif" textAnchor="middle">
                {['J','F','M','A','M','J','J'][i]}
              </text>
            </g>
          ))}

          {/* Trend line */}
          <path
            d="M52,165 C80,148 108,128 136,118 C164,108 190,128 218,105 C246,82 274,62 302,48 C320,38 338,36 348,32"
            fill="none" stroke="url(#hd-line)" strokeWidth="2" strokeLinecap="round"
          />
          {/* Area fill under line */}
          <path
            d="M52,165 C80,148 108,128 136,118 C164,108 190,128 218,105 C246,82 274,62 302,48 C320,38 338,36 348,32 L348,170 L52,170 Z"
            fill="url(#hd-area)"
          />
          {/* Peak dot */}
          <circle cx="302" cy="48" r="4" fill="#fff" filter="url(#hd-glow)"/>
          <circle cx="302" cy="48" r="8" fill="rgba(255,255,255,0.12)"/>

          {/* ── Footer metrics ── */}
          <line x1="20" y1="200" x2="380" y2="200" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
          {[{v:'3.2M',l:'Impressions',x:50},{v:'184%',l:'Traffic',x:170},{v:'4.8x',l:'ROAS',x:280}].map(m=>(
            <g key={m.l}>
              <text x={m.x} y={222} fontSize="16" fontWeight="800" fill="#fff" fontFamily="Inter,sans-serif" letterSpacing="-1">{m.v}</text>
              <text x={m.x} y={236} fontSize="7" fill="rgba(255,255,255,0.35)" fontFamily="Inter,sans-serif" textTransform="uppercase">{m.l}</text>
            </g>
          ))}
          {/* Metric dividers */}
          <line x1="140" y1="208" x2="140" y2="245" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
          <line x1="250" y1="208" x2="250" y2="245" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>

          {/* Bottom bar — glass */}
          <rect x="0" y="255" width="400" height="25" rx="0" fill="rgba(255,255,255,0.03)"/>
          <rect x="0" y="255" width="400" height="25" rx="0" stroke="none" fill="none"/>
          <rect x="20" y="261" width="60" height="5" rx="2" fill="rgba(255,255,255,0.12)"/>
          <rect x="88" y="261" width="40" height="5" rx="2" fill="rgba(255,255,255,0.07)"/>
          <rect x="310" y="259" width="70" height="9" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
          <rect x="318" y="262" width="54" height="3" rx="1" fill="rgba(255,255,255,0.3)"/>
        </g>
      </motion.g>

      {/* ── Floating KPI badge — top right ── */}
      <motion.g filter="url(#hd-shadow)" animate={{y:[0,-6,0]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut',delay:0.8}}>
        <g transform="translate(370,55)">
          <rect width="120" height="60" rx="14" fill="rgba(22,22,22,0.95)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
          <rect x="0" y="0" width="120" height="1" rx="1" fill="rgba(255,255,255,0.18)"/>
          <circle cx="18" cy="20" r="6" fill="rgba(192,192,192,0.2)" stroke="rgba(192,192,192,0.4)" strokeWidth="1"/>
          <text x="12" y="24" fontSize="8" fill="#C0C0C0" fontFamily="Inter,sans-serif" fontWeight="700">↑</text>
          <rect x="30" y="14" width="50" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
          <text x="14" y="44" fontSize="20" fontWeight="900" fill="#fff" fontFamily="Inter,sans-serif" letterSpacing="-1">+184%</text>
          <text x="14" y="54" fontSize="7" fill="rgba(255,255,255,0.35)" fontFamily="Inter,sans-serif">Organic Traffic</text>
        </g>
      </motion.g>

      {/* ── Floating mini-card — bottom left ── */}
      <motion.g filter="url(#hd-shadow)" animate={{y:[0,-5,0]}} transition={{duration:5.5,repeat:Infinity,ease:'easeInOut',delay:1.2}}>
        <g transform="translate(14,290)">
          <rect width="110" height="56" rx="14" fill="rgba(22,22,22,0.95)" stroke="rgba(255,255,255,0.10)" strokeWidth="1"/>
          <rect x="0" y="0" width="110" height="1" rx="1" fill="rgba(255,255,255,0.15)"/>
          <text x="12" y="24" fontSize="7" fill="rgba(255,255,255,0.35)" fontFamily="Inter,sans-serif">Avg. ROAS</text>
          <text x="12" y="44" fontSize="22" fontWeight="900" fill="#D9D9D9" fontFamily="Inter,sans-serif" letterSpacing="-1">4.8x</text>
          {/* mini sparkline */}
          <polyline points="68,38 76,30 84,33 92,22 100,18" fill="none" stroke="rgba(192,192,192,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      </motion.g>

      {/* ── Small floating glass orb ── */}
      <motion.g animate={{y:[0,-10,0],rotate:[0,5,0]}} transition={{duration:7,repeat:Infinity,ease:'easeInOut',delay:2}}>
        <circle cx="470" cy="300" r="18" fill="url(#hd-glass)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
        <ellipse cx="464" cy="294" rx="6" ry="4" fill="rgba(255,255,255,0.15)" transform="rotate(-25,464,294)"/>
      </motion.g>
    </svg>
  )
}

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
      <HeroParticles />

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
        </div>

        {/* ── RIGHT VISUAL — Premium 3D Dashboard ── */}
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
            className="hero__3d-wrap"
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          >
            <div className="hero__orb" />
            <HeroDashboard3D />
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
