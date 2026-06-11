import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA/CTA'
import './pages.css'
import './FAQs.css'

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

const faqFloatCards = [
  {
    cls: 'ph-float--1',
    icon: '✦',
    value: '12+',
    label: 'FAQ Topics',
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
    value: '24h',
    label: 'Response Time',
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
    icon: '↑',
    value: '30min',
    label: 'Free Consultation',
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: [0, -6, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 1.15 },
      y:       { duration: 5.2, delay: 1.15, repeat: Infinity, ease: 'easeInOut' },
    },
  },
]

export default function FAQs() {
  const [open, setOpen] = useState(null)

  return (
    <>
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
              <span className="hero__trust-badge-text">Got Questions?</span>
            </motion.div>
            <motion.h1 className="ph__title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              Frequently Asked<br />
              <span className="hero__title-accent">Questions</span>
            </motion.h1>
            <motion.p className="ph__subtitle" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              Everything you need to know about working with Trendox. Can't find your answer? Just ask us.
            </motion.p>
            <motion.div className="hero__actions" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <a href="#faqs" className="hero__btn-primary">Browse FAQs <span className="hero__btn-arrow">→</span></a>
              <Link to="/contact" className="hero__btn-ghost">Ask Us Directly</Link>
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
                  <span className="ph__panel-title">FAQ Categories</span>
                  <span className="ph__panel-badge">12 Questions</span>
                </div>
                <div className="ph__topics">
                  {[['General', '3 questions'], ['SEO', '2 questions'], ['PPC', '2 questions'], ['Web Design & Dev', '2 questions'], ['Pricing & Process', '3 questions']].map(([cat, count]) => (
                    <div key={cat} className="ph__topic-row">
                      <span className="ph__topic-dot" />
                      <span className="ph__topic-name">{cat}</span>
                      <span className="ph__topic-count">{count}</span>
                    </div>
                  ))}
                </div>
                <div className="ph__panel-divider" />
                <div className="ph__readtime">
                  <span className="ph__readtime-label">Still have questions?</span>
                  <span className="ph__readtime-value">Ask us</span>
                </div>
              </motion.div>
              {faqFloatCards.map(card => (
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
        <div className="ph__wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--bg)" />
          </svg>
        </div>
      </section>

      <section className="section" id="faqs">
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
