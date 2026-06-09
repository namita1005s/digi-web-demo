import ServicePage from '../components/ServicePage/ServicePage'

const AIAutomationVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="480" height="360" rx="12" fill="#0D0D0D" />
    {/* Central AI node */}
    <circle cx="240" cy="180" r="48" fill="#1A1A1A" stroke="#333" strokeWidth="2" />
    <circle cx="240" cy="180" r="36" fill="#111" stroke="#444" strokeWidth="1.5" />
    <text x="240" y="175" fontSize="11" fill="#fff" fontFamily="Inter,sans-serif" fontWeight="800" textAnchor="middle">AI</text>
    <text x="240" y="190" fontSize="8" fill="#666" fontFamily="Inter,sans-serif" textAnchor="middle">ENGINE</text>
    {/* Orbit ring */}
    <circle cx="240" cy="180" r="80" stroke="#222" strokeWidth="1" strokeDasharray="4 3" fill="none" />
    {/* Satellite nodes */}
    {[
      { cx: 240, cy: 92, label: 'CRM' },
      { cx: 318, cy: 140, label: 'Email' },
      { cx: 318, cy: 220, label: 'Ads' },
      { cx: 240, cy: 268, label: 'Chat' },
      { cx: 162, cy: 220, label: 'Data' },
      { cx: 162, cy: 140, label: 'Content' },
    ].map(({ cx, cy, label }) => (
      <g key={label}>
        <line x1="240" y1="180" x2={cx} y2={cy} stroke="#2A2A2A" strokeWidth="1.5" />
        <circle cx={cx} cy={cy} r="22" fill="#1A1A1A" stroke="#333" strokeWidth="1.5" />
        <text x={cx} y={cy + 4} fontSize="7" fill="#aaa" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{label}</text>
      </g>
    ))}
    {/* Animated pulse rings (static representation) */}
    <circle cx="240" cy="180" r="60" stroke="#fff" strokeWidth="0.5" opacity="0.06" fill="none" />
    <circle cx="240" cy="180" r="100" stroke="#fff" strokeWidth="0.5" opacity="0.04" fill="none" />
    {/* Stat cards */}
    <rect x="16" y="290" width="136" height="54" rx="8" fill="#1A1A1A" />
    <text x="28" y="310" fontSize="8" fill="#666" fontFamily="Inter,sans-serif">Manual Tasks Saved</text>
    <text x="28" y="332" fontSize="20" fontWeight="900" fill="#fff" fontFamily="Inter,sans-serif">70%</text>
    <rect x="172" y="290" width="136" height="54" rx="8" fill="#1A1A1A" />
    <text x="184" y="310" fontSize="8" fill="#666" fontFamily="Inter,sans-serif">Faster Operations</text>
    <text x="184" y="332" fontSize="20" fontWeight="900" fill="#ffffff" fontFamily="Inter,sans-serif">10X</text>
    <rect x="328" y="290" width="136" height="54" rx="8" fill="#1A1A1A" />
    <text x="340" y="310" fontSize="8" fill="#666" fontFamily="Inter,sans-serif">Average ROI</text>
    <text x="340" y="332" fontSize="20" fontWeight="900" fill="#fff" fontFamily="Inter,sans-serif">3.5X</text>
    {/* Top workflow line */}
    <rect x="16" y="16" width="448" height="60" rx="8" fill="#1A1A1A" />
    <text x="28" y="35" fontSize="8" fill="#555" fontFamily="Inter,sans-serif">Workflow Trigger</text>
    {['Lead In', '→ Qualify', '→ Nurture', '→ Book', '→ Close'].map((step, i) => (
      <g key={step}>
        <rect x={28 + i * 88} y="42" width="72" height="22" rx="5"
          fill={i === 4 ? '#fff' : '#252525'} />
        <text x={28 + i * 88 + 36} y="57" fontSize="8"
          fill={i === 4 ? '#111' : '#888'}
          fontFamily="Inter,sans-serif" fontWeight={i === 4 ? '800' : '500'} textAnchor="middle">{step}</text>
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
