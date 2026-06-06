import './Testimonials.css'

const REVIEWS = [
  {
    quote: 'Trendox completely transformed our online presence. Our qualified leads doubled within 3 months — the team was strategic, responsive and laser-focused on results.',
    name: 'Sarah Mitchell',
    role: 'CEO',
    avatar: 'S',
    color: '#4285F4',
  },
  {
    quote: 'Professional and results-driven. The SEO work pushed us to page one on Google within 60 days. Best agency we have partnered with.',
    name: 'James Okafor',
    role: 'Founder',
    avatar: 'J',
    color: '#34A853',
  },
  {
    quote: 'Their social media strategy brought a 40% increase in engagement and a measurable lift in sales. Genuinely impressive work.',
    name: 'Priya Sharma',
    role: 'Marketing Director',
    avatar: 'P',
    color: '#EA4335',
  },
  {
    quote: 'From strategy to execution, Trendox handled everything seamlessly. Our cost-per-lead dropped by 35% in the first month of paid campaigns.',
    name: 'Marcus Webb',
    role: 'Business Owner',
    avatar: 'M',
    color: '#FBBC04',
  },
  {
    quote: 'We had tried two other agencies before Trendox. The difference was night and day — clear communication, real data, and actual growth.',
    name: 'Aisha Nwosu',
    role: 'Co-Founder',
    avatar: 'A',
    color: '#4285F4',
  },
  {
    quote: 'Our website traffic grew 3× in four months. The content and SEO strategy they built has been compounding ever since.',
    name: 'Daniel Reeves',
    role: 'Marketing Manager',
    avatar: 'D',
    color: '#34A853',
  },
]

function GoogleLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function Stars() {
  return (
    <div className="gr-stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC04">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <div className="gr-card">
      <div className="gr-card__top">
        <div className="gr-card__brand">
          <GoogleLogo />
          <span className="gr-card__brand-text">Google Reviews</span>
        </div>
        <Stars />
      </div>
      <p className="gr-card__quote">"{review.quote}"</p>
      <div className="gr-card__author">
        <div className="gr-card__avatar" style={{ background: review.color }}>
          {review.avatar}
        </div>
        <div>
          <span className="gr-card__name">{review.name}</span>
          <span className="gr-card__role">{review.role}</span>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const doubled = [...REVIEWS, ...REVIEWS]

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__head container">
        <span className="section-tag">Client Reviews</span>
        <h2 className="section-title">Trusted by businesses.<br /><em style={{fontStyle:'italic', fontWeight:300}}>Proven by results.</em></h2>
      </div>

      <div className="gr-track-wrap">
        <div className="gr-track">
          {doubled.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
