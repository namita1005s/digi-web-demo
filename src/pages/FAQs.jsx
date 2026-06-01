import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA/CTA'
import './pages.css'
import './FAQs.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const faqs = [
  {
    category: 'General',
    q: 'What services does Trendox Marketing Solutions offer?',
    a: 'We offer a full suite of digital services: Website Design, Web Development, SEO, Social Media Marketing (SMM), PPC Advertising, Digital Marketing strategy, and Brand Consulting. Whether you need one service or a fully integrated growth strategy, we have you covered.',
  },
  {
    category: 'General',
    q: 'How do I get started with Trendox?',
    a: 'Simply fill out our contact form or email us at hello@trendoxmarketing.com. We\'ll schedule a free 30-minute discovery call to understand your goals, then propose a tailored strategy and quote within 48 hours.',
  },
  {
    category: 'General',
    q: 'Do you work with businesses outside of India?',
    a: 'Yes. While we are based in Lucknow, India, we work with clients across the UK, US, UAE, Australia, and Southeast Asia. Our team operates across time zones to ensure seamless communication.',
  },
  {
    category: 'SEO',
    q: 'How long does it take to see results from SEO?',
    a: 'SEO is a long-term investment. Most clients begin seeing measurable improvements in rankings and organic traffic within 3–6 months. Competitive industries may take 6–12 months. We set realistic expectations upfront and provide monthly progress reports.',
  },
  {
    category: 'SEO',
    q: 'Do you guarantee first-page Google rankings?',
    a: 'No ethical SEO agency can guarantee specific rankings — Google\'s algorithm is constantly evolving. What we do guarantee is a transparent, white-hat strategy built on proven fundamentals that consistently delivers long-term organic growth for our clients.',
  },
  {
    category: 'PPC',
    q: 'What is the minimum ad budget you work with?',
    a: 'We typically recommend a minimum monthly ad spend of ₹30,000 (approx. $350) to generate meaningful data and results. Our management fee is separate from your ad spend. We\'ll advise on the right budget for your goals during the discovery call.',
  },
  {
    category: 'PPC',
    q: 'Which PPC platforms do you manage?',
    a: 'We manage campaigns across Google Search, Google Display, YouTube, Meta (Facebook & Instagram), LinkedIn, and Pinterest. We recommend the right mix based on your audience, industry, and funnel stage.',
  },
  {
    category: 'Web Design & Dev',
    q: 'How long does a website project take?',
    a: 'A standard 5–8 page website typically takes 4–6 weeks from kickoff to launch. Larger projects with custom functionality can take 8–14 weeks. We provide a detailed project timeline before work begins.',
  },
  {
    category: 'Web Design & Dev',
    q: 'Will my website be mobile-friendly?',
    a: 'Absolutely. Every website we design and develop is fully responsive and tested across all major devices and browsers. Mobile performance is a core part of our design and development process, not an afterthought.',
  },
  {
    category: 'Pricing & Process',
    q: 'How does your pricing work?',
    a: 'We offer both project-based pricing (for one-time work like website builds) and monthly retainers (for ongoing services like SEO, PPC, and SMM). All pricing is transparent — no hidden fees. View our pricing page or contact us for a custom quote.',
  },
  {
    category: 'Pricing & Process',
    q: 'Will I have a dedicated account manager?',
    a: 'Yes. Every client is assigned a dedicated account manager who serves as your single point of contact. They coordinate across our internal teams, keep you updated on progress, and are available via email, WhatsApp, or scheduled calls.',
  },
  {
    category: 'Pricing & Process',
    q: 'Can I cancel my retainer at any time?',
    a: 'Our retainer agreements require 30 days\' written notice to cancel. We don\'t lock clients into long-term contracts — we earn your continued business through results. Most clients stay with us for 12+ months because of the value we deliver.',
  },
]

export default function FAQs() {
  const [open, setOpen] = useState(null)

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <motion.span className="section-tag" {...fadeUp(0)}>FAQs</motion.span>
          <motion.h1 className="page-hero__title" {...fadeUp(0.06)}>
            Frequently Asked<br />Questions
          </motion.h1>
          <motion.p className="page-hero__subtitle" {...fadeUp(0.12)}>
            Everything you need to know about working with Trendox. Can't find your answer? Just ask us.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faqs-layout">
            <div className="faqs-list">
              {faqs.map((item, i) => (
                <motion.div
                  key={i}
                  className={`faq__item${open === i ? ' faq__item--open' : ''}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04, ease: 'easeOut' }}
                >
                  <button className="faq__question" onClick={() => setOpen(open === i ? null : i)}>
                    <span>{item.q}</span>
                    <span className="faq__icon">{open === i ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        className="faq__answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <p>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="faqs-sidebar"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="faqs-sidebar__card">
                <h3 className="faqs-sidebar__title">Still have questions?</h3>
                <p className="faqs-sidebar__text">
                  Our team is happy to answer anything not covered here. Reach out and we'll respond within 24 hours.
                </p>
                <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Contact Us →
                </Link>
              </div>
              <div className="faqs-sidebar__card">
                <h3 className="faqs-sidebar__title">Ready to get started?</h3>
                <p className="faqs-sidebar__text">
                  Book a free 30-minute strategy call and let's talk about how we can grow your business.
                </p>
                <Link to="/contact" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                  Book Free Call →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
