import ServicePage from '../components/ServicePage/ServicePage'

const LandingPageVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="lp-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E0DDD6" />
        <stop offset="100%" stopColor="#D0CDC8" />
      </linearGradient>
      <linearGradient id="lp-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#484440" />
        <stop offset="100%" stopColor="#383430" />
      </linearGradient>
      <linearGradient id="lp-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F2EEE8" />
        <stop offset="100%" stopColor="#E8E4DC" />
      </linearGradient>
      <filter id="lp-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#lp-bg)" />

    {/* Landing page mockup */}
    <g filter="url(#lp-shadow)" transform="translate(60,22)">
      <rect width="360" height="226" rx="14" fill="url(#lp-card)" />
      <polygon points="360,14 364,18 364,238 360,234" fill="#D4CEC6" />
      <polygon points="14,226 18,230 364,230 360,226" fill="#CCC6BC" />
      {/* browser bar */}
      <rect x="14" y="14" width="332" height="20" rx="6" fill="#E0D8D0" />
      <circle cx="26" cy="24" r="4" fill="#C0BAB0" opacity="0.5" />
      <circle cx="38" cy="24" r="4" fill="#C0BAB0" opacity="0.4" />
      <circle cx="50" cy="24" r="4" fill="#C0BAB0" opacity="0.3" />
      <rect x="68" y="18" width="160" height="12" rx="6" fill="#D8D0C8" />
      {/* hero section */}
      <rect x="14" y="42" width="332" height="90" rx="6" fill="#E4DED6" />
      <rect x="30" y="54" width="180" height="14" rx="4" fill="#B8B2A8" />
      <rect x="30" y="72" width="220" height="8" rx="3" fill="#C8C2B8" />
      <rect x="30" y="84" width="180" height="8" rx="3" fill="#CCC8C0" />
      <rect x="30" y="100" width="80" height="20" rx="8" fill="#7A7268" />
      <text x="70" y="114" fontSize="8" fill="#F0EAE2" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">Start Free Trial</text>
      {/* social proof */}
      {[0,1,2].map(i=>(
        <circle key={i} cx={200+i*20} cy="112" r="9" fill="#D0CAC0" />
      ))}
      <rect x="238" y="107" width="70" height="6" rx="2" fill="#C0BAB0" />
      {/* features */}
      {[0,1,2].map(i=>(
        <g key={i}>
          <rect x={14+i*113} y="140" width={103} height={72} rx="6" fill="#DEDAD2" />
          <rect x={24+i*113} y="150" width={40} height={22} rx="4" fill="#C8C2B8" />
          <rect x={24+i*113} y="178" width={70} height="5" rx="2" fill="#C0BAB0" />
          <rect x={24+i*113} y="187" width={55} height="4" rx="2" fill="#CCCAC2" />
          <rect x={24+i*113} y="195" width={44} height="4" rx="2" fill="#D4D2CA" />
        </g>
      ))}
    </g>

    {/* Conversion badge */}
    <g filter="url(#lp-shadow)" transform="translate(24,150)">
      <rect width="26" height="80" rx="8" fill="url(#lp-dark)" />
      <polygon points="26,8 30,12 30,86 26,82" fill="#282420" />
      <polygon points="8,80 12,84 30,84 26,80" fill="#201C18" />
      <text x="13" y="38" fontSize="9" fill="#C8A040" fontFamily="Inter,sans-serif" textAnchor="middle" transform="rotate(-90 13 38) translate(-24,0)">+120%</text>
    </g>

    {/* A/B test cards */}
    <g filter="url(#lp-shadow)" transform="translate(24,258)">
      <rect width="200" height="54" rx="12" fill="url(#lp-dark)" />
      <polygon points="200,12 204,16 204,62 200,58" fill="#282420" />
      <polygon points="12,54 16,58 204,58 200,54" fill="#201C18" />
      {[['A','Variant 1','62%',10],['B','Variant 2','38%',120]].map(([ltr,v,pct,x])=>(
        <g key={ltr}>
          <rect x={x} y={12} width={80} height={32} rx="6" fill={ltr==='A'?'#5A7870':'#3A3630'} />
          <text x={x+8} y={24} fontSize="8" fill="#C8D8D0" fontFamily="Inter,sans-serif" fontWeight="700">{v}</text>
          <text x={x+8} y={38} fontSize="12" fontWeight="900" fill={ltr==='A'?'#90D0B8':'#9A9490'} fontFamily="Inter,sans-serif">{pct}</text>
        </g>
      ))}
    </g>

    <g filter="url(#lp-shadow)" transform="translate(240,258)">
      <rect width="216" height="54" rx="12" fill="url(#lp-card)" />
      <polygon points="216,12 220,16 220,62 216,58" fill="#D4CEC6" />
      <polygon points="12,54 16,58 220,58 216,54" fill="#CCC8C0" />
      {[['+120%','Conv Lift',10],['500+','Pages Built',130]].map(([v,l,x])=>(
        <g key={l}>
          <text x={x+12} y={24} fontSize="7" fill="#8A8480" fontFamily="Inter,sans-serif">{l}</text>
          <text x={x+12} y={44} fontSize="16" fontWeight="900" fill="#484440" fontFamily="Inter,sans-serif">{v}</text>
          {x<130 && <rect x={x+108} y="12" width="1" height="32" fill="#D4CEC6" />}
        </g>
      ))}
    </g>
  </svg>
)

