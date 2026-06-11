import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import './Hero.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const PARTICLES = [
  { x: '6%',  y: '20%', s: 3,   d: 4.2, delay: 0    },
  { x: '14%', y: '68%', s: 2,   d: 5.1, delay: 0.6  },
  { x: '24%', y: '44%', s: 4,   d: 3.8, delay: 1.2  },
  { x: '38%', y: '82%', s: 2.5, d: 6.0, delay: 0.3  },
  { x: '52%', y: '15%', s: 3,   d: 4.5, delay: 0.9  },
  { x: '63%', y: '72%', s: 2,   d: 5.5, delay: 1.5  },
  { x: '74%', y: '30%', s: 3.5, d: 3.5, delay: 0.4  },
  { x: '82%', y: '58%', s: 2,   d: 4.8, delay: 1.1  },
  { x: '90%', y: '22%', s: 3,   d: 5.2, delay: 0.7  },
  { x: '96%', y: '75%', s: 2.5, d: 4.0, delay: 1.8  },
]

function HeroParticles() {
  return (
    <div className="hero__particles" aria-hidden>
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="hero__particle"
          style={{ left: p.x, top: p.y, width: p.s, height: p.s }}
          animate={{ y: [0, -14, 0], opacity: [0.12, 0.45, 0.12] }}
          transition={{ duration: p.d, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

/* ── Full 3D Dashboard with dull stone/slate palette ── */
function HeroDashboard3D() {
  return (
    <svg viewBox="0 0 500 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero__dash-svg">
      <defs>
        {/* Card background — deep charcoal */}
        <linearGradient id="d-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A2825"/>
          <stop offset="100%" stopColor="#1A1816"/>
        </linearGradient>
        {/* Bar gradients — dull stone tones */}
        <linearGradient id="d-bar-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7A7672" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#484442" stopOpacity="0.3"/>
        </linearGradient>
        <linearGradient id="d-bar-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#908C88" stopOpacity="0.95"/>
          <stop offset="100%" stopColor="#585452" stopOpacity="0.35"/>
        </linearGradient>
        <linearGradient id="d-bar-pk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B0ACA8" stopOpacity="1"/>
          <stop offset="100%" stopColor="#787472" stopOpacity="0.45"/>
        </linearGradient>
        {/* 3D bar top face — stone highlight */}
        <linearGradient id="d-top-face" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#424040"/>
          <stop offset="50%" stopColor="#6A6866"/>
          <stop offset="100%" stopColor="#424040"/>
        </linearGradient>
        {/* Trend area fill */}
        <linearGradient id="d-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(176,172,168,0.12)"/>
          <stop offset="100%" stopColor="rgba(176,172,168,0)"/>
        </linearGradient>
        {/* Glass orb fill */}
        <linearGradient id="d-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(200,196,192,0.16)"/>
          <stop offset="100%" stopColor="rgba(200,196,192,0.02)"/>
        </linearGradient>
        {/* Ring stroke */}
        <linearGradient id="d-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(176,172,168,0.7)"/>
          <stop offset="100%" stopColor="rgba(176,172,168,0)"/>
        </linearGradient>
        {/* Badge face */}
        <linearGradient id="d-badge-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#242220"/>
          <stop offset="100%" stopColor="#161412"/>
        </linearGradient>

        <filter id="d-shadow"><feDropShadow dx="0" dy="12" stdDeviation="22" floodColor="#000" floodOpacity="0.7"/></filter>
        <filter id="d-glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="d-soft"><feGaussianBlur stdDeviation="18"/></filter>
        <filter id="d-badge-sh"><feDropShadow dx="4" dy="8" stdDeviation="10" floodColor="#000" floodOpacity="0.6"/></filter>
      </defs>

      {/* ambient glow */}
      <ellipse cx="250" cy="190" rx="200" ry="140" fill="rgba(140,136,132,0.04)" filter="url(#d-soft)"/>

      {/* ── Floating glass sphere — top left ── */}
      <motion.g animate={{y:[0,-9,0]}} transition={{duration:6,repeat:Infinity,ease:'easeInOut',delay:0.4}}>
        {/* sphere back shadow */}
        <ellipse cx="62" cy="88" rx="20" ry="6" fill="rgba(0,0,0,0.25)"/>
        {/* sphere body */}
        <circle cx="60" cy="76" r="24" fill="url(#d-glass)" stroke="rgba(200,196,192,0.14)" strokeWidth="1"/>
        {/* specular highlight */}
        <ellipse cx="53" cy="68" rx="9" ry="6" fill="rgba(255,255,255,0.16)" transform="rotate(-30,53,68)"/>
        {/* rim light */}
        <circle cx="60" cy="76" r="24" stroke="url(#d-ring)" strokeWidth="0.8" fill="none"/>
        {/* bottom edge shadow */}
        <ellipse cx="66" cy="90" rx="14" ry="4" fill="rgba(0,0,0,0.18)"/>
      </motion.g>

      {/* ── Rotating 3D ring — top right ── */}
      <motion.g style={{transformOrigin:'420px 50px'}} animate={{rotate:[0,360]}} transition={{duration:16,repeat:Infinity,ease:'linear'}}>
        {/* ring shadow */}
        <ellipse cx="424" cy="60" rx="30" ry="10" fill="rgba(0,0,0,0.2)"/>
        <ellipse cx="420" cy="50" rx="34" ry="13" stroke="url(#d-ring)" strokeWidth="2" fill="none" opacity="0.65"/>
        <ellipse cx="420" cy="50" rx="20" ry="7" stroke="rgba(176,172,168,0.28)" strokeWidth="0.9" fill="none"/>
        {/* ring highlight dot */}
        <circle cx="386" cy="50" r="2.5" fill="rgba(220,216,212,0.6)"/>
      </motion.g>

      {/* ── Main 3D Dashboard card ── */}
      <motion.g filter="url(#d-shadow)" animate={{y:[0,-5,0]}} transition={{duration:6.5,repeat:Infinity,ease:'easeInOut'}}>
        {/* card 3D extrude — right face */}
        <polygon points="450,70 458,78 458,348 450,340" fill="rgba(10,8,6,0.65)"/>
        {/* card 3D extrude — bottom face */}
        <polygon points="50,340 450,340 458,348 58,348" fill="rgba(8,6,4,0.55)"/>
        {/* card top edge highlight */}
        <polygon points="50,70 450,70 458,78 58,78" fill="rgba(200,196,192,0.08)"/>

        <g transform="translate(50,70)">
          <rect width="400" height="270" rx="18" fill="url(#d-bg)"/>
          <rect width="400" height="270" rx="18" stroke="rgba(200,196,192,0.09)" strokeWidth="1" fill="none"/>
          {/* top gloss line */}
          <rect x="1" y="1" width="398" height="1.5" rx="1" fill="rgba(255,255,255,0.14)"/>
          {/* left edge light */}
          <rect x="0" y="18" width="1" height="234" rx="1" fill="rgba(255,255,255,0.06)"/>

          {/* header bar */}
          <rect x="20" y="20" width="110" height="6" rx="3" fill="rgba(200,196,192,0.45)"/>
          <rect x="20" y="32" width="65" height="4" rx="2" fill="rgba(200,196,192,0.16)"/>

          {/* live pill */}
          <rect x="315" y="18" width="64" height="20" rx="10" fill="rgba(200,196,192,0.06)" stroke="rgba(200,196,192,0.12)" strokeWidth="1"/>
          <circle cx="329" cy="28" r="3" fill="rgba(176,172,168,0.8)"/>
          <rect x="337" y="25" width="32" height="4" rx="2" fill="rgba(200,196,192,0.38)"/>

          {/* grid lines */}
          {[0,1,2,3].map(i=>(
            <line key={i} x1="20" y1={72+i*28} x2="380" y2={72+i*28} stroke="rgba(200,196,192,0.04)" strokeWidth="1"/>
          ))}

          {/* ── 3D extruded bars ── */}
          {[
            {x:30,  h:50,  g:'d-bar-a'},
            {x:78,  h:75,  g:'d-bar-a'},
            {x:126, h:60,  g:'d-bar-b'},
            {x:174, h:95,  g:'d-bar-b'},
            {x:222, h:78,  g:'d-bar-a'},
            {x:270, h:115, g:'d-bar-pk'},
            {x:318, h:90,  g:'d-bar-b'},
          ].map(({x,h,g},i)=>(
            <g key={i}>
              {/* right side face — darkest */}
              <polygon points={`${x+28},${165-h} ${x+36},${157-h} ${x+36},157 ${x+28},165`}
                fill={`rgba(30,28,26,${0.55+i*0.02})`}/>
              {/* top face — stone highlight */}
              <polygon points={`${x},${165-h} ${x+28},${165-h} ${x+36},${157-h} ${x+8},${157-h}`}
                fill="url(#d-top-face)" opacity="0.82"/>
              {/* top edge specular */}
              <line x1={x} y1={165-h} x2={x+8} y2={157-h} stroke="rgba(220,216,212,0.22)" strokeWidth="0.8"/>
              <line x1={x+8} y1={157-h} x2={x+36} y2={157-h} stroke="rgba(200,196,192,0.15)" strokeWidth="0.8"/>
              {/* front face */}
              <rect x={x} y={165-h} width={28} height={h} fill={`url(#${g})`} rx="2"/>
              {/* bottom base shadow */}
              <rect x={x} y={163} width={28} height={3} rx="1" fill="rgba(0,0,0,0.3)"/>
              <text x={x+14} y={176} fontSize="7" fill="rgba(200,196,192,0.26)" fontFamily="Inter,sans-serif" textAnchor="middle">
                {['J','F','M','A','M','J','J'][i]}
              </text>
            </g>
          ))}

          {/* trend area fill */}
          <path d="M44,162 C75,145 105,122 133,112 C161,102 188,122 215,100 C242,78 268,56 295,44 C313,35 330,32 342,28 L342,165 L44,165 Z"
            fill="url(#d-area)"/>
          {/* trend line */}
          <path d="M44,162 C75,145 105,122 133,112 C161,102 188,122 215,100 C242,78 268,56 295,44 C313,35 330,32 342,28"
            fill="none" stroke="rgba(176,172,168,0.65)" strokeWidth="1.8" strokeLinecap="round"/>
          {/* peak dot with halo */}
          <circle cx="295" cy="44" r="10" fill="rgba(176,172,168,0.1)"/>
          <circle cx="295" cy="44" r="4.5" fill="rgba(220,216,212,0.9)" filter="url(#d-glow)"/>

          {/* footer divider */}
          <line x1="20" y1="193" x2="380" y2="193" stroke="rgba(200,196,192,0.06)" strokeWidth="1"/>

          {/* footer metrics */}
          {[{v:'3.2M',l:'Impressions',x:40},{v:'184%',l:'Traffic',x:160},{v:'4.8x',l:'ROAS',x:270}].map(m=>(
            <g key={m.l}>
              <text x={m.x} y={214} fontSize="15" fontWeight="800" fill="rgba(220,216,212,0.9)" fontFamily="Inter,sans-serif" letterSpacing="-0.5">{m.v}</text>
              <text x={m.x} y={228} fontSize="7" fill="rgba(176,172,168,0.3)" fontFamily="Inter,sans-serif">{m.l}</text>
            </g>
          ))}
          <line x1="138" y1="200" x2="138" y2="238" stroke="rgba(200,196,192,0.06)" strokeWidth="1"/>
          <line x1="248" y1="200" x2="248" y2="238" stroke="rgba(200,196,192,0.06)" strokeWidth="1"/>

          {/* bottom bar */}
          <rect x="0" y="248" width="400" height="22" fill="rgba(200,196,192,0.02)"/>
          <rect x="20" y="254" width="55" height="5" rx="2" fill="rgba(200,196,192,0.09)"/>
          <rect x="83" y="254" width="35" height="5" rx="2" fill="rgba(200,196,192,0.05)"/>
          <rect x="308" y="252" width="72" height="9" rx="4" fill="rgba(200,196,192,0.06)" stroke="rgba(200,196,192,0.1)" strokeWidth="1"/>
          <rect x="316" y="255" width="56" height="3" rx="1" fill="rgba(200,196,192,0.25)"/>
        </g>
      </motion.g>

      {/* ── Floating KPI badge — top right (3D box) ── */}
      <motion.g filter="url(#d-badge-sh)" animate={{y:[0,-7,0]}} transition={{duration:4.2,repeat:Infinity,ease:'easeInOut',delay:0.7}}>
        <g transform="translate(366,44)">
          {/* 3D right side */}
          <polygon points="118,0 126,8 126,70 118,62" fill="rgba(0,0,0,0.55)"/>
          {/* 3D bottom */}
          <polygon points="0,62 118,62 126,70 8,70" fill="rgba(0,0,0,0.45)"/>
          {/* face */}
          <rect width="118" height="62" rx="12" fill="url(#d-badge-face)"/>
          <rect x="0" y="0" width="118" height="1.5" rx="1" fill="rgba(220,216,212,0.18)"/>
          <rect x="0" y="0" width="1" height="62" rx="1" fill="rgba(220,216,212,0.07)"/>
          {/* icon circle */}
          <circle cx="18" cy="18" r="7" fill="rgba(176,172,168,0.12)" stroke="rgba(176,172,168,0.35)" strokeWidth="1"/>
          <text x="14.5" y="22" fontSize="8" fill="rgba(176,172,168,0.85)" fontFamily="Inter,sans-serif" fontWeight="800">↑</text>
          {/* value */}
          <text x="12" y="44" fontSize="19" fontWeight="900" fill="rgba(220,216,212,0.92)" fontFamily="Inter,sans-serif" letterSpacing="-1">+184%</text>
          <text x="12" y="56" fontSize="7" fill="rgba(176,172,168,0.35)" fontFamily="Inter,sans-serif">Organic Traffic</text>
        </g>
      </motion.g>

      {/* ── Floating ROAS badge — bottom left (3D box) ── */}
      <motion.g filter="url(#d-badge-sh)" animate={{y:[0,-6,0]}} transition={{duration:5.5,repeat:Infinity,ease:'easeInOut',delay:1.3}}>
        <g transform="translate(6,276)">
          {/* 3D right side */}
          <polygon points="108,0 116,8 116,66 108,58" fill="rgba(0,0,0,0.5)"/>
          {/* 3D bottom */}
          <polygon points="0,58 108,58 116,66 8,66" fill="rgba(0,0,0,0.4)"/>
          {/* face */}
          <rect width="108" height="58" rx="12" fill="url(#d-badge-face)"/>
          <rect x="0" y="0" width="108" height="1.5" rx="1" fill="rgba(220,216,212,0.15)"/>
          <rect x="0" y="0" width="1" height="58" rx="1" fill="rgba(220,216,212,0.06)"/>
          <text x="12" y="20" fontSize="7" fill="rgba(176,172,168,0.32)" fontFamily="Inter,sans-serif">Avg. ROAS</text>
          <text x="12" y="44" fontSize="22" fontWeight="900" fill="rgba(210,206,202,0.88)" fontFamily="Inter,sans-serif" letterSpacing="-1">4.8x</text>
          {/* sparkline */}
          <polyline points="66,40 74,32 82,35 90,24 98,18" fill="none" stroke="rgba(160,156,152,0.55)" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="98" cy="18" r="2.5" fill="rgba(176,172,168,0.75)"/>
        </g>
      </motion.g>

      {/* ── Small floating glass orb — bottom right ── */}
      <motion.g animate={{y:[0,-11,0]}} transition={{duration:7,repeat:Infinity,ease:'easeInOut',delay:2}}>
        {/* orb shadow */}
        <ellipse cx="468" cy="316" rx="16" ry="4" fill="rgba(0,0,0,0.22)"/>
        <circle cx="466" cy="298" r="19" fill="url(#d-glass)" stroke="rgba(200,196,192,0.12)" strokeWidth="1"/>
        <ellipse cx="459" cy="291" rx="7" ry="4.5" fill="rgba(255,255,255,0.15)" transform="rotate(-25,459,291)"/>
        <circle cx="466" cy="298" r="19" stroke="url(#d-ring)" strokeWidth="0.7" fill="none"/>
      </motion.g>
    </svg>
  )
}

export default function Hero() {
  const visualRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 80, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 80, damping: 20 })

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

      <svg className="hero__mountains" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,320 L0,180 C80,150 200,90 340,70 C460,52 520,130 660,110 C780,92 880,30 1020,20 C1140,10 1260,80 1440,60 L1440,320 Z" fill="rgba(255,255,255,0.03)"/>
        <path d="M0,320 L0,220 C120,200 240,150 380,130 C500,112 560,180 700,165 C820,150 940,90 1080,75 C1200,62 1320,120 1440,105 L1440,320 Z" fill="rgba(255,255,255,0.05)"/>
        <path d="M0,320 L0,265 C100,250 220,210 360,192 C480,176 560,235 700,220 C820,206 960,160 1100,148 C1220,138 1340,185 1440,172 L1440,320 Z" fill="rgba(255,255,255,0.07)"/>
        <path d="M0,265 C100,250 220,210 360,192 C480,176 560,235 700,220 C820,206 960,160 1100,148 C1220,138 1340,185 1440,172" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5"/>
      </svg>

      <div className="container hero__inner">
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

      <div className="hero__wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--bg)" />
        </svg>
      </div>
    </section>
  )
}
