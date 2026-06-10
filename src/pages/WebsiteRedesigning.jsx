import ServicePage from '../components/ServicePage/ServicePage'

const RedesignVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="rd-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E0DDD8" />
        <stop offset="100%" stopColor="#D0CCC8" />
      </linearGradient>
      <linearGradient id="rd-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#484440" />
        <stop offset="100%" stopColor="#383430" />
      </linearGradient>
      <linearGradient id="rd-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F0EDE8" />
        <stop offset="100%" stopColor="#E4E0DA" />
      </linearGradient>
      <linearGradient id="rd-new" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#D8EAE4" />
        <stop offset="100%" stopColor="#C8DED6" />
      </linearGradient>
      <filter id="rd-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#rd-bg)" />

    {/* Before — old site */}
    <g filter="url(#rd-shadow)" transform="translate(22,22)">
      <rect width="196" height="210" rx="14" fill="#D4CEC8" opacity="0.8" />
      <polygon points="196,14 200,18 200,222 196,218" fill="#C4BEB8" />
      <polygon points="14,210 18,214 200,214 196,210" fill="#BCB8B0" />
      <rect x="14" y="14" width="168" height="18" rx="5" fill="#C4BEB8" />
      <text x="98" y="27" fontSize="8" fill="#8A8480" fontFamily="Inter,sans-serif" textAnchor="middle">OLD SITE</text>
      {/* Outdated layout */}
      <rect x="14" y="38" width="168" height="50" rx="3" fill="#C8C4BC" />
      <rect x="22" y="44" width="80" height="10" rx="2" fill="#B0AAA4" />
      <rect x="22" y="58" width="120" height="6" rx="2" fill="#B8B4AC" />
      <rect x="22" y="68" width="100" height="6" rx="2" fill="#C0BCB4" />
      {[0,1,2].map(i=>(
        <rect key={i} x={14+i*58} y="94" width="50" height="50" rx="3" fill="#C0BCB4" />
      ))}
      <rect x="14" y="150" width="168" height="8" rx="2" fill="#C4C0B8" />
      <rect x="14" y="162" width="168" height="8" rx="2" fill="#C8C4BC" />
      <rect x="14" y="174" width="120" height="8" rx="2" fill="#CCC8C0" />
      {/* old CTA */}
      <rect x="14" y="188" width="60" height="14" rx="3" fill="#A8A49C" />
    </g>

    {/* Arrow */}
    <g transform="translate(228,120)">
      <path d="M0,0 L24,18 L0,36" stroke="#8A8480" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* After — new site */}
    <g filter="url(#rd-shadow)" transform="translate(260,22)">
      <rect width="196" height="210" rx="14" fill="url(#rd-card)" />
      <polygon points="196,14 200,18 200,222 196,218" fill="#D4CEC6" />
      <polygon points="14,210 18,214 200,214 196,210" fill="#CCC8C0" />
      <rect x="14" y="14" width="168" height="18" rx="5" fill="#E0D8D0" />
      <text x="98" y="27" fontSize="8" fill="#6A8870" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">NEW SITE ✓</text>
      {/* Modern layout */}
      <rect x="14" y="38" width="168" height="60" rx="6" fill="url(#rd-new)" />
      <rect x="22" y="46" width="100" height="12" rx="4" fill="#8AB8A8" opacity="0.5" />
      <rect x="22" y="62" width="130" height="6" rx="3" fill="#A0C8B4" opacity="0.4" />
      <rect x="22" y="72" width="50" height="16" rx="7" fill="#6A9880" />
      {[0,1,2].map(i=>(
        <g key={i}>
          <rect x={14+i*58} y="104" width="50" height="54" rx="6" fill="#E4EEE8" />
          <rect x={20+i*58} y="110" width="38" height="28" rx="4" fill="#C0D8CC" />
          <rect x={20+i*58} y="142" width="30" height="5" rx="2" fill="#A8C8B8" />
          <rect x={20+i*58} y="150" width="22" height="4" rx="2" fill="#B8D0C4" />
        </g>
      ))}
      <rect x="14" y="164" width="168" height="6" rx="3" fill="#D0E0D8" />
      <rect x="14" y="174" width="130" height="6" rx="3" fill="#D8E8E0" />
      <rect x="14" y="188" width="80" height="14" rx="6" fill="#6A9880" />
    </g>

    {/* Stats row */}
    {[['+90%','Conversion Lift',22],['+55%','Organic Traffic',176],['3x','Speed Gain',330]].map(([v,l,x])=>(
      <g key={l} filter="url(#rd-shadow)" transform={`translate(${x},250)`}>
        <rect width="130" height="60" rx="12" fill="url(#rd-dark)" />
        <polygon points="130,12 134,16 134,68 130,64" fill="#282420" />
        <polygon points="12,60 16,64 134,64 130,60" fill="#201C18" />
        <text x="14" y="24" fontSize="7" fill="#6A6460" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="48" fontSize="22" fontWeight="900" fill="#E8E0D8" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}

    {/* SEO safe badge */}
    <g filter="url(#rd-shadow)" transform="translate(22,326)">
      <rect width="436" height="16" rx="6" fill="url(#rd-card)" />
      <polygon points="436,6 440,10 440,20 436,16" fill="#D4CEC6" />
      <text x="218" y="14" fontSize="8" fill="#6A8870" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">✅ 301 Redirects • SEO-Safe Migration • Full Content Transfer</text>
    </g>
  </svg>
)

export default function WebsiteRedesigning() {
  return (
    <ServicePage
      badge="Website Re-Designing"
      headline={<>Transform Your Website<br /><em>Into a Growth Engine.</em></>}
      description="Strategic website redesigns that improve conversions, modernise your brand, and fix the performance issues holding your business back."
      cta1={{ label: 'Get a Free Audit →', to: '/contact' }}
      cta2={{ label: 'View Our Work', to: '/portfolio' }}
      heroVisual={<RedesignVisual />}
      heroMetrics={[
        { icon: '🔄', val: '+90%', label: 'Avg. Conversion Lift' },
        { icon: '⚡', val: '3x', label: 'Speed Improvement' },
        { icon: '📈', val: '+55%', label: 'Organic Traffic Growth' },
      ]}
      stats={[
        { val: '+90%', label: 'Avg. Conversion Lift Post-Redesign' },
        { val: '3x', label: 'Avg. Speed Improvement' },
        { val: '150+', label: 'Sites Redesigned' },
        { val: '95%', label: 'Client Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'Full Site Audit', desc: 'In-depth analysis of your current site\'s UX, performance, SEO, and conversion bottlenecks.' },
        { icon: '✦', title: 'Modern Visual Redesign', desc: 'Updated aesthetics aligned with your brand, audience expectations, and current design trends.' },
        { icon: '◈', title: 'UX Restructure', desc: 'Revised information architecture and user flows to reduce friction and improve engagement.' },
        { icon: '◆', title: 'Performance Overhaul', desc: 'Code cleanup, image optimisation, and caching strategies for significantly faster load times.' },
        { icon: '⬡', title: 'SEO Preservation', desc: 'Full 301 redirect mapping and on-page SEO migration to protect your existing rankings.' },
        { icon: '❋', title: 'Content Migration', desc: 'Structured transfer of all existing content, images, and assets to the new design.' },
      ]}
      why={[
        { title: 'Audit Before Design', body: 'We analyse what is and isn\'t working before redesigning so we fix real problems, not just visual ones.' },
        { title: 'SEO-Safe Migration', body: 'We map every URL and implement redirects so your hard-earned rankings survive the transition.' },
        { title: 'Conversion Focused', body: 'Redesigns are measured by results — leads, sales, and on-site engagement — not just aesthetics.' },
        { title: 'Phased Delivery', body: 'Large sites are redesigned in phases so you always have a live, functional website throughout the project.' },
      ]}
      faqs={[
        { q: 'Will a redesign hurt my SEO rankings?', a: 'Not with our approach. We implement full 301 redirect maps and migrate all on-page SEO before launch.' },
        { q: 'How long does a redesign take?', a: 'Typically 6–12 weeks depending on the size of the site and scope of changes required.' },
        { q: 'Do you keep our existing content?', a: 'Yes — we audit existing content, migrate what works, and recommend improvements where needed.' },
        { q: 'Can you redesign just the homepage?', a: 'Yes. We can redesign individual pages or sections without touching the rest of your site.' },
      ]}
    />
  )
}
