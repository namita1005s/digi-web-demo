import ServicePage from '../components/ServicePage/ServicePage'

const ORMVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="orm-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#DDD8D4" />
        <stop offset="100%" stopColor="#CDCAC4" />
      </linearGradient>
      <linearGradient id="orm-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F2EEEA" />
        <stop offset="100%" stopColor="#E8E4DE" />
      </linearGradient>
      <linearGradient id="orm-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#484440" />
        <stop offset="100%" stopColor="#383430" />
      </linearGradient>
      <filter id="orm-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#orm-bg)" />

    {/* 3D shield base */}
    <polygon points="160,290 240,316 320,290 240,264" fill="#BCBAB4" />
    <polygon points="160,240 160,290 240,316 240,264" fill="#ACAAA4" />
    <polygon points="320,240 320,290 240,316 240,264" fill="#C8C6C0" />

    {/* Big shield */}
    <g filter="url(#orm-shadow)" transform="translate(152,50)">
      <path d="M88,0 L176,30 L176,110 Q176,170 88,200 Q0,170 0,110 L0,30 Z" fill="url(#orm-dark)" />
      <path d="M88,10 L166,36 L166,112 Q166,162 88,188 Q10,162 10,112 L10,36 Z" fill="#3A3630" />
      {/* shield checkmark */}
      <text x="88" y="118" fontSize="60" fill="#C8C0B8" fontFamily="Inter,sans-serif" textAnchor="middle" opacity="0.4">🛡️</text>
      <text x="88" y="110" fontSize="36" fontWeight="900" fill="#E8E0D8" fontFamily="Inter,sans-serif" textAnchor="middle">98%</text>
      <rect x="44" y="118" width="88" height="5" rx="2" fill="#6A6460" />
      <text x="88" y="142" fontSize="9" fill="#9A9490" fontFamily="Inter,sans-serif" textAnchor="middle">Suppression Rate</text>
    </g>

    {/* Review score card */}
    <g filter="url(#orm-shadow)" transform="translate(22,60)">
      <rect width="120" height="100" rx="14" fill="url(#orm-card)" />
      <polygon points="120,14 124,18 124,108 120,104" fill="#D4CEC6" />
      <polygon points="14,100 18,104 124,104 120,100" fill="#CCC6BE" />
      <rect x="14" y="14" width="60" height="5" rx="2" fill="#8A8480" />
      <text x="14" y="54" fontSize="26" fontWeight="900" fill="#484440" fontFamily="Inter,sans-serif">4.8+</text>
      {[0,1,2,3,4].map(i=>(
        <text key={i} x={14+i*18} y="76" fontSize="13" fill="#C8A040" fontFamily="Inter,sans-serif">★</text>
      ))}
      <rect x="14" y="82" width="70" height="4" rx="2" fill="#B0A8A0" />
    </g>

    {/* Mention growth */}
    <g filter="url(#orm-shadow)" transform="translate(22,176)">
      <rect width="120" height="80" rx="14" fill="url(#orm-dark)" />
      <polygon points="120,14 124,18 124,88 120,84" fill="#282420" />
      <polygon points="14,80 18,84 124,84 120,80" fill="#201C18" />
      <rect x="14" y="14" width="60" height="5" rx="2" fill="#6A6460" />
      <text x="14" y="58" fontSize="22" fontWeight="900" fill="#E8E0D8" fontFamily="Inter,sans-serif">+150%</text>
      <rect x="14" y="64" width="70" height="4" rx="2" fill="#5A5450" />
    </g>

    {/* Platform badges */}
    <g filter="url(#orm-shadow)" transform="translate(338,60)">
      <rect width="116" height="180" rx="14" fill="url(#orm-card)" />
      <polygon points="116,14 120,18 120,192 116,188" fill="#D4CEC6" />
      <polygon points="14,180 18,184 120,184 116,180" fill="#CCC6BE" />
      <rect x="14" y="14" width="60" height="5" rx="2" fill="#8A8480" />
      {['🔍 Google','💡 Bing','💬 Social','⭐ Reviews','📰 News'].map((p,i)=>(
        <g key={p}>
          <rect x="14" y={28+i*28} width="88" height="20" rx="6" fill="#E4E0D8" />
          <text x="22" y={42+i*28} fontSize="9" fill="#5A5450" fontFamily="Inter,sans-serif">{p}</text>
        </g>
      ))}
    </g>

    {/* Turnaround badge */}
    <g filter="url(#orm-shadow)" transform="translate(338,256)">
      <rect width="116" height="60" rx="12" fill="url(#orm-dark)" />
      <polygon points="116,12 120,16 120,68 116,64" fill="#282420" />
      <polygon points="12,60 16,64 120,64 116,60" fill="#201C18" />
      <rect x="12" y="12" width="60" height="4" rx="2" fill="#6A6460" />
      <text x="12" y="44" fontSize="18" fontWeight="900" fill="#E8E0D8" fontFamily="Inter,sans-serif">30 days</text>
    </g>
  </svg>
)

