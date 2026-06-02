import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6'
import './Contact.css'

// ─── EmailJS config ───────────────────────────────────────────
// Replace these three values with your own from emailjs.com
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
// ──────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const services = [
  'Website Development', 'Website Design', 'SEO Services',
  'Social Media Marketing', 'PPC Advertising', 'Branding', 'Other',
]

const initialValues = { firstName: '', lastName: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const formRef = useRef(null)
  const [focused, setFocused] = useState({})
  const [values, setValues]   = useState(initialValues)
  const [errors, setErrors]   = useState({})
  const [status, setStatus]   = useState('idle') // idle | loading | success | error

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
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      )
      setStatus('success')
      setValues(initialValues)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <motion.span className="section-tag" {...fadeUp(0)}>Contact Us</motion.span>
          <motion.h1 className="page-hero__title" {...fadeUp(0.06)}>
            Let's Build Something<br />Remarkable Together
          </motion.h1>
          <motion.p className="page-hero__subtitle" {...fadeUp(0.12)}>
            Tell us about your project and we'll get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* ── Two-Column Form ── */}
      <section className="section contact-main">
        <div className="container contact-main__inner">

          {/* Left — heading + info */}
          <motion.div className="contact-left" {...fadeUp(0)}>
            <h2 className="contact-left__heading">
              Start a<br />Conversation
            </h2>
            <p className="contact-left__sub">
              Whether you need a new website, SEO, paid media, or a full growth strategy —
              we're ready to help you scale.
            </p>

            <div className="contact-info-list">
              <a href="mailto:hello@trendoxmarketing.com" className="contact-info-item">
                <span className="contact-info-item__icon"><FaEnvelope /></span>
                <div>
                  <span className="contact-info-item__label">Email</span>
                  <span className="contact-info-item__value">hello@trendoxmarketing.com</span>
                </div>
              </a>
              <a href="tel:+91XXXXXXXXXX" className="contact-info-item">
                <span className="contact-info-item__icon"><FaPhone /></span>
                <div>
                  <span className="contact-info-item__label">Phone</span>
                  <span className="contact-info-item__value">+91 XXXXX XXXXX</span>
                </div>
              </a>
              <div className="contact-info-item">
                <span className="contact-info-item__icon"><FaLocationDot /></span>
                <div>
                  <span className="contact-info-item__label">Office</span>
                  <span className="contact-info-item__value">Lucknow, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="contact-trust">
              <span className="contact-trust__item">✓ Free consultation</span>
              <span className="contact-trust__item">✓ Response within 24h</span>
              <span className="contact-trust__item">✓ No commitment required</span>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div className="contact-form-card" {...fadeUp(0.1)}>
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>

              <div className="contact-form__row">
                <div className={`cf-field${isActive('firstName') ? ' cf-field--active' : ''}`}>
                  <label className="cf-label" htmlFor="firstName">First Name</label>
                  <input
                    id="firstName" type="text" className="cf-input"
                    name="first_name"
                    value={values.firstName}
                    onFocus={() => handleFocus('firstName')}
                    onBlur={() => handleBlur('firstName')}
                    onChange={e => handleChange('firstName', e.target.value)}
                  />
                </div>
                <div className={`cf-field${isActive('lastName') ? ' cf-field--active' : ''}`}>
                  <label className="cf-label" htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName" type="text" className="cf-input"
                    name="last_name"
                    value={values.lastName}
                    onFocus={() => handleFocus('lastName')}
                    onBlur={() => handleBlur('lastName')}
                    onChange={e => handleChange('lastName', e.target.value)}
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className={`cf-field${isActive('email') ? ' cf-field--active' : ''}${errors.email ? ' cf-field--error' : ''}`}>
                  <label className="cf-label" htmlFor="email">Email Address <span>*</span></label>
                  <input
                    id="email" type="email" className="cf-input"
                    name="from_email"
                    value={values.email}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    onChange={e => handleChange('email', e.target.value)}
                  />
                  {errors.email && <p className="cf-error">{errors.email}</p>}
                </div>
                <div className={`cf-field${isActive('phone') ? ' cf-field--active' : ''}`}>
                  <label className="cf-label" htmlFor="phone">Phone Number</label>
                  <input
                    id="phone" type="tel" className="cf-input"
                    name="phone"
                    value={values.phone}
                    onFocus={() => handleFocus('phone')}
                    onBlur={() => handleBlur('phone')}
                    onChange={e => handleChange('phone', e.target.value)}
                  />
                </div>
              </div>

              <div className={`cf-field${isActive('service') ? ' cf-field--active' : ''}`}>
                <label className="cf-label" htmlFor="service">Service Interested In</label>
                <select
                  id="service" className="cf-input cf-select"
                  name="service"
                  value={values.service}
                  onFocus={() => handleFocus('service')}
                  onBlur={() => handleBlur('service')}
                  onChange={e => handleChange('service', e.target.value)}
                >
                  <option value="" disabled />
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className={`cf-field${isActive('message') ? ' cf-field--active' : ''}${errors.message ? ' cf-field--error' : ''}`}>
                <label className="cf-label" htmlFor="message">Message <span>*</span></label>
                <textarea
                  id="message" className="cf-input cf-textarea" rows={5}
                  name="message"
                  value={values.message}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  onChange={e => handleChange('message', e.target.value)}
                />
                {errors.message && <p className="cf-error">{errors.message}</p>}
              </div>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    className="cf-feedback cf-feedback--success"
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  >
                    ✓ Message sent! We'll get back to you within 24 hours.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    className="cf-feedback cf-feedback--error"
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  >
                    Something went wrong. Please try again or email us directly.
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                className="contact-submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending…' : (<>Send Message <span className="contact-submit__arrow">→</span></>)}
              </button>
            </form>
          </motion.div>

        </div>
      </section>
      {/* ── Map Placeholder ── */}
      <section className="section contact-map-section">
        <div className="container">
          <div className="contact-map-placeholder">
            <div className="contact-map-inner">
              <span className="contact-map-icon">📍</span>
              <h3 className="contact-map-title">Trendox Marketing Solutions</h3>
              <p className="contact-map-address">Lucknow, Uttar Pradesh, India</p>
              <a
                href="https://maps.google.com/?q=Lucknow,Uttar+Pradesh,India"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                style={{ marginTop: 8 }}
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
