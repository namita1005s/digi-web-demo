import ServicePage from '../components/ServicePage/ServicePage'

const AIAutomationVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="ai-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#D8DCE4" />
        <stop offset="100%" stopColor="#C8CCD8" />
      </linearGradient>
      <linearGradient id="ai-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ECEEF4" />
        <stop offset="100%" stopColor="#E0E3EC" />
      </linearGradient>
      <linearGradient id="ai-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3A3E50" />
        <stop offset="100%" stopColor="#282C3E" />
      </linearGradient>
      <filter id="ai-shadow">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" />
      </filter>
      <filter id="ai-glow">
        <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#8090B022" />
      </filter>
    </defs>
    <rect width="480" height="360" fill="url(#ai-bg)" />

    {/* ── 3D isometric hexagonal core ── */}
    {/* bottom hex face */}
    <polygon points="240,230 200,207 200,183 240,206 280,183 280,207" fill="#A8AEBF" />
    {/* left face */}
    <polygon points="200,183 200,207 240,230 240,206" fill="#98A0B2" />
    {/* right face */}
    <polygon points="280,183 280,207 240,230 240,206" fill="#B8C0D0" />
    {/* top hex */}
    <polygon points="240,160 200,183 240,206 280,183" fill="#C8D0E0" />
    {/* core center */}
    <circle cx="240" cy="184" r="22" fill="url(#ai-dark)" filter="url(#ai-glow)" />
    <text x="240" y="181" fontSize="10" fill="#B0B8D0" fontFamily="Inter,sans-serif" fontWeight="900" textAnchor="middle">AI</text>
    <text x="240" y="193" fontSize="6" fill="#6A7090" fontFamily="Inter,sans-serif" textAnchor="middle">ENGINE</text>

    {/* Orbit ring */}
    <ellipse cx="240" cy="184" rx="68" ry="38" stroke="#B8C0D0" strokeWidth="1" strokeDasharray="4 3" fill="none" opacity="0.6" />

    {/* ── Satellite node cards (3D small cubes) ── */}
    {[
      {x:240, y:106, label:'CRM'},
      {x:308, y:142, label:'Email'},
      {x:308, y:214, label:'Ads'},
      {x:240, y:250, label:'Chat'},
      {x:172, y:214, label:'Data'},
      {x:172, y:142, label:'AI'},
    ].map(({x,y,label})=>(
      <g key={label}>
        <line x1="240" y1="184" x2={x} y2={y} stroke="#9AA2B8" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5" />
        {/* mini 3D cube */}
        <polygon points={`${x-12},${y-6} ${x},${y-12} ${x+12},${y-6} ${x},${y}`} fill="#C0C8D8" />
        <polygon points={`${x-12},${y-6} ${x-12},${y+6} ${x},${y+12} ${x},${y}`} fill="#A0A8B8" />
        <polygon points={`${x+12},${y-6} ${x+12},${y+6} ${x},${y+12} ${x},${y}`} fill="#B0B8C8" />
        <text x={x} y={y+4} fontSize="7" fill="#5A6080" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{label}</text>
      </g>
    ))}

    {/* ── Workflow strip top ── */}
    <g filter="url(#ai-shadow)" transform="translate(20,18)">
      <rect width="440" height="52" rx="12" fill="url(#ai-dark)" />
      <polygon points="440,12 444,16 444,60 440,56" fill="#181C2E" />
      <polygon points="12,52 16,56 444,56 440,52" fill="#101420" />
      <rect x="14" y="12" width="60" height="5" rx="2" fill="#4A5068" />
      {['Lead In','→ Qualify','→ Nurture','→ Book','→ Close'].map((step,i)=>(
        <g key={step}>
          <rect x={14+i*84} y={22} width={72} height={18} rx="5"
            fill={i===4?'#C8D0E0':'#2A2E40'} />
          <text x={14+i*84+36} y={35} fontSize="8"
            fill={i===4?'#3A3E50':'#7A8098'}
            fontFamily="Inter,sans-serif" fontWeight={i===4?'800':'500'} textAnchor="middle">{step}</text>
        </g>
      ))}
    </g>

    {/* ── Stat cards bottom ── */}
    {[['70%','Tasks Saved'],['10X','Faster'],['3.5X','Avg ROI']].map(([val,lbl],i)=>(
      <g key={lbl} filter="url(#ai-shadow)" transform={`translate(${20+i*154},286)`}>
        <rect width="134" height="52" rx="10" fill="url(#ai-dark)" />
        <polygon points="134,10 138,14 138,58 134,54" fill="#181C2E" />
        <polygon points="10,52 14,56 138,56 134,52" fill="#101420" />
        <text x="14" y="22" fontSize="7" fill="#5A6080" fontFamily="Inter,sans-serif">{lbl}</text>
        <text x="14" y="44" fontSize="20" fontWeight="900" fill="#C8D0E0" fontFamily="Inter,sans-serif">{val}</text>
      </g>
    ))}
  </svg>
)

