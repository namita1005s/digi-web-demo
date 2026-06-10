import ServicePage from '../components/ServicePage/ServicePage'

const AppMarketingVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="am-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#DDE0E8" />
        <stop offset="100%" stopColor="#CBD0DC" />
      </linearGradient>
      <linearGradient id="am-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EEF0F6" />
        <stop offset="100%" stopColor="#E2E6F2" />
      </linearGradient>
      <linearGradient id="am-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3A4058" />
        <stop offset="100%" stopColor="#282E46" />
      </linearGradient>
      <filter id="am-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#am-bg)" />

    {/* App Store card */}
    <g filter="url(#am-shadow)" transform="translate(24,24)">
      <rect width="200" height="180" rx="14" fill="url(#am-dark)" />
      <polygon points="200,14 204,18 204,192 200,188" fill="#181E30" />
      <polygon points="14,180 18,184 204,184 200,180" fill="#101628" />
      {/* App icon */}
      <rect x="14" y="14" width="50" height="50" rx="12" fill="#2E3650" />
      <text x="39" y="46" fontSize="22" fontFamily="Inter,sans-serif" textAnchor="middle">🚀</text>
      <rect x="74" y="18" width="80" height="7" rx="3" fill="#505870" />
      <rect x="74" y="30" width="60" height="5" rx="2" fill="#404860" />
      {/* Rating */}
      <text x="74" y="52" fontSize="12" fill="#C8A040" fontFamily="Inter,sans-serif">★★★★★</text>
      <rect x="74" y="56" width="40" height="4" rx="2" fill="#404860" />
      <rect x="14" y="72" width="172" height="1" fill="#303850" />
      {/* Stats */}
      <rect x="14" y="80" width="70" height="5" rx="2" fill="#505870" />
      {[['Downloads','+300%'],['ROAS','4.2x'],['D-30 Retention','+60%']].map(([l,v],i)=>(
        <g key={l}>
          <rect x="14" y={94+i*26} width="172" height="20" rx="5" fill="#2E3650" />
          <text x="20" y={108+i*26} fontSize="8" fill="#7080A0" fontFamily="Inter,sans-serif">{l}</text>
          <text x="174" y={108+i*26} fontSize="9" fontWeight="800" fill="#90A8C8" fontFamily="Inter,sans-serif" textAnchor="end">{v}</text>
        </g>
      ))}
    </g>

    {/* Download growth chart */}
    <g filter="url(#am-shadow)" transform="translate(240,24)">
      <rect width="216" height="110" rx="14" fill="url(#am-card)" />
      <polygon points="216,14 220,18 220,118 216,114" fill="#C8CCE0" />
      <polygon points="14,110 18,114 220,114 216,110" fill="#C0C4D8" />
      <rect x="14" y="14" width="80" height="5" rx="2" fill="#8890A8" />
      <text x="170" y="30" fontSize="11" fontWeight="900" fill="#3A4058" fontFamily="Inter,sans-serif">+300%</text>
      {[18,28,22,40,34,56,48,66,60,78,88,100].map((h,i)=>(
        <rect key={i} x={14+i*16} y={96-h*0.66} width={11} height={h*0.66} rx="2"
          fill={i>=9?'#4A5878':i>=6?'#6070A0':'#9098C0'} />
      ))}
    </g>

    {/* ASO card */}
    <g filter="url(#am-shadow)" transform="translate(240,148)">
      <rect width="216" height="80" rx="14" fill="url(#am-dark)" />
      <polygon points="216,14 220,18 220,88 216,84" fill="#181E30" />
      <polygon points="14,80 18,84 220,84 216,80" fill="#101628" />
      <rect x="14" y="14" width="70" height="5" rx="2" fill="#505870" />
      {[['App Store','Top 10'],['Google Play','Top 10'],['CPI','Optimised']].map(([l,v],i)=>(
        <g key={l}>
          <text x={14+i*68} y="38" fontSize="7" fill="#6070A0" fontFamily="Inter,sans-serif">{l}</text>
          <text x={14+i*68} y="58" fontSize="12" fontWeight="900" fill="#A0B0D0" fontFamily="Inter,sans-serif">{v}</text>
          {i<2 && <rect x={14+i*68+60} y="20" width="1" height="42" fill="#303850" />}
        </g>
      ))}
    </g>

    {/* Platforms row */}
    <g filter="url(#am-shadow)" transform="translate(24,220)">
      <rect width="432" height="56" rx="12" fill="url(#am-card)" />
      <polygon points="432,12 436,16 436,64 432,60" fill="#C8CCE0" />
      <polygon points="12,56 16,60 436,60 432,56" fill="#C0C4D8" />
      <rect x="12" y="12" width="70" height="4" rx="2" fill="#8890A8" />
      {['Google UAC','Apple Search','Meta Ads','TikTok','Programmatic'].map((p,i)=>(
        <g key={p}>
          <rect x={12+i*86} y={22} width={76} height={22} rx="7" fill="#D8DCF0" />
          <text x={50+i*86} y={37} fontSize="8" fill="#4A5878" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">{p}</text>
        </g>
      ))}
    </g>

    {/* Retention badge */}
    <g filter="url(#am-shadow)" transform="translate(24,290)">
      <rect width="200" height="46" rx="10" fill="url(#am-dark)" />
      <polygon points="200,10 204,14 204,52 200,48" fill="#181E30" />
      <polygon points="10,46 14,50 204,50 200,46" fill="#101628" />
      <text x="14" y="22" fontSize="7" fill="#505870" fontFamily="Inter,sans-serif">Day-30 Retention Lift</text>
      <text x="14" y="40" fontSize="16" fontWeight="900" fill="#90A8C8" fontFamily="Inter,sans-serif">+60% retained users</text>
    </g>
  </svg>
)

