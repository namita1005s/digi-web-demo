import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Hero from '../components/Hero/Hero'
import TrustedBy from '../components/TrustedBy/TrustedBy'
import Services from '../components/Services/Services'
import Portfolio from '../components/Portfolio/Portfolio'
import Process from '../components/Process/Process'
import Testimonials from '../components/Testimonials/Testimonials'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'

import SectionDivider from '../components/SectionDivider/SectionDivider'
import './Home.css'

const BG  = 'var(--bg)'
const ALT = 'var(--bg-alt)'
const DRK = 'var(--bg-dark)'

const revealUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
}

const revealUpSlow = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
}

/* Parallax floating accent that moves with scroll */
function ParallaxAccent({ className, speed = 0.3 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -80 * speed])
  return (
    <motion.div
      ref={ref}
      className={`home__accent ${className}`}
      style={{ y }}
      aria-hidden
    />
  )
}

/* Decorative ruled line that drifts on scroll */
function DriftLine({ className }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], [-12, 12])
  return (
    <motion.div
      ref={ref}
      className={`home__drift-line ${className}`}
      style={{ x }}
      aria-hidden
    />
  )
}

/* Radial depth orb that parallaxes independently */
function DepthOrb ({ className }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])
  return (
    <motion.div
      ref={ref}
      className={`home__depth-orb ${className}`}
      style={{ y }}
      aria-hidden
    />
  )
}

export default function Home() {
  return (
    <div className="home">

      {/* ── Hero ── wave bleeds to var(--bg) */} 
      <div className="home__hero-wrap">
        <Hero />
        <ParallaxAccent className="home__accent--hero-ring" speed={0.2} />
      </div>

      {/* ── TrustedBy ── Light */}
      <div className="home__trusted-wrap">
        <TrustedBy />
      </div>

      {/* ── Services ── White */}
      <div className="home__services-wrap">
        <ParallaxAccent className="home__accent--dot-grid-br" speed={0.4} />
        <DriftLine className="home__drift-line--services" />
        <motion.div {...revealUp}>
          <Services />
        </motion.div>
        <SectionDivider from={BG} to={ALT} variant="tilt" height={40} />
      </div>

      {/* ── Portfolio (Our Impact) ── Warm Grey */}
      <div className="home__portfolio-wrap">
        <Portfolio />
      </div>

      {/* ── Process ── Dark */}
      <div className="home__process-wrap">
        <SectionDivider from={ALT} to={DRK} variant="curve" height={60} />
        <motion.div {...revealUp}>
          <Process />
        </motion.div>
        <SectionDivider from={DRK} to={BG} variant="curve" height={72} flip />
      </div>

      {/* ── Testimonials ── Light */}
      <div className="home__testimonials-wrap">
        <ParallaxAccent className="home__accent--line-r" speed={0.35} />
        <DriftLine className="home__drift-line--testimonials" />
        <motion.div {...revealUp}>
          <Testimonials />
        </motion.div>
        <SectionDivider from={BG} to={BG} variant="angle" height={56} />
      </div>

      {/* ── FAQ ── White */}
      <div className="home__faq-wrap">
        <motion.div {...revealUp}>
          <FAQ />
        </motion.div>
        <SectionDivider from={BG} to={ALT} variant="tilt" height={72} />
      </div>

      {/* ── CTA ── */}
      <div className="home__cta-wrap">
        <CTA />
      </div>


    </div>
  )
}