export default function AIAutomation() {
  return (
    <ServicePage
      badge="AI & Automation"
      headline={<>Automate Operations &<br /><em>Scale 10X Faster with AI.</em></>}
      description="Intelligent automation solutions that eliminate manual work, accelerate growth, and give your business an unfair advantage."
      cta1={{ label: 'Explore AI Solutions →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroVisual={<AIAutomationVisual />}
      heroMetrics={[
        { icon: '⚡', val: '10X', label: 'Faster Operations' },
        { icon: '🤖', val: '70%', label: 'Tasks Automated' },
        { icon: '📈', val: '3.5X', label: 'Average ROI' },
      ]}
      stats={[
        { val: '10X', label: 'Faster Operations' },
        { val: '70%', label: 'Reduction in Manual Tasks' },
        { val: '3.5X', label: 'Average ROI on Automation' },
        { val: '95%', label: 'Client Retention Rate' },
      ]}
      delivers={[
        { icon: '✦', title: 'AI Chatbots', desc: 'Conversational AI that handles support, qualifies leads, and books appointments 24/7.' },
        { icon: '◎', title: 'Workflow Automation', desc: 'End-to-end process automation that eliminates repetitive tasks and human error.' },
        { icon: '◈', title: 'AI Content Generation', desc: 'Scale content production with AI-assisted writing, editing, and optimisation workflows.' },
        { icon: '◆', title: 'Predictive Analytics', desc: 'Data models that forecast trends, churn, and revenue so you can act before problems arise.' },
        { icon: '⬡', title: 'CRM Automation', desc: 'Automated lead nurturing, follow-ups, and pipeline management inside your existing CRM.' },
        { icon: '❋', title: 'Smart Reporting', desc: 'Automated dashboards and reports that surface insights without any manual data wrangling.' },
      ]}
      why={[
        { title: 'Built for Your Stack', body: 'We integrate with the tools you already use — no ripping and replacing your existing systems.' },
        { title: 'Measurable ROI', body: 'Every automation we build is tied to a clear business outcome — time saved, revenue gained, or cost cut.' },
        { title: 'Fast Implementation', body: 'Most automations go live within 2–4 weeks, so you see results fast without months of consultancy.' },
        { title: 'Ongoing Optimisation', body: 'AI systems improve over time. We monitor, retrain, and optimise continuously after launch.' },
      ]}
      faqs={[
        { q: 'Do I need a large team to implement AI automation?', a: 'No. We handle the full build and integration. Your team just needs to approve workflows and review outputs during onboarding.' },
        { q: 'What tools do you integrate with?', a: 'We work with HubSpot, Salesforce, Zapier, Make, Slack, Google Workspace, and most major CRMs and marketing platforms.' },
        { q: 'How long does it take to see results?', a: 'Most clients see measurable time savings within the first 2–4 weeks of launch. ROI typically compounds over 3–6 months.' },
        { q: 'Is my data safe with AI tools?', a: 'Yes. We follow strict data handling practices and only use enterprise-grade AI providers with SOC 2 and GDPR compliance.' },
      ]}
    />
  )
}
 