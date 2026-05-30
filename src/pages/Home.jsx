import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import About from '../components/About/About'
import Stats from '../components/Stats/Stats'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Portfolio from '../components/Portfolio/Portfolio'
import Testimonials from '../components/Testimonials/Testimonials'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Stats />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}
