import { motion } from 'framer-motion'
import './Testimonials.css'

const testimonials = [
  {
    quote: 'Trendox completely transformed our online presence. Our leads doubled within 3 months of working with them.',
    name: 'Sarah Mitchell',
    company: 'Nexora Tech',
    role: 'CEO',
  },
  {
    quote: 'Professional, responsive, and results-driven. The SEO work they did pushed us to page one on Google.',
    name: 'James Okafor',
    company: 'Veltrix Solutions',
    role: 'Founder',
  },
  {
    quote: 'Their social media strategy brought us a 40% increase in engagement. Best investment we made.',
    name: 'Priya Sharma',
    company: 'Optica Retail',
    role: 'Marketing Director',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-tag">Client Reviews</span>
          <h2 className="section-title">What Our Clients<br /><span className="accent">Say About Us</span></h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="tcard"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            >
              <span className="tcard__quote">“</span>
              <p className="tcard__text">{t.quote}</p>
              <div className="tcard__author">
                <div className="tcard__avatar">{t.name[0]}</div>
                <div>
                  <span className="tcard__name">{t.name}</span>
                  <span className="tcard__meta">{t.role}, {t.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
