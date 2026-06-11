import ServicePage from '../components/ServicePage/ServicePage'

const UIUXVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="ux-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E0DBD8" />
        <stop offset="100%" stopColor="#CEC9C4" />
      </linearGradient>
      <linearGradient id="ux-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F2EEE9" />
        <stop offset="100%" stopColor="#E6E0D8" />
      </linearGradient>
      <linearGradient id="ux-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#484240" />
        <stop offset="100%" stopColor="#383230" />
      </linearGradient>
      <filter id="ux-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#ux-bg)" />

    {/* 3D isometric Figma-style canvas */}
    <polygon points="60,80 240,140 420,80 240,20" fill="#D8D2CA" />
    <polygon points="60,80 60,260 240,320 240,140" fill="#B8B2AA" />
    <polygon points="420,80 420,260 240,320 240,140" fill="#CCC6BE" />

    {/* Screen frame on top face */}
    <polygon points="80,86 240,142 400,86 240,30" fill="#EAE4DC" />
    {/* Nav bar */}
    <line x1="100" y1="56" x2="380" y2="56" stroke="#C8C2BA" strokeWidth="1" opacity="0.5" />
    {/* Wireframe boxes on canvas */}
    {[[100,68,90,30],[110,106,120,18],[110,130,80,8],[110,142,60,8],[110,154,90,8]].map(([x,y,w,h],i)=>(
      <rect key={i} x={x} y={y} width={w} height={h} rx="3" fill="#C8C2BA" opacity="0.5" />
    ))}
    <rect x="240" y="60" width="130" height="80" rx="5" fill="#D8D0C8" opacity="0.6" />
    <rect x="248" y="68" width="114" height="44" rx="3" fill="#C0B8B0" opacity="0.5" />
    <rect x="248" y="118" width="50" height="12" rx="5" fill="#8A8480" opacity="0.7" />

    {/* Floating usability score card */}
    <g filter="url(#ux-shadow)" transform="translate(28,180)">
      <rect width="130" height="100" rx="14" fill="url(#ux-dark)" />
      <polygon points="130,14 134,18 134,108 130,104" fill="#282220" />
      <polygon points="14,100 18,104 134,104 130,100" fill="#201A18" />
      <rect x="14" y="14" width="60" height="5" rx="2" fill="#6A6460" />
      <text x="14" y="66" fontSize="32" fontWeight="900" fill="#EAE4DE" fontFamily="Inter,sans-serif">4.9</text>
      <rect x="14" y="74" width="70" height="4" rx="2" fill="#5A5450" />
      {[0,1,2,3,4].map(i=>(
        <text key={i} x={14+i*18} y="92" fontSize="13" fill="#C8A860" fontFamily="Inter,sans-serif">★</text>
      ))}
    </g>

    {/* Floating task completion card */}
    <g filter="url(#ux-shadow)" transform="translate(320,30)">
      <rect width="130" height="90" rx="14" fill="url(#ux-card)" />
      <polygon points="130,14 134,18 134,98 130,94" fill="#D0CAC2" />
      <polygon points="14,90 18,94 134,94 130,90" fill="#C8C2BA" />
      <rect x="14" y="14" width="70" height="5" rx="2" fill="#8A8480" />
      <text x="14" y="62" fontSize="26" fontWeight="900" fill="#484240" fontFamily="Inter,sans-serif">+68%</text>
      <rect x="14" y="70" width="80" height="4" rx="2" fill="#B0A8A0" />
    </g>

    {/* Floating component card */}
    <g filter="url(#ux-shadow)" transform="translate(320,138)">
      <rect width="130" height="100" rx="14" fill="url(#ux-card)" />
      <polygon points="130,14 134,18 134,108 130,104" fill="#D0CAC2" />
      <polygon points="14,100 18,104 134,104 130,100" fill="#C8C2BA" />
      <rect x="14" y="14" width="55" height="5" rx="2" fill="#8A8480" />
      {['Button','Input','Card','Badge'].map((c,i)=>(
        <rect key={c} x={14+(i%2)*58} y={28+(Math.floor(i/2)*30)} width="50" height="20" rx="6" fill="#D8D2CA" />
      ))}
      {['Button','Input','Card','Badge'].map((c,i)=>(
        <text key={c} x={39+(i%2)*58} y={42+(Math.floor(i/2)*30)} fontSize="7" fill="#7A7470" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{c}</text>
      ))}
    </g>

    {/* Flow arrows bottom */}
    <g filter="url(#ux-shadow)" transform="translate(170,270)">
      <rect width="260" height="52" rx="12" fill="url(#ux-dark)" />
      <polygon points="260,12 264,16 264,60 260,56" fill="#282220" />
      <polygon points="12,52 16,56 264,56 260,52" fill="#201A18" />
      {['Research','→ Wire','→ Design','→ Test'].map((s,i)=>(
        <g key={s}>
          <rect x={10+i*62} y={12} width={54} height={28} rx="6" fill={i===3?'#C8C2BA':'#383230'} />
          <text x={37+i*62} y={30} fontSize="8" fill={i===3?'#383230':'#8A8480'}
            fontFamily="Inter,sans-serif" fontWeight={i===3?'800':'500'} textAnchor="middle">{s}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function UIUXDesigning() {
  return (
    <ServicePage
      badge="UI/UX Designing"
      headline={<>Intuitive Experiences<br /><em>Users Love to Use.</em></>}
      description="Research-backed UI/UX design that reduces friction, improves usability, and turns complex products into delightful digital experiences."
      cta1={{ label: 'Start a Design Sprint →', to: '/contact' }}
      cta2={{ label: 'View Our Work', to: '/portfolio' }}
      heroVisual={<UIUXVisual />}
      heroMetrics={[
        { icon: '🎨', val: '+68%', label: 'Task Completion Rate' },
        { icon: '💡', val: '4.9', label: 'Usability Score' },
        { icon: '📉', val: '-45%', label: 'Support Tickets' },
      ]}
      stats={[
        { val: '+68%', label: 'Avg. Task Completion Improvement' },
        { val: '-45%', label: 'Reduction in Support Tickets' },
        { val: '300+', label: 'UX Projects Delivered' },
        { val: '95%', label: 'Client Satisfaction' },
      ]}
      delivers={[
        { icon: '◎', title: 'User Research', desc: 'Interviews, surveys, and usability testing to understand real user needs and pain points.' },
        { icon: '✦', title: 'Information Architecture', desc: 'Logical content structure and navigation design that helps users find what they need instantly.' },
        { icon: '◈', title: 'Wireframing & Prototyping', desc: 'Low and high-fidelity wireframes with interactive prototypes for stakeholder review and testing.' },
        { icon: '◆', title: 'Visual UI Design', desc: 'Polished, brand-aligned interfaces with a consistent design system and component library.' },
        { icon: '⬡', title: 'Usability Testing', desc: 'Moderated and unmoderated testing sessions to validate designs before development.' },
        { icon: '❋', title: 'Dev Handoff', desc: 'Annotated Figma files, design tokens, and assets packaged for seamless developer handoff.' },
      ]}
      why={[
        { title: 'Research-Led', body: 'We base every design decision on real user data — not assumptions or personal preferences.' },
        { title: 'Systems Thinking', body: 'We build design systems, not isolated screens — ensuring consistency across your entire product.' },
        { title: 'Collaborative Process', body: 'Regular design reviews keep your team involved and aligned at every stage of the project.' },
        { title: 'Measurable Outcomes', body: 'We define success metrics upfront so you can measure the real impact of UX improvements.' },
      ]}
      faqs={[
        { q: 'What is the difference between UI and UX?', a: 'UX is about how a product works and feels — the flow, logic, and usability. UI is about how it looks — visuals, colours, and typography. We do both.' },
        { q: 'Do you conduct user testing?', a: 'Yes — usability testing is included in our UX process to validate designs with real users before handoff.' },
        { q: 'What tools do you use?', a: 'Figma for design and prototyping, Maze or UserTesting for research, and Hotjar for behaviour analytics.' },
        { q: 'Can you improve an existing product?', a: 'Absolutely. We conduct UX audits and usability studies on existing products and provide a prioritised improvement roadmap.' },
      ]}
    />
  )
}
