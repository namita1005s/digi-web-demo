import ServicePage from '../components/ServicePage/ServicePage'

const NodeVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="nd-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#D8E0D8" />
        <stop offset="100%" stopColor="#C8D4C8" />
      </linearGradient>
      <linearGradient id="nd-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#182818" />
        <stop offset="100%" stopColor="#0E1E0E" />
      </linearGradient>
      <linearGradient id="nd-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#E8F0E8" />
        <stop offset="100%" stopColor="#DCE8DC" />
      </linearGradient>
      <filter id="nd-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#nd-bg)" />

    {/* Hexagonal Node logo */}
    <g transform="translate(170,20)">
      <polygon points="80,0 160,46 160,138 80,184 0,138 0,46" fill="url(#nd-dark)" opacity="0.9" />
      <polygon points="80,12 148,52 148,130 80,170 12,130 12,52" fill="#1E3A1E" opacity="0.5" />
      <text x="80" y="102" fontSize="13" fontWeight="900" fill="#6ABF6A" fontFamily="Inter,sans-serif" textAnchor="middle">node.js</text>
    </g>

    {/* Terminal left */}
    <g filter="url(#nd-shadow)" transform="translate(24,24)">
      <rect width="130" height="160" rx="12" fill="url(#nd-dark)" />
      <polygon points="130,12 134,16 134,168 130,164" fill="#060E06" />
      <polygon points="12,160 16,164 134,164 130,160" fill="#040C04" />
      <rect x="12" y="12" width="106" height="12" rx="4" fill="#1E3A1E" />
      <circle cx="20" cy="18" r="3" fill="#6ABF6A" opacity="0.5" />
      <circle cx="30" cy="18" r="3" fill="#A0A040" opacity="0.5" />
      <circle cx="40" cy="18" r="3" fill="#BF6A6A" opacity="0.5" />
      {['$ node server.js','  Listening :3000','  GET /api/users','  POST /api/auth','  WS connected','  DB pool: 10','  [INFO] Ready'].map((line,i)=>(
        <text key={i} x="14" y={36+i*18} fontSize="7" fill={i===0?'#6ABF6A':i===3||i===4?'#A0C0A0':'#608060'}
          fontFamily="monospace">{line}</text>
      ))}
    </g>

    {/* Performance card */}
    <g filter="url(#nd-shadow)" transform="translate(326,24)">
      <rect width="130" height="100" rx="12" fill="url(#nd-dark)" />
      <polygon points="130,12 134,16 134,108 130,104" fill="#060E06" />
      <polygon points="12,100 16,104 134,104 130,100" fill="#040C04" />
      <rect x="12" y="12" width="60" height="5" rx="2" fill="#406040" />
      <text x="12" y="52" fontSize="24" fontWeight="900" fill="#C0E0C0" fontFamily="Inter,sans-serif">10k+</text>
      <rect x="12" y="58" width="80" height="4" rx="2" fill="#406040" />
      <text x="12" y="80" fontSize="8" fill="#6A906A" fontFamily="Inter,sans-serif">req/sec handled</text>
    </g>

    {/* WS real-time card */}
    <g filter="url(#nd-shadow)" transform="translate(326,140)">
      <rect width="130" height="72" rx="12" fill="url(#nd-card)" />
      <polygon points="130,12 134,16 134,80 130,76" fill="#C0D0C0" />
      <polygon points="12,72 16,76 134,76 130,72" fill="#B8C8B8" />
      <rect x="12" y="12" width="60" height="5" rx="2" fill="#6A906A" />
      <text x="12" y="50" fontSize="18" fontWeight="900" fill="#2A502A" fontFamily="Inter,sans-serif">⚡ Real-time</text>
      <rect x="12" y="58" width="80" height="4" rx="2" fill="#A0B8A0" />
    </g>

    {/* Tech row */}
    <g filter="url(#nd-shadow)" transform="translate(24,200)`">
    </g>
    {[['10k+','req/sec'],['70+','Projects'],['Real-time','WS Support']].map(([v,l],i)=>(
      <g key={l} filter="url(#nd-shadow)" transform={`translate(${24+i*154},202)`}>
        <rect width="134" height="52" rx="10" fill="url(#nd-dark)" />
        <polygon points="134,10 138,14 138,58 134,54" fill="#060E06" />
        <polygon points="10,52 14,56 138,56 134,52" fill="#040C04" />
        <text x="14" y="22" fontSize="7" fill="#406040" fontFamily="Inter,sans-serif">{l}</text>
        <text x="14" y="42" fontSize={v.length>5?13:18} fontWeight="900" fill="#A0D0A0" fontFamily="Inter,sans-serif">{v}</text>
      </g>
    ))}

    <g filter="url(#nd-shadow)" transform="translate(24,270)">
      <rect width="432" height="50" rx="12" fill="url(#nd-card)" />
      <polygon points="432,12 436,16 436,58 432,54" fill="#C0D0C0" />
      <polygon points="12,50 16,54 436,54 432,50" fill="#B8C8B8" />
      {['Express.js','NestJS','Socket.IO','GraphQL','MongoDB','PostgreSQL'].map((t,i)=>(
        <g key={t}>
          <rect x={12+i*72} y={10} width={62} height={28} rx="6" fill="#D4EAD4" />
          <text x={43+i*72} y={28} fontSize="8" fill="#2A5028" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{t}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function NodejsDevelopment() {
  return (
    <ServicePage
      badge="Node.js Development"
      headline={<>Fast, Scalable Backends<br /><em>Powered by Node.js.</em></>}
      description="High-performance Node.js applications and APIs — real-time, event-driven, and built to handle massive scale."
      cta1={{ label: 'Build With Node.js →', to: '/contact' }}
      cta2={{ label: 'View Portfolio', to: '/portfolio' }}
      heroVisual={<NodeVisual />}
      heroMetrics={[
        { icon: '⚡', val: '10k+', label: 'Req/sec Handled' },
        { icon: '🔄', val: 'Real-time', label: 'WebSocket Support' },
        { icon: '☁️', val: 'Cloud', label: 'Native Deployments' },
      ]}
      stats={[
        { val: '10k+', label: 'Requests/sec Capacity' },
        { val: '70+', label: 'Node.js Projects Shipped' },
        { val: 'Real-time', label: 'WebSocket & Socket.IO' },
        { val: '95%', label: 'Client Retention' },
      ]}
      delivers={[
        { icon: '◎', title: 'Express.js APIs', desc: 'Lightweight, fast RESTful APIs using Express — perfect for microservices and mobile backends.' },
        { icon: '✦', title: 'NestJS Applications', desc: 'Structured, scalable Node.js apps using NestJS with TypeScript, dependency injection, and modularity.' },
        { icon: '◈', title: 'Real-time Apps', desc: 'Live chat, notifications, and dashboards powered by Socket.IO and WebSocket connections.' },
        { icon: '◆', title: 'GraphQL APIs', desc: 'Flexible data querying with Apollo Server and GraphQL — efficient for complex data relationships.' },
        { icon: '⬡', title: 'Microservices', desc: 'Event-driven microservices architecture using Node.js, RabbitMQ, and Docker containers.' },
        { icon: '❋', title: 'Serverless Functions', desc: 'AWS Lambda and Vercel Edge Functions written in Node.js for cost-effective, auto-scaling backends.' },
      ]}
      why={[
        { title: 'Non-Blocking Performance', body: "Node.js's event-driven architecture handles thousands of concurrent connections with minimal resources." },
        { title: 'Full JavaScript Stack', body: 'Using Node.js on the backend means one language across the entire stack — faster development, fewer context switches.' },
        { title: 'Real-time Specialisation', body: 'We have deep experience building real-time features — live chat, collaborative tools, and live dashboards.' },
        { title: 'Cloud Native', body: 'Every Node.js app we build is containerised, CI/CD ready, and deployable to AWS, GCP, or Vercel.' },
      ]}
      faqs={[
        { q: 'Is Node.js good for enterprise apps?', a: 'Yes — companies like LinkedIn, Netflix, and Uber use Node.js at massive scale for performance-critical systems.' },
        { q: 'Do you use TypeScript with Node.js?', a: 'Always. TypeScript is our default for all Node.js projects — it improves maintainability and catches bugs early.' },
        { q: 'Can Node.js handle real-time features?', a: 'It excels at real-time — WebSocket connections, live notifications, and event streaming are native strengths.' },
        { q: 'What databases do you use with Node.js?', a: 'MongoDB, PostgreSQL, MySQL, and Redis — chosen based on your data model and access patterns.' },
      ]}
    />
  )
}
