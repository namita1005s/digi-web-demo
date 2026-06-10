import ServicePage from '../components/ServicePage/ServicePage'

const DigitalMarketingVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="dm-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#DAD8D2" />
        <stop offset="100%" stopColor="#C8C6BF" />
      </linearGradient>
      <linearGradient id="dm-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EEECEA" />
        <stop offset="100%" stopColor="#E4E2DC" />
      </linearGradient>
      <linearGradient id="dm-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#464440" />
        <stop offset="100%" stopColor="#363430" />
      </linearGradient>
      <filter id="dm-shadow">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000020" />
      </filter>
    </defs>
    <rect width="480" height="360" fill="url(#dm-bg)" />

    {/* ── 3D isometric funnel ── */}
    {/* Stage 4 - bottom - widest */}
    <polygon points="140,30 340,30 328,72 152,72" fill="#7A7870" />
    <polygon points="340,30 348,38 336,80 328,72" fill="#6A6860" />
    <polygon points="140,30 132,38 144,80 152,72" fill="#8A8880" />
    {/* Stage 3 */}
    <polygon points="156,78 324,78 312,118 168,118" fill="#8A8880" />
    <polygon points="324,78 332,86 320,126 312,118" fill="#787670" />
    <polygon points="156,78 148,86 160,126 168,118" fill="#9A9890" />
    {/* Stage 2 */}
    <polygon points="172,124 308,124 298,160 182,160" fill="#9A9890" />
    <polygon points="308,124 316,132 306,168 298,160" fill="#888880" />
    <polygon points="172,124 164,132 174,168 182,160" fill="#AAAAA0" />
    {/* Stage 1 - top - narrowest */}
    <polygon points="186,166 294,166 286,198 194,198" fill="#AAAAA0" />
    <polygon points="294,166 302,174 294,206 286,198" fill="#989890" />
    <polygon points="186,166 178,174 186,206 194,198" fill="#B8B8B0" />

    {/* Funnel stage labels */}
    {[['Awareness',51],['Interest',99],['Consideration',145],['Conversion',182]].map(([lbl,y])=>(
      <text key={lbl} x="240" y={y} fontSize="8" fill="#F0EDE8" fontFamily="Inter,sans-serif"
        fontWeight="700" textAnchor="middle" opacity="0.9">{lbl}</text>
    ))}

    {/* ── Channel cards left ── */}
    {[
      {label:'SEO',y:24,w:100},
      {label:'PPC',y:86,w:100},
      {label:'Social',y:148,w:100},
      {label:'Email',y:202,w:100},
    ].map(({label,y,w})=>(
      <g key={label} filter="url(#dm-shadow)" transform={`translate(20,${y})`}>
        <rect width={w} height="34" rx="8" fill="url(#dm-card)" />
        <polygon points={`${w},8 ${w+4},12 ${w+4},42 ${w},38`} fill="#D0CEC8" />
        <polygon points={`8,34 12,38 ${w+4},38 ${w},34`} fill="#C8C6C0" />
        <rect x="10" y="10" width="44" height="5" rx="2" fill="#8A8880" />
        <rect x="10" y="20" width="60" height="4" rx="2" fill="#B0AEA8" />
      </g>
    ))}

    {/* ── Bottom results bar ── */}
    <g filter="url(#dm-shadow)" transform="translate(20,252)">
      <rect width="440" height="68" rx="14" fill="url(#dm-dark)" />
      <polygon points="440,14 444,18 444,78 440,74" fill="#262420" />
      <polygon points="14,68 18,72 444,72 440,68" fill="#1E1C18" />
      {[['4.2x','Avg ROAS',20],['165','+320% Leads',175],['6+','Channels',330]].map(([val,lbl,x])=>(
        <g key={lbl}>
          <text x={x+10} y="32" fontSize="8" fill="#7A7870" fontFamily="Inter,sans-serif">{lbl}</text>
          <text x={x+10} y="56" fontSize="22" fontWeight="900" fill="#E8E4DE" fontFamily="Inter,sans-serif">{val}</text>
          {x<330 && <rect x={x+155} y="14" width="1" height="44" fill="#4A4840" />}
        </g>
      ))}
    </g>
  </svg>
)

export default function DigitalMarketing() {
  return (
    <ServicePage
      badge="Digital Marketing"
      headline={<>Full-Funnel Marketing<br /><em>That Drives Revenue.</em></>}
      description="Integrated digital marketing strategies that connect every channel into a single, high-performing growth engine."
      cta1={{ label: 'Get Your Strategy →', to: '/contact' }}
      cta2={{ label: 'See Case Studies', to: '/portfolio' }}
      heroVisual={<DigitalMarketingVisual />}
      heroMetrics={[
        { icon: '🎯', val: '+320%', label: 'Avg. Lead Growth' },
        { icon: '💰', val: '4.2x', label: 'Average ROAS' },
        { icon: '📁', val: '6+', label: 'Channels Managed' },
      ]}
      stats={[
        { val: '+320%', label: 'Avg. Lead Growth' },
        { val: '6+', label: 'Channels Managed' },
        { val: '4.2x', label: 'Average ROAS' },
        { val: '95%', label: 'Client Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'Search Marketing', desc: 'Dominate Google with a combined SEO and PPC strategy that captures demand at every stage.' },
        { icon: '◈', title: 'Social Media', desc: 'Organic and paid social campaigns that build community and drive qualified traffic.' },
        { icon: '✦', title: 'Email Marketing', desc: 'Automated nurture sequences and broadcast campaigns that convert leads into customers.' },
        { icon: '◆', title: 'Content Marketing', desc: 'Strategic content that educates, builds trust, and ranks — driving inbound leads 24/7.' },
        { icon: '⬡', title: 'Conversion Rate Optimisation', desc: 'A/B testing, heatmaps, and UX improvements that turn more visitors into buyers.' },
        { icon: '❋', title: 'Analytics & Reporting', desc: 'Full-funnel attribution and monthly dashboards so you always know your ROI.' },
      ]}
      why={[
        { title: 'Integrated Strategy', body: 'We connect SEO, PPC, social, and email into one cohesive funnel — no siloed campaigns.' },
        { title: 'Full-Funnel Thinking', body: 'From awareness to retention, every tactic maps to a stage in your customer journey.' },
        { title: 'Data-Driven Decisions', body: 'Every campaign is backed by analytics. We optimise weekly, not monthly.' },
        { title: 'No Lock-In Contracts', body: 'We earn your business every month. No 12-month lock-ins or hidden exit fees.' },
      ]}
      faqs={[
        { q: 'What channels do you manage?', a: 'We cover SEO, Google Ads, Meta Ads, LinkedIn, email marketing, and content — tailored to your goals.' },
        { q: 'Do I need all channels at once?', a: 'No. We start with the highest-impact channels for your business and expand as results compound.' },
        { q: 'How do you measure success?', a: 'We track leads, revenue, ROAS, and CAC — not vanity metrics like impressions or followers.' },
        { q: 'How long before we see results?', a: 'Paid channels show results within weeks. SEO and content build over 3–6 months for compounding returns.' },
      ]}
    />
  )
}
