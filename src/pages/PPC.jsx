import ServicePage from '../components/ServicePage/ServicePage'

const PPCVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="480" height="360" rx="12" fill="#F7F7F5" />
    {/* Header */}
    <rect x="0" y="0" width="480" height="44" rx="0" fill="#fff" />
    <rect x="16" y="14" width="80" height="16" rx="4" fill="#EBEBEB" />
    <rect x="340" y="14" width="60" height="16" rx="6" fill="#111" />
    <circle cx="448" cy="22" r="10" fill="#EBEBEB" />
    {/* ROAS big card */}
    <rect x="16" y="56" width="200" height="90" rx="10" fill="#fff" />
    <rect x="30" y="68" width="60" height="7" rx="3" fill="#DADADB" />
    <text x="30" y="108" fontSize="28" fontWeight="800" fill="#111" fontFamily="Inter,sans-serif">4.5x</text>
    <rect x="30" y="118" width="50" height="6" rx="3" fill="#DADADB" />
    <rect x="152" y="66" width="50" height="16" rx="6" fill="#F0FDF4" />
    <text x="160" y="78" fontSize="9" fill="#22C55E" fontFamily="Inter,sans-serif" fontWeight="700">+38% ROI</text>
    {/* CPA card */}
    <rect x="228" y="56" width="116" height="90" rx="10" fill="#fff" />
    <rect x="242" y="68" width="50" height="6" rx="3" fill="#DADADB" />
    <text x="242" y="108" fontSize="22" fontWeight="800" fill="#111" fontFamily="Inter,sans-serif">$12.4</text>
    <rect x="242" y="116" width="60" height="5" rx="2" fill="#DADADB" />
    {/* Spend card */}
    <rect x="356" y="56" width="108" height="90" rx="10" fill="#111" />
    <rect x="370" y="68" width="50" height="6" rx="3" fill="#555" />
    <text x="370" y="108" fontSize="18" fontWeight="800" fill="#fff" fontFamily="Inter,sans-serif">$2M+</text>
    <rect x="370" y="116" width="44" height="5" rx="2" fill="#555" />
    {/* Campaign performance chart */}
    <rect x="16" y="158" width="310" height="140" rx="10" fill="#fff" />
    <rect x="30" y="170" width="90" height="7" rx="3" fill="#111" />
    <rect x="280" y="168" width="30" height="10" rx="4" fill="#F0FDF4" />
    {/* Bars */}
    {[30, 50, 42, 65, 58, 80, 72, 90, 85, 100].map((h, i) => (
      <rect key={i} x={30 + i * 28} y={278 - h * 0.88} width="18" rx="3"
        height={h * 0.88}
        fill={i >= 7 ? '#111' : '#EBEBEB'} />
    ))}
    {/* Platform breakdown */}
    <rect x="338" y="158" width="126" height="140" rx="10" fill="#fff" />
    <rect x="350" y="170" width="60" height="6" rx="3" fill="#111" />
    {[['Google', 52, '#111'], ['Meta', 30, '#555'], ['LinkedIn', 18, '#ADADAD']].map(([name, pct, clr], i) => (
      <g key={name}>
        <rect x="350" y={190 + i * 32} width="102" height="20" rx="4" fill="#F7F7F5" />
        <rect x="350" y={190 + i * 32} width={pct * 1.96} height="20" rx="4" fill={clr} opacity="0.15" />
        <text x="356" y={204 + i * 32} fontSize="8" fill={clr} fontFamily="Inter,sans-serif" fontWeight="700">{name} {pct}%</text>
      </g>
    ))}
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
