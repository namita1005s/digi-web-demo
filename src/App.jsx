import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import BlogPost from './components/Blog/BlogPost'
import Career from './pages/Career'
import FAQs from './pages/FAQs'
import WebsiteDesign from './pages/WebsiteDesign'
import WebDevelopment from './pages/WebDevelopment'
import SEOServices from './pages/SEOServices'
import DigitalMarketing from './pages/DigitalMarketing'
import SMM from './pages/SMM'
import PPC from './pages/PPC'
import AIAutomation from './pages/AIAutomation'
import ORM from './pages/ORM'
import LocalSEO from './pages/LocalSEO'
import EcommerceSEO from './pages/EcommerceSEO'
import WhiteLabelSEO from './pages/WhiteLabelSEO'
import MobileAppMarketing from './pages/MobileAppMarketing'
import SoftwareDevelopment from './pages/SoftwareDevelopment'
import MobileAppsDevelopment from './pages/MobileAppsDevelopment'
import UIUXDesigning from './pages/UIUXDesigning'
import EcommerceWebDevelopment from './pages/EcommerceWebDevelopment'
import WordpressWebDevelopment from './pages/WordpressWebDevelopment'
import ReactjsDevelopment from './pages/ReactjsDevelopment'
import NodejsDevelopment from './pages/NodejsDevelopment'
import PHPDevelopment from './pages/PHPDevelopment'
import CRMSolutions from './pages/CRMSolutions'
import AngularjsDevelopment from './pages/AngularjsDevelopment'
import AspNetDevelopment from './pages/AspNetDevelopment'
import LandingPageDesigning from './pages/LandingPageDesigning'
import WebsiteRedesigning from './pages/WebsiteRedesigning'
import Web20Design from './pages/Web20Design'
import FlashDesign from './pages/FlashDesign'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/website-design" element={<WebsiteDesign />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/seo" element={<SEOServices />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/smm" element={<SMM />} />
        <Route path="/services/ppc" element={<PPC />} />
        <Route path="/services/ai-automation" element={<AIAutomation />} />
        <Route path="/services/orm" element={<ORM />} />
        <Route path="/services/local-seo" element={<LocalSEO />} />
        <Route path="/services/ecommerce-seo" element={<EcommerceSEO />} />
        <Route path="/services/white-label-seo" element={<WhiteLabelSEO />} />
        <Route path="/services/mobile-app-marketing" element={<MobileAppMarketing />} />
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/mobile-apps-development" element={<MobileAppsDevelopment />} />
        <Route path="/services/ui-ux-designing" element={<UIUXDesigning />} />
        <Route path="/services/ecommerce-web-development" element={<EcommerceWebDevelopment />} />
        <Route path="/services/wordpress-development" element={<WordpressWebDevelopment />} />
        <Route path="/services/reactjs-development" element={<ReactjsDevelopment />} />
        <Route path="/services/nodejs-development" element={<NodejsDevelopment />} />
        <Route path="/services/php-development" element={<PHPDevelopment />} />
        <Route path="/services/crm-solutions" element={<CRMSolutions />} />
        <Route path="/services/angularjs-development" element={<AngularjsDevelopment />} />
        <Route path="/services/asp-net-development" element={<AspNetDevelopment />} />
        <Route path="/services/landing-page-designing" element={<LandingPageDesigning />} />
        <Route path="/services/website-redesigning" element={<WebsiteRedesigning />} />
        <Route path="/services/web-2-0-design" element={<Web20Design />} />
        <Route path="/services/flash-design" element={<FlashDesign />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
