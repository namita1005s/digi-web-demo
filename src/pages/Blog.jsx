import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA/CTA'
import { blogThumbs } from '../components/Blog/BlogThumbnails'
import './pages.css'
import './Blog.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const articles = [
  {
    id: 1,
    tag: 'SEO',
    title: '10 Technical SEO Fixes That Will Double Your Organic Traffic',
    excerpt: 'Most websites are leaving rankings on the table due to fixable technical issues. Here are the ten highest-impact fixes we apply to every new client site.',
    author: 'Aryan Verma',
    date: 'Jan 14, 2025',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?w=1200&h=600&fit=crop',
  },
  {
    id: 2,
    tag: 'PPC',
    title: 'How We Achieved 4.5x ROAS on a ₹15L/Month Google Ads Budget',
    excerpt: 'A behind-the-scenes breakdown of the campaign structure, bidding strategy, and creative testing that drove exceptional returns for an e-commerce client.',
    author: 'Vikram Patel',
    date: 'Jan 08, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
  },
  {
    id: 3,
    tag: 'Web Design',
    title: 'The 5 UX Principles Behind Every High-Converting Landing Page',
    excerpt: "Conversion rate optimisation isn't magic — it's psychology. We break down the five principles we apply to every landing page we design.",
    author: 'Priya Sharma',
    date: 'Dec 28, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=500&fit=crop',
  },
  {
    id: 4,
    tag: 'Social Media',
    title: 'Why Your Instagram Reach Dropped and How to Fix It in 2025',
    excerpt: "The algorithm changed again. Here's what's actually working for our clients right now — and what you should stop doing immediately.",
    author: 'Sneha Joshi',
    date: 'Dec 20, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop',
  },
  {
    id: 5,
    tag: 'Strategy',
    title: 'Full-Funnel Marketing: The Framework We Use for Every Client',
    excerpt: 'Siloed marketing channels waste budget. This is the integrated framework we use to connect awareness, consideration, and conversion into one cohesive engine.',
    author: 'Aryan Verma',
    date: 'Dec 12, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=500&fit=crop',
  },
  {
    id: 6,
    tag: 'Web Development',
    title: "Why We Moved All Client Sites to Next.js (And You Should Too)",
    excerpt: "Performance, SEO, and developer experience — Next.js wins on all three. Here's our migration process and the results we've seen across 20+ projects.",
    author: 'Rahul Gupta',
    date: 'Dec 05, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
  },
  {
    id: 7,
    tag: 'SEO',
    title: 'Local SEO in 2025: The Complete Guide for Service Businesses',
    excerpt: 'Google Business Profile, local citations, review strategy, and geo-targeted content — everything a local business needs to dominate their area.',
    author: 'Neha Singh',
    date: 'Nov 28, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=500&fit=crop',
  },
  {
    id: 8,
    tag: 'PPC',
    title: 'Meta Ads vs Google Ads: Which Should You Prioritise in 2025?',
    excerpt: 'The answer depends on your funnel stage, audience, and product type. We break down the decision framework we use with every new client.',
    author: 'Vikram Patel',
    date: 'Nov 18, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&h=500&fit=crop',
  },
  {
    id: 9,
    tag: 'Branding',
    title: 'Brand Strategy Before Marketing: Why Most Campaigns Fail',
    excerpt: "Pouring budget into ads without a clear brand position is like filling a leaky bucket. Here's how to fix the foundation before scaling spend.",
    author: 'Priya Sharma',
    date: 'Nov 10, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop',
  },
]

const blogFloatCards = [
  {
    cls: 'ph-float--1',
    icon: '✦',
    value: '50+',
    label: 'Articles Published',
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
    value: '8',
    label: 'Topics Covered',
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
    value: '20K+',
    label: 'Monthly Readers',
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: [0, -6, 0] },
    transition: {
      opacity: { duration: 0.5, delay: 1.15 },
      y:       { duration: 5.2, delay: 1.15, repeat: Infinity, ease: 'easeInOut' },
    },
  },
]

export default function Blog() {
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
              <span className="hero__trust-badge-text">Trendox Blog</span>
            </motion.div>
            <motion.h1 className="ph__title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              Insights, Strategy<br />
              <span className="hero__title-accent">&amp; Agency Thinking</span>
            </motion.h1>
            <motion.p className="ph__subtitle" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              Practical guides, case study breakdowns, and marketing strategy from the Trendox team.
            </motion.p>
            <motion.div className="hero__actions" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <a href="#articles" className="hero__btn-primary">Browse Articles <span className="hero__btn-arrow">→</span></a>
              <Link to="/contact" className="hero__btn-ghost">Work With Us</Link>
            </motion.div>
            <motion.div className="hero__trust-indicators" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}>
              {['50+ Articles', '8 Topics', '20K+ Monthly Readers'].map(item => (
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
                  <span className="ph__panel-title">Editorial Calendar</span>
                  <span className="ph__panel-badge">Jan 2025</span>
                </div>
                <div className="ph__topics">
                  {[['SEO', '12 posts'], ['PPC', '9 posts'], ['Social Media', '8 posts'], ['Web Design', '7 posts'], ['Strategy', '6 posts'], ['Branding', '5 posts']].map(([topic, count]) => (
                    <div key={topic} className="ph__topic-row">
                      <span className="ph__topic-dot" />
                      <span className="ph__topic-name">{topic}</span>
                      <span className="ph__topic-count">{count}</span>
                    </div>
                  ))}
                </div>
                <div className="ph__panel-divider" />
                <div className="ph__readtime">
                  <span className="ph__readtime-label">Avg. Read Time</span>
                  <span className="ph__readtime-value">7 min</span>
                </div>
              </motion.div>
              {blogFloatCards.map((card) => (
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

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {articles.map((article, i) => (
              <motion.article
                key={article.id}
                className="blog-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
                whileHover={{ y: -8 }}
              >
                <Link to={`/blog/${article.id}`} className="blog-card__link">
                  <div className="blog-card__image">
                    <img src={article.image} alt={article.title} />
                    <div className="blog-card__overlay">
                      <span className="blog-card__read-btn">Read Article →</span>
                    </div>
                  </div>
                  <div className="blog-card__body">
                    <span className="blog-card__tag">{article.tag}</span>
                    <h2 className="blog-card__title">{article.title}</h2>
                    <p className="blog-card__excerpt">{article.excerpt}</p>
                    <div className="blog-card__footer">
                      <div className="blog-card__author">
                        <div className="blog-card__avatar">{article.author[0]}</div>
                        <span>{article.author}</span>
                      </div>
                      <div className="blog-card__meta">
                        <span>{article.date}</span>
                        <span className="blog-card__dot">·</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
