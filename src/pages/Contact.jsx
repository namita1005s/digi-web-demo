import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaLocationDot, FaPhone, FaEnvelope, FaGlobe,
  FaCircleCheck,
} from 'react-icons/fa6'
import './Contact.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d } }),
}

const infoCards = [
  { icon: <FaLocationDot />, title: 'Office Location',    text: 'Lucknow, Uttar Pradesh, India' },
  { icon: <FaPhone />,       title: 'Call Us',            text: '+91 XXXXX XXXXX',               href: 'tel:+91XXXXXXXXXX' },
  { icon: <FaEnvelope />,    title: 'General Inquiry',    text: 'hello@trendoxmarketing.com',    href: 'mailto:hello@trendoxmarketing.com' },
  { icon: <FaEnvelope />,    title: 'Business Inquiry',   text: 'info@trendoxmarketing.com',     href: 'mailto:info@trendoxmarketing.com' },
]

const whyPoints = [
  'Free Initial Consultation',
  'Custom Growth Strategy',
  'Fast Response Time',
  'Experienced Marketing Team',
  'Transparent Communication',
]

const services = [
  'Website Development',
  'Website Design',
  'SEO Services',
  'Social Media Marketing',
  'PPC Advertising',
  'Branding',
  'Other',
]

export default function Contact() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="contact-hero">
        <div className="contact-hero__glow" />
        <div className="container contact-hero__inner">
          <motion.div
            className="contact-hero__content"
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
          >
            <span className="section-tag">Contact Trendox</span>
            <h1 className="contact-hero__title">
              Have Any Questions? <span className="highlight">Let's Talk</span>
            </h1>
            <p className="contact-hero__subtitle">
              Ready to grow your business online? Whether you need a new website, SEO services,
              social media marketing, or a complete digital growth strategy, our team is here to help.
            </p>
            <div className="contact-hero__actions">
              <Link to="#contact-form" className="btn-primary">Get Free Consultation</Link>
              <Link to="/services" className="btn-outline">View Services</Link>
            </div>
          </motion.div>

          <motion.div
            className="contact-hero__illustration"
            variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
          >
            <div className="contact-hero__illustration-inner">
              <div className="illustration__circle illustration__circle--1" />
              <div className="illustration__circle illustration__circle--2" />
              <div className="illustration__icon-grid">
                <span>📊</span><span>🚀</span>
                <span>💡</span><span>📱</span>
              </div>
              <p className="illustration__label">Digital Growth Partner</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className="section contact-info">
        <div className="container">
          <div className="contact-info__grid">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.title}
                className="info-card"
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i * 0.1}
              >
                <div className="info-card__icon">{card.icon}</div>
                <h3 className="info-card__title">{card.title}</h3>
                {card.href
                  ? <a href={card.href} className="info-card__text">{card.text}</a>
                  : <p className="info-card__text">{card.text}</p>
                }
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="section contact-form-section" id="contact-form">
        <div className="container contact-form-section__inner">

          {/* Form */}
          <motion.div
            className="contact-form__wrap"
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} custom={0}
          >
            <form className="contact-form" onSubmit={e => e.preventDefault()}>
              <div className="contact-form__row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name <span>*</span></label>
                  <input id="firstName" type="text" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name <span>*</span></label>
                  <input id="lastName" type="text" placeholder="Doe" required />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="form-group">
                  <label htmlFor="email">Email Address <span>*</span></label>
                  <input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select id="service">
                  <option value="">Select a service</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject <span>*</span></label>
                <input id="subject" type="text" placeholder="How can we help you?" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message <span>*</span></label>
                <textarea id="message" rows={5} placeholder="Tell us about your project..." required />
              </div>

              <button type="submit" className="btn-primary contact-form__submit">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="contact-sidebar"
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} custom={0.2}
          >
            <div className="contact-sidebar__card">
              <h3 className="contact-sidebar__heading">Why Contact Trendox?</h3>
              <ul className="contact-sidebar__list">
                {whyPoints.map(p => (
                  <li key={p}>
                    <FaCircleCheck className="contact-sidebar__check" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="contact-sidebar__cta">Let's discuss your project.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Location ── */}
      <section className="section contact-location">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Find Us</span>
            <h2 className="section-title">Visit Our <span className="highlight">Office</span></h2>
            <p className="section-subtitle">
              We welcome discussions about your business goals and digital growth opportunities.
            </p>
          </div>

          <div className="contact-location__inner">
            <motion.div
              className="location-card"
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }} custom={0}
            >
              <h3 className="location-card__name">Trendox Marketing Solutions</h3>
              <ul className="location-card__details">
                <li><FaLocationDot /> <span>Lucknow, Uttar Pradesh, India</span></li>
                <li><FaEnvelope /> <a href="mailto:hello@trendoxmarketing.com">hello@trendoxmarketing.com</a></li>
                <li><FaPhone /> <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a></li>
                <li><FaGlobe /> <a href="https://www.trendoxmarketing.com" target="_blank" rel="noreferrer">www.trendoxmarketing.com</a></li>
              </ul>
            </motion.div>

            <motion.div
              className="map-placeholder"
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }} custom={0.15}
            >
              <span>Google Map Placeholder</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="contact-final-cta">
        <div className="contact-final-cta__glow" />
        <div className="container contact-final-cta__inner">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} custom={0}
          >
            <span className="section-tag">Get Started</span>
            <h2 className="contact-final-cta__title">
              Ready To <span className="highlight">Grow Your Business?</span>
            </h2>
            <p className="contact-final-cta__text">
              Let's build a powerful digital presence that drives traffic, leads, and revenue.
            </p>
            <div className="contact-final-cta__actions">
              <Link to="#contact-form" className="btn-primary">Get Free Consultation</Link>
              <Link to="#contact-form" className="btn-outline">Contact Team</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
