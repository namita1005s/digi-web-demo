import { motion } from 'framer-motion'
import './WhyChooseUs.css'

const steps = [
  {
    num: '01',
    title: 'Strategy',
    desc: 'We audit your brand, research your market, and build a data-backed growth roadmap tailored to your goals.',
    dark: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Execution',
    desc: 'Our specialists execute across design, development, SEO, and paid media with precision and speed.',
    dark: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Optimization',
    desc: 'We continuously test, measure, and refine every campaign to maximize performance and reduce waste.',
    dark: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Growth',
    desc: 'Sustainable, compounding growth that scales with your business — not just a one-time spike.',
    dark: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
]

const stats = [
  { value: '340%', label: 'Avg. ROI' },
  { value: '98%', label: 'Retention' },
  { value: '12+', label: 'Years' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function WhyChooseUs() {
  return (
    <section className="section why section--alt" id="why">
      <div className="container">

        <div className="why__top">
          <motion.div
            className="why__heading-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">Our Process</span>
            <h2 className="section-title">How We Drive<br /><span className="accent">Consistent Results</span></h2>
            <p className="section-subtitle">
              A proven four-step framework that turns strategy into sustainable business growth.
            </p>
          </motion.div>

          <motion.div
            className="why__stats-block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="why__stat">
                <span className="why__stat-value">{s.value}</span>
                <span className="why__stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="why__process">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className={`why-step${s.dark ? ' why-step--dark' : ''}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              <span className="why-step__bg-num">{s.num}</span>

              <div className="why-step__icon-wrap">
                {s.icon}
              </div>

              <div className="why-step__body">
                <div className="why-step__meta">
                  <span className="why-step__num-badge">{s.num}</span>
                  {i < steps.length - 1 && <span className="why-step__connector" aria-hidden="true" />}
                </div>
                <h3 className="why-step__title">{s.title}</h3>
                <p className="why-step__desc">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
