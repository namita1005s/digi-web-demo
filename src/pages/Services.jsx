import ServicesSection from '../components/Services/Services'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'
import './pages.css'

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="section-tag">What We Offer</span>
          <h1 className="page-hero__title">Our <span className="highlight">Services</span></h1>
          <p className="page-hero__subtitle">
            Full-service digital marketing solutions tailored to grow your business online.
          </p>
        </div>
      </section>
      <ServicesSection />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}