export default function LandingPageDesigning() {
  return (
    <ServicePage
      badge="Landing Page Designing"
      headline={<>Landing Pages That<br /><em>Convert at Scale.</em></>}
      description="High-converting landing pages designed with CRO principles — built to capture leads, drive sign-ups, and turn ad spend into revenue."
      cta1={{ label: 'Build My Landing Page →', to: '/contact' }}
      cta2={{ label: 'View Our Work', to: '/portfolio' }}
      heroVisual={<LandingPageVisual />}
      heroMetrics={[
        { icon: '🎯', val: '+120%', label: 'Avg. Conversion Lift' },
        { icon: '⚡', val: '<1.5s', label: 'Load Time' },
        { icon: '📐', val: 'A/B', label: 'Tested Layouts' },
      ]}
      stats={[
        { val: '+120%', label: 'Avg. Conversion Lift' },
        { val: '<1.5s', label: 'Average Load Time' },
        { val: '500+', label: 'Landing Pages Designed' },
        { val: '100%', label: 'Mobile Optimised' },
      ]}
      delivers={[
        { icon: '◎', title: 'CRO-Focused Design', desc: 'Every element — headline, CTA, form, and social proof — placed to maximise conversions.' },
        { icon: '✦', title: 'Above-the-Fold Clarity', desc: 'Instant value proposition communication so visitors understand your offer in seconds.' },
        { icon: '◈', title: 'A/B Test Variants', desc: 'Multiple design variants created for split testing to find the highest-converting layout.' },
        { icon: '◆', title: 'Lead Form Optimisation', desc: 'Friction-minimised forms with smart field logic to maximise completions.' },
        { icon: '⬡', title: 'Fast & Lightweight', desc: 'Optimised assets and clean code for sub-1.5-second load times on all devices.' },
        { icon: '❋', title: 'Platform-Ready', desc: 'Delivered ready for Unbounce, Webflow, WordPress, or coded in React/HTML.' },
      ]}
      why={[
        { title: 'Built to Convert', body: 'We design with one goal — turning visitors into leads or customers. Every pixel has a purpose.' },
        { title: 'Ad-Ready', body: 'Our landing pages are built to match ad creatives for message match, reducing bounce and boosting Quality Scores.' },
        { title: 'Fast Turnaround', body: 'Most landing pages are designed, approved, and live within 7–10 business days.' },
        { title: 'Data-Driven Iterations', body: 'We analyse performance data and iterate designs to continuously improve conversion rates.' },
      ]}
      faqs={[
        { q: 'How quickly can you design a landing page?', a: 'Most landing pages are completed within 7–10 business days from briefing to final delivery.' },
        { q: 'Do you also build the page, or just design it?', a: 'We do both — full design and development across any platform you use.' },
        { q: 'Can you create multiple variants for A/B testing?', a: 'Yes — we recommend and deliver at least two variants for every landing page project.' },
        { q: 'What information do I need to provide?', a: 'A clear offer, target audience, key benefits, and any brand guidelines you have. We handle the rest.' },
      ]}
    />
  )
}
