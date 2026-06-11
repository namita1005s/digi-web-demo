import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
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
  {
    title: "Save Money",
    body: "We create solutions that reduce unnecessary costs and improve ROI."
  },
  {
    title: "Save Time",
    body: "Faster execution means quicker results for your business."
  },
  {
    title: "Solutions",
    body: "Custom digital strategies tailored to your growth goals."
  }
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

function AboutVisual() {
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
    <motion.div
      className="ap-hero__visual"
      ref={visualRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0) }}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
    >
      <motion.div className="ap-3d-wrap" style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        <div className="ap-hero__orb" />

        {/* Team / office scene card */}
        <div className="ap-card">
          {/* card header */}
          <div className="ap-card__header">
            <div className="ap-card__header-left">
              <span className="ap-card__dot" />
              <span className="ap-card__title">Trendox Team</span>
            </div>
            <span className="ap-card__badge">Est. 2019</span>
          </div>

          {/* SVG — same visual language as "Who We Are" section but dark-themed */}
          <svg viewBox="0 0 440 260" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', display: 'block', borderRadius: 10 }}>

            {/* --- isometric desk --- */}
            {/* desk top face */}
            <polygon points="60,168 220,210 380,168 220,126" fill="rgba(180,175,165,0.18)" />
            {/* desk front face */}
            <polygon points="60,168 60,196 220,238 220,210" fill="rgba(140,135,125,0.14)" />
            {/* desk right face */}
            <polygon points="380,168 380,196 220,238 220,210" fill="rgba(160,155,145,0.16)" />

            {/* --- monitor --- */}
            {/* monitor left side */}
            <polygon points="196,80 196,158 228,168 228,90" fill="rgba(120,130,150,0.30)" />
            {/* monitor right side */}
            <polygon points="228,90 228,168 260,158 260,80" fill="rgba(140,150,170,0.30)" />
            {/* monitor top */}
            <polygon points="196,80 228,90 260,80 228,70" fill="rgba(160,170,190,0.35)" />
            {/* screen */}
            <rect x="202" y="88" width="50" height="62" rx="2" fill="rgba(20,26,40,0.85)" />
            {/* screen chrome bar */}
            <rect x="202" y="88" width="50" height="10" rx="2" fill="rgba(14,18,30,0.90)" />
            {/* screen content lines */}
            <rect x="207" y="104" width="28" height="4" rx="1" fill="rgba(100,120,160,0.7)" />
            <rect x="207" y="112" width="38" height="3" rx="1" fill="rgba(80,100,140,0.5)" />
            <rect x="207" y="119" width="30" height="3" rx="1" fill="rgba(80,100,140,0.4)" />
            {/* screen CTA button */}
            <rect x="207" y="128" width="22" height="8" rx="3" fill="rgba(100,120,160,0.55)" />
            {/* monitor stand */}
            <rect x="221" y="168" width="14" height="10" rx="1" fill="rgba(140,135,125,0.25)" />
            <rect x="214" y="177" width="28" height="4" rx="2" fill="rgba(140,135,125,0.20)" />

            {/* --- keyboard --- */}
            <polygon points="188,172 188,182 248,192 248,182" fill="rgba(160,155,145,0.22)" />
            <polygon points="248,182 248,192 270,184 270,174" fill="rgba(180,175,165,0.18)" />
            <polygon points="188,172 248,182 270,174 210,164" fill="rgba(200,195,185,0.20)" />

            {/* --- book stack left --- */}
            {[0,1,2].map(i => (
              <g key={i}>
                <polygon
                  points={`84,${174-i*10} 84,${184-i*10} 148,${198-i*10} 148,${188-i*10}`}
                  fill={['rgba(120,115,108,0.28)','rgba(140,135,128,0.24)','rgba(160,155,148,0.20)'][i]} />
                <polygon
                  points={`148,${188-i*10} 148,${198-i*10} 162,${192-i*10} 162,${182-i*10}`}
                  fill={['rgba(100,95,88,0.22)','rgba(120,115,108,0.18)','rgba(140,135,128,0.14)'][i]} />
                <polygon
                  points={`84,${174-i*10} 148,${188-i*10} 162,${182-i*10} 98,${168-i*10}`}
                  fill={['rgba(180,175,165,0.20)','rgba(200,195,185,0.18)','rgba(220,215,205,0.16)'][i]} />
              </g>
            ))}

            {/* --- team figures (abstract silhouettes) --- */}
            {[
              { cx: 100, cy: 120 },
              { cx: 156, cy: 104 },
              { cx: 290, cy: 104 },
              { cx: 346, cy: 120 },
            ].map(({ cx, cy }, i) => (
              <g key={i} opacity={0.55 + i * 0.05}>
                {/* head */}
                <circle cx={cx} cy={cy - 14} r="11" fill="rgba(200,195,185,0.35)" />
                {/* body */}
                <path
                  d={`M${cx-10},${cy} Q${cx},${cy-4} ${cx+10},${cy} L${cx+14},${cy+38} L${cx-14},${cy+38} Z`}
                  fill="rgba(180,175,165,0.28)"
                />
              </g>
            ))}

            {/* --- coffee cup right of desk --- */}
            <ellipse cx="338" cy="164" rx="10" ry="4" fill="rgba(160,155,145,0.22)" />
            <rect x="328" y="148" width="20" height="16" rx="3" fill="rgba(140,135,125,0.28)" />
            <path d="M348,152 Q356,156 348,160" stroke="rgba(160,155,145,0.30)" strokeWidth="2" fill="none" />
            {/* steam */}
            <path d="M333,146 Q331,140 333,134" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M338,145 Q336,138 338,132" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M343,146 Q341,140 343,134" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

            {/* --- plant pot right corner --- */}
            <polygon points="356,142 344,142 348,168 360,168" fill="rgba(120,115,108,0.30)" />
            <ellipse cx="352" cy="142" rx="8" ry="4" fill="rgba(140,135,128,0.25)" />
            {/* leaves */}
            <path d="M352,136 Q344,124 336,120 Q344,128 352,130" fill="rgba(80,110,80,0.35)" />
            <path d="M352,134 Q360,122 370,118 Q362,126 352,130" fill="rgba(70,100,70,0.30)" />
            <path d="M352,132 Q350,118 352,110 Q354,118 352,130" fill="rgba(90,120,90,0.28)" />
          </svg>

          {/* bottom metric strip */}
          <div className="ap-card__footer">
            {[{ val: '60+', lbl: 'Brands' }, { val: '15+', lbl: 'Specialists' }, { val: '5 yrs', lbl: 'Experience' }].map(m => (
              <div key={m.lbl} className="ap-card__metric">
                <span className="ap-card__metric-val">{m.val}</span>
                <span className="ap-card__metric-lbl">{m.lbl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating badges */}
        <motion.div className="ap-hero__stat-badge ap-badge--tl"
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <span className="ap-hero__stat-icon">★</span>
          <div>
            <div className="ap-hero__stat-value">93%</div>
            <div className="ap-hero__stat-label">Client Retention</div>
          </div>
        </motion.div>

        <motion.div className="ap-hero__stat-badge ap-badge--br"
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <span className="ap-hero__stat-icon">↑</span>
          <div>
            <div className="ap-hero__stat-value">4.2×</div>
            <div className="ap-hero__stat-label">Avg. ROAS</div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function About() {
  return (
    <div className="ap">

      {/* 1 · HERO */}
      <section className="ap-hero">
        <div className="ap-hero__bg" />
        <div className="ap-hero__bloom" />
        <div className="ap-hero__noise" />

        {/* Mountain waves — same as Home hero */}
        <svg className="ap-hero__mountains" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,320 L0,180 C80,150 200,90 340,70 C460,52 520,130 660,110 C780,92 880,30 1020,20 C1140,10 1260,80 1440,60 L1440,320 Z" fill="rgba(255,255,255,0.03)" />
          <path d="M0,180 C80,150 200,90 340,70 C460,52 520,130 660,110 C780,92 880,30 1020,20 C1140,10 1260,80 1440,60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <path d="M0,320 L0,220 C120,200 240,150 380,130 C500,112 560,180 700,165 C820,150 940,90 1080,75 C1200,62 1320,120 1440,105 L1440,320 Z" fill="rgba(255,255,255,0.05)" />
          <path d="M0,220 C120,200 240,150 380,130 C500,112 560,180 700,165 C820,150 940,90 1080,75 C1200,62 1320,120 1440,105" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
          <path d="M0,320 L0,265 C100,250 220,210 360,192 C480,176 560,235 700,220 C820,206 960,160 1100,148 C1220,138 1340,185 1440,172 L1440,320 Z" fill="rgba(255,255,255,0.07)" />
          <path d="M0,265 C100,250 220,210 360,192 C480,176 560,235 700,220 C820,206 960,160 1100,148 C1220,138 1340,185 1440,172" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
        </svg>

        <div className="container ap-hero__inner">

          {/* LEFT */}
          <div className="ap-hero__content">
            <motion.div className="ap-hero__pill" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:0.65,delay:0,ease:[0.22,1,0.36,1]}}>
              <span className="ap-hero__pill-dot" />
              <span>Growth-Focused Digital Agency</span>
            </motion.div>

            <motion.h1 className="ap-hero__h1" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:0.65,delay:0.1,ease:[0.22,1,0.36,1]}}>
              We don't run ads.<br />
              <span className="ap-hero__title-em">We build growth</span><br />
              engines.
            </motion.h1>

            <motion.p className="ap-hero__subtitle" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:0.65,delay:0.2,ease:[0.22,1,0.36,1]}}>
              Trendox is a performance-led digital agency. We work with ambitious brands — from seed-stage startups to established companies — and treat your revenue as our own.
            </motion.p>

            <motion.div className="ap-hero__actions" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:0.65,delay:0.3,ease:[0.22,1,0.36,1]}}>
              <Link to="/contact" className="ap-hero__btn-primary">
                Start a Project <span className="ap-hero__btn-arrow">→</span>
              </Link>
              <Link to="/services" className="ap-hero__btn-outline">Our Services</Link>
            </motion.div>

            <motion.div className="ap-hero__trust" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:0.65,delay:0.42,ease:[0.22,1,0.36,1]}}>
              {['Est. 2019', '15 Specialists', '60+ Brands Scaled'].map(t => (
                <div key={t} className="ap-hero__trust-item">
                  <span className="ap-hero__trust-check">✓</span>
                  <span>{t}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — interactive 3D visual */}
          <AboutVisual />
        </div>

        {/* Bottom wave */}
        <div className="ap-hero__wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--bg)" />
          </svg>
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
            <svg viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block',borderRadius:'20px'}}>
              <defs>
                <linearGradient id="ap-team-bg" x1="0" y1="0" x2="600" y2="420" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#D8D4CE"/>
                  <stop offset="100%" stopColor="#C8C4BC"/>
                </linearGradient>
                <filter id="ap-team-sh"><feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#00000022"/></filter>
              </defs>
              <rect width="600" height="420" fill="url(#ap-team-bg)"/>
              {/* 3D office desk isometric */}
              {/* Desk top */}
              <polygon points="80,220 300,280 520,220 300,160" fill="#C0BAB2"/>
              {/* Desk front */}
              <polygon points="80,220 80,260 300,320 300,280" fill="#A8A29A"/>
              {/* Desk right */}
              <polygon points="520,220 520,260 300,320 300,280" fill="#B8B2AA"/>
              {/* Monitor on desk */}
              <polygon points="260,120 260,210 320,230 320,140" fill="#A0A8B2"/>
              <polygon points="320,140 320,230 380,210 380,120" fill="#B0B8C2"/>
              <polygon points="260,120 320,140 380,120 320,100" fill="#C0C8D2"/>
              <rect x="268" y="128" width="104" height="72" rx="3" fill="#2C3844"/>
              <rect x="268" y="128" width="104" height="14" rx="3" fill="#222C38"/>
              {/* Screen content */}
              <rect x="276" y="148" width="50" height="5" rx="2" fill="#4A5868"/>
              <rect x="276" y="158" width="80" height="4" rx="2" fill="#3A4858"/>
              <rect x="276" y="167" width="60" height="4" rx="2" fill="#3A4858"/>
              <rect x="276" y="176" width="34" height="8" rx="4" fill="#5A6878"/>
              {/* Keyboard */}
              <polygon points="250,230 250,244 330,254 330,240" fill="#B8B2A8"/>
              <polygon points="330,240 330,254 380,244 380,230" fill="#C8C2B8"/>
              <polygon points="250,230 330,240 380,230 300,220" fill="#D0CAC0"/>
              {/* Books stack left */}
              {[0,1,2].map(i=>(
                <g key={i}>
                  <polygon points={`130,${230-i*14} 130,${244-i*14} 210,${264-i*14} 210,${250-i*14}`} fill={['#A8A29A','#B8B2A8','#C8C2B8'][i]}/>
                  <polygon points={`210,${250-i*14} 210,${264-i*14} 230,${256-i*14} 230,${242-i*14}`} fill={['#989290','#A8A2A0','#B8B2B0'][i]}/>
                  <polygon points={`130,${230-i*14} 210,${250-i*14} 230,${242-i*14} 150,${222-i*14}`} fill={['#C0BAB0','#D0CAC0','#E0DAD0'][i]}/>
                </g>
              ))}
              {/* Team figures (abstract) */}
              {[{cx:160,cy:160},{cx:240,cy:140},{cx:360,cy:140},{cx:440,cy:160}].map(({cx,cy},i)=>(
                <g key={i}>
                  <circle cx={cx} cy={cy-20} r="16" fill="#B8B2A8" opacity="0.7"/>
                  <polygon points={`${cx-14},${cy} ${cx+14},${cy} ${cx+20},${cy+50} ${cx-20},${cy+50}`} fill="#A8A29A" opacity="0.7" />
                </g>
              ))}
              {/* Floating stat cards */}
              <g filter="url(#ap-team-sh)" transform="translate(20,20)">
                <rect width="110" height="60" rx="10" fill="#F0ECE6"/>
                <polygon points="110,10 114,14 114,66 110,62" fill="#D8D4CE"/>
                <polygon points="10,60 14,64 114,64 110,60" fill="#CCC8C2"/>
                <text x="12" y="28" fontSize="8" fill="#8A8880" fontFamily="Inter,sans-serif">Happy Clients</text>
                <text x="12" y="48" fontSize="20" fontWeight="900" fill="#3C3C38" fontFamily="Inter,sans-serif">60+</text>
              </g>
              <g filter="url(#ap-team-sh)" transform="translate(460,20)">
                <rect width="110" height="60" rx="10" fill="#3A3C48"/>
                <polygon points="110,10 114,14 114,66 110,62" fill="#22242E"/>
                <polygon points="10,60 14,64 114,64 110,60" fill="#1A1C26"/>
                <text x="12" y="28" fontSize="8" fill="#5A5C70" fontFamily="Inter,sans-serif">Experience</text>
                <text x="12" y="48" fontSize="20" fontWeight="900" fill="#C8CCE0" fontFamily="Inter,sans-serif">5+ yrs</text>
              </g>
            </svg>
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
      <section className="why-section">
         <div className="why-heading">
      <span className="why-tag">Why Choose Us</span>
      <h2 className="why-title">We don't just deliver — <em>we transform.</em></h2>
      <p className="why-subtitle">Here's why brands trust us with their growth</p>
    </div>
        <div className="container why-section__inner">
          <div className="why-left">
            <img 
              src="/public/WhyUs (1).png" 
              alt="Why Us" 
            />
          </div>
          <div className="why-right">
            {WHY.map((item, index) => (
              <motion.div
                key={item.title}
                className="why-step"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="why-step__dot" />
                <div className="why-step__content">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}