import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import TopBar from './TopBar'
import './Navbar.css'

const megaMenuData = [
  {
    tab: 'SEO Services',
    icon: '⊙',
    tabLine2: 'Search Engine Optimization',
    heading: 'Search Engine Optimization',
    services: [
      { label: 'Technical SEO', to: '/services/seo' },
      { label: 'Local SEO', to: '/services/seo' },
      { label: 'Enterprise SEO', to: '/services/seo' },
      { label: 'SEO Audit', to: '/services/seo' },
      { label: 'Keyword Research', to: '/services/seo' },
      { label: 'Link Building', to: '/services/seo' },
      { label: 'Content Optimization', to: '/services/seo' },
      { label: 'Competitor Analysis', to: '/services/seo' },
      { label: 'Ecommerce SEO', to: '/services/seo' },
    ],
    card: {
      headline: '3X Organic Growth Delivered — Rank #1 on Google',
      cta: 'Explore SEO Services →',
      to: '/services/seo',
    },
  },
  {
    tab: 'Web Development',
    icon: '⬡',
    tabLine2: 'Web Development',
    heading: 'Web Development',
    services: [
      { label: 'Business Websites', to: '/services/web-development' },
      { label: 'Landing Pages', to: '/services/web-development' },
      { label: 'Ecommerce Stores', to: '/services/web-development' },
      { label: 'React Apps', to: '/services/web-development' },
      { label: 'Next.js Apps', to: '/services/web-development' },
      { label: 'Custom Dashboards', to: '/services/web-development' },
      { label: 'API Integrations', to: '/services/web-development' },
      { label: 'CMS Development', to: '/services/web-development' },
      { label: 'Performance Audits', to: '/services/web-development' },
    ],
    card: {
      headline: 'High-Performance Websites Built to Convert & Scale',
      cta: 'Start Your Project →',
      to: '/services/web-development',
    },
  },
  {
    tab: 'Digital Marketing',
    icon: '◈',
    tabLine2: 'Digital Marketing',
    heading: 'Digital Marketing',
    services: [
      { label: 'Marketing Strategy', to: '/services/digital-marketing' },
      { label: 'Email Marketing', to: '/services/digital-marketing' },
      { label: 'CRO', to: '/services/digital-marketing' },
      { label: 'Influencer Marketing', to: '/services/digital-marketing' },
      { label: 'Brand Awareness', to: '/services/digital-marketing' },
      { label: 'Lead Generation', to: '/services/digital-marketing' },
      { label: 'Marketing Automation', to: '/services/digital-marketing' },
      { label: 'Analytics & Reporting', to: '/services/digital-marketing' },
      { label: 'Funnel Optimisation', to: '/services/digital-marketing' },
    ],
    card: {
      headline: 'Full-Funnel Campaigns That Turn Traffic Into Revenue',
      cta: 'Grow My Brand →',
      to: '/services/digital-marketing',
    },
  },
  {
    tab: 'Social Media',
    icon: '⬟',
    tabLine2: 'Social Media Marketing',
    heading: 'Social Media Marketing',
    services: [
      { label: 'Instagram Marketing', to: '/services/smm' },
      { label: 'LinkedIn Marketing', to: '/services/smm' },
      { label: 'Facebook Ads', to: '/services/smm' },
      { label: 'YouTube Marketing', to: '/services/smm' },
      { label: 'Twitter / X Growth', to: '/services/smm' },
      { label: 'Community Management', to: '/services/smm' },
      { label: 'Content Calendar', to: '/services/smm' },
      { label: 'Social Analytics', to: '/services/smm' },
      { label: 'Reels & Shorts Strategy', to: '/services/smm' },
    ],
    card: {
      headline: 'Dominate Every Platform & Build a Brand That Sells',
      cta: 'Boost My Social →',
      to: '/services/smm',
    },
  },
  {
    tab: 'Performance Marketing',
    icon: '◉',
    tabLine2: 'Performance Marketing',
    heading: 'Performance Marketing',
    services: [
      { label: 'Google Ads', to: '/services/ppc' },
      { label: 'Meta Ads', to: '/services/ppc' },
      { label: 'Programmatic Advertising', to: '/services/ppc' },
      { label: 'Retargeting Campaigns', to: '/services/ppc' },
      { label: 'Shopping Ads', to: '/services/ppc' },
      { label: 'Display Advertising', to: '/services/ppc' },
      { label: 'Video Ads', to: '/services/ppc' },
      { label: 'ROAS Optimisation', to: '/services/ppc' },
      { label: 'Conversion Tracking', to: '/services/ppc' },
    ],
    card: {
      headline: 'Paid Campaigns Engineered for Maximum ROI & ROAS',
      cta: 'Launch My Ads →',
      to: '/services/ppc',
    },
  },
  {
    tab: 'AI Automation',
    icon: '✦',
    tabLine2: 'AI & Automation',
    heading: 'AI & Automation',
    services: [
      { label: 'AI Chatbots', to: '/services/ai-automation' },
      { label: 'Workflow Automation', to: '/services/ai-automation' },
      { label: 'AI Content Generation', to: '/services/ai-automation' },
      { label: 'Predictive Analytics', to: '/services/ai-automation' },
      { label: 'CRM Automation', to: '/services/ai-automation' },
      { label: 'Lead Scoring AI', to: '/services/ai-automation' },
      { label: 'Smart Reporting', to: '/services/ai-automation' },
      { label: 'AI SEO Tools', to: '/services/ai-automation' },
      { label: 'Voice Search Optimisation', to: '/services/ai-automation' },
    ],
    card: {
      headline: 'Automate Operations & Scale 10X Faster with AI',
      cta: 'Explore AI Solutions →',
      to: '/services/ai-automation',
    },
  },
]

