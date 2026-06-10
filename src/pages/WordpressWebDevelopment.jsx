import ServicePage from '../components/ServicePage/ServicePage'

const WordPressVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="wp-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#DDD8D4" />
        <stop offset="100%" stopColor="#CBC6C0" />
      </linearGradient>
      <linearGradient id="wp-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F0EDE8" />
        <stop offset="100%" stopColor="#E4E0DA" />
      </linearGradient>
      <linearGradient id="wp-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#464240" />
        <stop offset="100%" stopColor="#363230" />
      </linearGradient>
      <filter id="wp-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#wp-bg)" />

    {/* 3D isometric browser window */}
    <polygon points="60,60 60,280 240,316 240,96" fill="#B8B4AE" />
    <polygon points="60,60 240,96 420,60 240,24" fill="#D0CCC6" />
    <polygon points="420,60 420,280 240,316 240,96" fill="#C4C0BA" />
    {/* screen */}
    <polygon points="76,68 240,102 404,68 240,34" fill="#EAE6E0" />
    <polygon points="76,68 76,268 240,304 240,102" fill="#E0DCD6" />
    <polygon points="404,68 404,268 240,304 240,102" fill="#EAE6E0" />

    {/* WP admin bar */}
    <rect x="80" y="72" width="156" height="14" rx="2" fill="#3A3632" />
    <rect x="84" y="76" width="40" height="6" rx="2" fill="#5A5652" />
    <rect x="130" y="76" width="26" height="6" rx="2" fill="#4A4642" />

    {/* Page builder blocks left panel */}
    <rect x="80" y="90" width="46" height="166" rx="3" fill="#D8D4CE" />
    <rect x="82" y="94" width="42" height="8" rx="2" fill="#C8C4BE" />
    {['H','P','Img','Btn','List','Col'].map((b,i)=>(
      <g key={b}>
        <rect x="84" y={106+i*22} width="38" height="18" rx="4" fill="#C4C0BA" />
        <text x="103" y={119+i*22} fontSize="7" fill="#6A6660" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{b}</text>
      </g>
    ))}

    {/* Page preview right */}
    <rect x="130" y="90" width="106" height="166" rx="3" fill="#F0EDE8" />
    <rect x="134" y="96" width="98" height="12" rx="3" fill="#D8D2CA" />
    <rect x="134" y="112" width="98" height="30" rx="3" fill="#E0D8D0" />
    <rect x="134" y="146" width="44" height="8" rx="2" fill="#C8C2B8" />
    <rect x="182" y="146" width="44" height="8" rx="2" fill="#C8C2B8" />
    {[0,1,2].map(i=>(
      <g key={i}>
        <rect x={134+i*36} y="160" width="30" height="24" rx="4" fill="#D8D2CA" />
        <rect x={138+i*36} y="188" width="22" height="4" rx="2" fill="#C0BAB0" />
        <rect x={138+i*36} y="196" width="16" height="3" rx="1" fill="#C8C2B8" />
      </g>
    ))}
    <rect x="134" y="206" width="80" height="12" rx="5" fill="#7A7670" />
    <rect x="134" y="224" width="98" height="5" rx="2" fill="#D0CAC2" />
    <rect x="134" y="234" width="70" height="5" rx="2" fill="#D8D2CA" />

    {/* Floating speed badge */}
    <g filter="url(#wp-shadow)" transform="translate(28,180)">
      <rect width="108" height="58" rx="12" fill="url(#wp-dark)" />
      <polygon points="108,12 112,16 112,66 108,62" fill="#262220" />
      <polygon points="12,58 16,62 112,62 108,58" fill="#1E1A18" />
      <rect x="12" y="12" width="50" height="4" rx="2" fill="#5A5652" />
      <text x="12" y="44" fontSize="20" fontWeight="900" fill="#E8E0D8" fontFamily="Inter,sans-serif">95+</text>
      <rect x="12" y="50" width="60" height="3" rx="1" fill="#4A4642" />
    </g>
    <g filter="url(#wp-shadow)" transform="translate(28,252)">
      <rect width="108" height="46" rx="12" fill="url(#wp-card)" />
      <polygon points="108,12 112,16 112,54 108,50" fill="#D0CAC2" />
      <polygon points="12,46 16,50 112,50 108,46" fill="#C8C2BA" />
      <rect x="12" y="12" width="60" height="4" rx="2" fill="#8A8480" />
      <text x="12" y="36" fontSize="14" fontWeight="900" fill="#464240" fontFamily="Inter,sans-serif">300+</text>
    </g>

    {/* Security badge */}
    <g filter="url(#wp-shadow)" transform="translate(370,180)">
      <rect width="84" height="104" rx="12" fill="url(#wp-dark)" />
      <polygon points="84,12 88,16 88,112 84,108" fill="#262220" />
      <polygon points="12,104 16,108 88,108 84,104" fill="#1E1A18" />
      <text x="42" y="54" fontSize="28" fontFamily="Inter,sans-serif" textAnchor="middle">🔒</text>
      <rect x="12" y="66" width="60" height="4" rx="2" fill="#5A5652" />
      <text x="42" y="88" fontSize="12" fontWeight="900" fill="#C8B860" fontFamily="Inter,sans-serif" textAnchor="middle">100%</text>
      <rect x="18" y="92" width="48" height="4" rx="2" fill="#4A4642" />
    </g>
  </svg>
)

