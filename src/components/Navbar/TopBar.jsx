import { Link } from 'react-router-dom'
import './TopBar.css'

export default function TopBar({ hidden }) {
  return (
    <div className={`topbar${hidden ? ' topbar--hidden' : ''}`}>
      <div className="container topbar__inner">
        <div className="topbar__contacts">
          <a href="tel:+918853533552" className="topbar__item">+91-885-353-3552</a>
          <span className="topbar__sep" aria-hidden>·</span>
          <a href="mailto:hello@trendoxmarketing.com" className="topbar__item topbar__email">
            hello@trendoxmarketing.com
          </a>
        </div>
        <Link to="/contact" className="topbar__cta">
          Book A Strategy Call <span className="topbar__arrow">→</span>
        </Link>
      </div>
    </div>
  )
}
