import ServicePage from '../components/ServicePage/ServicePage'

const CRMVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="crm-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#DDE0E6" />
        <stop offset="100%" stopColor="#CDD2DC" />
      </linearGradient>
      <linearGradient id="crm-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#303848" />
        <stop offset="100%" stopColor="#202838" />
      </linearGradient>
      <linearGradient id="crm-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EEF0F6" />
        <stop offset="100%" stopColor="#E2E6F0" />
      </linearGradient>
      <filter id="crm-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#crm-bg)" />

    {/* Pipeline kanban */}
    <g filter="url(#crm-shadow)" transform="translate(24,22)">
      <rect width="432" height="180" rx="14" fill="url(#crm-card)" />
      <polygon points="432,14 436,18 436,192 432,188" fill="#C4CAE0" />
      <polygon points="14,180 18,184 436,184 432,180" fill="#BCBCD8" />
      <rect x="14" y="14" width="70" height="5" rx="2" fill="#8890A8" />
      {[['New Lead','#6A88B0'],['Qualified','#6AA080'],['Proposal','#A09060'],['Won','#6AB080']].map(([col,clr],ci)=>(
        <g key={col}>
          <rect x={14+ci*106} y={26} width={96} height={12} rx="5" fill={clr} opacity="0.25" />
          <text x={62+ci*106} y={35} fontSize="7" fill={clr} fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{col}</text>
          {[0,1,ci<3?2:-1].filter(n=>n>=0).map(ri=>(
            <g key={ri}>
              <rect x={14+ci*106} y={44+ri*40} width={96} height={32} rx="6" fill={ci===3?'#D4EDD8':'#D4DAF0'} />
              <circle cx={28+ci*106} cy={60+ri*40} r={8} fill={clr} opacity="0.3" />
              <rect x={40+ci*106} y={54+ri*40} width={50} height="4" rx="2" fill={clr} opacity="0.4" />
              <rect x={40+ci*106} y={62+ri*40} width={36} height="3" rx="1" fill="#A8B0C8" />
              <rect x={80+ci*106} y={67+ri*40} width={20} height="6" rx="3" fill={clr} opacity="0.3" />
            </g>
          ))}
        </g>
      ))}
    </g>

    {/* 3x velocity card */}
    <g filter="url(#crm-shadow)" transform="translate(24,218)">
      <rect width="130" height="60" rx="12" fill="url(#crm-dark)" />
      <polygon points="130,12 134,16 134,68 130,64" fill="#181C28" />
      <polygon points="12,60 16,64 134,64 130,60" fill="#101420" />
      <rect x="12" y="12" width="60" height="4" rx="2" fill="#505870" />
      <text x="12" y="46" fontSize="22" fontWeight="900" fill="#A8B8D8" fontFamily="Inter,sans-serif">3x Faster</text>
    </g>

    {/* Churn reduction */}
    <g filter="url(#crm-shadow)" transform="translate(170,218)">
      <rect width="130" height="60" rx="12" fill="url(#crm-dark)" />
      <polygon points="130,12 134,16 134,68 130,64" fill="#181C28" />
      <polygon points="12,60 16,64 134,64 130,60" fill="#101420" />
      <rect x="12" y="12" width="60" height="4" rx="2" fill="#505870" />
      <text x="12" y="46" fontSize="22" fontWeight="900" fill="#A8B8D8" fontFamily="Inter,sans-serif">-40% Churn</text>
    </g>

    {/* Platform badges */}
    <g filter="url(#crm-shadow)" transform="translate(316,218)">
      <rect width="140" height="60" rx="12" fill="url(#crm-card)" />
      <polygon points="140,12 144,16 144,68 140,64" fill="#C4CAE0" />
      <polygon points="12,60 16,64 144,64 140,60" fill="#BCBCD8" />
      <rect x="12" y="12" width="70" height="4" rx="2" fill="#8890A8" />
      {['HubSpot','Salesforce','Zoho'].map((p,i)=>(
        <text key={p} x={16+i*46} y="46" fontSize="8" fontWeight="700" fill="#404868" fontFamily="Inter,sans-serif">{p}</text>
      ))}
    </g>

    {/* Automation flow */}
    <g filter="url(#crm-shadow)" transform="translate(24,292)">
      <rect width="432" height="42" rx="10" fill="url(#crm-dark)" />
      <polygon points="432,10 436,14 436,50 432,46" fill="#181C28" />
      <polygon points="10,42 14,46 436,46 432,42" fill="#101420" />
      {['Lead In','→ Score','→ Nurture','→ Assign','→ Close'].map((s,i)=>(
        <g key={s}>
          <rect x={12+i*86} y={10} width={76} height={22} rx="6" fill={i===4?'#8AB8A8':'#282E40'} />
          <text x={50+i*86} y={25} fontSize="9" fill={i===4?'#1A3028':'#6878A0'}
            fontFamily="Inter,sans-serif" fontWeight={i===4?'800':'500'} textAnchor="middle">{s}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function CRMSolutions() {
  return (
    <ServicePage
      badge="CRM Solutions"
      headline={<>Smarter Customer<br /><em>Relationships, More Revenue.</em></>}
      description="Custom CRM implementations and integrations that centralise your pipeline, automate follow-ups, and turn leads into loyal customers."
      cta1={{ label: 'Get a CRM Demo →', to: '/contact' }}
      cta2={{ label: 'View Our Work', to: '/portfolio' }}
      heroVisual={<CRMVisual />}
      heroMetrics={[
        { icon: '🔗', val: '360°', label: 'Customer View' },
        { icon: '⚡', val: '3x', label: 'Sales Velocity' },
        { icon: '📊', val: '40%', label: 'Reduced Churn' },
      ]}
      stats={[
        { val: '3x', label: 'Avg. Sales Velocity Increase' },
        { val: '40%', label: 'Reduction in Churn' },
        { val: '100+', label: 'CRM Deployments' },
        { val: '95%', label: 'Client Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'CRM Implementation', desc: 'End-to-end setup of Salesforce, HubSpot, Zoho, or custom CRM platforms tailored to your workflow.' },
        { icon: '✦', title: 'Pipeline Automation', desc: 'Automated lead scoring, follow-up sequences, and deal stage transitions to close faster.' },
        { icon: '◈', title: 'Data Migration', desc: 'Safe and accurate migration of existing customer data from spreadsheets or legacy systems.' },
        { icon: '◆', title: 'Integrations', desc: 'Connecting your CRM with email, marketing tools, ERP, and third-party APIs.' },
        { icon: '⬡', title: 'Custom Dashboards', desc: 'Bespoke reporting dashboards that surface the KPIs your team actually needs.' },
        { icon: '❋', title: 'Training & Support', desc: 'Team onboarding, documentation, and ongoing support to ensure maximum adoption.' },
      ]}
      why={[
        { title: 'Process-First Approach', body: 'We map your sales and support processes before touching any software — so the CRM fits you, not the other way around.' },
        { title: 'Multi-Platform Expertise', body: 'We work across HubSpot, Salesforce, Zoho, Pipedrive, and custom builds — no single-vendor bias.' },
        { title: 'Clean Data Guarantee', body: 'We deduplicate and validate data on migration so your CRM starts with a clean, trustworthy foundation.' },
        { title: 'Ongoing Optimisation', body: 'CRMs evolve. We provide quarterly reviews to keep automations, pipelines, and integrations performing.' },
      ]}
      faqs={[
        { q: 'Which CRM platforms do you work with?', a: 'HubSpot, Salesforce, Zoho, Pipedrive, and custom-built CRM solutions depending on your needs and budget.' },
        { q: 'How long does a CRM implementation take?', a: 'A standard implementation takes 4–8 weeks. Complex enterprise setups with multiple integrations may take longer.' },
        { q: 'Can you migrate data from our current system?', a: 'Yes — we handle full data migration including deduplication, mapping, and validation.' },
        { q: 'Do you provide staff training?', a: 'Absolutely. All implementations include team training sessions and documentation.' },
      ]}
    />
  )
}
