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
