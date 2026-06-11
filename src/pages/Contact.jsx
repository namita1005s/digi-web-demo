import { useState, useRef , useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import './pages.css'
import './Contact.css'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || ''

const vp = { once: true, margin: '-30px' }
const up = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: vp,
  transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] },
})

const services = [
  'Website Development', 'Website Design', 'SEO Services',
  'Social Media Marketing', 'PPC Advertising', 'Branding', 'Other',
]

const INFO_CARDS = [
  {
    icon: <FaEnvelope />,
    label: 'Email Us',
    value: 'hello@trendoxmarketing.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:hello@trendoxmarketing.com',
  },
  {
    icon: <FaPhone />,
    label: 'Call Us',
    value: '+91 885-353-3552',
    sub: 'Mon–Sat, 10am–7pm IST',
    href: 'tel:+918853533552',
  },
  {
    icon: <FaLocationDot />,
    label: 'Office',
    value: 'Lucknow, UP, India',
    sub: 'Available for in-person meetings',
    href: null,
  },
]

const initialValues = { firstName: '', lastName: '', email: '', phone: '', service: '', message: '' }



export default function Contact() {

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'module'
    script.src =
      'https://unpkg.com/@splinetool/viewer@1.12.97/build/spline-viewer.js'

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  const formRef = useRef(null)
  const [focused, setFocused]   = useState({})
  const [values, setValues]     = useState(initialValues)
  const [errors, setErrors]     = useState({})
  const [status, setStatus]     = useState('idle')

  const handleFocus  = key => setFocused(f => ({ ...f, [key]: true }))
  const handleBlur   = key => setFocused(f => ({ ...f, [key]: false }))
  const handleChange = (key, val) => {
    setValues(v => ({ ...v, [key]: val }))
    if (errors[key]) setErrors(e => ({ ...e, [key]: '' }))
  }
  const isActive = key => focused[key] || !!values[key]

  const validate = () => {
    const e = {}
    if (!values.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Enter a valid email'
    if (!values.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('loading')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY })
      setStatus('success')
      setValues(initialValues)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="cp">

      {/* ── HERO ── */}
<section className="ph">
  <div className="ph__bg-glow" />
  <div className="ph__noise" />

  <div className="container ph__inner">
    <div className="ph__content">
      <motion.div
        className="hero__trust-badge"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="hero__badge-pulse" />
        <span className="hero__trust-badge-text">
          Get In Touch · Response Within 24h
        </span>
      </motion.div>

      <motion.h1
        className="ph__title"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        Let's Build Something
        <br />
        <span className="hero__title-accent">
          Remarkable Together
        </span>
      </motion.h1>

      <motion.p
        className="ph__subtitle"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        Tell us about your project. We'll craft a strategy that
        drives real, measurable growth.
      </motion.p>

      <motion.div
        className="hero__actions"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <a href="#contact-form" className="hero__btn-primary">
          Start a Project
          <span className="hero__btn-arrow">→</span>
        </a>

        <a
          href="mailto:hello@trendoxmarketing.com"
          className="hero__btn-ghost"
        >
          hello@trendoxmarketing.com
        </a>
      </motion.div>

      <motion.div
        className="hero__trust-indicators"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          delay: 0.42,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        
      </motion.div>
    </div>

    <motion.div
      className="ph__visual"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="ph__visual-glow" />

      <div className="ph__spline-wrapper">
        <spline-viewer
          url="https://prod.spline.design/cA5rdB51kXJ6ZAO3/scene.splinecode"
        ></spline-viewer>
      </div>
    </motion.div>
  </div>
</section>

      <section className="ph">
        <div className="ph__bg-glow" />
        <div className="ph__noise" />
        <svg className="ph__mountains" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,320 L0,180 C80,150 200,90 340,70 C460,52 520,130 660,110 C780,92 880,30 1020,20 C1140,10 1260,80 1440,60 L1440,320 Z" fill="rgba(255,255,255,0.03)" />
          <path d="M0,320 L0,220 C120,200 240,150 380,130 C500,112 560,180 700,165 C820,150 940,90 1080,75 C1200,62 1320,120 1440,105 L1440,320 Z" fill="rgba(255,255,255,0.05)" />
          <path d="M0,265 C100,250 220,210 360,192 C480,176 560,235 700,220 C820,206 960,160 1100,148 C1220,138 1340,185 1440,172" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
          <path d="M0,320 L0,265 C100,250 220,210 360,192 C480,176 560,235 700,220 C820,206 960,160 1100,148 C1220,138 1340,185 1440,172 L1440,320 Z" fill="rgba(255,255,255,0.07)" />
        </svg>
        <div className="container ph__inner">
          <div className="ph__content">
            <motion.div className="hero__trust-badge" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
              <span className="hero__badge-pulse" />
              <span className="hero__trust-badge-text">Get In Touch · Response Within 24h</span>
            </motion.div>
            <motion.h1 className="ph__title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              Let's Build Something<br />
              <span className="hero__title-accent">Remarkable Together</span>
            </motion.h1>
            <motion.p className="ph__subtitle" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              Tell us about your project. We'll craft a strategy that drives real, measurable growth.
            </motion.p>
            <motion.div className="hero__actions" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <a href="#contact-form" className="hero__btn-primary">Start a Project <span className="hero__btn-arrow">→</span></a>
              <a href="mailto:hello@trendoxmarketing.com" className="hero__btn-ghost">hello@trendoxmarketing.com</a>
            </motion.div>
            <motion.div className="hero__trust-indicators" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}>
              {['Free consultation', 'No commitment', 'Senior team only'].map(item => (
                <div key={item} className="hero__trust-item">
                  <span className="hero__trust-check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="ph__visual"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ph__visual-glow" />
            <div className="ph__parallax">
              <motion.div
                className="ph__panel"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="ph__panel-header">
                  <span className="ph__panel-title">Contact Details</span>
                  <span className="ph__panel-badge">Always Open</span>
                </div>
                <div className="ph__topics">
                  {[['Email', 'hello@trendoxmarketing.com'], ['Phone', '+91 XXXXX XXXXX'], ['Office', 'Lucknow, UP, India'], ['Hours', 'Mon–Sat, 10am–7pm IST'], ['Consultation', 'Free · 30 min'], ['Contracts', 'No lock-in']].map(([label, value]) => (
                    <div key={label} className="ph__topic-row">
                      <span className="ph__topic-dot" />
                      <span className="ph__topic-name">{label}</span>
                      <span className="ph__topic-count">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="ph__panel-divider" />
                <div className="ph__readtime">
                  <span className="ph__readtime-label">Campaigns Launched</span>
                  <span className="ph__readtime-value">150+</span>
                </div>
              </motion.div>
              {contactFloatCards.map(card => (
                <motion.div
                  key={card.cls}
                  className={`hero__float-card ph-float ${card.cls}`}
                  initial={card.initial}
                  animate={card.animate}
                  transition={card.transition}
                >
                  <span className="hero__float-icon">{card.icon}</span>
                  <div>
                    <div className="hero__float-value">{card.value}</div>
                    <div className="hero__float-label">{card.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INFO CARDS STRIP ── */}
      <section className="cp-info-strip">
        <div className="container cp-info-strip__grid">
          {INFO_CARDS.map((c, i) => {
            const Tag = c.href ? 'a' : 'div'
            const extra = c.href ? { href: c.href } : {}
            return (
              <motion.div key={c.label} {...up(i * 0.08)}>
                <Tag className="cp-info-card" {...extra}>
                  <span className="cp-info-card__icon">{c.icon}</span>
                  <div className="cp-info-card__body">
                    <span className="cp-info-card__label">{c.label}</span>
                    <strong className="cp-info-card__value">{c.value}</strong>
                    <span className="cp-info-card__sub">{c.sub}</span>
                  </div>
                </Tag>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── MAIN: FORM + SIDEBAR ── */}
      <section className="cp-main" id="contact-form">
        <div className="container cp-main__inner">

          {/* Form card */}
          <motion.div className="cp-form-card" {...up(0)}>
            <div className="cp-form-card__head">
              <span className="ap-tag">Send a Message</span>
              <h2 className="cp-form-card__title">Start a conversation</h2>
              <p className="cp-form-card__sub">Fill in the details and we'll get back to you within one business day.</p>
            </div>

            <form ref={formRef} className="cp-form" onSubmit={handleSubmit}>
              <div className="cp-form__row">
                <div className={`cf-field${isActive('firstName') ? ' cf-field--active' : ''}`}>
                  <label className="cf-label" htmlFor="firstName">First Name</label>
                  <input id="firstName" type="text" className="cf-input" name="first_name"
                    value={values.firstName}
                    onFocus={() => handleFocus('firstName')} onBlur={() => handleBlur('firstName')}
                    onChange={e => handleChange('firstName', e.target.value)} />
                </div>
                <div className={`cf-field${isActive('lastName') ? ' cf-field--active' : ''}`}>
                  <label className="cf-label" htmlFor="lastName">Last Name</label>
                  <input id="lastName" type="text" className="cf-input" name="last_name"
                    value={values.lastName}
                    onFocus={() => handleFocus('lastName')} onBlur={() => handleBlur('lastName')}
                    onChange={e => handleChange('lastName', e.target.value)} />
                </div>
              </div>

              <div className="cp-form__row">
                <div className={`cf-field${isActive('email') ? ' cf-field--active' : ''}${errors.email ? ' cf-field--error' : ''}`}>
                  <label className="cf-label" htmlFor="email">Email Address <span>*</span></label>
                  <input id="email" type="email" className="cf-input" name="from_email"
                    value={values.email}
                    onFocus={() => handleFocus('email')} onBlur={() => handleBlur('email')}
                    onChange={e => handleChange('email', e.target.value)} />
                  {errors.email && <p className="cf-error">{errors.email}</p>}
                </div>
                <div className={`cf-field${isActive('phone') ? ' cf-field--active' : ''}`}>
                  <label className="cf-label" htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" className="cf-input" name="phone"
                    value={values.phone}
                    onFocus={() => handleFocus('phone')} onBlur={() => handleBlur('phone')}
                    onChange={e => handleChange('phone', e.target.value)} />
                </div>
              </div>

              <div className={`cf-field${isActive('service') ? ' cf-field--active' : ''}`}>
                <label className="cf-label" htmlFor="service">Service Interested In</label>
                <select id="service" className="cf-input cf-select" name="service"
                  value={values.service}
                  onFocus={() => handleFocus('service')} onBlur={() => handleBlur('service')}
                  onChange={e => handleChange('service', e.target.value)}>
                  <option value="" disabled />
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className={`cf-field${isActive('message') ? ' cf-field--active' : ''}${errors.message ? ' cf-field--error' : ''}`}>
                <label className="cf-label" htmlFor="message">Message <span>*</span></label>
                <textarea id="message" className="cf-input cf-textarea" rows={5} name="message"
                  value={values.message}
                  onFocus={() => handleFocus('message')} onBlur={() => handleBlur('message')}
                  onChange={e => handleChange('message', e.target.value)} />
                {errors.message && <p className="cf-error">{errors.message}</p>}
              </div>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div className="cf-feedback cf-feedback--success"
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    ✓ Message sent! We'll get back to you within 24 hours.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div className="cf-feedback cf-feedback--error"
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    Something went wrong. Please try again or email us directly.
                  </motion.div>
                )}
              </AnimatePresence>

              <button type="submit" className="cp-submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : (<>Send Message <span className="cp-submit__arrow">→</span></>)}
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div className="cp-sidebar" {...up(0.12)}>
  <img
    src="/ContactUs .png"
    alt="Marketing Agency"
    className="cp-sidebar__image"
  />
</motion.div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cp-cta">
        <div className="cp-cta__pattern" aria-hidden="true" />
        <div className="container cp-cta__inner">
          <motion.div {...up(0)}>
            <p className="cp-cta__eyebrow"><span className="cp-dot cp-dot--gold" />Ready to scale?</p>
            <h2 className="cp-cta__title">
              Not sure where<br />to <em>start?</em>
            </h2>
            <p className="cp-cta__sub">Book a free 30-minute strategy call. No pitch, no pressure — just honest advice about what will move your numbers.</p>
            <div className="cp-cta__actions">
              <Link to="/contact" className="cp-cta__btn-primary">Book a Free Call →</Link>
              <a href="mailto:hello@trendoxmarketing.com" className="cp-cta__btn-ghost">hello@trendoxmarketing.com</a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