const serviceLinks = megaMenuData.map(m => ({ label: m.tab, to: m.services[0].to }))

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', hasDropdown: true },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Career', to: '/career' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [topBarHidden, setTopBarHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const openTimer = useRef(null)
  const closeTimer = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setTopBarHidden(y > 50)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const [activeTab, setActiveTab] = useState(0)

  const scheduleOpen = useCallback(() => {
    clearTimeout(closeTimer.current)
    openTimer.current = setTimeout(() => setDropdownOpen(true), 150)
  }, [])

  const scheduleClose = useCallback(() => {
    clearTimeout(openTimer.current)
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 200)
  }, [])

  const cancelClose = useCallback(() => {
    clearTimeout(closeTimer.current)
  }, [])

  const closeAll = () => { setMenuOpen(false); setDropdownOpen(false); setMobileServicesOpen(false) }
  const isServicesActive = location.pathname.startsWith('/services')
  const activeData = megaMenuData[activeTab]

  return (
    <>
    <TopBar hidden={topBarHidden} />
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}${topBarHidden ? ' navbar--top' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          Trendox<span className="navbar__logo-dot">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="navbar__links">
          {navLinks.map(({ label, to, hasDropdown }) => (
            <li key={label} className={hasDropdown ? 'navbar__item--dropdown' : ''}>
              {hasDropdown ? (
                <>
                  <button
                    className={`navbar__dropdown-trigger${isServicesActive ? ' active' : ''}`}
                    onMouseEnter={scheduleOpen}
                    onMouseLeave={scheduleClose}
                    onClick={() => setDropdownOpen(o => !o)}
                  >
                    {label}
                    <span className={`navbar__chevron${dropdownOpen ? ' open' : ''}`}>›</span>
                  </button>
                  <div
                    className={`mega-menu${dropdownOpen ? ' mega-menu--open' : ''}`}
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="container">
                      <div className="mega-menu__tabs">
                        {megaMenuData.map((m, i) => (
                          <button
                            key={m.tab}
                            className={`mega-menu__tab${activeTab === i ? ' active' : ''}`}
                            onMouseEnter={() => setActiveTab(i)}
                            onClick={() => setActiveTab(i)}
                          >
                            <span className="mega-menu__tab-icon">{m.icon}</span>
                            <span className="mega-menu__tab-label">{m.tabLine2}</span>
                          </button>
                        ))}
                      </div>
                      <div className="mega-menu__body">
                        <div className="mega-menu__left">
                          <h3 className="mega-menu__heading">{activeData.heading}</h3>
                          <div className="mega-menu__grid">
                            {activeData.services.map((s, i) => (
                              <Link
                                key={s.label}
                                to={s.to}
                                className={`mega-menu__service-item${i === 0 ? ' first' : ''}`}
                                onClick={() => setDropdownOpen(false)}
                              >
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="mega-menu__right">
                          <div className="mega-menu__card">
                            <div className="mega-menu__card-orb mega-menu__card-orb--1" />
                            <div className="mega-menu__card-orb mega-menu__card-orb--2" />
                            <h4 className="mega-menu__card-headline">{activeData.card.headline}</h4>
                            <Link
                              to={activeData.card.to}
                              className="mega-menu__card-cta"
                              onClick={() => setDropdownOpen(false)}
                            >
                              {activeData.card.cta}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <NavLink
                  to={to}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <button className="navbar__cta-btn" onClick={() => navigate('/contact')}>
          Get Started
        </button>

        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          <ul className="navbar__mobile-links">
            {navLinks.map(({ label, to, hasDropdown }) => (
              <li key={label}>
                {hasDropdown ? (
                  <>
                    <button
                      className={`navbar__mobile-services-toggle${isServicesActive ? ' active' : ''}`}
                      onClick={() => setMobileServicesOpen(o => !o)}
                    >
                      {label}
                      <span className={`navbar__chevron${mobileServicesOpen ? ' open' : ''}`}>›</span>
                    </button>
                    {mobileServicesOpen && (
                      <div className="navbar__mobile-dropdown">
                        <Link to="/services" onClick={closeAll}>All Services</Link>
                        {serviceLinks.map(s => (
                          <Link key={s.to} to={s.to} onClick={closeAll}>{s.label}</Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={to}
                    className={({ isActive }) => isActive ? 'active' : ''}
                    onClick={closeAll}
                  >
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <button className="navbar__cta-btn navbar__cta-mobile" onClick={() => { navigate('/contact'); closeAll() }}>
            Get Started
          </button>
        </div>
      )}

      {menuOpen && <div className="navbar__overlay" onClick={closeAll} />}
    </nav>
    </>
  )
}
