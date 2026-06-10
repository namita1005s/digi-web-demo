import ServicePage from '../components/ServicePage/ServicePage'

const Web20Visual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="w2-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#DCE4E4" />
        <stop offset="100%" stopColor="#CCD4D8" />
      </linearGradient>
      <linearGradient id="w2-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#283040" />
        <stop offset="100%" stopColor="#182030" />
      </linearGradient>
      <linearGradient id="w2-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EAF0F0" />
        <stop offset="100%" stopColor="#DCE8E8" />
      </linearGradient>
      <filter id="w2-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
      <filter id="w2-glow"><feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#40A09020" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#w2-bg)" />

    {/* Browser with interactive UI */}
    <g filter="url(#w2-shadow)" transform="translate(40,22)">
      <rect width="400" height="240" rx="14" fill="url(#w2-dark)" />
      <polygon points="400,14 404,18 404,252 400,248" fill="#101820" />
      <polygon points="14,240 18,244 404,244 400,240" fill="#080E18" />
      {/* browser chrome */}
      <rect x="14" y="14" width="372" height="24" rx="6" fill="#1E2838" />
      <circle cx="26" cy="26" r="4" fill="#A04040" opacity="0.6" />
      <circle cx="38" cy="26" r="4" fill="#A09040" opacity="0.5" />
      <circle cx="50" cy="26" r="4" fill="#40A060" opacity="0.6" />
      <rect x="68" y="20" width="200" height="12" rx="6" fill="#283848" />
      {/* nav tabs */}
      {['Home','Products','About','Contact'].map((tab,i)=>(
        <g key={tab}>
          <rect x={14+i*90} y="46" width={80} height="18" rx="0" fill={i===0?'#3A5060':'#1E2838'} />
          <text x={54+i*90} y={59} fontSize="8" fill={i===0?'#80C0B8':'#5A7080'}
            fontFamily="Inter,sans-serif" fontWeight={i===0?'700':'400'} textAnchor="middle">{tab}</text>
        </g>
      ))}
      {/* hero with animation indicator */}
      <rect x="14" y="64" width="372" height="80" rx="0" fill="#1A2C3A" />
      <rect x="30" y="76" width="160" height="14" rx="4" fill="#3A6070" />
      <rect x="30" y="94" width="220" height="8" rx="3" fill="#2E4A58" />
      <rect x="30" y="106" width="180" height="8" rx="3" fill="#2E4A58" />
      <rect x="30" y="120" width="70" height="18" rx="8" fill="#3A8070" filter="url(#w2-glow)" />
      {/* animated dots indicator */}
      {[0,1,2].map(i=>(
        <circle key={i} cx={360+i*12} cy="104" r={i===1?5:3} fill="#50B090" opacity={i===1?0.9:0.4} />
      ))}
      {/* content cards */}
      {[0,1,2,3].map(i=>(
        <g key={i}>
          <rect x={14+i*93} y="152" width={83} height={72} rx="6" fill="#1E3040" />
          <rect x={20+i*93} y="160" width={40} height={28} rx="4" fill="#2A4858" />
          <rect x={20+i*93} y="194" width={62} height="5" rx="2" fill="#2A4050" />
          <rect x={20+i*93} y="203" width={48} height="4" rx="2" fill="#243848" />
          <rect x={20+i*93} y="210" width={36} height="10" rx="4" fill="#3A7068" opacity="0.6" />
        </g>
      ))}
    </g>

    {/* Engagement stat */}
    <g filter="url(#w2-shadow)" transform="translate(22,278)">
      <rect width="130" height="54" rx="12" fill="url(#w2-dark)" />
      <polygon points="130,12 134,16 134,62 130,58" fill="#101820" />
      <polygon points="12,54 16,58 134,58 130,54" fill="#080E18" />
      <rect x="12" y="12" width="60" height="4" rx="2" fill="#406070" />
      <text x="12" y="42" fontSize="20" fontWeight="900" fill="#90C8B8" fontFamily="Inter,sans-serif">+75%</text>
    </g>

    <g filter="url(#w2-shadow)" transform="translate(168,278)">
      <rect width="130" height="54" rx="12" fill="url(#w2-card)" />
      <polygon points="130,12 134,16 134,62 130,58" fill="#C0CCCC" />
      <polygon points="12,54 16,58 134,58 130,54" fill="#B8C4C4" />
      <rect x="12" y="12" width="60" height="4" rx="2" fill="#7090A0" />
      <text x="12" y="42" fontSize="20" fontWeight="900" fill="#283040" fontFamily="Inter,sans-serif">WCAG AA</text>
    </g>

    <g filter="url(#w2-shadow)" transform="translate(314,278)">
      <rect width="142" height="54" rx="12" fill="url(#w2-dark)" />
      <polygon points="142,12 146,16 146,62 142,58" fill="#101820" />
      <polygon points="12,54 16,58 146,58 142,54" fill="#080E18" />
      <rect x="12" y="12" width="80" height="4" rx="2" fill="#406070" />
      <text x="12" y="42" fontSize="14" fontWeight="900" fill="#90C8B8" fontFamily="Inter,sans-serif">200+ Projects</text>
    </g>
  </svg>
)

