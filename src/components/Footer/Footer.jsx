import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link to="/" className="footer__logo">Trendox<span>.</span></Link>
        <p className="footer__copy">© {new Date().getFullYear()} Trendox Marketing Solutions. All rights reserved.</p>
      </div>
    </footer>
  )
}
