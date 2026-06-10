import ServicePage from '../components/ServicePage/ServicePage'

const MobileAppVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="mob-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#DCE0E8" />
        <stop offset="100%" stopColor="#CAD0DC" />
      </linearGradient>
      <linearGradient id="mob-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EEF1F7" />
        <stop offset="100%" stopColor="#E2E6F0" />
      </linearGradient>
      <linearGradient id="mob-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#383E50" />
        <stop offset="100%" stopColor="#282E40" />
      </linearGradient>
      <filter id="mob-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#mob-bg)" />

    {/* 3D isometric two phones */}
    {/* Left phone */}
    <polygon points="80,50 110,36 110,296 80,310" fill="#9AA0B0" />
    <polygon points="110,36 210,36 210,296 110,296" fill="url(#mob-card)" />
    <polygon points="80,50 110,36 210,36 180,50" fill="#BCC0CC" />
    <rect x="122" y="54" width="76" height="226" rx="2" fill="#222838" />
    <rect x="148" y="54" width="24" height="7" rx="3" fill="#181E2C" />
    {/* App UI left phone */}
    {[0,1,2,3].map(i=>(
      <g key={i}>
        <rect x="126" y={68+i*52} width="68" height="44" rx="4" fill="#2E3848" />
        <rect x="130" y={72+i*52} width="24" height="18" rx="2" fill="#3A4858" />
        <rect x="130" y={94+i*52} width="50" height="5" rx="2" fill="#3A4858" />
        <rect x="130" y={103+i*52} width="36" height="4" rx="2" fill="#323C4E" />
      </g>
    ))}

    {/* Right phone (bigger, foreground) */}
    <polygon points="210,30 248,12 248,302 210,320" fill="#8A90A2" />
    <polygon points="248,12 388,12 388,302 248,302" fill="url(#mob-dark)" />
    <polygon points="210,30 248,12 388,12 350,30" fill="#ACB0C0" />
    <rect x="262" y="30" width="114" height="258" rx="2" fill="#141A26" />
    <rect x="300" y="30" width="38" height="8" rx="4" fill="#0E1420" />
    {/* App hero */}
    <rect x="266" y="44" width="106" height="52" rx="4" fill="#1E2838" />
    <rect x="274" y="52" width="60" height="8" rx="3" fill="#3A4C60" />
    <rect x="274" y="64" width="90" height="5" rx="2" fill="#2E3E52" />
    <rect x="274" y="76" width="36" height="14" rx="6" fill="#5A7090" />
    {/* Stats row */}
    {[['50+','Apps'],['4.8','Rating'],['<2s','Speed']].map(([v,l],i)=>(
      <g key={l}>
        <rect x={266+i*36} y={102} width={32} height={34} rx="4" fill="#1E2C3C" />
        <text x={282+i*36} y={117} fontSize="9" fontWeight="900" fill="#A0B8CC" fontFamily="Inter,sans-serif" textAnchor="middle">{v}</text>
        <text x={282+i*36} y={129} fontSize="6" fill="#506070" fontFamily="Inter,sans-serif" textAnchor="middle">{l}</text>
      </g>
    ))}
    {/* Feature list */}
    {['✓ iOS  &  Android','✓ React Native','✓ Flutter','✓ App Store Ready'].map((t,i)=>(
      <g key={t}>
        <rect x="266" y={144+i*26} width="106" height="20" rx="4" fill="#1A2230" />
        <text x="274" y={158+i*26} fontSize="7" fill="#8090A8" fontFamily="Inter,sans-serif">{t}</text>
      </g>
    ))}
    {/* Bottom CTA */}
    <rect x="266" y="254" width="106" height="22" rx="8" fill="#4A6A88" />
    <text x="319" y="269" fontSize="9" fontWeight="800" fill="#C8DAEA" fontFamily="Inter,sans-serif" textAnchor="middle">Launch App</text>

    {/* Floating stats */}
    <g filter="url(#mob-shadow)" transform="translate(16,160)">
      <rect width="86" height="52" rx="10" fill="url(#mob-card)" />
      <polygon points="86,10 90,14 90,58 86,54" fill="#C4C8D4" />
      <polygon points="10,52 14,56 90,56 86,52" fill="#BCC0CC" />
      <rect x="10" y="10" width="50" height="4" rx="2" fill="#8890A0" />
      <text x="10" y="40" fontSize="18" fontWeight="900" fill="#383E50" fontFamily="Inter,sans-serif">50+</text>
    </g>
    <g filter="url(#mob-shadow)" transform="translate(400,100)">
      <rect width="64" height="80" rx="10" fill="url(#mob-dark)" />
      <polygon points="64,10 68,14 68,88 64,84" fill="#181E2C" />
      <polygon points="10,80 14,84 68,84 64,80" fill="#101624" />
      <rect x="10" y="10" width="40" height="4" rx="2" fill="#505870" />
      <text x="10" y="50" fontSize="16" fontWeight="900" fill="#A0B0C8" fontFamily="Inter,sans-serif">4.8</text>
      <text x="10" y="64" fontSize="8" fill="#C8A040" fontFamily="Inter,sans-serif">★★★★★</text>
    </g>
  </svg>
)

