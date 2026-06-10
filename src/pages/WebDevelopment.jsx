import ServicePage from '../components/ServicePage/ServicePage'

const WebDevVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="wd-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#DCE4E8" />
        <stop offset="100%" stopColor="#C8D4DA" />
      </linearGradient>
      <linearGradient id="wd-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EFF3F5" />
        <stop offset="100%" stopColor="#E2E9ED" />
      </linearGradient>
      <linearGradient id="wd-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3C4A50" />
        <stop offset="100%" stopColor="#2C383E" />
      </linearGradient>
      <filter id="wd-shadow">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000020" />
      </filter>
      <filter id="wd-shadow-sm">
        <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#00000018" />
      </filter>
    </defs>
    <rect width="480" height="360" fill="url(#wd-bg)" />

    {/* ── 3D isometric monitor ── */}
    {/* Stand */}
    <polygon points="220,306 260,318 260,330 220,318" fill="#A8B4BA" />
    <polygon points="260,318 300,306 300,318 260,330" fill="#98A4AA" />
    <rect x="196" y="326" width="128" height="8" rx="4" fill="#98A4AA" />

    {/* Monitor back 3D depth */}
    <polygon points="84,70 400,70 400,298 84,298" fill="#B0BCC2" />
    <polygon points="400,70 408,62 408,290 400,298" fill="#98A8AE" />
    <polygon points="84,70 92,62 408,62 400,70" fill="#C0CCD2" />

    {/* Monitor screen */}
    <rect x="90" y="76" width="304" height="216" rx="4" fill="url(#wd-dark)" />

    {/* Browser chrome inside screen */}
    <rect x="90" y="76" width="304" height="26" rx="4" fill="#2A3840" />
    <circle cx="106" cy="89" r="4" fill="#8A9AA0" opacity="0.5" />
    <circle cx="120" cy="89" r="4" fill="#8A9AA0" opacity="0.4" />
    <circle cx="134" cy="89" r="4" fill="#8A9AA0" opacity="0.3" />
    <rect x="150" y="83" width="160" height="12" rx="6" fill="#3C4A50" />
    <rect x="158" y="86" width="80" height="6" rx="3" fill="#5A6A70" />

    {/* Code panel left */}
    <rect x="90" y="102" width="128" height="190" fill="#1E2C32" />
    {/* code lines */}
    {[0,1,2,3,4,5,6,7,8,9,10,11].map(i=>(
      <g key={i}>
        <rect x="102" y={114+i*14} width="4" height="6" rx="1" fill="#3C5060" />
        <rect x="112" y={114+i*14}
          width={[28,44,20,50,36,24,48,30,42,26,38,22][i]}
          height="6" rx="2"
          fill={i%3===0?'#7A9AA8':i%3===1?'#6A8A98':'#5A7A88'} opacity="0.7" />
      </g>
    ))}
    {/* cursor */}
    <rect x="112" y="282" width="2" height="10" rx="1" fill="#9ABAC8" opacity="0.9" />

    {/* Preview panel right */}
    <rect x="218" y="102" width="176" height="190" fill="#E8EEF1" />
    {/* nav */}
    <rect x="228" y="112" width="50" height="6" rx="3" fill="#3C4A50" />
    <rect x="342" y="110" width="40" height="10" rx="5" fill="#6A7A80" />
    {/* hero block */}
    <rect x="228" y="128" width="156" height="44" rx="6" fill="#D8E2E8" />
    <rect x="238" y="136" width="70" height="8" rx="3" fill="#3C4A50" />
    <rect x="238" y="148" width="100" height="5" rx="2" fill="#A8B8C0" />
    <rect x="238" y="158" width="40" height="10" rx="5" fill="#4A5A60" />
    {/* feature cards */}
    {[0,1,2].map(i=>(
      <g key={i}>
        <rect x={228+i*54} y="182" width="46" height="38" rx="5" fill="#D0DCE2" />
        <rect x={236+i*54} y="190" width="18" height="5" rx="2" fill="#A8B8C0" />
        <rect x={236+i*54} y="199" width="30" height="4" rx="2" fill="#B8C8D0" />
        <rect x={236+i*54} y="207" width="24" height="4" rx="2" fill="#B8C8D0" />
      </g>
    ))}
    {/* speed badge */}
    <rect x="228" y="230" width="156" height="34" rx="6" fill="#C8D8E0" />
    <circle cx="244" cy="247" r="9" fill="#5A7080" />
    <text x="244" y="251" fontSize="8" fill="#E8EEF1" fontFamily="Inter,sans-serif" fontWeight="900" textAnchor="middle">98</text>
    <rect x="260" y="241" width="50" height="5" rx="2" fill="#8AA0A8" />
    <rect x="260" y="249" width="36" height="4" rx="2" fill="#A0B0B8" />
  </svg>
)

