import { Link } from 'react-router-dom'
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter,
  FaLocationDot, FaEnvelope, FaPhone, FaGlobe,
} from 'react-icons/fa6'
import './Footer.css'

const pages = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Career', to: '/career' },
]

const quickLinks = [
  { label: 'Get Quote', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Blog', to: '/blog' },
]

const services = [
  { label: 'Website Design', to: '/services' },
  { label: 'Web Development', to: '/services' },
  { label: 'SEO Services', to: '/services' },
  { label: 'Social Media Marketing', to: '/services' },
  { label: 'PPC Advertising', to: '/services' },
]

const socials = [
  { icon: <FaFacebookF />, href: 'https://facebook.com', label: 'Facebook' },
  { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <FaLinkedinIn />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FaXTwitter />, href: 'https://twitter.com', label: 'X / Twitter' },
]

const contacts = [
  { icon: <FaLocationDot />, text: 'Lucknow, Uttar Pradesh, India' },
  { icon: <FaEnvelope />, text: 'hello@trendoxmarketing.com', href: 'mailto:hello@trendoxmarketing.com' },
  { icon: <FaPhone />, text: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
  { icon: <FaGlobe />, text: 'www.trendoxmarketing.com', href: 'https://www.trendoxmarketing.com' },
]

export default function Footer() {
  return (
    <footer className="footer">

      {/* ── Top Banner ── */}
      <div className="footer__top">
        <div className="container footer__top-inner">
          <h2 className="footer__top-heading">
            Experience World-Class <span>Digital Marketing Services</span>
          </h2>
          <p className="footer__top-text">
            Elevate your brand with innovative strategies tailored to drive growth, visibility,
            and long-term success. Let's grow your business together.
          </p>
          <Link to="/contact" className="btn-primary footer__top-cta">
            Get Free Consultation
          </Link>
        </div>
      </div>

      {/* ── Middle Grid ── */}
      <div className="footer__middle">
        <div className="container footer__grid">

          {/* Col 1 — Company */}
          <div className="footer__col">
            <Link to="/" className="footer__logo">
              Trendox<span>.</span>
            </Link>
            <p className="footer__about">
              Helping businesses grow through web development, SEO, social media marketing,
              and performance-driven digital strategies.
            </p>
            <div className="footer__socials">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Pages */}
          <div className="footer__col">
            <h4 className="footer__col-title">Other Pages</h4>
            <ul className="footer__links">
              {pages.map(p => (
                <li key={p.label}><Link to={p.to}>{p.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map(p => (
                <li key={p.label}><Link to={p.to}>{p.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Services</h4>
            <ul className="footer__links">
              {services.map(s => (
                <li key={s.label}><Link to={s.to}>{s.label}</Link></li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Contact Bar ── */}
      <div className="footer__contact">
        <div className="container footer__contact-grid">
          {contacts.map(c => (
            <div key={c.text} className="footer__contact-item">
              <span className="footer__contact-icon">{c.icon}</span>
              {c.href
                ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{c.text}</a>
                : <span>{c.text}</span>
              }
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Trendox Marketing Solutions. All Rights Reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
            <Link to="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
