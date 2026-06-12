import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CTA from '../components/CTA/CTA'
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

const TEAM = [
  {
    name: "Aria Mehta",
    role: "Head of Strategy & Growth",
    bio: "Turns complex goals into clear marketing plans. Bridges creative ideas with measurable results.",
    img: "/public/Avtar3.png",
    color: "#e8e0f7"
  },
  {
    name: "Jaxon Cruz",
    role: "Senior SEO & Content Specialist",
    bio: "Makes sure your business gets found naturally. Optimizes content that helps and ranks.",
    img: "/public/Avtar2.png",
    color: "#dff0e8"
  },
  {
    name: "Maya Kapoor",
    role: "Creative Director",
    bio: "Gives brands a voice people remember. Crafts words that connect, convince, and convert.",
    img: "/public/Avtar4.png",
    color: "#fde8e8"
  },
  {
    name: "Eli Torres",
    role: "Paid Media & PPC Manager",
    bio: "Turns ad spend into real leads. Never wastes money on campaigns that don't perform.",
    img: "/public/Avtar1.png",
    color: "#fef3dc"
  },
  {
    name: "Zara Lin",
    role: "Data & Analytics Lead",
    bio: "Makes data easy to understand. Flags what's working and what's not without the guesswork.",
    img: "/public/Avtar5.png",
    color: "#ddeeff"
  },
]

const WHY = [
  { title: "Save Money", body: "We create solutions that reduce unnecessary costs and improve ROI." },
  { title: "Save Time",  body: "Faster execution means quicker results for your business." },
  { title: "Solutions",  body: "Custom digital strategies tailored to your growth goals." },
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
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleMove = (e) => {
      const card = e.target.closest('.ap-team__card')
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 12
      const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 12
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
    }

    const handleLeave = (e) => {
      const card = e.target.closest('.ap-team__card')
      if (!card) return
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
    }

    track.addEventListener('mousemove', handleMove)
    track.addEventListener('mouseleave', handleLeave, true)
    return () => {
      track.removeEventListener('mousemove', handleMove)
      track.removeEventListener('mouseleave', handleLeave, true)
    }
  }, [])

  return (
    <div className="ap">

      {/* 1 · HERO */}
      <section className="ap-hero">
        <div className="ap-hero__noise" />
        <div className="ap-hero__inner">
          <motion.div
            className="ap-hero__pill"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="ap-hero__pill-dot" />
            <span>Growth-Focused Digital Agency</span>
          </motion.div>

          <motion.h1
            className="ap-hero__h1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            We don't run ads.
          </motion.h1>

          <p className="ap-hero__h1-em">We build growth engines.</p>

          <div className="ap-hero__banner">
            <img src="/public/Banner.png" alt="Trendox Team" className="ap-hero__banner-img" />
          </div>

          <div className="ap-hero__divider" />

          <motion.p
            className="ap-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            Trendox is a performance-led digital agency. We work with ambitious brands — from
            seed-stage startups to established companies — and treat your revenue as our own.
          </motion.p>
        </div>

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
            <img src="/public/Teamup.png" alt="About Us" className="ap-who__img" />
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

      {/* 4 · TEAM CAROUSEL */}
      <section className="ap-team">
        <div className="ap-team__heading">
          <span className="ap-tag">The People Behind It</span>
          <h2 className="ap-h2">Meet our <em>team.</em></h2>
        </div>
        <div className="ap-team__track-wrap">
          <div className="ap-team__track" ref={trackRef}>
            {TEAM.map((member) => (
              <div className="ap-team__card" key={member.name}>
                <div className="ap-team__avatar" style={{ background: member.color }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="ap-team__avatar-img"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <span className="ap-team__initials">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="ap-team__info">
                  <h3 className="ap-team__name">{member.name}</h3>
                  <span className="ap-team__role">{member.role}</span>
                  <p className="ap-team__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · WHY CHOOSE US */}
      <section className="why-section">
        <div className="why-heading">
          <span className="why-tag">Why Choose Us</span>
          <h2 className="why-title">We don't just deliver — <em>we transform.</em></h2>
          <p className="why-subtitle">Here's why brands trust us with their growth</p>
        </div>
        <div className="container why-section__inner">
          <div className="why-left">
<<<<<<< HEAD
            <img src="/public/WhyUs.png" alt="Why Us" />
=======
            <img 
              src="/public/WhyUs (1).png" 
              alt="Why Us" 
            />
>>>>>>> e606f52172731df750e4a3615066d9a18840dea1
          </div>
          <div className="why-right">
            {WHY.map((item, index) => (
              <motion.div
                key={item.title}
                className="why-step"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
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