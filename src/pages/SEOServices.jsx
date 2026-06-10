import ServicePage from '../components/ServicePage/ServicePage'

const SEOVisual = () => (
  <svg viewBox="0 0 520 390" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="seo-bg" x1="0" y1="0" x2="520" y2="390" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E8E4DE" />
        <stop offset="100%" stopColor="#D6D0C8" />
      </linearGradient>
      <linearGradient id="seo-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F5F2ED" />
        <stop offset="100%" stopColor="#EBE6DD" />
      </linearGradient>
      <linearGradient id="seo-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4A4540" />
        <stop offset="100%" stopColor="#3A3530" />
      </linearGradient>
      <filter id="seo-shadow" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" />
      </filter>
      <filter id="seo-shadow-sm" x="-5%" y="-5%" width="115%" height="125%">
        <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#00000018" />
      </filter>
    </defs>
    <rect width="520" height="390" fill="url(#seo-bg)" />

    {/* ── 3D isometric base platform ── */}
    {/* Bottom face */}
    <polygon points="100,310 260,360 420,310 260,260" fill="#C8C2B8" />
    {/* Left face */}
    <polygon points="100,220 100,310 260,360 260,270" fill="#B8B2A8" />
    {/* Right face */}
    <polygon points="420,220 420,310 260,360 260,270" fill="#D0CAC0" />
    {/* Top face */}
    <polygon points="100,220 260,270 420,220 260,170" fill="#DDD8D0" />

    {/* ── Floating card 1 — Traffic chart ── */}
    <g filter="url(#seo-shadow)" transform="translate(60,40)">
      <rect width="220" height="130" rx="14" fill="url(#seo-card)" />
      {/* 3D side */}
      <polygon points="220,14 224,18 224,138 220,134" fill="#D8D2C8" />
      <polygon points="14,130 18,134 224,134 220,130" fill="#CDC8BE" />
      <rect x="16" y="14" width="80" height="7" rx="3" fill="#8A8278" />
      <rect x="16" y="26" width="50" height="5" rx="2" fill="#C0BAB0" />
      {/* bars */}
      {[18,26,22,34,30,44,38,52,48,60,70,78].map((h,i)=>(
        <rect key={i} x={16+i*16} y={108-h*0.72} width="11" height={h*0.72} rx="3"
          fill={i>=9?'#7A7268':i>=6?'#9A9288':'#C8C2B8'} />
      ))}
      {/* trend line */}
      <polyline points="21,107 37,99 53,102 69,93 85,96 101,87 117,90 133,81 149,84 165,74 181,66 197,62"
        stroke="#7A7268" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
      {/* badge */}
      <rect x="154" y="12" width="50" height="18" rx="7" fill="#7A7268" />
      <text x="163" y="25" fontSize="9" fill="#F0ECE6" fontFamily="Inter,sans-serif" fontWeight="800">+182%</text>
    </g>

    {/* ── Floating card 2 — Keyword ranks ── */}
    <g filter="url(#seo-shadow)" transform="translate(240,80)">
      <rect width="210" height="150" rx="14" fill="url(#seo-card)" />
      <polygon points="210,14 214,18 214,158 210,154" fill="#D8D2C8" />
      <polygon points="14,150 18,154 214,154 210,150" fill="#CDC8BE" />
      <rect x="16" y="14" width="90" height="7" rx="3" fill="#8A8278" />
      {[['SEO Services','#1'],['Local SEO','#2'],['Technical SEO','#1'],['Link Building','#3']].map(([kw,rank],i)=>(
        <g key={kw}>
          <rect x="16" y={34+i*26} width="120" height="7" rx="3" fill="#D8D2C8" />
          <rect x="156" y={30+i*26} width="34" height="16" rx="6"
            fill={rank==='#1'?'#6A6560':rank==='#2'?'#8A8278':'#A8A29A'} />
          <text x={rank==='#1'?163:162} y={42+i*26} fontSize="8" fill="#F0ECE6"
            fontFamily="Inter,sans-serif" fontWeight="800">{rank}</text>
        </g>
      ))}
    </g>

    {/* ── Floating card 3 — SEO health ring ── */}
    <g filter="url(#seo-shadow)" transform="translate(130,200)">
      <rect width="130" height="130" rx="14" fill="url(#seo-dark)" />
      <polygon points="130,14 134,18 134,138 130,134" fill="#302C28" />
      <polygon points="14,130 18,134 134,134 130,130" fill="#282420" />
      <circle cx="65" cy="65" r="38" stroke="#5A5550" strokeWidth="7" fill="none" />
      <circle cx="65" cy="65" r="38" stroke="#C8C2B8" strokeWidth="7" fill="none"
        strokeDasharray="190" strokeDashoffset="48" strokeLinecap="round"
        transform="rotate(-90 65 65)" />
      <text x="65" y="62" fontSize="18" fontWeight="900" fill="#F0ECE6"
        fontFamily="Inter,sans-serif" textAnchor="middle">94</text>
      <text x="65" y="76" fontSize="7" fill="#908A82"
        fontFamily="Inter,sans-serif" textAnchor="middle">SEO HEALTH</text>
    </g>

    {/* ── Mini stat pills ── */}
    <g filter="url(#seo-shadow-sm)" transform="translate(58,200)">
      <rect width="58" height="44" rx="10" fill="url(#seo-dark)" />
      <text x="29" y="20" fontSize="7" fill="#908A82" fontFamily="Inter,sans-serif" textAnchor="middle">Domain</text>
      <text x="29" y="34" fontSize="12" fontWeight="900" fill="#F0ECE6" fontFamily="Inter,sans-serif" textAnchor="middle">68</text>
    </g>
    <g filter="url(#seo-shadow-sm)" transform="translate(58,255)">
      <rect width="58" height="44" rx="10" fill="url(#seo-dark)" />
      <text x="29" y="20" fontSize="7" fill="#908A82" fontFamily="Inter,sans-serif" textAnchor="middle">Links</text>
      <text x="29" y="34" fontSize="12" fontWeight="900" fill="#F0ECE6" fontFamily="Inter,sans-serif" textAnchor="middle">3.2k</text>
    </g>
  </svg>
)

