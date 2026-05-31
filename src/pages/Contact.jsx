import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6'
import './Contact.css'

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

export default function Contact() {
  const [focused, setFocused] = useState({})
  const [values, setValues] = useState({})

  const handleFocus = key => setFocused(f => ({ ...f, [key]: true }))
  const handleBlur  = key => setFocused(f => ({ ...f, [key]: false }))
  const handleChange = (key, val) => setValues(v => ({ ...v, [key]: val }))

  const isActive = key => focused[key] || !!values[key]

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
            <form className="contact-form" onSubmit={e => e.preventDefault()}>

              <div className="contact-form__row">
                <div className={`cf-field${isActive('firstName') ? ' cf-field--active' : ''}`}>
                  <label className="cf-label" htmlFor="firstName">First Name</label>
                  <input
                    id="firstName" type="text" className="cf-input"
                    onFocus={() => handleFocus('firstName')}
                    onBlur={() => handleBlur('firstName')}
                    onChange={e => handleChange('firstName', e.target.value)}
                  />
                </div>
                <div className={`cf-field${isActive('lastName') ? ' cf-field--active' : ''}`}>
                  <label className="cf-label" htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName" type="text" className="cf-input"
                    onFocus={() => handleFocus('lastName')}
                    onBlur={() => handleBlur('lastName')}
                    onChange={e => handleChange('lastName', e.target.value)}
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className={`cf-field${isActive('email') ? ' cf-field--active' : ''}`}>
                  <label className="cf-label" htmlFor="email">Email Address <span>*</span></label>
                  <input
                    id="email" type="email" className="cf-input" required
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    onChange={e => handleChange('email', e.target.value)}
                  />
                </div>
                <div className={`cf-field${isActive('phone') ? ' cf-field--active' : ''}`}>
                  <label className="cf-label" htmlFor="phone">Phone Number</label>
                  <input
                    id="phone" type="tel" className="cf-input"
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
                  onFocus={() => handleFocus('service')}
                  onBlur={() => handleBlur('service')}
                  onChange={e => handleChange('service', e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled />
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className={`cf-field${isActive('message') ? ' cf-field--active' : ''}`}>
                <label className="cf-label" htmlFor="message">Message <span>*</span></label>
                <textarea
                  id="message" className="cf-input cf-textarea" rows={5} required
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  onChange={e => handleChange('message', e.target.value)}
                />
              </div>

              <button type="submit" className="contact-submit">
                Send Message <span className="contact-submit__arrow">→</span>
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
