import ServicesSection from '../components/Services/Services'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'
import './pages.css'

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '104px' }}>
      <ServicesSection />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  )
}