export default function WordpressWebDevelopment() {
  return (
    <ServicePage
      badge="WordPress Web Development"
      headline={<>Powerful WordPress Sites<br /><em>Built for Performance.</em></>}
      description="Custom WordPress development that goes beyond templates — fast, secure, SEO-ready websites you can manage with ease."
      cta1={{ label: 'Start Your WordPress Project →', to: '/contact' }}
      cta2={{ label: 'View Our Work', to: '/portfolio' }}
      heroVisual={<WordPressVisual />}
      heroMetrics={[
        { icon: '⚡', val: '95+', label: 'PageSpeed Score' },
        { icon: '🔒', val: '100%', label: 'Security Hardened' },
        { icon: '🖊️', val: 'Easy', label: 'Content Management' },
      ]}
      stats={[
        { val: '95+', label: 'PageSpeed Score' },
        { val: '300+', label: 'WordPress Sites Built' },
        { val: '<2s', label: 'Average Load Time' },
        { val: '100%', label: 'Mobile Responsive' },
      ]}
      delivers={[
        { icon: '◎', title: 'Custom Theme Development', desc: 'Pixel-perfect custom themes built from scratch — no bloated page builders.' },
        { icon: '✦', title: 'Plugin Development', desc: 'Custom WordPress plugins that add exactly the functionality your business needs.' },
        { icon: '◈', title: 'WooCommerce Integration', desc: 'Full ecommerce capability added to your WordPress site with WooCommerce.' },
        { icon: '◆', title: 'Performance Optimisation', desc: 'Caching, image optimisation, and CDN setup for blazing-fast load times.' },
        { icon: '⬡', title: 'Security Hardening', desc: 'Malware protection, firewall setup, SSL, and regular security audits.' },
        { icon: '❋', title: 'Ongoing Maintenance', desc: 'Regular updates, backups, uptime monitoring, and priority support.' },
      ]}
      why={[
        { title: 'No Template Shortcuts', body: 'Every site is custom-coded for your brand — not a recycled theme with your logo slapped on it.' },
        { title: 'Performance First', body: 'We strip out bloat and optimise every element so your WordPress site loads as fast as any React app.' },
        { title: 'You Stay in Control', body: 'We build with Gutenberg and ACF so your team can update content without touching code.' },
        { title: 'Security Included', body: 'WordPress security is not an afterthought — hardening and monitoring are standard in every project.' },
      ]}
      faqs={[
        { q: 'Do you use page builders like Elementor?', a: 'We prefer custom Gutenberg blocks and ACF for cleaner, faster, more maintainable sites. We can use Elementor if required.' },
        { q: 'Can you migrate my existing site to WordPress?', a: 'Yes — we handle full migrations from any platform including content, images, and SEO redirects.' },
        { q: 'How do you keep WordPress secure?', a: 'We implement firewalls, disable unused features, enforce strong authentication, and set up automated backups.' },
        { q: 'Will I be able to update the site myself?', a: 'Absolutely. We build for easy self-management and include a handover training session.' },
      ]}
    />
  )
}