export default function SEOServices() {
  return (
    <ServicePage
      badge="SEO Services"
      headline={<>Rank Higher.<br /><em>Drive More Organic Traffic.</em></>}
      description="Data-driven SEO strategies that build long-term search visibility and deliver compounding organic growth."
      cta1={{ label: 'Get SEO Audit →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroVisual={<SEOVisual />}
      heroMetrics={[
        { icon: '📈', val: '+182%', label: 'Organic Traffic Growth' },
        { icon: '🥇', val: 'Page 1', label: 'Keyword Rankings' },
        { icon: '🔍', val: '94/100', label: 'SEO Health Score' },
      ]}
      stats={[
        { val: '+180%', label: 'Avg. Organic Traffic Growth' },
        { val: '3–6mo', label: 'Typical Time to Results' },
        { val: 'Page 1', label: 'Target Keyword Rankings' },
        { val: '95%', label: 'Client Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'Technical SEO', desc: 'Site audits, crawl fixes, Core Web Vitals, schema markup, and indexation optimisation.' },
        { icon: '✦', title: 'On-Page SEO', desc: 'Keyword-optimised content, meta tags, internal linking, and semantic HTML structure.' },
        { icon: '◈', title: 'Link Building', desc: 'High-authority backlink acquisition through ethical, white-hat outreach strategies.' },
        { icon: '◆', title: 'Local SEO', desc: 'Google Business Profile optimisation and local citation building for geo-targeted visibility.' },
        { icon: '⬡', title: 'Content Strategy', desc: 'Topic clusters, pillar pages, and editorial calendars that build topical authority.' },
        { icon: '❋', title: 'SEO Reporting', desc: 'Monthly reports with rankings, traffic, and ROI data — no vanity metrics.' },
      ]}
      why={[
        { title: 'White-Hat Only', body: 'We never risk your domain with shortcuts — every tactic we use is Google-compliant and built to last.' },
        { title: 'Full Transparency', body: 'You get clear monthly reports with real rankings, traffic data, and plain-English insights.' },
        { title: 'Content + Technical', body: 'Most agencies do one or the other. We combine both for compounding results.' },
        { title: 'No Lock-In Contracts', body: 'We earn your business every month. No 12-month lock-ins or hidden exit fees.' },
      ]}
      faqs={[
        { q: 'How long does SEO take to show results?', a: 'Most clients see meaningful ranking improvements within 3–6 months, with significant traffic growth by month 6–12.' },
        { q: 'Do you guarantee Page 1 rankings?', a: 'No ethical agency can guarantee specific rankings — but our track record shows consistent Page 1 results for target keywords.' },
        { q: 'What does the monthly reporting include?', a: 'Keyword rankings, organic traffic, backlink growth, technical health scores, and a clear summary of work completed.' },
        { q: 'Do you work with eCommerce sites?', a: 'Yes. We have dedicated eCommerce SEO workflows covering product pages, category optimisation, and structured data.' },
      ]}
    />
  )
}
