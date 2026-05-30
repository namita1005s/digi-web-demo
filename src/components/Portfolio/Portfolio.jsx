import { motion } from 'framer-motion'
import './Portfolio.css'

const projects = [
  { tag: 'SEO', title: 'Nexora Tech', desc: 'Grew organic traffic by 180% in 4 months through technical SEO and content strategy.' },
  { tag: 'Web Design', title: 'Veltrix Solutions', desc: 'Redesigned corporate website resulting in 60% improvement in conversion rate.' },
  { tag: 'Social Media', title: 'Optica Retail', desc: 'Built a social media presence from scratch, reaching 50K followers in 6 months.' },
  { tag: 'PPC', title: 'Brandify Co.', desc: 'Managed $20K/month ad budget achieving 4.5x ROAS across Google and Meta.' },
  { tag: 'Branding', title: 'Lumex Agency', desc: 'Complete brand identity overhaul including logo, guidelines, and digital assets.' },
  { tag: 'Web Dev', title: 'Zyntec Platform', desc: 'Developed a custom web application with CMS integration and performance optimization.' },
]

export default function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Work</span>
          <h2 className="section-title">Recent <span className="highlight">Projects</span></h2>
          <p className="section-subtitle">A selection of work we're proud of — real results for real businesses.</p>
        </div>

        <div className="grid-3 portfolio__grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="portfolio-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="portfolio-card__tag">{p.tag}</span>
              <h3 className="portfolio-card__title">{p.title}</h3>
              <p className="portfolio-card__desc">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