export default function MobileAppMarketing() {
  return (
    <ServicePage
      badge="Mobile App Marketing Services"
      headline={<>Grow App Downloads<br /><em>& Active Users.</em></>}
      description="End-to-end mobile app marketing combining ASO, paid user acquisition, and retention strategies to scale your app."
      cta1={{ label: 'Grow My App →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroVisual={<AppMarketingVisual />}
      heroMetrics={[
        { icon: '📲', val: '+300%', label: 'App Downloads' },
        { icon: '⭐', val: 'Top 10', label: 'App Store Ranking' },
        { icon: '📊', val: '4.2x', label: 'ROAS on App Ads' },
      ]}
      stats={[
        { val: '+300%', label: 'Avg. Download Growth' },
        { val: 'Top 10', label: 'App Store Rankings' },
        { val: '4.2x', label: 'Return on Ad Spend' },
        { val: '60%', label: 'Day-30 Retention Lift' },
      ]}
      delivers={[
        { icon: '◎', title: 'App Store Optimisation (ASO)', desc: 'Keyword research, title/description optimisation, and screenshot A/B testing to maximise organic installs.' },
        { icon: '◈', title: 'Paid User Acquisition', desc: 'Google UAC, Apple Search Ads, Meta, and TikTok campaigns optimised for CPI and ROAS.' },
        { icon: '◆', title: 'App Retargeting', desc: 'Re-engage lapsed users with personalised deep-link retargeting campaigns.' },
        { icon: '✦', title: 'Influencer & Social', desc: 'Micro-influencer campaigns and social content to drive organic app discovery.' },
        { icon: '⬡', title: 'Push & In-App Messaging', desc: 'Lifecycle messaging strategies that improve retention and drive in-app conversions.' },
        { icon: '❋', title: 'Analytics & Attribution', desc: 'AppsFlyer / Adjust setup with full funnel attribution and cohort analysis.' },
      ]}
      why={[
        { title: 'Cross-Platform Expertise', body: 'iOS and Android — we know the nuances of both app stores and advertising ecosystems.' },
        { title: 'Full Funnel Coverage', body: 'From first impression to loyal power user — we cover every stage of the app growth funnel.' },
        { title: 'Data-Driven ASO', body: 'We test, iterate, and optimise store listings with real conversion data, not guesswork.' },
        { title: 'Retention Focus', body: 'Downloads without retention are wasted. We build programmes that keep users coming back.' },
      ]}
      faqs={[
        { q: 'What is ASO and why does it matter?', a: 'App Store Optimisation improves your app\'s visibility in app store search — it\'s the SEO of app discovery.' },
        { q: 'Which ad platforms do you use for app marketing?', a: 'Google UAC, Apple Search Ads, Meta Ads, TikTok for Business, and programmatic DSPs.' },
        { q: 'Do you work with early-stage apps?', a: 'Yes — we have specific programmes for pre-launch and early traction stages.' },
        { q: 'How do you track installs and revenue?', a: 'We integrate with attribution partners (AppsFlyer, Adjust, Branch) for accurate install and revenue tracking.' },
      ]}
    />
  )
}
