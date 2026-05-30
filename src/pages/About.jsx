import AboutSection from '../components/About/About'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import CTA from '../components/CTA/CTA'
import './About.css'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="section-tag">About Us</span>
          <h1 className="page-hero__title">We Are <span className="highlight">Trendox</span></h1>
          <p className="page-hero__subtitle">
            A results-driven digital marketing agency helping businesses grow online since 2019.
          </p>
        </div>
      </section>
      <AboutSection />
      <WhyChooseUs />
      <CTA />
    </>
  )
}
