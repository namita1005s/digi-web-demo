import ServicePage from '../components/ServicePage/ServicePage'

const LocalSEOVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="ls-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E0DDD6" />
        <stop offset="100%" stopColor="#D0CECA" />
      </linearGradient>
      <linearGradient id="ls-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F2EFEA" />
        <stop offset="100%" stopColor="#E6E2DC" />
      </linearGradient>
      <linearGradient id="ls-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#484440" />
        <stop offset="100%" stopColor="#383430" />
      </linearGradient>
      <filter id="ls-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#ls-bg)" />

    {/* Map background */}
    <rect x="40" y="30" width="400" height="220" rx="14" fill="#D8D4CC" />
    {/* Grid lines */}
    {[0,1,2,3,4,5].map(i=>(
      <line key={`v${i}`} x1={90+i*60} y1="30" x2={90+i*60} y2="250" stroke="#C8C4BC" strokeWidth="0.8" opacity="0.5" />
    ))}
    {[0,1,2,3].map(i=>(
      <line key={`h${i}`} x1="40" y1={80+i*56} x2="440" y2={80+i*56} stroke="#C8C4BC" strokeWidth="0.8" opacity="0.5" />
    ))}
    {/* Roads */}
    <path d="M40 160 Q160 130 240 155 Q320 180 440 150" stroke="#B8B4AC" strokeWidth="8" fill="none" strokeLinecap="round" />
    <path d="M40 160 Q160 130 240 155 Q320 180 440 150" stroke="#E8E4DC" strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M180 30 Q200 130 210 250" stroke="#B8B4AC" strokeWidth="6" fill="none" strokeLinecap="round" />
    <path d="M180 30 Q200 130 210 250" stroke="#E8E4DC" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    {/* Blocks */}
    {[[60,45,80,50],[280,45,100,60],[80,175,90,50],[310,170,100,55],[60,110,60,45],[360,100,70,50]].map(([x,y,w,h],i)=>(
      <rect key={i} x={x} y={y} width={w} height={h} rx="4" fill="#C8C4BC" opacity="0.7" />
    ))}

    {/* Map pins */}
    {[[240,130,'#E05040',true],[160,100,'#8A8480',false],[310,140,'#8A8480',false]].map(([x,y,clr,big],i)=>(
      <g key={i}>
        <ellipse cx={x} cy={y+22} rx={big?10:7} ry={big?4:3} fill="#00000020" />
        <path d={`M${x},${y+20} C${x-14},${y} ${x-14},${y-16} ${x},${y-20} C${x+14},${y-16} ${x+14},${y} ${x},${y+20}Z`} fill={clr} />
        <circle cx={x} cy={y-6} r={big?6:4} fill="#fff" opacity="0.8" />
      </g>
    ))}

    {/* Maps pack card */}
    <g filter="url(#ls-shadow)" transform="translate(28,268)">
      <rect width="420" height="72" rx="14" fill="url(#ls-card)" />
      <polygon points="420,14 424,18 424,80 420,76" fill="#D0CAC2" />
      <polygon points="14,72 18,76 424,76 420,72" fill="#C8C2BA" />
      <rect x="14" y="14" width="80" height="5" rx="2" fill="#8A8480" />
      {[['Top 3','Maps Pack',20],['+220%','Local Traffic',160],['500+','Citations Built',300]].map(([v,l,x])=>(
        <g key={l}>
          <text x={x+14} y="36" fontSize="8" fill="#7A7470" fontFamily="Inter,sans-serif">{l}</text>
          <text x={x+14} y="58" fontSize="20" fontWeight="900" fill="#484440" fontFamily="Inter,sans-serif">{v}</text>
          {x < 300 && <rect x={x+147} y="14" width="1" height="46" fill="#D8D2CA" />}
        </g>
      ))}
    </g>

    {/* Review stars card */}
    <g filter="url(#ls-shadow)" transform="translate(290,90)">
      <rect width="130" height="56" rx="12" fill="url(#ls-dark)" />
      <polygon points="130,12 134,16 134,64 130,60" fill="#282420" />
      <polygon points="12,56 16,60 134,60 130,56" fill="#201C18" />
      <rect x="12" y="12" width="50" height="4" rx="2" fill="#6A6460" />
      <text x="12" y="38" fontSize="20" fontWeight="900" fill="#E8E0D8" fontFamily="Inter,sans-serif">4.9 ★</text>
      <rect x="12" y="44" width="60" height="4" rx="2" fill="#5A5450" />
    </g>
  </svg>
)

export default function LocalSEO() {
  return (
    <ServicePage
      badge="Local SEO Services"
      headline={<>Dominate Local Search.<br /><em>Get Found Near You.</em></>}
      description="Hyper-targeted local SEO strategies that put your business at the top of Google Maps and local search results."
      cta1={{ label: 'Get Local SEO Audit →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroVisual={<LocalSEOVisual />}
      heroMetrics={[
        { icon: '📍', val: 'Top 3', label: 'Google Maps Pack' },
        { icon: '⭐', val: '4.9', label: 'Avg Review Rating' },
        { icon: '📈', val: '+220%', label: 'Local Traffic Growth' },
      ]}
      stats={[
        { val: '+220%', label: 'Local Traffic Growth' },
        { val: 'Top 3', label: 'Maps Pack Rankings' },
        { val: '500+', label: 'Citations Built' },
        { val: '95%', label: 'Client Retention Rate' },
      ]}
      delivers={[
        { icon: '📍', title: 'Google Business Profile', desc: 'Full optimisation of your GBP listing for maximum local visibility and conversions.' },
        { icon: '◎', title: 'Local Citations', desc: 'Building consistent NAP citations across 100+ local directories and data aggregators.' },
        { icon: '⭐', title: 'Review Management', desc: 'Strategies to generate authentic reviews and manage your online reputation.' },
        { icon: '◈', title: 'Local Link Building', desc: 'Acquiring backlinks from local businesses, chambers of commerce, and local press.' },
        { icon: '◆', title: 'Local Content', desc: 'Geo-targeted landing pages and content that ranks for city and neighbourhood searches.' },
        { icon: '✦', title: 'Local Reporting', desc: 'Monthly reports on map rankings, local traffic, calls, and direction requests.' },
      ]}
      why={[
        { title: 'Hyper-Local Expertise', body: 'We specialise in local markets — not generic national SEO repurposed for local.' },
        { title: 'Maps Pack Focus', body: 'We target the top 3 Google Maps positions where 70% of local clicks happen.' },
        { title: 'Multi-Location Support', body: 'Whether you have 1 or 50 locations, we manage all of them from a single strategy.' },
        { title: 'Transparent Reporting', body: 'Track every call, direction request, and visit driven by our local SEO work.' },
      ]}
      faqs={[
        { q: 'How long does local SEO take?', a: 'Most clients see meaningful improvements in local rankings within 2–4 months.' },
        { q: 'Do you optimise Google Business Profile?', a: 'Yes — GBP optimisation is the cornerstone of our local SEO service.' },
        { q: 'Can you help with multiple locations?', a: 'Absolutely. We have a dedicated multi-location SEO workflow for franchises and chains.' },
        { q: 'How do you build local citations?', a: 'We use both manual outreach and trusted data aggregators to ensure consistent NAP across the web.' },
      ]}
    />
  )
}