export default function Web20Design() {
  return (
    <ServicePage
      badge="Web 2.0 Design"
      headline={<>Modern, Interactive<br /><em>Web Experiences.</em></>}
      description="Contemporary Web 2.0 design with rich interactivity, smooth animations, and user-centric interfaces that keep visitors engaged."
      cta1={{ label: 'Start Your Design →', to: '/contact' }}
      cta2={{ label: 'View Our Work', to: '/portfolio' }}
      heroVisual={<Web20Visual />}
      heroMetrics={[
        { icon: '✨', val: '100%', label: 'Interactive UI' },
        { icon: '📱', val: 'All', label: 'Devices Supported' },
        { icon: '⚡', val: 'Fast', label: 'Smooth Animations' },
      ]}
      stats={[
        { val: '+75%', label: 'Avg. Time on Site Increase' },
        { val: '100%', label: 'Responsive Design' },
        { val: '200+', label: 'Projects Delivered' },
        { val: '95%', label: 'Client Satisfaction' },
      ]}
      delivers={[
        { icon: '◎', title: 'Rich UI Components', desc: 'Dynamic tabs, accordions, carousels, and interactive elements that enhance usability.' },
        { icon: '✦', title: 'Micro-Animations', desc: 'Subtle, purposeful animations that guide attention and delight users without slowing pages down.' },
        { icon: '◈', title: 'AJAX Interactions', desc: 'Seamless content loading and form submissions without full page refreshes.' },
        { icon: '◆', title: 'Social Integration', desc: 'Feeds, share buttons, comment systems, and community features built into the design.' },
        { icon: '⬡', title: 'Cross-Browser Compatibility', desc: 'Pixel-perfect rendering across Chrome, Safari, Firefox, and Edge.' },
        { icon: '❋', title: 'Accessibility (WCAG)', desc: 'Designs that meet WCAG 2.1 AA standards for inclusive, accessible experiences.' },
      ]}
      why={[
        { title: 'Engagement Focused', body: 'Rich interactivity keeps users on your site longer and increases the likelihood of conversion.' },
        { title: 'Performance Balanced', body: 'We add interactivity without sacrificing speed — animations are GPU-accelerated and lightweight.' },
        { title: 'Standards Compliant', body: 'Clean, semantic HTML and CSS following modern web standards for long-term maintainability.' },
        { title: 'SEO Compatible', body: 'Dynamic content is built with server-side rendering or proper hydration so search engines index it correctly.' },
      ]}
      faqs={[
        { q: 'What makes a Web 2.0 design different?', a: 'Web 2.0 design features dynamic content, rich interactions, and user participation elements versus static web 1.0 pages.' },
        { q: 'Will animations affect page speed?', a: 'Not with our approach. We use CSS and GPU-accelerated animations that have minimal performance impact.' },
        { q: 'Do you ensure cross-browser compatibility?', a: 'Yes — we test on all major browsers and devices before delivery.' },
        { q: 'Is the design accessible?', a: 'Yes — we design to WCAG 2.1 AA standards to ensure your site is usable by everyone.' },
      ]}
    />
  )
}
