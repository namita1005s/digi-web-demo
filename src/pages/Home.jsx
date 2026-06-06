import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Hero from '../components/Hero/Hero'
import TrustedBy from '../components/TrustedBy/TrustedBy'
import Services from '../components/Services/Services'
import Stats from '../components/Stats/Stats'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Portfolio from '../components/Portfolio/Portfolio'
import Testimonials from '../components/Testimonials/Testimonials'
import FAQ from '../components/FAQ/FAQ'
import Pricing from '../components/Pricing/Pricing'
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

      {/* ── Hero ── flows into TrustedBy via gradient bleed */}
      <div className="home__hero-wrap">
        <Hero />
        <div className="home__hero-fade" />
        <ParallaxAccent className="home__accent--hero-ring" speed={0.2} />
      </div>

      {/* ── TrustedBy ── pulled up to overlap hero fade */}
      <motion.div className="home__trusted-wrap" {...revealUp}>
        <TrustedBy />
      </motion.div>

      {/* ── Services ── */}
      <div className="home__services-wrap">
        <ParallaxAccent className="home__accent--dot-grid-br" speed={0.4} />
        <ParallaxAccent className="home__accent--dot-grid-tl" speed={0.25} />
        <DriftLine className="home__drift-line--services" />
        <motion.div {...revealUp}>
          <Services />
        </motion.div>
        {/* Services → Stats: angled cut into dark with ghost layer */}
        <SectionDivider from={BG} to={DRK} variant="angle" height={108} />
      </div>

      {/* ── Stats ── dark band */}
      <div className="home__stats-wrap">
        <DepthOrb className="home__depth-orb--stats" />
        <Stats />
        {/* Stats → WhyChooseUs: organic S-curve out of dark */}
        <SectionDivider from={DRK} to={ALT} variant="masked" height={56} flip />
      </div>

      {/* ── WhyChooseUs ── */}
      <div className="home__why-wrap">
        <ParallaxAccent className="home__accent--ring-tl" speed={0.3} />
        <ParallaxAccent className="home__accent--corner-dots" speed={0.5} />
        <motion.div {...revealUpSlow}>
          <WhyChooseUs />
        </motion.div>
        {/* WhyChooseUs → Portfolio: tilt into dark */}
        <SectionDivider from={ALT} to={DRK} variant="tilt" height={104} />
      </div>

      {/* ── Portfolio ── dark; fades into Testimonials */}
      <div className="home__portfolio-wrap">
        <DepthOrb className="home__depth-orb--portfolio" />
        <Portfolio />
        {/* Portfolio → Testimonials: curve */}
        <SectionDivider from={DRK} to={ALT} variant="curve" height={96} />
      </div>

      {/* ── Testimonials ── */}
      <div className="home__testimonials-wrap">
        <ParallaxAccent className="home__accent--line-r" speed={0.35} />
        <DriftLine className="home__drift-line--testimonials" />
        <motion.div {...revealUp}>
          <Testimonials />
        </motion.div>
        {/* Testimonials → FAQ: soft curve */}
        <SectionDivider from={ALT} to={BG} variant="curve" height={100} flip />
      </div>

      {/* ── FAQ ── */}
      <div className="home__faq-wrap">
        <ParallaxAccent className="home__accent--faq-grid" speed={0.2} />
        <motion.div {...revealUp}>
          <FAQ />
        </motion.div>
        {/* FAQ → Pricing: angle into bg */}
        <SectionDivider from={BG} to={BG} variant="angle" height={80} />
      </div>

      {/* ── Custom Pricing ── */}
      <div className="home__pricing-wrap">
        <DepthOrb className="home__depth-orb--pricing" />
        <motion.div {...revealUpSlow}>
          <Pricing />
        </motion.div>
        {/* Pricing → CTA: curve into dark */}
        <SectionDivider from={BG} to={DRK} variant="curve" height={96} flip />
      </div>

      {/* ── CTA ── radial glow bleeds into Footer */}
      <CTA />

    </div>
  )
}
