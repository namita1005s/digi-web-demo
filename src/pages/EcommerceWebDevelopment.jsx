import ServicePage from '../components/ServicePage/ServicePage'

const EcommerceVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="ec-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E0DDD8" />
        <stop offset="100%" stopColor="#D0CCC6" />
      </linearGradient>
      <linearGradient id="ec-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F2EEE9" />
        <stop offset="100%" stopColor="#E8E3DC" />
      </linearGradient>
      <linearGradient id="ec-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#484440" />
        <stop offset="100%" stopColor="#383430" />
      </linearGradient>
      <filter id="ec-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#ec-bg)" />

    {/* 3D isometric store platform */}
    <polygon points="80,300 240,340 400,300 240,260" fill="#C0BBB4" />
    <polygon points="80,220 80,300 240,340 240,260" fill="#B0ABA4" />
    <polygon points="400,220 400,300 240,340 240,260" fill="#CCC6C0" />

    {/* Store screen */}
    <g filter="url(#ec-shadow)" transform="translate(80,40)">
      <rect width="320" height="200" rx="14" fill="url(#ec-card)" />
      <polygon points="320,14 324,18 324,212 320,208" fill="#D8D2CA" />
      <polygon points="14,200 18,204 324,204 320,200" fill="#D0CAC2" />
      {/* browser bar */}
      <rect x="14" y="14" width="292" height="22" rx="6" fill="#E0D8D0" />
      <circle cx="26" cy="25" r="4" fill="#C0BAB2" opacity="0.6" />
      <circle cx="38" cy="25" r="4" fill="#C0BAB2" opacity="0.5" />
      <circle cx="50" cy="25" r="4" fill="#C0BAB2" opacity="0.4" />
      <rect x="68" y="19" width="140" height="12" rx="6" fill="#D8D2CA" />
      <rect x="78" y="22" width="70" height="6" rx="3" fill="#C8C2BA" />
      {/* product grid */}
      {[0,1,2,3,4,5].map(i=>(
        <g key={i}>
          <rect x={14+(i%3)*98} y={46+(Math.floor(i/3)*74)} width="88" height="62" rx="6" fill="#E0D8D0" />
          <rect x={22+(i%3)*98} y={52+(Math.floor(i/3)*74)} width="72" height="36" rx="3" fill="#D0C8C0" />
          <rect x={22+(i%3)*98} y={92+(Math.floor(i/3)*74)} width="44" height="5" rx="2" fill="#B8B2AA" />
          <rect x={22+(i%3)*98} y={100+(Math.floor(i/3)*74)} width="28" height="4" rx="2" fill="#9A9890" />
        </g>
      ))}
    </g>

    {/* Cart badge */}
    <g filter="url(#ec-shadow)" transform="translate(30,130)">
      <rect width="36" height="36" rx="10" fill="url(#ec-dark)" />
      <polygon points="36,10 40,14 40,44 36,40" fill="#282420" />
      <polygon points="10,36 14,40 40,40 36,36" fill="#201C18" />
      <text x="18" y="24" fontSize="14" fill="#E8E0D8" fontFamily="Inter,sans-serif" textAnchor="middle">🛒</text>
      <circle cx="30" cy="10" r="7" fill="#7A7268" />
      <text x="30" y="14" fontSize="7" fontWeight="900" fill="#F0E8E0" fontFamily="Inter,sans-serif" textAnchor="middle">3</text>
    </g>

    {/* Conversion stat */}
    <g filter="url(#ec-shadow)" transform="translate(24,250)">
      <rect width="120" height="60" rx="12" fill="url(#ec-dark)" />
      <polygon points="120,12 124,16 124,68 120,64" fill="#282420" />
      <polygon points="12,60 16,64 124,64 120,60" fill="#201C18" />
      <rect x="12" y="12" width="60" height="4" rx="2" fill="#6A6460" />
      <text x="12" y="46" fontSize="22" fontWeight="900" fill="#E8E0D8" fontFamily="Inter,sans-serif">+85%</text>
    </g>

    {/* Payment badges */}
    <g filter="url(#ec-shadow)" transform="translate(360,240)">
      <rect width="96" height="78" rx="12" fill="url(#ec-card)" />
      <polygon points="96,12 100,16 100,86 96,82" fill="#D8D2CA" />
      <polygon points="12,78 16,82 100,82 96,78" fill="#D0CAC2" />
      <rect x="12" y="12" width="50" height="4" rx="2" fill="#8A8480" />
      {['💳 Stripe','💰 PayPal','💸 Razorpay'].map((p,i)=>(
        <text key={p} x="16" y={32+i*16} fontSize="8" fill="#5A5450" fontFamily="Inter,sans-serif">{p}</text>
      ))}
    </g>
  </svg>
)

