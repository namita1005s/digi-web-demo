import ServicePage from '../components/ServicePage/ServicePage'

const AngularVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="ng-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E4D8D8" />
        <stop offset="100%" stopColor="#D4C8C8" />
      </linearGradient>
      <linearGradient id="ng-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#302028" />
        <stop offset="100%" stopColor="#201820" />
      </linearGradient>
      <linearGradient id="ng-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F0E8E8" />
        <stop offset="100%" stopColor="#E4DCDC" />
      </linearGradient>
      <filter id="ng-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#ng-bg)" />

    {/* Angular shield logo centre */}
    <g filter="url(#ng-shadow)" transform="translate(160,30)">
      <path d="M160,0 L320,58 L290,230 L160,300 L30,230 L0,58 Z" fill="url(#ng-dark)" opacity="0.15" transform="scale(0.5) translate(0,0)" />
      <path d="M80,0 L160,29 L145,115 L80,150 L15,115 L0,29 Z" fill="url(#ng-dark)" />
      <path d="M80,0 L160,29 L145,115 L80,150 L15,115 L0,29 Z" fill="#B82030" opacity="0.3" />
      <text x="80" y="90" fontSize="40" fontWeight="900" fill="#F0D0D0" fontFamily="Inter,sans-serif" textAnchor="middle">A</text>
    </g>

    {/* Code editor */}
    <g filter="url(#ng-shadow)" transform="translate(24,30)">
      <rect width="120" height="160" rx="12" fill="url(#ng-dark)" />
      <polygon points="120,12 124,16 124,168 120,164" fill="#100C10" />
      <polygon points="12,160 16,164 124,164 120,160" fill="#080608" />
      <rect x="12" y="12" width="96" height="12" rx="4" fill="#201820" />
      {[
        [12,'#B84040',60],
        [28,'#C07060',90],
        [28,'#B0A870',50],
        [44,'#A0B870',70],
        [44,'#C07060',40],
        [60,'#8898B8',80],
        [76,'#B84040',55],
        [92,'#C07060',65],
        [108,'#9898A8',45],
        [124,'#B0A870',75],
      ].map(([y,c,w],i)=>(
        <rect key={i} x={14+(i%2)*6} y={y} width={w} height="6" rx="2" fill={c} opacity="0.8" />
      ))}
    </g>

    {/* Component tree */}
    <g filter="url(#ng-shadow)" transform="translate(336,30)">
      <rect width="120" height="160" rx="12" fill="url(#ng-card)" />
      <polygon points="120,12 124,16 124,168 120,164" fill="#D0C8C8" />
      <polygon points="12,160 16,164 124,164 120,160" fill="#C8C0C0" />
      <rect x="12" y="12" width="60" height="5" rx="2" fill="#9A9090" />
      {/* tree */}
      {[{x:12,y:26,w:96,d:0},{x:24,y:42,w:72,d:1},{x:36,y:58,w:48,d:2},{x:36,y:74,w:60,d:2},{x:24,y:90,w:80,d:1},{x:36,y:106,w:44,d:2},{x:12,y:122,w:90,d:0},{x:24,y:138,w:66,d:1}].map(({x,y,w,d},i)=>(
        <g key={i}>
          <rect x={x} y={y} width={w} height="10" rx="3" fill={d===0?'#D0B0B0':d===1?'#D8C0C0':'#E0CCCC'} />
        </g>
      ))}
    </g>

    {/* Stats row */}
    {[['Angular 17','Version'],['60+','Projects'],['TypeScript','Stack']].map(([v,l],i)=>(
      <g key={l} filter="url(#ng-shadow)" transform={`translate(${24+i*154},206)`}>
        <rect width="134" height="52" rx="10" fill="url(#ng-dark)" />
        <polygon points="134,10 138,14 138,58 134,54" fill="#100C10" />
        <polygon points="10,52 14,56 138,56 134,52" fill="#080608" />
        <text x="14" y="22" fontSize="7" fill="#806070" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="42" fontSize={v.length>6?13:18} fontWeight="900" fill="#E0D0D0" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}

    {/* Module architecture */}
    <g filter="url(#ng-shadow)" transform="translate(24,274)">
      <rect width="432" height="54" rx="12" fill="url(#ng-card)" />
      <polygon points="432,12 436,16 436,62 432,58" fill="#D0C8C8" />
      <polygon points="12,54 16,58 436,58 432,54" fill="#C8C0C0" />
      <rect x="12" y="12" width="60" height="4" rx="2" fill="#9A9090" />
      {['AppModule','CoreModule','SharedModule','RouterModule','NgRx Store'].map((m,i)=>(
        <g key={m}>
          <rect x={12+i*86} y={22} width={76} height={22} rx="6" fill="#E0D4D4" />
          <text x={50+i*86} y={37} fontSize="8" fill="#6A5858" fontFamily="Inter,sans-serif" fontWeight="600" textAnchor="middle">{m}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function AngularjsDevelopment() {
  return (
    <ServicePage
      badge="AngularJS Development"
      headline={<>Dynamic Web Apps<br /><em>Built with Angular.</em></>}
      description="Enterprise-grade Angular applications with structured architecture, two-way data binding, and powerful TypeScript support."
      cta1={{ label: 'Build Your Angular App →', to: '/contact' }}
      cta2={{ label: 'View Portfolio', to: '/portfolio' }}
      heroVisual={<AngularVisual />}
      heroMetrics={[
        { icon: '🔴', val: 'Angular 17', label: 'Latest Version' },
        { icon: '📦', val: 'Modular', label: 'Component Architecture' },
        { icon: '⚡', val: 'Lazy Load', label: 'Optimised Bundles' },
      ]}
      stats={[
        { val: '60+', label: 'Angular Apps Delivered' },
        { val: 'Angular 17', label: 'Latest Framework' },
        { val: 'TypeScript', label: 'Type-Safe Codebase' },
        { val: '95%', label: 'Client Retention' },
      ]}
      delivers={[
        { icon: '◎', title: 'SPA Development', desc: 'Blazing-fast single-page applications with Angular routing, lazy loading, and state management.' },
        { icon: '✦', title: 'Angular Material UI', desc: 'Polished, accessible UIs using Angular Material design components with custom theming.' },
        { icon: '◈', title: 'NgRx State Management', desc: 'Predictable state management using NgRx for complex, data-heavy enterprise applications.' },
        { icon: '◆', title: 'Angular Universal (SSR)', desc: 'Server-side rendering for better SEO and faster initial page loads on Angular apps.' },
        { icon: '⬡', title: 'API Integration', desc: 'Seamless integration with REST and GraphQL APIs using Angular HttpClient and interceptors.' },
        { icon: '❋', title: 'Migration & Upgrade', desc: 'Migrate AngularJS (1.x) apps to modern Angular and upgrade existing Angular versions safely.' },
      ]}
      why={[
        { title: 'Enterprise Architecture', body: "Angular's opinionated structure enforces clean separation of concerns — ideal for large teams and long-term projects." },
        { title: 'TypeScript Native', body: 'Angular is built on TypeScript by default, giving you strong typing, better tooling, and fewer runtime errors.' },
        { title: 'Google Backed', body: "Maintained by Google, Angular has a long-term roadmap and won't be abandoned — a safe bet for enterprise." },
        { title: 'Full Testing Support', body: 'We write unit, integration, and e2e tests using Jasmine, Karma, and Cypress for every Angular project.' },
      ]}
      faqs={[
        { q: 'What is the difference between AngularJS and Angular?', a: 'AngularJS (1.x) is the old version. Angular (2+) is a complete rewrite using TypeScript and component architecture.' },
        { q: 'Can you migrate our AngularJS app to modern Angular?', a: 'Yes — we have a proven migration process that upgrades AngularJS apps to Angular 17 incrementally.' },
        { q: 'Do you implement state management in Angular?', a: 'Yes — we use NgRx for complex apps and Angular Signals or services for simpler state requirements.' },
        { q: 'Is Angular good for SEO?', a: 'With Angular Universal (SSR) or static pre-rendering, Angular apps are fully SEO-friendly.' },
      ]}
    />
  )
}
