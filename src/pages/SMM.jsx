import ServicePage from '../components/ServicePage/ServicePage'

const SMMVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="smm-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#DDE0E8" />
        <stop offset="100%" stopColor="#CBD0DC" />
      </linearGradient>
      <linearGradient id="smm-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EEF0F5" />
        <stop offset="100%" stopColor="#E2E5EE" />
      </linearGradient>
      <linearGradient id="smm-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#42485A" />
        <stop offset="100%" stopColor="#32384A" />
      </linearGradient>
      <filter id="smm-shadow">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" />
      </filter>
    </defs>
    <rect width="480" height="360" fill="url(#smm-bg)" />

    {/* ── 3D Isometric phone ── */}
    {/* Phone body - left face */}
    <polygon points="100,60 136,40 136,310 100,330" fill="#A8AEBA" />
    {/* Phone body - right face */}
    <polygon points="136,40 232,40 232,310 136,310" fill="url(#smm-card)" />
    {/* Phone body - top face */}
    <polygon points="100,60 136,40 232,40 196,60" fill="#C8CCD8" />
    {/* Screen */}
    <rect x="148" y="58" width="72" height="236" rx="2" fill="#2A3040" />
    {/* Notch */}
    <rect x="172" y="58" width="24" height="8" rx="4" fill="#1A2030" />

    {/* Feed post 1 */}
    <rect x="152" y="72" width="64" height="66" rx="3" fill="#3A4255" />
    <circle cx="162" cy="82" r="6" fill="#5A6278" />
    <rect x="172" y="78" width="34" height="4" rx="2" fill="#5A6278" />
    <rect x="172" y="85" width="24" height="3" rx="1" fill="#4A5268" />
    <rect x="152" y="94" width="64" height="32" rx="2" fill="#4A5268" />
    <rect x="156" y="130" width="16" height="4" rx="2" fill="#4A5268" />
    <rect x="178" y="130" width="16" height="4" rx="2" fill="#4A5268" />

    {/* Feed post 2 */}
    <rect x="152" y="144" width="64" height="66" rx="3" fill="#3A4255" />
    <circle cx="162" cy="154" r="6" fill="#6A7288" />
    <rect x="172" y="150" width="34" height="4" rx="2" fill="#5A6278" />
    <rect x="172" y="157" width="24" height="3" rx="1" fill="#4A5268" />
    <rect x="152" y="166" width="64" height="30" rx="2" fill="#5A6278" />
    <rect x="156" y="202" width="16" height="4" rx="2" fill="#4A5268" />

    {/* Feed post 3 */}
    <rect x="152" y="216" width="64" height="50" rx="3" fill="#3A4255" />
    <circle cx="162" cy="226" r="6" fill="#5A6888" />
    <rect x="172" y="222" width="34" height="4" rx="2" fill="#5A6278" />
    <rect x="152" y="234" width="64" height="22" rx="2" fill="#4A5870" />

    {/* ── Floating analytics card ── */}
    <g filter="url(#smm-shadow)" transform="translate(250,30)">
      <rect width="200" height="110" rx="14" fill="url(#smm-card)" />
      <polygon points="200,14 204,18 204,118 200,114" fill="#CDD0DA" />
      <polygon points="14,110 18,114 204,114 200,110" fill="#C0C4CE" />
      <rect x="16" y="14" width="80" height="6" rx="3" fill="#7A8090" />
      <text x="152" y="30" fontSize="11" fill="#4A5068" fontFamily="Inter,sans-serif" fontWeight="800">+210%</text>
      {/* sparkline */}
      <polyline points="16,96 36,88 56,84 76,72 96,64 116,54 136,44 156,36 176,28 196,22"
        stroke="#6A7088" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <polyline points="16,96 36,88 56,84 76,72 96,64 116,54 136,44 156,36 176,28 196,22 196,96"
        fill="#6A7088" opacity="0.1" />
    </g>

    {/* ── Engagement card ── */}
    <g filter="url(#smm-shadow)" transform="translate(250,155)">
      <rect width="92" height="72" rx="12" fill="url(#smm-dark)" />
      <polygon points="92,12 96,16 96,80 92,76" fill="#282E40" />
      <polygon points="12,72 16,76 96,76 92,72" fill="#20263A" />
      <rect x="12" y="12" width="50" height="5" rx="2" fill="#5A6078" />
      <text x="12" y="50" fontSize="22" fontWeight="900" fill="#C8CCE0" fontFamily="Inter,sans-serif">3.8x</text>
      <rect x="12" y="56" width="60" height="4" rx="2" fill="#4A5068" />
    </g>

    {/* ── Platform icons card ── */}
    <g filter="url(#smm-shadow)" transform="translate(354,155)">
      <rect width="96" height="72" rx="12" fill="url(#smm-dark)" />
      <polygon points="96,12 100,16 100,80 96,76" fill="#282E40" />
      <polygon points="12,72 16,76 100,76 96,72" fill="#20263A" />
      <rect x="12" y="12" width="50" height="5" rx="2" fill="#5A6078" />
      <text x="12" y="50" fontSize="22" fontWeight="900" fill="#C8CCE0" fontFamily="Inter,sans-serif">8+</text>
      <rect x="12" y="56" width="60" height="4" rx="2" fill="#4A5068" />
    </g>

    {/* ── Platform row ── */}
    <g filter="url(#smm-shadow)" transform="translate(250,242)">
      <rect width="200" height="48" rx="12" fill="url(#smm-card)" />
      <polygon points="200,12 204,16 204,56 200,52" fill="#CDD0DA" />
      <polygon points="12,48 16,52 204,52 200,48" fill="#C0C4CE" />
      <rect x="12" y="12" width="50" height="5" rx="2" fill="#8A8EA8" />
      {['IG','FB','LI','TK','YT'].map((l,i)=>(
        <g key={l}>
          <circle cx={24+i*36} cy={34} r={12} fill="#D0D4E0" />
          <text x={18+i*36} y={38} fontSize="7" fill="#5A6080"
            fontFamily="Inter,sans-serif" fontWeight="700">{l}</text>
        </g>
      ))}
    </g>
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
