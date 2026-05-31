import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Hero.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const chartBars = [28, 42, 35, 58, 45, 67, 52, 78, 63, 88, 72, 100]

const kpis = [
  { label: 'Total Revenue', value: '$284K', change: '+32.4%' },
  { label: 'Leads Generated', value: '12.4K', change: '+58.1%' },
  { label: 'Avg. ROAS', value: '4.8x', change: '+12.3%' },
]

const channels = [['SEO', '42%'], ['PPC', '28%'], ['Social', '30%']]

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">

        <div className="hero__content">
          <motion.div className="hero__badge" {...fadeUp(0)}>
            <span className="hero__badge-dot" />
            Growth-Focused Digital Agency
          </motion.div>

          <motion.h1 className="hero__title" {...fadeUp(0.08)}>
            Helping Brands<br />
            Achieve Sustainable<br />
            <span className="hero__title-line">Digital Growth</span>
          </motion.h1>

          <motion.p className="hero__subtitle" {...fadeUp(0.16)}>
            We help ambitious businesses grow through strategy, design,
            development and performance marketing — built for measurable results.
          </motion.p>

          <motion.div className="hero__actions" {...fadeUp(0.24)}>
            <Link to="/contact" className="hero__btn-primary">
              Start Growing <span className="hero__btn-arrow">→</span>
            </Link>
            <Link to="/services" className="hero__btn-ghost">
              View Services
            </Link>
          </motion.div>

          <motion.div className="hero__trust" {...fadeUp(0.32)}>
            <div className="hero__trust-avatars">
              {['N','V','O','B'].map((l, i) => (
                <span key={i} className="hero__avatar" style={{ zIndex: 4 - i }}>{l}</span>
              ))}
            </div>
            <p className="hero__trust-text"><strong>50+</strong> brands scaled this year</p>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
        >
          <div className="hero__dashboard">
            <div className="hero__dash-header">
              <div className="hero__dash-dots"><span /><span /><span /></div>
              <span className="hero__dash-title">Growth Analytics</span>
              <span className="hero__dash-period">Last 12 months</span>
            </div>

            <div className="hero__dash-kpis">
              {kpis.map(k => (
                <div key={k.label} className="hero__kpi">
                  <span className="hero__kpi-label">{k.label}</span>
                  <span className="hero__kpi-value">{k.value}</span>
                  <span className="hero__kpi-change">{k.change}</span>
                </div>
              ))}
            </div>

            <div className="hero__chart">
              <div className="hero__chart-label">Revenue Growth</div>
              <div className="hero__bars">
                {chartBars.map((h, i) => (
                  <motion.div
                    key={i}
                    className="hero__bar"
                    style={{ height: `${h}%` }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.03, ease: 'easeOut' }}
                  />
                ))}
              </div>
              <div className="hero__chart-months">
                {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m, i) => (
                  <span key={i}>{m}</span>
                ))}
              </div>
            </div>

            <div className="hero__dash-channels">
              {channels.map(([ch, pct]) => (
                <div key={ch} className="hero__channel">
                  <span className="hero__channel-dot" />
                  <span className="hero__channel-name">{ch}</span>
                  <span className="hero__channel-pct">{pct}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="hero__metric hero__metric--0"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7, ease: 'easeOut' }}
          >
            <span className="hero__metric-icon">↑</span>
            <span className="hero__metric-value">+184%</span>
            <span className="hero__metric-label">Organic Traffic</span>
            <span className="hero__metric-sub">vs last quarter</span>
          </motion.div>

          <motion.div
            className="hero__metric hero__metric--1"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.82, ease: 'easeOut' }}
          >
            <span className="hero__metric-icon">◆</span>
            <span className="hero__metric-value">4.8x</span>
            <span className="hero__metric-label">Avg. ROAS</span>
            <span className="hero__metric-sub">across all channels</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
