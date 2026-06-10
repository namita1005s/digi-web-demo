import ServicePage from '../components/ServicePage/ServicePage'

const WhiteLabelVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="wl-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E0DDD6" />
        <stop offset="100%" stopColor="#D0CEC8" />
      </linearGradient>
      <linearGradient id="wl-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F2EEE8" />
        <stop offset="100%" stopColor="#E6E2DC" />
      </linearGradient>
      <linearGradient id="wl-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#484440" />
        <stop offset="100%" stopColor="#383430" />
      </linearGradient>
      <filter id="wl-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#wl-bg)" />

    {/* 3D layered report stack */}
    {[3,2,1,0].map(i=>(
      <g key={i} transform={`translate(${i*6},${-i*8})`}>
        <polygon points="80,180 240,220 400,180 240,140" fill={['#C8C4BC','#D0CCC4','#D8D4CC','#E0DCD4'][i]} />
        <polygon points="80,130 80,180 240,220 240,170" fill={['#B8B4AC','#C0BCB4','#C8C4BC','#D0CCC4'][i]} />
        <polygon points="400,130 400,180 240,220 240,170" fill={['#CCC8C0','#D4D0C8','#DCD8D0','#E4E0D8'][i]} />
      </g>
    ))}

    {/* Branded report card */}
    <g filter="url(#wl-shadow)" transform="translate(70,20)">
      <rect width="200" height="140" rx="14" fill="url(#wl-card)" />
      <polygon points="200,14 204,18 204,152 200,148" fill="#D4CEC6" />
      <polygon points="14,140 18,144 204,144 200,140" fill="#CCC6BE" />
      {/* Agency branding area */}
      <rect x="14" y="14" width="172" height="30" rx="6" fill="#E4E0D8" />
      <rect x="20" y="20" width="50" height="18" rx="4" fill="#D0CAC2" />
      <rect x="80" y="22" width="60" height="6" rx="3" fill="#C0BAB2" />
      <rect x="80" y="32" width="40" height="5" rx="2" fill="#CCCAC2" />
      {/* Report content */}
      <rect x="14" y="52" width="80" height="5" rx="2" fill="#A8A49C" />
      {[0,1,2,3].map(i=>(
        <g key={i}>
          <rect x="14" y={64+i*16} width="172" height="10" rx="3" fill={i===0?'#E4E0D8':'#EAE6E0'} />
          <rect x="14" y={64+i*16} width={[140,100,120,80][i]} height="10" rx="3" fill={['#C8A060','#B8B4AC','#C0BEB4','#B0ACA4'][i]} opacity="0.4" />
          <text x="18" y={73+i*16} fontSize="7" fill="#6A6660" fontFamily="Inter,sans-serif">{['Keywords ↑','+68 Backlinks','On-Page Done','Tech Fixed'][i]}</text>
        </g>
      ))}
      <rect x="14" y="130" width="172" height="1" fill="#D4CEC6" />
    </g>

    {/* 50+ partners */}
    <g filter="url(#wl-shadow)" transform="translate(286,20)">
      <rect width="170" height="80" rx="14" fill="url(#wl-dark)" />
      <polygon points="170,14 174,18 174,88 170,84" fill="#282420" />
      <polygon points="14,80 18,84 174,84 170,80" fill="#201C18" />
      <rect x="14" y="14" width="70" height="5" rx="2" fill="#6A6460" />
      <text x="14" y="58" fontSize="30" fontWeight="900" fill="#E8E0D8" fontFamily="Inter,sans-serif">50+</text>
      <rect x="14" y="64" width="80" height="4" rx="2" fill="#5A5450" />
    </g>

    {/* NDA card */}
    <g filter="url(#wl-shadow)" transform="translate(286,116)">
      <rect width="170" height="60" rx="14" fill="url(#wl-card)" />
      <polygon points="170,14 174,18 174,68 170,64" fill="#D4CEC6" />
      <polygon points="14,60 18,64 174,64 170,60" fill="#CCC6BE" />
      <rect x="14" y="14" width="60" height="5" rx="2" fill="#8A8480" />
      <text x="14" y="46" fontSize="20" fontWeight="900" fill="#484440" fontFamily="Inter,sans-serif">🔒 NDA</text>
      <rect x="14" y="52" width="80" height="4" rx="2" fill="#B0A8A0" />
    </g>

    {/* Onboarding speed */}
    <g filter="url(#wl-shadow)" transform="translate(286,192)">
      <rect width="170" height="52" rx="12" fill="url(#wl-dark)" />
      <polygon points="170,12 174,16 174,60 170,56" fill="#282420" />
      <polygon points="12,52 16,56 174,56 170,52" fill="#201C18" />
      <rect x="12" y="12" width="60" height="4" rx="2" fill="#6A6460" />
      <text x="12" y="40" fontSize="18" fontWeight="900" fill="#E8E0D8" fontFamily="Inter,sans-serif">48hr Onboard</text>
    </g>

    {/* Retention badge */}
    <g filter="url(#wl-shadow)" transform="translate(70,232)">
      <rect width="200" height="52" rx="12" fill="url(#wl-card)" />
      <polygon points="200,12 204,16 204,60 200,56" fill="#D4CEC6" />
      <polygon points="12,52 16,56 204,56 200,52" fill="#CCC6BE" />
      {[['95%','Retention',10],['100%','White-Label',120]].map(([v,l,x])=>(
        <g key={l}>
          <text x={x+12} y="22" fontSize="7" fill="#8A8480" fontFamily="Inter,sans-serif">{l}</text>
          <text x={x+12} y="42" fontSize="18" fontWeight="900" fill="#484440" fontFamily="Inter,sans-serif">{v}</text>
          {x < 120 && <rect x={x+97} y="10" width="1" height="34" fill="#D4CEC6" />}
        </g>
      ))}
    </g>
  </svg>
)

