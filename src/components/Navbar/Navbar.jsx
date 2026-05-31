import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

const serviceLinks = [
  { label: 'Website Design', to: '/services/website-design' },
  { label: 'Web Development', to: '/services/web-development' },
  { label: 'SEO Services', to: '/services/seo' },
  { label: 'Digital Marketing', to: '/services/digital-marketing' },
  { label: 'SMM Services', to: '/services/smm' },
  { label: 'PPC Advertising', to: '/services/ppc' },
]

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
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const closeAll = () => { setMenuOpen(false); setDropdownOpen(false); setMobileServicesOpen(false) }
  const isServicesActive = location.pathname.startsWith('/services')

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          Trendox<span className="navbar__logo-dot">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="navbar__links">
          {navLinks.map(({ label, to, hasDropdown }) => (
            <li key={label} className={hasDropdown ? 'navbar__item--dropdown' : ''} ref={hasDropdown ? dropdownRef : null}>
              {hasDropdown ? (
                <>
                  <button
                    className={`navbar__dropdown-trigger${isServicesActive ? ' active' : ''}`}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onClick={() => setDropdownOpen(o => !o)}
                  >
                    {label}
                    <span className={`navbar__chevron${dropdownOpen ? ' open' : ''}`}>›</span>
                  </button>
                  {dropdownOpen && (
                    <div className="navbar__dropdown" onMouseLeave={() => setDropdownOpen(false)}>
                      <Link
                        to="/services"
                        className="navbar__dropdown-overview"
                        onClick={() => setDropdownOpen(false)}
                      >
                        All Services →
                      </Link>
                      {serviceLinks.map(s => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="navbar__dropdown-item"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
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
  )
}
