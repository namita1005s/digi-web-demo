import ServicePage from '../components/ServicePage/ServicePage'

const PHPVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="php-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#DDD8E4" />
        <stop offset="100%" stopColor="#CDD0E0" />
      </linearGradient>
      <linearGradient id="php-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1E2038" />
        <stop offset="100%" stopColor="#141828" />
      </linearGradient>
      <linearGradient id="php-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EEEAF4" />
        <stop offset="100%" stopColor="#E2DEEE" />
      </linearGradient>
      <filter id="php-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#php-bg)" />

    {/* PHP elephant badge */}
    <g filter="url(#php-shadow)" transform="translate(150,20)">
      <ellipse cx="90" cy="90" rx="80" ry="80" fill="url(#php-dark)" />
      <ellipse cx="90" cy="90" rx="68" ry="68" fill="#282A48" opacity="0.5" />
      <text x="90" y="82" fontSize="20" fontWeight="900" fill="#7080C8" fontFamily="monospace" textAnchor="middle">&lt;?php</text>
      <text x="90" y="104" fontSize="11" fill="#A8A8C8" fontFamily="monospace" textAnchor="middle">Laravel</text>
    </g>

    {/* Code file left */}
    <g filter="url(#php-shadow)" transform="translate(22,22)">
      <rect width="110" height="160" rx="12" fill="url(#php-dark)" />
      <polygon points="110,12 114,16 114,168 110,164" fill="#0C0E1C" />
      <polygon points="12,160 16,164 114,164 110,160" fill="#080A14" />
      <rect x="12" y="12" width="86" height="10" rx="4" fill="#282A48" />
      {[
        [12,'#6878C8',50],[26,'#9870B0',80],[26,'#78A868',55],
        [40,'#C88870',40],[40,'#6878C8',70],[54,'#9870B0',45],
        [68,'#78A868',90],[68,'#C88870',35],[82,'#6878C8',60],
        [96,'#9870B0',75],[110,'#78A868',50],[124,'#C88870',65],
      ].map(([y,c,w],i)=>(
        <rect key={i} x={14+(i%3)*4} y={y} width={w} height="5" rx="2" fill={c} opacity="0.8" />
      ))}
    </g>

    {/* MVC structure card */}
    <g filter="url(#php-shadow)" transform="translate(344,22)">
      <rect width="114" height="160" rx="12" fill="url(#php-card)" />
      <polygon points="114,12 118,16 118,168 114,164" fill="#C8C4D8" />
      <polygon points="12,160 16,164 118,164 114,160" fill="#C0BCCC" />
      <rect x="12" y="12" width="60" height="5" rx="2" fill="#9090B8" />
      {['Controller','Model','View','Migration','Seeder','Request','Policy'].map((c,i)=>(
        <g key={c}>
          <rect x="12" y={24+i*20} width="90" height="14" rx="4" fill={i%2===0?'#DDD8F0':'#E8E4F8'} />
          <text x="18" y={35+i*20} fontSize="7" fill="#484870" fontFamily="Inter,sans-serif" fontWeight="600">{c}</text>
        </g>
      ))}
    </g>

    {/* Stats */}
    {[['Laravel','Framework'],['100+','Projects'],['99.9%','Uptime']].map(([v,l],i)=>(
      <g key={l} filter="url(#php-shadow)" transform={`translate(${22+i*154},200)`}>
        <rect width="134" height="52" rx="10" fill="url(#php-dark)" />
        <polygon points="134,10 138,14 138,58 134,54" fill="#0C0E1C" />
        <polygon points="10,52 14,56 138,56 134,52" fill="#080A14" />
        <text x="14" y="22" fontSize="7" fill="#505878" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="42" fontSize={v.length>5?14:18} fontWeight="900" fill="#A8A8D8" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}

    <g filter="url(#php-shadow)" transform="translate(22,268)">
      <rect width="436" height="50" rx="12" fill="url(#php-card)" />
      <polygon points="436,12 440,16 440,58 436,54" fill="#C8C4D8" />
      <polygon points="12,50 16,54 440,54 436,50" fill="#C0BCCC" />
      {['Laravel','CodeIgniter','MySQL','Redis','REST API','OWASP'].map((t,i)=>(
        <g key={t}>
          <rect x={12+i*73} y={10} width={63} height={28} rx="6" fill="#E0DCF4" />
          <text x={43+i*73} y={28} fontSize="8" fill="#404070" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{t}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function PHPDevelopment() {
  return (
    <ServicePage
      badge="PHP Web Development"
      headline={<>Robust PHP Solutions<br /><em>Scalable & Secure.</em></>}
      description="Custom PHP web development — from dynamic websites to complex enterprise applications built on proven frameworks."
      cta1={{ label: 'Start Your Project →', to: '/contact' }}
      cta2={{ label: 'View Portfolio', to: '/portfolio' }}
      heroVisual={<PHPVisual />}
      heroMetrics={[
        { icon: '🖥️', val: '100+', label: 'PHP Projects Delivered' },
        { icon: '🔒', val: 'OWASP', label: 'Security Standard' },
        { icon: '⚡', val: '<1.5s', label: 'Server Response Time' },
      ]}
      stats={[
        { val: '100+', label: 'PHP Projects Delivered' },
        { val: 'Laravel', label: 'Primary Framework' },
        { val: '99.9%', label: 'Uptime Guaranteed' },
        { val: '95%', label: 'Client Retention' },
      ]}
      delivers={[
        { icon: '◎', title: 'Laravel Development', desc: 'Enterprise-grade applications using Laravel — elegant syntax, robust features, clean architecture.' },
        { icon: '✦', title: 'CodeIgniter Apps', desc: 'Lightweight, fast PHP applications for projects where simplicity and speed matter.' },
        { icon: '◈', title: 'Custom CMS', desc: 'Bespoke content management systems tailored to your exact workflow and content needs.' },
        { icon: '◆', title: 'API Development', desc: 'RESTful APIs and backend services that power your web and mobile applications.' },
        { icon: '⬡', title: 'Database Design', desc: 'Optimised MySQL/PostgreSQL schemas with indexing strategies for high-performance queries.' },
        { icon: '❋', title: 'Legacy Migration', desc: 'Upgrade old PHP codebases to modern frameworks with zero data loss and minimal downtime.' },
      ]}
      why={[
        { title: 'Framework Experts', body: 'Our PHP developers are certified in Laravel and have shipped 100+ production applications.' },
        { title: 'Security First', body: 'Every app is built following OWASP top 10 guidelines — SQL injection, XSS, and CSRF protected by default.' },
        { title: 'Scalable Architecture', body: 'We design systems that handle growth — from 100 to 1 million users without a rebuild.' },
        { title: 'Clean Code Guarantee', body: 'Documented, testable, maintainable code you can hand to any developer and they will understand it.' },
      ]}
      faqs={[
        { q: 'Which PHP frameworks do you work with?', a: 'We primarily use Laravel, with experience in CodeIgniter, Symfony, and custom PHP MVC architectures.' },
        { q: 'Can you migrate our old PHP site to Laravel?', a: 'Yes — we handle full migrations including database restructuring, feature parity, and performance improvements.' },
        { q: 'How do you ensure security in PHP apps?', a: 'We follow OWASP guidelines, use parameterised queries, implement CSP headers, and conduct code audits.' },
        { q: 'Do you provide ongoing PHP support?', a: 'Yes, we offer monthly retainers for maintenance, updates, and new feature development.' },
      ]}
    />
  )
}
