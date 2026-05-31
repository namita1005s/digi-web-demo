import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA/CTA'
import './About.css'
import './Blog.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const articles = [
  {
    tag: 'SEO',
    title: '10 Technical SEO Fixes That Will Double Your Organic Traffic',
    excerpt: 'Most websites are leaving rankings on the table due to fixable technical issues. Here are the ten highest-impact fixes we apply to every new client site.',
    author: 'Aryan Verma',
    date: 'Jan 14, 2025',
    readTime: '7 min read',
  },
  {
    tag: 'PPC',
    title: 'How We Achieved 4.5x ROAS on a ₹15L/Month Google Ads Budget',
    excerpt: 'A behind-the-scenes breakdown of the campaign structure, bidding strategy, and creative testing that drove exceptional returns for an e-commerce client.',
    author: 'Vikram Patel',
    date: 'Jan 08, 2025',
    readTime: '9 min read',
  },
  {
    tag: 'Web Design',
    title: 'The 5 UX Principles Behind Every High-Converting Landing Page',
    excerpt: 'Conversion rate optimisation isn\'t magic — it\'s psychology. We break down the five principles we apply to every landing page we design.',
    author: 'Priya Sharma',
    date: 'Dec 28, 2024',
    readTime: '6 min read',
  },
  {
    tag: 'Social Media',
    title: 'Why Your Instagram Reach Dropped and How to Fix It in 2025',
    excerpt: 'The algorithm changed again. Here\'s what\'s actually working for our clients right now — and what you should stop doing immediately.',
    author: 'Sneha Joshi',
    date: 'Dec 20, 2024',
    readTime: '5 min read',
  },
  {
    tag: 'Strategy',
    title: 'Full-Funnel Marketing: The Framework We Use for Every Client',
    excerpt: 'Siloed marketing channels waste budget. This is the integrated framework we use to connect awareness, consideration, and conversion into one cohesive engine.',
    author: 'Aryan Verma',
    date: 'Dec 12, 2024',
    readTime: '8 min read',
  },
  {
    tag: 'Web Development',
    title: 'Why We Moved All Client Sites to Next.js (And You Should Too)',
    excerpt: 'Performance, SEO, and developer experience — Next.js wins on all three. Here\'s our migration process and the results we\'ve seen across 20+ projects.',
    author: 'Rahul Gupta',
    date: 'Dec 05, 2024',
    readTime: '7 min read',
  },
  {
    tag: 'SEO',
    title: 'Local SEO in 2025: The Complete Guide for Service Businesses',
    excerpt: 'Google Business Profile, local citations, review strategy, and geo-targeted content — everything a local business needs to dominate their area.',
    author: 'Neha Singh',
    date: 'Nov 28, 2024',
    readTime: '10 min read',
  },
  {
    tag: 'PPC',
    title: 'Meta Ads vs Google Ads: Which Should You Prioritise in 2025?',
    excerpt: 'The answer depends on your funnel stage, audience, and product type. We break down the decision framework we use with every new client.',
    author: 'Vikram Patel',
    date: 'Nov 18, 2024',
    readTime: '6 min read',
  },
  {
    tag: 'Branding',
    title: 'Brand Strategy Before Marketing: Why Most Campaigns Fail',
    excerpt: 'Pouring budget into ads without a clear brand position is like filling a leaky bucket. Here\'s how to fix the foundation before scaling spend.',
    author: 'Priya Sharma',
    date: 'Nov 10, 2024',
    readTime: '5 min read',
  },
]

export default function Blog() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <motion.span className="section-tag" {...fadeUp(0)}>Blog</motion.span>
          <motion.h1 className="page-hero__title" {...fadeUp(0.06)}>
            Insights, Strategy<br />& Agency Thinking
          </motion.h1>
          <motion.p className="page-hero__subtitle" {...fadeUp(0.12)}>
            Practical guides, case study breakdowns, and marketing strategy from the Trendox team.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {articles.map((a, i) => (
              <motion.article
                key={a.title}
                className="blog-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              >
                <div className="blog-card__visual" />
                <div className="blog-card__body">
                  <span className="blog-card__tag">{a.tag}</span>
                  <h2 className="blog-card__title">{a.title}</h2>
                  <p className="blog-card__excerpt">{a.excerpt}</p>
                  <div className="blog-card__footer">
                    <div className="blog-card__author">
                      <div className="blog-card__avatar">{a.author[0]}</div>
                      <span>{a.author}</span>
                    </div>
                    <div className="blog-card__meta">
                      <span>{a.date}</span>
                      <span className="blog-card__dot">·</span>
                      <span>{a.readTime}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
