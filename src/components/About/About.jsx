import { motion } from 'framer-motion'
import './About.css'
import { FaDesktop, FaCog, FaChartBar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const features = [
  { icon: <FaDesktop />, label: 'Website Design' },
  { icon: <FaCog />, label: 'Web Development' },
  { icon: <FaChartBar />, label: 'Digital Marketing' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d } }),
}

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__inner">
        <motion.div
          className="about__content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title" style={{ textAlign: 'left', margin: '12px 0 20px' }}>
            We Help Brands <span className="highlight">Grow Online</span>
          </h2>
          <p className="about__text">
            Trendox Marketing Solutions is a results-driven digital marketing agency dedicated to
            helping businesses of all sizes build a powerful online presence. We combine creativity,
            data, and technology to deliver strategies that generate real, measurable growth.
          </p>
          <p className="about__text">
            From startups to established brands, we partner with our clients to understand their
            goals and craft tailored solutions that drive leads, visibility, and revenue.
          </p>

          <div className="about__features">
            {features.map(f => (
              <div key={f.label} className="about__feature">
                <span className="about__feature-icon">{f.icon}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn-primary">Read More</Link>
        </motion.div>

        <motion.div
          className="about__visual"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          <div className="about__card">
            <div className="about__stat">
              <span className="about__stat-num">20+</span>
              <span className="about__stat-label">Happy Clients</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">50+</span>
              <span className="about__stat-label">Projects Done</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">5+</span>
              <span className="about__stat-label">Years Experience</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">10+</span>
              <span className="about__stat-label">Team Members</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
