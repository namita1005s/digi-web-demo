import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span>📞 +1 (800) 123-4567</span>
            <span>✉️ hello@trendox.com</span>
          </div>
          <div className="topbar-right">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">FB</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">TW</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">LI</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo">
            Trendox<span>.</span>
          </Link>

          <ul className={`navbar-links${menuOpen ? ' navbar-links--open' : ''}`}>
            {navLinks.map(link => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/contact" className="btn-primary navbar-cta" onClick={() => setMenuOpen(false)}>
                Get Quote
              </Link>
            </li>
          </ul>

          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger${menuOpen ? ' hamburger--open' : ''}`} />
          </button>
        </div>
      </nav>
    </>
  )
}
