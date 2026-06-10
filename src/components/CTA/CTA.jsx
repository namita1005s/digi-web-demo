import { useState } from 'react'
import { motion } from 'framer-motion'
import './CTA.css'

export default function CTA() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <section className="cta">
      <div className="container cta__inner">
        {/* Left: Image */}
        <motion.div
          className="cta__image-side"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
            alt="Expert consultant"
            className="cta__person-img"
          />
        </motion.div>

        {/* Right: Form Card */}
        <motion.div
          className="cta__form-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <form onSubmit={handleSubmit} className="cta__form">
            <div className="cta__form-row">
              <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
              <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
            </div>
            <div className="cta__form-row">
              <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
              <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={handleChange} />
            </div>
            <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />
            <textarea name="message" placeholder="Message" rows={4} value={form.message} onChange={handleChange} />
            <div className="cta__recaptcha">
              <input type="checkbox" id="robot" />
              <label htmlFor="robot">I'm not a robot</label>
              <div className="cta__recaptcha-logo">
                <svg viewBox="0 0 64 64" width="38" height="38"><path fill="#4A90D9" d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4z"/><path fill="#fff" d="M32 12c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zm0 6a14 14 0 110 28A14 14 0 0132 18z"/></svg>
                <span>reCAPTCHA</span>
                <small>Privacy · Terms</small>
              </div>
            </div>
            <button type="submit" className="cta__submit">Submit</button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
