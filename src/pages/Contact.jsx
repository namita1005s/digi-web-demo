import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import './pages.css'
import './Contact.css'

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

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
    value: '+91 XXXXX XXXXX',
    sub: 'Mon–Sat, 10am–7pm IST',
    href: 'tel:+91XXXXXXXXXX',
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

const contactFloatCards = [
  {
    cls: 'ph-float--1',
    icon: '↑',
    value: '24h',
    label: 'Response Time',
    initial: { opacity: 0, x: 20, y: -10 },
    animate: { opacity: 1, x: 0, y: [0, -8, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 0.85 },
      x:       { duration: 0.5, delay: 0.85 },
      y:       { duration: 4.4, delay: 0.85, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  {
    cls: 'ph-float--2',
    icon: '◆',
    value: '93%',
    label: 'Client Retention',
    initial: { opacity: 0, x: -20, y: 10 },
    animate: { opacity: 1, x: 0, y: [0, 7, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 1.0 },
      x:       { duration: 0.5, delay: 1.0 },
      y:       { duration: 5.0, delay: 1.0, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  {
    cls: 'ph-float--3',
    icon: '✦',
    value: '4.2×',
    label: 'Avg. ROAS',
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: [0, -6, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 1.15 },
      y:       { duration: 5.2, delay: 1.15, repeat: Infinity, ease: 'easeInOut' },
    },
  },
]

export default function Contact() {
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
            <div className="cp-sidebar__block">
              <span className="ap-tag">Why Work With Us</span>
              <h3 className="cp-sidebar__title">We treat your<br /><em>revenue as ours.</em></h3>
              <p className="cp-sidebar__body">
                Every client gets a dedicated senior strategist — no juniors, no hand-offs.
                We're obsessed with measurable outcomes.
              </p>
            </div>

            <div className="cp-sidebar__stats">
              {[
                { val: '150+', label: 'Campaigns launched' },
                { val: '93%',  label: 'Client retention rate' },
                { val: '4.2×', label: 'Average ROAS delivered' },
              ].map(s => (
                <div key={s.label} className="cp-stat">
                  <span className="cp-stat__val">{s.val}</span>
                  <span className="cp-stat__label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="cp-sidebar__promise">
              {['Free strategy consultation', 'Response within 24 hours', 'No lock-in contracts', 'Senior team, always'].map(item => (
                <div key={item} className="cp-promise-row">
                  <span className="cp-promise-check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
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