export default function WebDevelopment() {
  return (
    <ServicePage
      badge="Web Development"
      headline={<>Fast, Scalable Websites<br /><em>Built to Last.</em></>}
      description="Custom web development using modern technologies — engineered for performance, security, and growth."
      cta1={{ label: 'Start Your Project →', to: '/contact' }}
      cta2={{ label: 'View Our Work', to: '/portfolio' }}
      heroVisual={<WebDevVisual />}
      heroMetrics={[
        { icon: '⚡', val: '98+', label: 'PageSpeed Score' },
        { icon: '🚀', val: '<2s', label: 'Load Time' },
        { icon: '📱', val: '100%', label: 'Mobile Ready' },
      ]}
      stats={[
        { val: '98+', label: 'PageSpeed Score' },
        { val: '<2s', label: 'Average Load Time' },
        { val: '150+', label: 'Sites Launched' },
        { val: '100%', label: 'Mobile Responsive' },
      ]}
      delivers={[
        { icon: '⬡', title: 'React & Next.js', desc: 'Modern component-based architecture for fast, scalable, and maintainable web apps.' },
        { icon: '◎', title: 'Performance First', desc: '98+ PageSpeed scores through optimised code, lazy loading, and CDN delivery.' },
        { icon: '◈', title: 'CMS Integration', desc: 'Headless CMS setups with Sanity, Contentful, or WordPress for easy content management.' },
        { icon: '◆', title: 'API & Backend', desc: 'RESTful and GraphQL APIs, serverless functions, and third-party integrations.' },
        { icon: '✦', title: 'Security Hardened', desc: 'SSL, OWASP best practices, and regular audits to keep your site protected.' },
        { icon: '❋', title: 'Ongoing Support', desc: 'Post-launch maintenance, updates, and monitoring so you never have to worry.' },
      ]}
      why={[
        { title: 'Modern Stack', body: 'We build with React, Next.js, and TypeScript — tools that scale with your business and stay maintainable.' },
        { title: 'Performance Obsessed', body: 'Every site we ship hits 95+ PageSpeed. Fast sites rank better and convert more.' },
        { title: 'You Own Everything', body: 'Full source code and IP ownership — no proprietary lock-in, ever.' },
        { title: 'Post-Launch Support', body: 'We don\'t disappear after launch. Ongoing retainers keep your site fast, secure, and up to date.' },
      ]}
      faqs={[
        { q: 'How long does a website project take?', a: 'A standard marketing site typically takes 4–8 weeks from kickoff to launch, depending on scope.' },
        { q: 'What CMS do you recommend?', a: 'For most clients we recommend Sanity or Contentful. WordPress is available for those who prefer it.' },
        { q: 'Do you handle hosting?', a: 'We recommend and set up hosting on Vercel or AWS, and can manage it on an ongoing basis.' },
        { q: 'Can you redesign an existing website?', a: 'Yes — redesigns are one of our most common projects. We start with a full audit before touching any code.' },
      ]}
    />
  )
}