export default function ORM() {
  return (
    <ServicePage
      badge="ORM Services"
      headline={<>Protect & Build Your<br /><em>Online Reputation.</em></>}
      description="Proactive online reputation management that suppresses negative content, amplifies positive signals, and builds lasting brand trust."
      cta1={{ label: 'Protect My Reputation →', to: '/contact' }}
      cta2={{ label: 'Learn More', to: '/portfolio' }}
      heroVisual={<ORMVisual />}
      heroMetrics={[
        { icon: '⭐', val: '4.8+', label: 'Avg Brand Rating' },
        { icon: '🛡️', val: '98%', label: 'Negative Suppression' },
        { icon: '📈', val: '+150%', label: 'Positive Mentions' },
      ]}
      stats={[
        { val: '98%', label: 'Negative Content Suppression' },
        { val: '4.8+', label: 'Average Star Rating Achieved' },
        { val: '+150%', label: 'Positive Mentions Growth' },
        { val: '30 days', label: 'Avg. Turnaround' },
      ]}
      delivers={[
        { icon: '🛡️', title: 'Reputation Monitoring', desc: 'Real-time alerts for every mention of your brand across search, social, and review platforms.' },
        { icon: '◎', title: 'Negative Content Suppression', desc: 'Strategic content and SEO to push harmful results off Page 1 of Google.' },
        { icon: '⭐', title: 'Review Generation', desc: 'Authentic review acquisition campaigns across Google, Trustpilot, and industry directories.' },
        { icon: '◈', title: 'Crisis Management', desc: 'Rapid response protocols for PR crises, viral negative content, and fake reviews.' },
        { icon: '◆', title: 'Brand SERP Optimisation', desc: 'Own Page 1 for your brand name with positive, authoritative content.' },
        { icon: '✦', title: 'ORM Reporting', desc: 'Monthly sentiment analysis and brand health score reports.' },
      ]}
      why={[
        { title: 'Proactive, Not Reactive', body: 'We monitor and protect your brand 24/7 before problems escalate.' },
        { title: 'Content-First Approach', body: 'We build positive brand signals with SEO-optimised content, not just review requests.' },
        { title: 'Platform Coverage', body: 'Google, Bing, social media, news sites, forums, and review platforms — all covered.' },
        { title: 'Confidential Service', body: 'All ORM work is handled with complete discretion and strict confidentiality.' },
      ]}
      faqs={[
        { q: 'How quickly can you suppress negative results?', a: 'Simple cases can be addressed in 30–60 days. Complex suppression campaigns typically take 3–6 months.' },
        { q: 'Can you remove fake reviews?', a: 'We flag and dispute fake reviews with platforms. Removal is platform-dependent but we maximise success rates.' },
        { q: 'Do you offer crisis management?', a: 'Yes — we have an emergency ORM response service for active reputation crises.' },
        { q: 'What platforms do you monitor?', a: 'Google, Bing, Facebook, Instagram, Twitter/X, Reddit, Trustpilot, Glassdoor, and more.' },
      ]}
    />
  )
}
