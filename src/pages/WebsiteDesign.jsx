import ServicePage from '../components/ServicePage/ServicePage'

const WebDesignVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="wds-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#DDD8D2" />
        <stop offset="100%" stopColor="#CCC8C0" />
      </linearGradient>
      <linearGradient id="wds-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F0EDE8" />
        <stop offset="100%" stopColor="#E4E0D8" />
      </linearGradient>
      <linearGradient id="wds-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#48443E" />
        <stop offset="100%" stopColor="#38342E" />
      </linearGradient>
      <filter id="wds-shadow">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" />
      </filter>
    </defs>
    <rect width="480" height="360" fill="url(#wds-bg)" />

    {/* 3D Isometric design canvas/tablet */}
    {/* Left face */}
    <polygon points="60,90 60,290 200,330 200,130" fill="#B0AAA2" />
    {/* Right face */}
    <polygon points="200,130 200,330 340,290 340,90" fill="#C8C2BA" />
    {/* Top face */}
    <polygon points="60,90 200,130 340,90 200,50" fill="#D8D4CC" />
    {/* Screen surface */}
    <polygon points="80,100 200,136 320,100 200,64" fill="#EAE6E0" />
    <polygon points="80,100 80,272 200,308 200,136" fill="#E0DCD4" />
    <polygon points="320,100 320,272 200,308 200,136" fill="#EAE6E0" />

    {/* Wireframe elements on left face */}
    <rect x="88" y="120" width="94" height="8" rx="3" fill="#A8A49C" opacity="0.7" />
    <rect x="88" y="134" width="60" height="5" rx="2" fill="#B8B4AC" opacity="0.6" />
    <rect x="88" y="148" width="94" height="40" rx="5" fill="#C0BCB4" opacity="0.5" />
    <rect x="88" y="196" width="42" height="14" rx="6" fill="#8A8880" opacity="0.8" />
    <rect x="88" y="218" width="94" height="5" rx="2" fill="#B8B4AC" opacity="0.5" />
    <rect x="88" y="228" width="70" height="5" rx="2" fill="#B8B4AC" opacity="0.4" />
    <rect x="88" y="244" width="80" height="5" rx="2" fill="#B8B4AC" opacity="0.3" />

    {/* Floating colour palette card */}
    <g filter="url(#wds-shadow)" transform="translate(330,60)">
      <rect width="120" height="100" rx="12" fill="url(#wds-card)" />
      <polygon points="120,12 124,16 124,108 120,104" fill="#D0CCC4" />
      <polygon points="12,100 16,104 124,104 120,100" fill="#C8C4BC" />
      <rect x="12" y="12" width="60" height="5" rx="2" fill="#8A8880" />
      {['#8A8880','#A89E94','#C4BCB0','#D8D2C8','#EAE4DC'].map((c,i)=>(
        <rect key={c} x={12+i*20} y="26" width="14" height="14" rx="4" fill={c} />
      ))}
      <rect x="12" y="52" width="96" height="6" rx="3" fill="#D0CCC4" />
      <rect x="12" y="64" width="96" height="6" rx="3" fill="#D8D4CC" />
      <rect x="12" y="76" width="60" height="6" rx="3" fill="#D8D4CC" />
    </g>

    {/* Floating conversion badge */}
    <g filter="url(#wds-shadow)" transform="translate(330,176)">
      <rect width="120" height="68" rx="12" fill="url(#wds-dark)" />
      <polygon points="120,12 124,16 124,76 120,72" fill="#282420" />
      <polygon points="12,68 16,72 124,72 120,68" fill="#201C18" />
      <rect x="12" y="12" width="60" height="5" rx="2" fill="#6A6460" />
      <text x="12" y="48" fontSize="22" fontWeight="900" fill="#E8E2DA" fontFamily="Inter,sans-serif">+67%</text>
      <rect x="12" y="54" width="56" height="4" rx="2" fill="#5A5450" />
    </g>

    {/* Floating component card */}
    <g filter="url(#wds-shadow)" transform="translate(330,260)">
      <rect width="120" height="68" rx="12" fill="url(#wds-card)" />
      <polygon points="120,12 124,16 124,76 120,72" fill="#D0CCC4" />
      <polygon points="12,68 16,72 124,72 120,68" fill="#C8C4BC" />
      <rect x="12" y="12" width="55" height="5" rx="2" fill="#8A8880" />
      <rect x="12" y="26" width="96" height="10" rx="4" fill="#D8D2C8" />
      <rect x="12" y="42" width="46" height="10" rx="4" fill="#C8C2B8" />
      <rect x="64" y="42" width="44" height="10" rx="4" fill="#D0CAC0" />
    </g>
  </svg>
)

export default function WebsiteDesign() {
  return (
    <ServicePage
      badge="Website Design"
      headline={<>Websites That Convert<br /><em>Visitors Into Clients.</em></>}
      description="Premium, brand-aligned website design crafted to make a powerful first impression and drive measurable results."
      cta1={{ label: 'Start Your Project →', to: '/contact' }}
      cta2={{ label: 'View Our Work', to: '/portfolio' }}
      heroVisual={<WebDesignVisual />}
      heroMetrics={[
        { icon: '🎨', val: '+67%', label: 'Conversion Lift' },
        { icon: '⚡', val: '<2s', label: 'Load Time' },
        { icon: '📱', val: '100%', label: 'Mobile Ready' },
      ]}
      stats={[
        { val: '+67%', label: 'Avg. Conversion Lift' },
        { val: '<2s', label: 'Target Load Time' },
        { val: '200+', label: 'Designs Delivered' },
        { val: '100%', label: 'Mobile Responsive' },
      ]}
      delivers={[
        { icon: '✦', title: 'UX-First Design', desc: 'Every layout decision is rooted in user psychology and conversion principles.' },
        { icon: '◎', title: 'Brand-Aligned Visuals', desc: 'Designs that authentically reflect your brand identity and speak to your audience.' },
        { icon: '◈', title: 'Mobile-Responsive', desc: 'Pixel-perfect across all devices — desktop, tablet, and mobile.' },
        { icon: '◆', title: 'CRO Optimised', desc: 'Strategic placement of CTAs, trust signals, and flow to maximise conversions.' },
        { icon: '❋', title: 'Fast Load Times', desc: 'Optimised assets and clean code ensure sub-2-second load performance.' },
        { icon: '⬡', title: 'Scalable Systems', desc: 'Design systems built to grow with your brand — consistent and maintainable.' },
      ]}
      why={[
        { title: 'Conversion-Focused', body: 'Beautiful isn\'t enough. Every design decision is backed by CRO principles and tested against real user behaviour.' },
        { title: 'Brand Consistency', body: 'We create full design systems — not one-off pages — so your brand looks cohesive everywhere.' },
        { title: 'Fast Turnaround', body: 'Most design projects are completed in 2–4 weeks without sacrificing quality.' },
        { title: 'Dev-Ready Handoff', body: 'Figma files with full specs, assets, and documentation so development is seamless.' },
      ]}
      faqs={[
        { q: 'What do you deliver at the end of a design project?', a: 'Fully annotated Figma files, exported assets, a style guide, and a component library ready for development.' },
        { q: 'Do you also build the website after designing it?', a: 'Yes — we offer end-to-end design and development. Many clients choose both services together.' },
        { q: 'How many revision rounds are included?', a: 'We include two rounds of revisions in every project. Additional rounds can be added if needed.' },
        { q: 'Can you redesign just one part of our site?', a: 'Absolutely. We can redesign individual pages, landing pages, or specific sections without touching the rest.' },
      ]}
    />
  )
}
