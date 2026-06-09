import ServicePage from '../components/ServicePage/ServicePage'

const SEOVisual = () => (
  <svg viewBox="0 0 520 390" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="520" height="390" fill="#F8F8F6" />

    {/* Dashboard header */}
    <rect width="520" height="48" fill="#fff" />
    <rect x="18" y="15" width="88" height="18" rx="5" fill="#EBEBEB" />
    <rect x="200" y="17" width="120" height="14" rx="7" fill="#F2F2F2" />
    <circle cx="480" cy="24" r="11" fill="#EBEBEB" />
    <circle cx="452" cy="24" r="11" fill="#EBEBEB" />

    {/* Left sidebar */}
    <rect x="0" y="48" width="68" height="342" fill="#fff" />
    <rect x="14" y="66" width="40" height="8" rx="3" fill="#DADADB" />
    <rect x="14" y="86" width="40" height="8" rx="3" fill="#DADADB" />
    <rect x="8" y="104" width="52" height="20" rx="5" fill="#111" />
    <rect x="14" y="136" width="40" height="8" rx="3" fill="#DADADB" />
    <rect x="14" y="156" width="40" height="8" rx="3" fill="#DADADB" />
    <rect x="14" y="176" width="40" height="8" rx="3" fill="#DADADB" />

    {/* Organic traffic chart */}
    <rect x="80" y="60" width="270" height="148" rx="12" fill="#fff" />
    <rect x="96" y="74" width="110" height="8" rx="3" fill="#111" />
    <rect x="96" y="88" width="70" height="6" rx="3" fill="#DADADB" />
    <rect x="300" y="72" width="34" height="16" rx="6" fill="#E8E8E8" />
    <text x="306" y="84" fontSize="9" fill="#333333" fontFamily="Inter,sans-serif" fontWeight="800">+182%</text>

    {/* Chart bars with trend */}
    {[22, 30, 26, 40, 36, 52, 44, 62, 58, 76, 88, 96].map((h, i) => (
      <rect key={i} x={96 + i * 20} y={178 - h * 0.82} width="13" height={h * 0.82} rx="3"
        fill={i >= 9 ? '#111' : i >= 6 ? '#555' : '#E8E8E8'} />
    ))}
    {/* Trend line */}
    <polyline points="102,171 122,161 142,164 162,149 182,152 202,141 222,144 242,132 262,135 282,122 302,111 322,105"
      stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="3 2" opacity="0.35" />

    {/* Keyword rankings table */}
    <rect x="80" y="220" width="270" height="158" rx="12" fill="#fff" />
    <rect x="96" y="234" width="100" height="8" rx="3" fill="#111" />
    {/* Table header */}
    <rect x="96" y="252" width="245" height="1" fill="#F0F0F0" />
    <rect x="96" y="256" width="110" height="6" rx="2" fill="#DADADB" />
    <rect x="264" y="256" width="30" height="6" rx="2" fill="#DADADB" />
    <rect x="316" y="256" width="25" height="6" rx="2" fill="#DADADB" />

    {/* Keyword rows */}
    {[
      ['best seo agency', '#1', '#3'],
      ['seo services london', '#2', '#8'],
      ['technical seo audit', '#1', '#4'],
      ['local seo company', '#3', '#11'],
    ].map(([kw, cur, prev], i) => (
      <g key={kw}>
        <rect x="96" y={272 + i * 24} width="156" height="7" rx="3" fill="#EBEBEB" />
        <rect x={264} y={272 + i * 24} width="26" height="14" rx="5"
          fill={cur === '#1' ? '#111' : cur === '#2' ? '#333' : '#555'} />
        <text x={cur === '#1' ? 268 : 267} y={282 + i * 24} fontSize="8" fill="#fff"
          fontFamily="Inter,sans-serif" fontWeight="800">{cur}</text>
        <rect x="316" y={274 + i * 24} width="22" height="10" rx="4" fill="#F2F2F2" />
        <text x="320" y={282 + i * 24} fontSize="8" fill="#999"
          fontFamily="Inter,sans-serif" fontWeight="600">{prev}</text>
        <rect x="96" y={287 + i * 24} width="245" height="1" fill="#F8F8F8" />
      </g>
    ))}

    {/* Right panel — search visibility score */}
    <rect x="362" y="60" width="140" height="318" rx="12" fill="#111" />
    <rect x="376" y="76" width="80" height="7" rx="3" fill="#444" />
    {/* Score ring */}
    <circle cx="432" cy="142" r="40" stroke="#333" strokeWidth="8" fill="none" />
    <circle cx="432" cy="142" r="40" stroke="#fff" strokeWidth="8" fill="none"
      strokeDasharray="201" strokeDashoffset="50" strokeLinecap="round"
      transform="rotate(-90 432 142)" />
    <text x="432" y="147" fontSize="20" fontWeight="900" fill="#fff"
      fontFamily="Inter,sans-serif" textAnchor="middle">94</text>
    <text x="432" y="160" fontSize="8" fill="#666"
      fontFamily="Inter,sans-serif" textAnchor="middle">SEO Health</text>

    {/* Mini metric rows */}
    {[
      ['Backlinks', '3,240', '#fff'],
      ['Domain Auth.', '68', '#fff'],
      ['Crawl Errors', '0', '#ffffff'],
      ['Index Rate', '99%', '#ffffff'],
    ].map(([label, val, clr], i) => (
      <g key={label}>
        <rect x="376" y={208 + i * 36} width="112" height="28" rx="7" fill="#1A1A1A" />
        <text x="384" y={219 + i * 36} fontSize="8" fill="#666" fontFamily="Inter,sans-serif">{label}</text>
        <text x="384" y={230 + i * 36} fontSize="10" fill={clr} fontFamily="Inter,sans-serif" fontWeight="800">{val}</text>
      </g>
    ))}

    {/* Bottom rank badges */}
    <rect x="376" y="360" width="48" height="12" rx="3" fill="#222" />
    <text x="384" y="370" fontSize="7" fill="#888" fontFamily="Inter,sans-serif">Page 1 Avg</text>
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
