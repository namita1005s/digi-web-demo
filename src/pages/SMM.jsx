import ServicePage from '../components/ServicePage/ServicePage'

const SMMVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="480" height="360" rx="12" fill="#F7F7F5" />
    {/* Phone frame */}
    <rect x="24" y="20" width="148" height="320" rx="20" fill="#fff" />
    <rect x="24" y="20" width="148" height="320" rx="20" stroke="#E5E5E5" strokeWidth="2" fill="none" />
    <circle cx="98" cy="36" r="5" fill="#DADADB" />
    {/* Feed posts */}
    {[0, 1, 2].map(i => (
      <g key={i}>
        <circle cx="44" cy={62 + i * 98} r="10" fill="#EBEBEB" />
        <rect x="60" y={55 + i * 98} width="60" height="6" rx="3" fill="#DADADB" />
        <rect x="60" y={65 + i * 98} width="40" height="5" rx="2" fill="#EBEBEB" />
        <rect x="34" y={78 + i * 98} width="128" height="56" rx="6"
          fill={i === 0 ? '#111' : i === 1 ? '#E8E8E8' : '#F0F0F0'} />
        {i === 0 && <>
          <rect x="44" y="88" width="60" height="6" rx="3" fill="#555" />
          <rect x="44" y="98" width="90" height="5" rx="2" fill="#333" />
        </>}
        <rect x="34" y={138 + i * 98} width="20" height="6" rx="3" fill="#EBEBEB" />
        <rect x="62" y={138 + i * 98} width="20" height="6" rx="3" fill="#EBEBEB" />
      </g>
    ))}
    {/* Analytics panel */}
    <rect x="188" y="20" width="272" height="148" rx="10" fill="#fff" />
    <rect x="202" y="34" width="90" height="7" rx="3" fill="#111" />
    <text x="408" y="42" fontSize="9" fill="#333333" fontFamily="Inter,sans-serif" fontWeight="700">+210%</text>
    {/* Follower growth sparkline */}
    <polyline points="202,130 228,120 254,115 280,100 306,88 332,75 358,60 384,50 410,42 436,34"
      stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="202,130 228,120 254,115 280,100 306,88 332,75 358,60 384,50 410,42 436,34 436,145 202,145"
      fill="#111" opacity="0.06" />
    {/* Engagement cards */}
    <rect x="188" y="180" width="128" height="90" rx="10" fill="#fff" />
    <rect x="202" y="192" width="60" height="6" rx="3" fill="#DADADB" />
    <text x="202" y="230" fontSize="22" fontWeight="800" fill="#111" fontFamily="Inter,sans-serif">3.8x</text>
    <rect x="202" y="236" width="70" height="5" rx="2" fill="#DADADB" />
    <rect x="332" y="180" width="128" height="90" rx="10" fill="#fff" />
    <rect x="346" y="192" width="60" height="6" rx="3" fill="#DADADB" />
    <text x="346" y="230" fontSize="22" fontWeight="800" fill="#111" fontFamily="Inter,sans-serif">8+</text>
    <rect x="346" y="236" width="70" height="5" rx="2" fill="#DADADB" />
    {/* Platform icons row */}
    <rect x="188" y="284" width="272" height="56" rx="10" fill="#fff" />
    <rect x="202" y="296" width="50" height="6" rx="3" fill="#DADADB" />
    {['IG','FB','LI','TT','YT'].map((label, i) => (
      <g key={label}>
        <circle cx={212 + i * 44} cy={318} r={14} fill="#F7F7F5" />
        <text x={i === 2 ? 208 + i * 44 : 207 + i * 44} y={322} fontSize="7" fill="#111"
          fontFamily="Inter,sans-serif" fontWeight="700">{label}</text>
      </g>
    ))}
  </svg>
)

export default function SMM() {
  return (
    <ServicePage
      badge="Social Media Marketing"
      headline={<>Turn Followers Into<br /><em>Loyal Customers.</em></>}
      description="Strategic social media management that builds brand authority, grows engaged audiences, and converts attention into revenue."
      cta1={{ label: 'Start Growing →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroVisual={<SMMVisual />}
      heroMetrics={[
        { icon: '📱', val: '+210%', label: 'Follower Growth' },
        { icon: '💬', val: '3.8x', label: 'Engagement Lift' },
        { icon: '🌐', val: '8+', label: 'Platforms Managed' },
      ]}
      stats={[
        { val: '+210%', label: 'Avg. Follower Growth' },
        { val: '8+', label: 'Platforms Managed' },
        { val: '3.8x', label: 'Avg. Engagement Lift' },
        { val: '95%', label: 'Client Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'Content Strategy', desc: 'Platform-native content calendars built around your audience, brand voice, and business goals.' },
        { icon: '✦', title: 'Community Management', desc: 'Daily engagement, comment moderation, and DM handling to build a loyal, active community.' },
        { icon: '◈', title: 'Paid Social Ads', desc: 'Targeted Meta, Instagram, and LinkedIn ad campaigns that drive traffic, leads, and sales.' },
        { icon: '◆', title: 'Influencer Outreach', desc: 'Micro and macro influencer partnerships that expand your reach to qualified audiences.' },
        { icon: '⬡', title: 'Creative Production', desc: 'Scroll-stopping graphics, reels, and carousels designed to perform on every platform.' },
        { icon: '❋', title: 'Analytics & Reporting', desc: 'Monthly performance reports with reach, engagement, follower growth, and conversion data.' },
      ]}
      why={[
        { title: 'Platform-Native Content', body: 'We don\'t repurpose — we create content built specifically for each platform\'s algorithm and audience.' },
        { title: 'Brand Voice First', body: 'Every post sounds like you. We embed your tone and values before writing a single caption.' },
        { title: 'Paid + Organic Together', body: 'Organic builds trust; paid amplifies reach. We run both in sync for maximum impact.' },
        { title: 'Transparent Reporting', body: 'Monthly reports with real metrics — reach, engagement, link clicks, and lead attribution.' },
      ]}
      faqs={[
        { q: 'Which platforms do you manage?', a: 'Instagram, Facebook, LinkedIn, X, YouTube, Pinterest, TikTok, and Threads — tailored to where your audience is.' },
        { q: 'How many posts per week do you publish?', a: 'Typically 4–7 posts per week depending on the platform and your chosen package.' },
        { q: 'Do you handle customer replies and DMs?', a: 'Yes — community management including comments and DMs is included in all plans.' },
        { q: 'Can we approve content before it goes live?', a: 'Absolutely. We share a monthly content calendar for your review and approval before scheduling.' },
      ]}
    />
  )
}
