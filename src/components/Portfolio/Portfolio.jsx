import { motion } from 'framer-motion'
import './Portfolio.css'

const projects = [
  {
    tag: 'SEO Campaign',
    title: 'Nexora Tech',
    result: '+180% Organic Traffic',
    desc: 'Technical SEO overhaul and content strategy that tripled search visibility in 4 months.',
    metric: '180%',
    metricLabel: 'Traffic Growth',
  },
  {
    tag: 'Website Redesign',
    title: 'Veltrix Solutions',
    result: '+60% Conversion Rate',
    desc: 'Full website transformation with UX-first design that dramatically improved lead quality.',
    metric: '60%',
    metricLabel: 'More Conversions',
  },
  {
    tag: 'PPC Advertising',
    title: 'Brandify Co.',
    result: '4.5x ROAS',
    desc: 'Managed $20K/month ad budget across Google and Meta, achieving consistent 4.5x return.',
    metric: '4.5x',
    metricLabel: 'Return on Ad Spend',
  },
]

export default function Portfolio() {
  return (
    <section className="section portfolio section--dark" id="portfolio">
      <div className="container">
        <div className="portfolio__header">
          <div>
            <span className="section-tag section-tag--dark">Our Work</span>
            <h2 className="section-title section-title--dark">Results That<br /><span className="accent">Speak for Themselves</span></h2>
          </div>
          <p className="section-subtitle section-subtitle--dark portfolio__header-sub">
            A curated selection of campaigns and projects that delivered measurable business impact.
          </p>
        </div>

        <div className="portfolio__grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="portfolio-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            >
              <div className="portfolio-card__visual">
                <div className="portfolio-card__screen">
                  <div className="portfolio-card__screen-bar">
                    <span /><span /><span />
                  </div>
                  <div className="portfolio-card__screen-body">
                    <div className="portfolio-card__screen-metric">
                      <span className="portfolio-card__screen-val">{p.metric}</span>
                      <span className="portfolio-card__screen-lbl">{p.metricLabel}</span>
                    </div>
                    <div className="portfolio-card__screen-bars">
                      {[40,65,50,80,60,90,72,100].map((h, j) => (
                        <motion.div
                          key={j}
                          className="portfolio-card__bar"
                          style={{ height: `${h}%` }}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 + j * 0.04 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-card__content">
                <span className="portfolio-card__tag">{p.tag}</span>
                <h3 className="portfolio-card__title">{p.title}</h3>
                <p className="portfolio-card__desc">{p.desc}</p>
                <span className="portfolio-card__result">{p.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
