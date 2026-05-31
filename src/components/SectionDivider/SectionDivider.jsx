import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './SectionDivider.css'

export default function SectionDivider({
  from = 'var(--bg)',
  to = 'var(--bg-dark)',
  variant = 'angle',
  flip = false,
  height = 80,
  accent = false,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const glowY  = useTransform(scrollYProgress, [0, 1], [-24, 24])
  const glowY2 = useTransform(scrollYProgress, [0, 1], [24, -24])
  const lineY  = useTransform(scrollYProgress, [0, 1], [-8, 8])

/* ── Radial glow bridge ── */
  if (variant === 'radial-glow') {
    return (
      <div
        ref={ref}
        className="sdiv sdiv--radial"
        style={{ height: height * 2, background: `linear-gradient(to bottom, ${from}, ${to})` }}
      >
        <motion.div className="sdiv__glow" style={{ y: glowY }} />
        <motion.div className="sdiv__glow sdiv__glow--secondary" style={{ y: glowY2 }} />
        {accent && <motion.div className="sdiv__accent-dot sdiv__accent-dot--l" style={{ y: lineY }} />}
        {accent && <motion.div className="sdiv__accent-dot sdiv__accent-dot--r" style={{ y: lineY }} />}
        {accent && <motion.div className="sdiv__cross-hair" style={{ y: glowY }} />}
      </div>
    )
  }

  /* ── Organic masked S-curve ── */
  if (variant === 'masked') {
    return (
      <div ref={ref} className="sdiv sdiv--masked" style={{ height }}>
        <div className="sdiv__masked-from" style={{ background: from }} />
        <svg
          viewBox={`0 0 1440 ${height}`}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sdiv__masked-svg"
        >
          <path
            d={flip
              ? `M0,${height} C360,${height * 0.1} 720,${height * 0.9} 1080,${height * 0.2} C1200,${height * 0.05} 1360,${height * 0.4} 1440,0 L1440,${height} L0,${height} Z`
              : `M0,0 C360,${height * 0.9} 720,${height * 0.1} 1080,${height * 0.8} C1200,${height * 0.95} 1360,${height * 0.6} 1440,${height} L1440,0 Z`
            }
            fill={to}
          />
        </svg>
        {accent && <motion.div className="sdiv__float-line" style={{ y: lineY }} />}
        {accent && <motion.div className="sdiv__float-dot" style={{ y: lineY }} />}
      </div>
    )
  }

  /* ── Noise-fade: layered semi-transparent gradient with grain texture ── */
  if (variant === 'noise-fade') {
    return (
      <div
        ref={ref}
        className="sdiv sdiv--noise-fade"
        style={{ height, background: `linear-gradient(to bottom, ${from} 0%, ${to} 100%)` }}
      >
        <motion.div className="sdiv__noise-layer" style={{ y: lineY }} />
      </div>
    )
  }

  /* ── Stagger lines: thin asymmetric ruled lines ── */
  if (variant === 'stagger-lines') {
    return (
      <div ref={ref} className="sdiv sdiv--stagger" style={{ height, background: from }}>
        <svg
          viewBox={`0 0 1440 ${height}`}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', width: '100%', height: '100%' }}
        >
          <rect width="1440" height={height} fill={from} />
          <path d={`M0,${height * 0.55} L1440,${height * 0.3} L1440,${height + 8} L0,${height + 8} Z`} fill={to} />
          <path d={`M0,${height * 0.72} L1440,${height * 0.48} L1440,${height + 8} L0,${height + 8} Z`} fill={to} opacity={0.45} />
        </svg>
      </div>
    )
  }

  if (variant === 'overlap') {
    return (
      <div
        className="sdiv sdiv--overlap"
        style={{ height, background: `linear-gradient(to bottom, ${from} 0%, ${to} 100%)` }}
      />
    )
  }

  /* ── SVG shape variants: angle / curve / tilt ── */
  const h = height
  // paths extend 8px beyond viewBox top/bottom so scroll-jitter never exposes a gap
  const paths = {
    angle: flip
      ? `M0,${h + 8} L1440,${h * 0.06} L1440,${h + 8} Z`
      : `M0,${h * 0.06} L1440,-8 L1440,${h + 8} L0,${h + 8} Z`,
    curve: flip
      ? `M0,${h + 8} Q720,-8 1440,${h * 0.22} L1440,${h + 8} Z`
      : `M0,${h * 0.22} Q720,${h + 8} 1440,-8 L1440,${h + 8} L0,${h + 8} Z`,
    tilt: flip
      ? `M0,${h + 8} L480,${h * 0.02} L1440,${h * 0.38} L1440,${h + 8} Z`
      : `M0,${h * 0.38} L960,-8 L1440,${h * 0.18} L1440,${h + 8} L0,${h + 8} Z`,
  }

  return (
    <div ref={ref} className="sdiv" style={{ height }}>
      <svg
        viewBox={`0 0 1440 ${h}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <rect width="1440" height={h} fill={from} />
        <path d={paths[variant]} fill={to} />
      </svg>
      {accent && <div className="sdiv__accent-ring" />}
    </div>
  )
}
