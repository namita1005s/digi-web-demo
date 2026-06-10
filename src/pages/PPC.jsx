import ServicePage from '../components/ServicePage/ServicePage'

const PPCVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="ppc-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E2DDD8" />
        <stop offset="100%" stopColor="#D0CCC6" />
      </linearGradient>
      <linearGradient id="ppc-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F2EEE9" />
        <stop offset="100%" stopColor="#E8E3DC" />
      </linearGradient>
      <linearGradient id="ppc-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#48403A" />
        <stop offset="100%" stopColor="#383028" />
      </linearGradient>
      <filter id="ppc-shadow">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" />
      </filter>
    </defs>
    <rect width="480" height="360" fill="url(#ppc-bg)" />

    {/* ── 3D isometric dashboard platform ── */}
    <polygon points="40,290 240,330 440,290 240,250" fill="#BEB8B0" />
    <polygon points="40,240 40,290 240,330 240,280" fill="#AEA8A0" />
    <polygon points="440,240 440,290 240,330 240,280" fill="#C8C2BA" />

    {/* ── ROAS big card ── */}
    <g filter="url(#ppc-shadow)" transform="translate(30,30)">
      <rect width="170" height="90" rx="14" fill="url(#ppc-dark)" />
      <polygon points="170,14 174,18 174,98 170,94" fill="#282018" />
      <polygon points="14,90 18,94 174,94 170,90" fill="#201808" />
      <rect x="16" y="14" width="60" height="6" rx="3" fill="#6A5E58" />
      <text x="16" y="62" fontSize="30" fontWeight="900" fill="#E8E0D8" fontFamily="Inter,sans-serif">4.5x</text>
      <rect x="16" y="70" width="50" height="5" rx="2" fill="#5A5048" />
      <rect x="118" y="12" width="36" height="14" rx="6" fill="#5A5048" />
      <text x="124" y="23" fontSize="8" fill="#C8C0B8" fontFamily="Inter,sans-serif" fontWeight="700">+38%</text>
    </g>

    {/* ── CPA card ── */}
    <g filter="url(#ppc-shadow)" transform="translate(212,30)">
      <rect width="120" height="90" rx="14" fill="url(#ppc-card)" />
      <polygon points="120,14 124,18 124,98 120,94" fill="#D8D0C8" />
      <polygon points="14,90 18,94 124,94 120,90" fill="#CCC4BC" />
      <rect x="14" y="14" width="55" height="6" rx="3" fill="#8A8078" />
      <text x="14" y="62" fontSize="22" fontWeight="900" fill="#48403A" fontFamily="Inter,sans-serif">$12.4</text>
      <rect x="14" y="70" width="60" height="4" rx="2" fill="#B0A89E" />
    </g>

    {/* ── Spend card ── */}
    <g filter="url(#ppc-shadow)" transform="translate(344,30)">
      <rect width="106" height="90" rx="14" fill="url(#ppc-card)" />
      <polygon points="106,14 110,18 110,98 106,94" fill="#D8D0C8" />
      <polygon points="14,90 18,94 110,94 106,90" fill="#CCC4BC" />
      <rect x="14" y="14" width="55" height="6" rx="3" fill="#8A8078" />
      <text x="14" y="62" fontSize="18" fontWeight="900" fill="#48403A" fontFamily="Inter,sans-serif">$2M+</text>
      <rect x="14" y="70" width="48" height="4" rx="2" fill="#B0A89E" />
    </g>

    {/* ── Campaign chart ── */}
    <g filter="url(#ppc-shadow)" transform="translate(30,138)">
      <rect width="270" height="130" rx="14" fill="url(#ppc-card)" />
      <polygon points="270,14 274,18 274,142 270,138" fill="#D8D0C8" />
      <polygon points="14,130 18,134 274,134 270,130" fill="#CCC4BC" />
      <rect x="16" y="14" width="90" height="7" rx="3" fill="#7A7068" />
      {[30,50,42,65,58,80,72,90,85,100].map((h,i)=>(
        <rect key={i} x={16+i*24} y={118-h*0.82} width="16" rx="3"
          height={h*0.82}
          fill={i>=7?'#48403A':i>=5?'#7A7268':'#C8C0B8'} />
      ))}
    </g>

    {/* ── Platform breakdown ── */}
    <g filter="url(#ppc-shadow)" transform="translate(312,138)">
      <rect width="138" height="130" rx="14" fill="url(#ppc-dark)" />
      <polygon points="138,14 142,18 142,142 138,138" fill="#282018" />
      <polygon points="14,130 18,134 142,134 138,130" fill="#201808" />
      <rect x="14" y="14" width="60" height="6" rx="3" fill="#6A5E58" />
      {[['Google',52,'#D8D0C8'],['Meta',30,'#A8A098'],['LinkedIn',18,'#787068']].map(([nm,pct,clr],i)=>(
        <g key={nm}>
          <rect x="14" y={32+i*28} width="110" height="18" rx="5" fill="#302820" />
          <rect x="14" y={32+i*28} width={pct*2.1} height="18" rx="5" fill={clr} opacity="0.25" />
          <text x="20" y={45+i*28} fontSize="8" fill={clr} fontFamily="Inter,sans-serif" fontWeight="700">{nm} {pct}%</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function PPC() {
  return (
    <ServicePage
      badge="PPC Advertising"
      headline={<>Paid Ads That Deliver<br /><em>Measurable ROI.</em></>}
      description="Data-driven PPC campaigns across Google, Meta, and LinkedIn — engineered to maximise return on every rupee spent."
      cta1={{ label: 'Launch Your Campaign →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroVisual={<PPCVisual />}
      heroMetrics={[
        { icon: '💰', val: '4.5x', label: 'Avg. ROAS' },
        { icon: '📉', val: '38%', label: 'Lower CPL' },
        { icon: '🎯', val: '$2M+', label: 'Spend Managed' },
      ]}
      stats={[
        { val: '4.5x', label: 'Average ROAS' },
        { val: '38%', label: 'Lower Cost Per Lead' },
        { val: '$2M+', label: 'Ad Spend Managed' },
        { val: '95%', label: 'Client Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'Google Search Ads', desc: 'Capture high-intent buyers at the exact moment they search for your product or service.' },
        { icon: '✦', title: 'Google Display & YouTube', desc: 'Visual campaigns that build brand awareness and retarget warm audiences across the web.' },
        { icon: '◈', title: 'Meta & Instagram Ads', desc: 'Precision-targeted social ads that drive traffic, leads, and purchases at scale.' },
        { icon: '◆', title: 'LinkedIn Ads', desc: 'B2B campaigns targeting decision-makers by job title, industry, and company size.' },
        { icon: '⬡', title: 'Retargeting Campaigns', desc: "Re-engage visitors who didn't convert with personalised ads that bring them back." },
        { icon: '❋', title: 'Conversion Tracking', desc: 'Full attribution setup so every rupee spent is tied to a real business outcome.' },
      ]}
      why={[
        { title: 'Multi-Platform Expertise', body: 'We manage Google, Meta, and LinkedIn under one roof — consistent strategy, unified reporting.' },
        { title: 'Profit-First Bidding', body: 'We optimise for revenue and ROAS, not just clicks. Every campaign is tied to your bottom line.' },
        { title: 'Full Attribution', body: 'No last-click guesswork. We set up proper attribution so you see the true impact of every ad.' },
        { title: 'Weekly Optimisation', body: 'Campaigns are reviewed and adjusted weekly — not left to run on autopilot.' },
      ]}
      faqs={[
        { q: 'What is the minimum ad budget you work with?', a: 'We typically recommend a minimum monthly ad spend of $1,500 to generate meaningful data and results.' },
        { q: 'How quickly can you launch a campaign?', a: 'Most campaigns are live within 5–7 business days of kickoff, including tracking setup and creative.' },
        { q: 'Do you create the ad creatives?', a: 'Yes — copywriting and static creative are included. Video ads can be produced at an additional cost.' },
        { q: 'How do you report on performance?', a: 'You get a live dashboard plus a monthly report covering spend, ROAS, CPA, and key recommendations.' },
      ]}
    />
  )
}
