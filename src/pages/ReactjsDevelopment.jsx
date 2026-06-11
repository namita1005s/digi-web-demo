import ServicePage from '../components/ServicePage/ServicePage'

const ReactVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="rct-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#D8E0E8" />
        <stop offset="100%" stopColor="#C8D4E0" />
      </linearGradient>
      <linearGradient id="rct-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1C2838" />
        <stop offset="100%" stopColor="#121E2C" />
      </linearGradient>
      <linearGradient id="rct-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EAF0F8" />
        <stop offset="100%" stopColor="#DCE6F2" />
      </linearGradient>
      <filter id="rct-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#rct-bg)" />

    {/* React atom centre */}
    <g transform="translate(170,30)">
      <circle cx="70" cy="80" r="14" fill="#3D7A9A" opacity="0.9" />
      <ellipse cx="70" cy="80" rx="65" ry="24" stroke="#5A90B0" strokeWidth="3" fill="none" opacity="0.6" />
      <ellipse cx="70" cy="80" rx="65" ry="24" stroke="#5A90B0" strokeWidth="3" fill="none" opacity="0.6" transform="rotate(60 70 80)" />
      <ellipse cx="70" cy="80" rx="65" ry="24" stroke="#5A90B0" strokeWidth="3" fill="none" opacity="0.6" transform="rotate(-60 70 80)" />
      <text x="70" y="76" fontSize="9" fontWeight="900" fill="#B8D4E8" fontFamily="Inter,sans-serif" textAnchor="middle">⚛</text>
      <text x="70" y="88" fontSize="7" fill="#7AAABF" fontFamily="Inter,sans-serif" textAnchor="middle">React 18</text>
    </g>

    {/* Code editor left */}
    <g filter="url(#rct-shadow)" transform="translate(24,24)">
      <rect width="130" height="170" rx="12" fill="url(#rct-dark)" />
      <polygon points="130,12 134,16 134,178 130,174" fill="#0C1420" />
      <polygon points="12,170 16,174 134,174 130,170" fill="#080E18" />
      <rect x="12" y="12" width="106" height="12" rx="4" fill="#1C2838" />
      {[
        [12,'#6A90B0',30],[28,'#A0C080',60],[28,'#9090A8',40],
        [44,'#6AB8A8',70],[44,'#B09060',45],[60,'#8098B8',55],
        [60,'#A0C080',80],[76,'#6A90B0',35],[92,'#9090A8',65],
        [92,'#A0C080',50],[108,'#6AB8A8',75],[124,'#B09060',40],
      ].map(([y,c,w],i)=>(
        <rect key={i} x={14+(i%2)*8} y={y} width={w} height="5" rx="2" fill={c} opacity="0.8" />
      ))}
    </g>

    {/* Component card right */}
    <g filter="url(#rct-shadow)" transform="translate(326,24)">
      <rect width="130" height="170" rx="12" fill="url(#rct-card)" />
      <polygon points="130,12 134,16 134,178 130,174" fill="#C0CCE0" />
      <polygon points="12,170 16,174 134,174 130,170" fill="#B8C4D8" />
      <rect x="12" y="12" width="70" height="5" rx="2" fill="#8898B0" />
      {['Header','Sidebar','DataGrid','Form','Modal','Toast','Footer'].map((c,i)=>(
        <g key={c}>
          <rect x="12" y={24+i*20} width="106" height="14" rx="4" fill={i%2===0?'#DAEAF8':'#D0E0EE'} />
          <text x="18" y={35+i*20} fontSize="8" fill="#4A6080" fontFamily="Inter,sans-serif" fontWeight="600">⬡ {c}</text>
        </g>
      ))}
    </g>

    {/* Stats */}
    {[['98+','PageSpeed'],['120+','Projects'],['React 18','Stack']].map(([v,l],i)=>(
      <g key={l} filter="url(#rct-shadow)" transform={`translate(${24+i*154},210)`}>
        <rect width="134" height="52" rx="10" fill="url(#rct-dark)" />
        <polygon points="134,10 138,14 138,58 134,54" fill="#0C1420" />
        <polygon points="10,52 14,56 138,56 134,52" fill="#080E18" />
        <text x="14" y="22" fontSize="7" fill="#506080" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="42" fontSize={v.length>5?13:18} fontWeight="900" fill="#A8C8E0" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}

    {/* Tech row */}
    <g filter="url(#rct-shadow)" transform="translate(24,278)">
      <rect width="432" height="50" rx="12" fill="url(#rct-card)" />
      <polygon points="432,12 436,16 436,58 432,54" fill="#C0CCE0" />
      <polygon points="12,50 16,54 436,54 432,50" fill="#B8C4D8" />
      {['React 18','Next.js','TypeScript','Redux','Zustand','Vite'].map((t,i)=>(
        <g key={t}>
          <rect x={12+i*72} y={10} width={62} height={28} rx="6" fill="#D4E4F4" />
          <text x={43+i*72} y={28} fontSize="8" fill="#3A5878" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{t}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function ReactjsDevelopment() {
  return (
    <ServicePage
      badge="ReactJS Development"
      headline={<>Lightning-Fast React Apps<br /><em>That Scale Effortlessly.</em></>}
      description="Modern ReactJS development for web apps, dashboards, and SPAs — component-driven, performant, and easy to maintain."
      cta1={{ label: 'Build With React →', to: '/contact' }}
      cta2={{ label: 'View Portfolio', to: '/portfolio' }}
      heroVisual={<ReactVisual />}
      heroMetrics={[
        { icon: '⚛️', val: 'React 18', label: 'Latest Version' },
        { icon: '⚡', val: '98+', label: 'PageSpeed Score' },
        { icon: '🔄', val: 'Real-time', label: 'UI Updates' },
      ]}
      stats={[
        { val: '120+', label: 'React Projects Shipped' },
        { val: 'React 18', label: 'Latest Framework' },
        { val: '98+', label: 'Avg PageSpeed Score' },
        { val: '95%', label: 'Client Retention' },
      ]}
      delivers={[
        { icon: '◎', title: 'React SPA', desc: 'Fast, interactive single-page applications with React Router and optimised rendering.' },
        { icon: '✦', title: 'Next.js / SSR', desc: 'Server-side rendered and statically generated apps with Next.js for SEO and performance.' },
        { icon: '◈', title: 'Redux & Zustand', desc: 'Scalable state management using Redux Toolkit or Zustand for complex application state.' },
        { icon: '◆', title: 'React Dashboards', desc: 'Data-rich admin panels and dashboards with charts, tables, and real-time updates.' },
        { icon: '⬡', title: 'Component Libraries', desc: 'Reusable, documented component libraries built with Storybook for design system consistency.' },
        { icon: '❋', title: 'Performance Optimisation', desc: 'Code splitting, memoisation, and bundle analysis to ensure your React app runs at peak speed.' },
      ]}
      why={[
        { title: 'React Specialists', body: 'React is our primary frontend technology — we have shipped 120+ projects and know every pattern and pitfall.' },
        { title: 'Next.js Experts', body: 'We pair React with Next.js by default for SEO, performance, and production-readiness out of the box.' },
        { title: 'Component-Driven', body: 'Every project is built with reusable components — faster iterations, consistent UI, and easy maintenance.' },
        { title: 'Test Coverage', body: 'We write unit and integration tests with React Testing Library and Vitest for every critical component.' },
      ]}
      faqs={[
        { q: 'Should I use React or Next.js for my project?', a: 'For most projects we recommend Next.js — it adds SSR, routing, and API routes on top of React with minimal overhead.' },
        { q: 'Can you build a full-stack app with React?', a: 'Yes — pairing React with Next.js API routes or a Node.js backend gives you a complete full-stack solution.' },
        { q: 'Do you build React Native apps too?', a: 'Yes — our team builds both ReactJS web apps and React Native mobile apps, sharing code where possible.' },
        { q: 'How do you handle state in large React apps?', a: 'We use Redux Toolkit for complex global state and Zustand or React Query for simpler or server state management.' },
      ]}
    />
  )
}
