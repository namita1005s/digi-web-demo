import ServicePage from '../components/ServicePage/ServicePage'

const DigitalMarketingVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="480" height="360" rx="12" fill="#F7F7F5" />
    {/* Funnel */}
    <path d="M180 30 L300 30 L280 100 L200 100 Z" fill="#111" opacity="0.9" />
    <path d="M200 108 L280 108 L265 170 L215 170 Z" fill="#333" opacity="0.8" />
    <path d="M215 178 L265 178 L255 232 L225 232 Z" fill="#555" opacity="0.7" />
    <path d="M225 240 L255 240 L248 282 L232 282 Z" fill="#777" opacity="0.6" />
    {/* Funnel labels */}
    <rect x="312" y="52" width="80" height="8" rx="3" fill="#DADADB" />
    <rect x="312" y="64" width="56" height="6" rx="3" fill="#EBEBEB" />
    <line x1="302" y1="56" x2="312" y2="56" stroke="#DADADB" strokeWidth="1" strokeDasharray="3 2" />
    <rect x="312" y="128" width="80" height="8" rx="3" fill="#DADADB" />
    <rect x="312" y="140" width="56" height="6" rx="3" fill="#EBEBEB" />
    <line x1="270" y1="134" x2="312" y2="134" stroke="#DADADB" strokeWidth="1" strokeDasharray="3 2" />
    <rect x="312" y="196" width="80" height="8" rx="3" fill="#DADADB" />
    <rect x="312" y="208" width="56" height="6" rx="3" fill="#EBEBEB" />
    <line x1="258" y1="202" x2="312" y2="202" stroke="#DADADB" strokeWidth="1" strokeDasharray="3 2" />
    <rect x="312" y="256" width="80" height="8" rx="3" fill="#111" />
    <rect x="312" y="268" width="56" height="6" rx="3" fill="#DADADB" />
    <line x1="248" y1="262" x2="312" y2="262" stroke="#DADADB" strokeWidth="1" strokeDasharray="3 2" />
    {/* Channel cards — left */}
    <rect x="20" y="40" width="148" height="40" rx="8" fill="#fff" />
    <rect x="32" y="50" width="40" height="6" rx="3" fill="#111" />
    <rect x="32" y="60" width="70" height="5" rx="2" fill="#DADADB" />
    <rect x="130" y="47" width="26" height="12" rx="4" fill="#E8E8E8" />
    <text x="135" y="57" fontSize="8" fill="#333333" fontFamily="Inter,sans-serif" fontWeight="700">SEO</text>
    <rect x="20" y="90" width="148" height="40" rx="8" fill="#fff" />
    <rect x="32" y="100" width="40" height="6" rx="3" fill="#111" />
    <rect x="32" y="110" width="70" height="5" rx="2" fill="#DADADB" />
    <rect x="126" y="97" width="32" height="12" rx="4" fill="#E8E8E8" />
    <text x="129" y="107" fontSize="8" fill="#333333" fontFamily="Inter,sans-serif" fontWeight="700">PPC</text>
    <rect x="20" y="140" width="148" height="40" rx="8" fill="#fff" />
    <rect x="32" y="150" width="40" height="6" rx="3" fill="#111" />
    <rect x="32" y="160" width="70" height="5" rx="2" fill="#DADADB" />
    <rect x="120" y="147" width="38" height="12" rx="4" fill="#EEEEEE" />
    <text x="123" y="157" fontSize="8" fill="#444444" fontFamily="Inter,sans-serif" fontWeight="700">SMM</text>
    <rect x="20" y="190" width="148" height="40" rx="8" fill="#fff" />
    <rect x="32" y="200" width="44" height="6" rx="3" fill="#111" />
    <rect x="32" y="210" width="70" height="5" rx="2" fill="#DADADB" />
    <rect x="116" y="197" width="42" height="12" rx="4" fill="#EEEEEE" />
    <text x="119" y="207" fontSize="7" fill="#555555" fontFamily="Inter,sans-serif" fontWeight="700">Email</text>
    {/* ROAS card bottom */}
    <rect x="20" y="290" width="440" height="56" rx="10" fill="#111" />
    <text x="40" y="312" fontSize="9" fill="#888" fontFamily="Inter,sans-serif">Average ROAS</text>
    <text x="40" y="332" fontSize="22" fontWeight="900" fill="#fff" fontFamily="Inter,sans-serif">4.2x</text>
    <rect x="180" y="300" width="1" height="36" fill="#333" />
    <text x="196" y="312" fontSize="9" fill="#888" fontFamily="Inter,sans-serif">Lead Growth</text>
    <text x="196" y="332" fontSize="22" fontWeight="900" fill="#fff" fontFamily="Inter,sans-serif">+320%</text>
    <rect x="340" y="300" width="1" height="36" fill="#333" />
    <text x="356" y="312" fontSize="9" fill="#888" fontFamily="Inter,sans-serif">Channels</text>
    <text x="356" y="332" fontSize="22" fontWeight="900" fill="#ffffff" fontFamily="Inter,sans-serif">6+</text>
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
