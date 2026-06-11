import ServicePage from '../components/ServicePage/ServicePage'

const DotNetVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="dn-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#D8DCE8" />
        <stop offset="100%" stopColor="#C8CCDC" />
      </linearGradient>
      <linearGradient id="dn-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1A1E3A" />
        <stop offset="100%" stopColor="#10142A" />
      </linearGradient>
      <linearGradient id="dn-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ECEEF8" />
        <stop offset="100%" stopColor="#E0E4F4" />
      </linearGradient>
      <filter id="dn-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#dn-bg)" />

    {/* .NET logo centre */}
    <g filter="url(#dn-shadow)" transform="translate(150,18)">
      <rect width="180" height="90" rx="16" fill="url(#dn-dark)" />
      <polygon points="180,16 184,20 184,102 180,98" fill="#0A0E1E" />
      <polygon points="16,90 20,94 184,94 180,90" fill="#060A16" />
      <text x="90" y="58" fontSize="28" fontWeight="900" fill="#7090CC" fontFamily="Inter,sans-serif" textAnchor="middle">.NET 8</text>
      <rect x="20" y="68" width="140" height="4" rx="2" fill="#303860" />
      <text x="90" y="80" fontSize="9" fill="#5060A0" fontFamily="Inter,sans-serif" textAnchor="middle">ASP.NET Core</text>
    </g>

    {/* Code editor */}
    <g filter="url(#dn-shadow)" transform="translate(22,24)">
      <rect width="110" height="155" rx="12" fill="url(#dn-dark)" />
      <polygon points="110,12 114,16 114,162 110,158" fill="#0A0E1E" />
      <polygon points="12,155 16,158 114,158 110,155" fill="#060A16" />
      <rect x="12" y="12" width="86" height="10" rx="4" fill="#262A48" />
      {[
        [12,'#708AC8',45],[26,'#B07898',70],[26,'#78A888',55],
        [40,'#C89870',40],[40,'#708AC8',65],[54,'#B07898',50],
        [68,'#78A888',80],[68,'#C89870',35],[82,'#708AC8',60],
        [96,'#B07898',75],[110,'#78A888',48],[124,'#C89870',62],
      ].map(([y,c,w],i)=>(
        <rect key={i} x={14+(i%2)*6} y={y} width={w} height="5" rx="2" fill={c} opacity="0.8" />
      ))}
    </g>

    {/* Azure infra card */}
    <g filter="url(#dn-shadow)" transform="translate(348,24)">
      <rect width="110" height="155" rx="12" fill="url(#dn-card)" />
      <polygon points="110,12 114,16 114,162 110,158" fill="#C4C8E0" />
      <polygon points="12,155 16,158 114,158 110,155" fill="#BCC0D8" />
      <rect x="12" y="12" width="60" height="5" rx="2" fill="#8888B8" />
      {['App Service','SQL Server','Blob Storage','Azure AD','Functions','Cosmos DB','Key Vault'].map((s,i)=>(
        <g key={s}>
          <rect x="12" y={24+i*19} width="86" height="13" rx="4" fill={i%2===0?'#D8DCF4':'#E4E8FC'} />
          <text x="18" y={34+i*19} fontSize="7" fill="#40488A" fontFamily="Inter,sans-serif" fontWeight="600">{s}</text>
        </g>
      ))}
    </g>

    {/* Stats */}
    {[['80+','Projects'],['.NET 8','Version'],['99.9%','Uptime']].map(([v,l],i)=>(
      <g key={l} filter="url(#dn-shadow)" transform={`translate(${22+i*154},197)`}>
        <rect width="134" height="52" rx="10" fill="url(#dn-dark)" />
        <polygon points="134,10 138,14 138,58 134,54" fill="#0A0E1E" />
        <polygon points="10,52 14,56 138,56 134,52" fill="#060A16" />
        <text x="14" y="22" fontSize="7" fill="#404878" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="42" fontSize={v.length>5?14:18} fontWeight="900" fill="#9AACD8" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}

    <g filter="url(#dn-shadow)" transform="translate(22,265)">
      <rect width="436" height="50" rx="12" fill="url(#dn-card)" />
      <polygon points="436,12 440,16 440,58 436,54" fill="#C4C8E0" />
      <polygon points="12,50 16,54 440,54 436,50" fill="#BCC0D8" />
      {['ASP.NET Core','C#','Blazor','Entity Framework','Azure','SQL Server'].map((t,i)=>(
        <g key={t}>
          <rect x={12+i*73} y={10} width={63} height={28} rx="6" fill="#D4D8F4" />
          <text x={43+i*73} y={28} fontSize="8" fill="#383880" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{t}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function AspNetDevelopment() {
  return (
    <ServicePage
      badge="ASP.NET Web Development"
      headline={<>Enterprise .NET Apps<br /><em>Built to Perform.</em></>}
      description="High-performance ASP.NET and .NET Core applications — secure, scalable, and built for enterprise-grade workloads."
      cta1={{ label: 'Start Your Project →', to: '/contact' }}
      cta2={{ label: 'View Portfolio', to: '/portfolio' }}
      heroVisual={<DotNetVisual />}
      heroMetrics={[
        { icon: '🏢', val: '80+', label: '.NET Projects Delivered' },
        { icon: '🔐', val: 'Enterprise', label: 'Security Grade' },
        { icon: '⚡', val: '99.9%', label: 'Uptime SLA' },
      ]}
      stats={[
        { val: '80+', label: '.NET Projects Delivered' },
        { val: '.NET 8', label: 'Latest Framework' },
        { val: '99.9%', label: 'Uptime SLA' },
        { val: '95%', label: 'Client Retention' },
      ]}
      delivers={[
        { icon: '◎', title: 'ASP.NET Core MVC', desc: 'Modular, testable web applications built on the latest .NET Core runtime for cross-platform deployment.' },
        { icon: '✦', title: 'Web API Development', desc: 'RESTful and GraphQL APIs using ASP.NET Web API — fast, secure, and well-documented.' },
        { icon: '◈', title: 'Blazor Applications', desc: 'Interactive web UIs built in C# using Blazor — no JavaScript required for rich client-side experiences.' },
        { icon: '◆', title: 'Azure Integration', desc: 'Seamless deployment and integration with Azure services — App Service, SQL, Blob Storage, and Functions.' },
        { icon: '⬡', title: 'SQL Server & EF Core', desc: 'Optimised database layer using Entity Framework Core with migrations, caching, and query tuning.' },
        { icon: '❋', title: 'Legacy .NET Migration', desc: 'Upgrade .NET Framework apps to modern .NET Core with improved performance and cloud readiness.' },
      ]}
      why={[
        { title: 'Microsoft Ecosystem', body: 'Deep expertise across the full Microsoft stack — Azure, SQL Server, Active Directory, and .NET.' },
        { title: 'Enterprise Security', body: 'Role-based access, OAuth 2.0, Azure AD integration, and compliance-ready architecture.' },
        { title: 'Performance at Scale', body: '.NET 8 delivers some of the fastest benchmark scores of any web framework — ideal for high-traffic apps.' },
        { title: 'Cloud-First Deployment', body: 'Every app is designed for Azure deployment with CI/CD pipelines, auto-scaling, and monitoring.' },
      ]}
      faqs={[
        { q: 'Do you build on .NET Core or .NET Framework?', a: 'We build on modern .NET (formerly .NET Core) by default, and can maintain legacy .NET Framework apps.' },
        { q: 'Can you integrate with Azure services?', a: 'Yes — Azure integration is one of our core strengths. We work with Azure App Service, Functions, SQL, and more.' },
        { q: 'Do you handle database design for .NET projects?', a: 'Yes, we design SQL Server schemas and implement Entity Framework Core with full migrations.' },
        { q: 'What industries do you serve with .NET?', a: 'Finance, healthcare, logistics, and enterprise SaaS — industries where reliability and security are non-negotiable.' },
      ]}
    />
  )
}
