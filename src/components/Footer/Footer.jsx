import { Link } from 'react-router-dom'
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter,
} from 'react-icons/fa6'
import './Footer.css'

const company = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Career', to: '/career' },
  { label: 'Contact', to: '/contact' },
  { label: 'FAQs', to: '/faqs' },
]

const services = [
  { label: 'Website Design', to: '/services/website-design' },
  { label: 'Web Development', to: '/services/web-development' },
  { label: 'SEO Services', to: '/services/seo' },
  { label: 'Digital Marketing', to: '/services/digital-marketing' },
  { label: 'SMM Services', to: '/services/smm' },
  { label: 'PPC Advertising', to: '/services/ppc' },
]

const contact = [
  { label: 'hello@trendoxmarketing.com', href: 'mailto:hello@trendoxmarketing.com' },
  { label: '+91 885-353-3552', href: 'tel:+918853533552' },
  { label: 'Lucknow, Uttar Pradesh, India' },
  { label: 'www.trendoxmarketing.com', href: 'https://www.trendoxmarketing.com' },
]

const socials = [
  { icon: <FaFacebookF />, href: 'https://facebook.com', label: 'Facebook' },
  { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <FaLinkedinIn />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FaXTwitter />, href: 'https://twitter.com', label: 'X' },
]

export default function Footer() {
  return (
    <footer className="footer">

      {/* Wave transition — grey CTA into dark footer */}
      <svg className="footer__wave" viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill="var(--bg-alt)" />
      </svg>
      <div className="footer__main">
        <div className="container footer__grid">

          <div className="footer__col footer__col--brand">
            <Link to="/" className="footer__logo">
              <img
                src="/trendoxlogo.png"
                alt="Trendox"
                className="footer__logo-img"
                width="auto"
                height="65"
              />
            </Link>
            <p className="footer__about">
              We help ambitious brands grow through strategy, design,
              development and performance marketing.
            </p>
            <div className="footer__socials">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__links">
              {company.map(p => (
                <li key={p.label}><Link to={p.to}>{p.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__links">
              {services.map(s => (
                <li key={s.label}><Link to={s.to}>{s.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__links">
              {contact.map(c => (
                <li key={c.label}>
                  {c.href
                    ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{c.label}</a>
                    : <span>{c.label}</span>
                  }
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Trendox Marketing Solutions. All Rights Reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