export default function WhiteLabelSEO() {
  return (
    <ServicePage
      badge="White Label SEO Services"
      headline={<>Scale Your Agency<br /><em>With White Label SEO.</em></>}
      description="Fully white-labelled SEO delivery for agencies — expert execution under your brand, with your clients none the wiser."
      cta1={{ label: 'Partner With Us →', to: '/contact' }}
      cta2={{ label: 'Learn More', to: '/portfolio' }}
      heroVisual={<WhiteLabelVisual />}
      heroMetrics={[
        { icon: '🤝', val: '50+', label: 'Agency Partners' },
        { icon: '📋', val: '100%', label: 'White-Labelled Reports' },
        { icon: '⚡', val: '48hr', label: 'Onboarding Time' },
      ]}
      stats={[
        { val: '50+', label: 'Active Agency Partners' },
        { val: '100%', label: 'White-Label Reports' },
        { val: '48hr', label: 'Client Onboarding' },
        { val: '95%', label: 'Partner Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'Branded Reporting', desc: 'Monthly reports fully branded with your agency logo, colours, and domain.' },
        { icon: '◈', title: 'Full SEO Delivery', desc: 'Technical audits, content, link building, and on-page work — all under your brand.' },
        { icon: '◆', title: 'Client Communication Support', desc: 'Strategy documents and presentation materials ready for your client calls.' },
        { icon: '✦', title: 'Scalable Capacity', desc: 'Take on more clients without hiring — we scale with your agency\'s growth.' },
        { icon: '⬡', title: 'Dedicated Account Manager', desc: 'A single point of contact who knows your clients and your agency\'s standards.' },
        { icon: '❋', title: 'NDA Protection', desc: 'Strict confidentiality agreements ensure your client relationships are always protected.' },
      ]}
      why={[
        { title: 'Your Brand, Our Work', body: 'Every deliverable is branded as yours — your clients will never know we exist.' },
        { title: 'Agency-Grade Processes', body: 'Built by agency veterans who understand your workflows, timelines, and client expectations.' },
        { title: 'Flexible Pricing', body: 'Volume-based pricing that grows with your agency — the more you resell, the better your margins.' },
        { title: 'No Conflict Policy', body: 'We never pitch your clients directly or compete with your agency in any market.' },
      ]}
      faqs={[
        { q: 'Will my clients know you are involved?', a: 'Never. All work is delivered under your brand with full NDA protection.' },
        { q: 'What is the minimum commitment?', a: 'We work on monthly retainers with no long-term lock-in. Start with a single client.' },
        { q: 'Do you offer white-label reporting dashboards?', a: 'Yes — we provide branded PDF reports and can integrate with your existing reporting tools.' },
        { q: 'How quickly can we onboard a new client?', a: 'Typically within 48 hours of receiving client access and a brief.' },
      ]}
    />
  )
}