export default function EcommerceWebDevelopment() {
  return (
    <ServicePage
      badge="Ecommerce Web Development"
      headline={<>Online Stores Built<br /><em>to Sell More.</em></>}
      description="High-converting ecommerce stores with seamless checkout experiences, fast performance, and the integrations your business needs to scale."
      cta1={{ label: 'Start Your Store →', to: '/contact' }}
      cta2={{ label: 'View Our Work', to: '/portfolio' }}
      heroVisual={<EcommerceVisual />}
      heroMetrics={[
        { icon: '🛒', val: '+85%', label: 'Checkout Conversion' },
        { icon: '⚡', val: '<2s', label: 'Page Load Time' },
        { icon: '📦', val: '200+', label: 'Stores Launched' },
      ]}
      stats={[
        { val: '+85%', label: 'Avg. Checkout Conversion Lift' },
        { val: '<2s', label: 'Average Load Time' },
        { val: '200+', label: 'Stores Launched' },
        { val: '100%', label: 'Mobile Optimised' },
      ]}
      delivers={[
        { icon: '◎', title: 'Custom Store Design', desc: 'Brand-aligned storefronts designed to showcase products and guide buyers to checkout.' },
        { icon: '✦', title: 'Shopify & WooCommerce', desc: 'Expert builds on leading ecommerce platforms with custom theme development.' },
        { icon: '◈', title: 'Payment Integrations', desc: 'Stripe, PayPal, Razorpay, and local payment gateways configured for your markets.' },
        { icon: '◆', title: 'Inventory & ERP Sync', desc: 'Real-time inventory sync with your warehouse, POS, or ERP system.' },
        { icon: '⬡', title: 'SEO-Ready Architecture', desc: 'Product pages, category pages, and sitemaps built to rank and drive organic traffic.' },
        { icon: '❋', title: 'Post-Launch Support', desc: 'Ongoing maintenance, performance monitoring, and feature additions after launch.' },
      ]}
      why={[
        { title: 'Conversion-First Design', body: 'Every UI decision — from product cards to checkout flow — is optimised to reduce friction and increase sales.' },
        { title: 'Performance Obsessed', body: 'Fast stores sell more. We target sub-2-second load times on every build.' },
        { title: 'Platform Experts', body: 'Deep expertise in Shopify, WooCommerce, and headless ecommerce architectures.' },
        { title: 'Scalable Infrastructure', body: 'We build stores that handle traffic spikes, seasonal peaks, and rapid product catalogue growth.' },
      ]}
      faqs={[
        { q: 'Which ecommerce platforms do you build on?', a: 'Shopify, WooCommerce, and custom headless ecommerce with React storefronts.' },
        { q: 'Can you migrate my existing store?', a: 'Yes — we handle full platform migrations including product data, customer records, and order history.' },
        { q: 'Do you set up payment gateways?', a: 'Yes. We configure all major payment processors and ensure PCI-compliant checkout flows.' },
        { q: 'How long does an ecommerce build take?', a: 'A standard store takes 6–10 weeks. Complex multi-vendor or custom functionality projects may take longer.' },
      ]}
    />
  )
}
