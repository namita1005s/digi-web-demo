import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'
import './FAQ.css'

const faqs = [
  {
    q: 'What services does Trendox Marketing Solutions offer?',
    a: 'We offer Website Design, Website Development, SEO Services, Social Media Marketing, PPC Advertising, and Branding Solutions — everything you need to grow online.',
  },
  {
    q: 'How long does it take to see results from digital marketing?',
    a: 'SEO typically shows results in 3–6 months, while PPC and social media campaigns can generate leads within days of launch. We set realistic timelines upfront.',
  },
  {
    q: 'Do you work with small businesses?',
    a: 'Absolutely. Our Starter plan is designed specifically for small businesses. We tailor every strategy to your budget and goals.',
  },
  {
    q: 'Will I get a dedicated account manager?',
    a: 'Yes. Every client gets a dedicated account manager who is your single point of contact and keeps you updated on campaign performance.',
  },
  {
    q: 'Can I upgrade or change my plan later?',
    a: 'Yes, you can upgrade, downgrade, or customize your plan at any time. We are flexible and grow with your business needs.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>
          <p className="section-subtitle">Got questions? We have answers.</p>
        </div>

        <div className="faq__list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq__item${open === i ? ' faq__item--open' : ''}`}
            >
              <button className="faq__question" onClick={() => setOpen(open === i ? null : i)}>
                <span>{item.q}</span>
                <span className="faq__icon">{open === i ? <FaMinus /> : <FaPlus />}</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    className="faq__answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
