import { motion } from 'framer-motion'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    company: 'Nexora Tech',
    feedback: 'Trendox completely transformed our online presence. Our leads doubled within 3 months of working with them.',
  },
  {
    name: 'James Okafor',
    company: 'Veltrix Solutions',
    feedback: 'Professional, responsive, and results-driven. The SEO work they did pushed us to page one on Google.',
  },
  {
    name: 'Priya Sharma',
    company: 'Optica Retail',
    feedback: 'Their social media strategy brought us a 40% increase in engagement. Highly recommend Trendox!',
  },
  {
    name: 'Carlos Rivera',
    company: 'Brandify Co.',
    feedback: 'From branding to PPC, they handled everything seamlessly. Best investment we made for our business.',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Client Reviews</span>
          <h2 className="section-title">What Our <span className="highlight">Clients Say</span></h2>
          <p className="section-subtitle">Real results, real feedback from businesses we've helped grow.</p>
        </div>

        <div className="grid-4 testimonials__grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="testimonial-card__feedback">"{t.feedback}"</p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__name">{t.name}</span>
                <span className="testimonial-card__company">{t.company}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