export default function MobileAppsDevelopment() {
  return (
    <ServicePage
      badge="Mobile Apps Development"
      headline={<>Powerful Mobile Apps<br /><em>Built for Growth.</em></>}
      description="Native and cross-platform mobile apps for iOS & Android — designed for performance, usability, and business results."
      cta1={{ label: 'Start Your App →', to: '/contact' }}
      cta2={{ label: 'View Portfolio', to: '/portfolio' }}
      heroVisual={<MobileAppVisual />}
      heroMetrics={[
        { icon: '📱', val: '50+', label: 'Apps Delivered' },
        { icon: '⭐', val: '4.8', label: 'Avg App Store Rating' },
        { icon: '⚡', val: '<2s', label: 'App Load Time' },
      ]}
      stats={[
        { val: '50+', label: 'Apps Delivered' },
        { val: '4.8★', label: 'Avg Store Rating' },
        { val: 'iOS & Android', label: 'Platforms Covered' },
        { val: '95%', label: 'Client Retention' },
      ]}
      delivers={[
        { icon: '◎', title: 'iOS Development', desc: 'Native Swift/SwiftUI apps optimised for the Apple ecosystem and App Store guidelines.' },
        { icon: '✦', title: 'Android Development', desc: 'Kotlin-based native Android apps with smooth performance on all screen sizes.' },
        { icon: '◈', title: 'React Native', desc: 'Cross-platform apps from a single codebase — faster delivery, lower cost.' },
        { icon: '◆', title: 'Flutter Apps', desc: 'Beautiful, natively compiled apps for mobile, web, and desktop from one codebase.' },
        { icon: '⬡', title: 'App Store Optimisation', desc: 'ASO strategies to improve visibility and downloads on App Store & Google Play.' },
        { icon: '❋', title: 'Maintenance & Support', desc: 'Post-launch updates, bug fixes, and performance monitoring to keep your app running smoothly.' },
      ]}
      why={[
        { title: 'Cross-Platform Experts', body: 'We build for both iOS and Android simultaneously — cutting timelines and costs without sacrificing quality.' },
        { title: 'UX-First Approach', body: 'Every screen is designed with user behaviour in mind — intuitive, fast, and delightful to use.' },
        { title: 'Full-Stack Capability', body: 'We handle frontend, backend APIs, push notifications, and integrations all under one roof.' },
        { title: 'Ongoing Partnership', body: 'We support your app post-launch with updates, new features, and performance optimisation.' },
      ]}
      faqs={[
        { q: 'How long does it take to build a mobile app?', a: 'A standard app takes 8–16 weeks depending on complexity. We provide a detailed timeline after scoping.' },
        { q: 'Do you build for both iOS and Android?', a: 'Yes — we offer native development for both platforms and cross-platform solutions using React Native or Flutter.' },
        { q: 'Will you submit the app to the stores?', a: 'Yes, we handle full submission to App Store and Google Play including all required assets.' },
        { q: 'Can you update an existing app?', a: 'Absolutely. We can audit, redesign, and rebuild legacy apps with modern technology.' },
      ]}
    />
  )
}
