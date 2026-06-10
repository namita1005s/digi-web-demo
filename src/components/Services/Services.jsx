import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Services.css'

/* ─── 3D SVG Illustrations per service ─── */
const SeoIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-seo-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E6E2DC"/><stop offset="100%" stopColor="#D8D4CE"/>
      </linearGradient>
      <filter id="svc-sh"><feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#00000020"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-seo-bg)"/>
    {/* 3D podium */}
    <polygon points="120,180 200,210 280,180 200,150" fill="#C4BEB6"/>
    <polygon points="120,140 120,180 200,210 200,170" fill="#B4AEA6"/>
    <polygon points="280,140 280,180 200,210 200,170" fill="#CCC6BE"/>
    <polygon points="120,140 200,170 280,140 200,110" fill="#D8D2CA"/>
    {/* Floating rank card */}
    <g filter="url(#svc-sh)" transform="translate(50,30)">
      <rect width="130" height="90" rx="12" fill="#F0ECE6"/>
      <polygon points="130,12 134,16 134,98 130,94" fill="#D8D4CE"/>
      <polygon points="12,90 16,94 134,94 130,90" fill="#CCC8C2"/>
      <rect x="12" y="14" width="70" height="6" rx="3" fill="#8A8880"/>
      {['#1','#2','#3'].map((r,i)=>(
        <g key={r}>
          <rect x="12" y={30+i*18} width="80" height="6" rx="3" fill="#D4D0CA"/>
          <rect x="100" y={28+i*18} width="22" height="10" rx="4" fill={i===0?'#6A6560':'#9A9690'}/>
          <text x={i===0?105:104} y={37+i*18} fontSize="7" fill="#EEE9E2" fontFamily="Inter,sans-serif" fontWeight="800">{r}</text>
        </g>
      ))}
    </g>
    {/* Floating traffic chart */}
    <g filter="url(#svc-sh)" transform="translate(220,20)">
      <rect width="140" height="90" rx="12" fill="#F0ECE6"/>
      <polygon points="140,12 144,16 144,98 140,94" fill="#D8D4CE"/>
      <polygon points="12,90 16,94 144,94 140,90" fill="#CCC8C2"/>
      <rect x="12" y="14" width="60" height="5" rx="2" fill="#8A8880"/>
      {[18,26,22,36,30,46,40,58].map((h,i)=>(
        <rect key={i} x={12+i*14} y={80-h*0.85} width="10" height={h*0.85} rx="2" fill={i>=6?'#6A6560':'#C4C0BA'}/>
      ))}
    </g>
    {/* Bottom stat bar */}
    <g filter="url(#svc-sh)" transform="translate(50,170)">
      <rect width="300" height="52" rx="12" fill="#3E3C38"/>
      <polygon points="300,12 304,16 304,60 300,56" fill="#282624"/>
      <polygon points="12,52 16,56 304,56 300,52" fill="#201E1C"/>
      <text x="20" y="28" fontSize="8" fill="#8A8880" fontFamily="Inter,sans-serif">Organic Traffic</text>
      <text x="20" y="46" fontSize="18" fontWeight="900" fill="#E8E4DE" fontFamily="Inter,sans-serif">+184%</text>
      <text x="180" y="28" fontSize="8" fill="#8A8880" fontFamily="Inter,sans-serif">Page 1 Keywords</text>
      <text x="180" y="46" fontSize="18" fontWeight="900" fill="#E8E4DE" fontFamily="Inter,sans-serif">47</text>
    </g>
  </svg>
)

const WebIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-web-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#DDE0E6"/><stop offset="100%" stopColor="#CDD2DA"/>
      </linearGradient>
      <filter id="svc-web-sh"><feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#00000020"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-web-bg)"/>
    {/* 3D monitor */}
    <polygon points="80,50 80,210 200,240 200,80" fill="#A8B0BA"/>
    <polygon points="200,80 200,240 320,210 320,50" fill="#C0C8D2"/>
    <polygon points="80,50 200,80 320,50 200,20" fill="#D0D8E2"/>
    {/* Screen */}
    <rect x="96" y="64" width="192" height="136" rx="4" fill="#2C3844"/>
    <rect x="96" y="64" width="192" height="20" rx="4" fill="#222C38"/>
    <circle cx="108" cy="74" r="3" fill="#5A6878" opacity="0.6"/>
    <circle cx="118" cy="74" r="3" fill="#5A6878" opacity="0.5"/>
    <circle cx="128" cy="74" r="3" fill="#5A6878" opacity="0.4"/>
    <rect x="104" y="94" width="80" height="7" rx="3" fill="#4A5868"/>
    <rect x="104" y="106" width="120" height="5" rx="2" fill="#3A4858"/>
    <rect x="104" y="116" width="46" height="10" rx="5" fill="#5A6878"/>
    {[0,1,2].map(i=>(
      <g key={i}>
        <rect x={104+i*62} y="138" width="52" height="38" rx="5" fill="#364858"/>
        <rect x={110+i*62} y="146" width="20" height="5" rx="2" fill="#4A5A6A"/>
        <rect x={110+i*62} y="155" width="34" height="4" rx="2" fill="#3E4E5E"/>
        <rect x={110+i*62} y="163" width="28" height="4" rx="2" fill="#3E4E5E"/>
      </g>
    ))}
    {/* Speed badge */}
    <g filter="url(#svc-web-sh)" transform="translate(240,170)">
      <rect width="90" height="50" rx="10" fill="#F0ECE6"/>
      <polygon points="90,10 94,14 94,56 90,52" fill="#D8D4CE"/>
      <polygon points="10,50 14,54 94,54 90,50" fill="#CCC8C2"/>
      <text x="14" y="24" fontSize="7" fill="#8A8880" fontFamily="Inter,sans-serif">PageSpeed</text>
      <text x="14" y="40" fontSize="16" fontWeight="900" fill="#3C4850" fontFamily="Inter,sans-serif">98+</text>
    </g>
  </svg>
)

const PpcIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-ppc-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E2DEDA"/><stop offset="100%" stopColor="#D2CEC8"/>
      </linearGradient>
      <filter id="svc-ppc-sh"><feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#00000020"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-ppc-bg)"/>
    {/* 3D chart bars isometric */}
    {[{h:40,x:60},{h:65,x:110},{h:52,x:160},{h:82,x:210},{h:70,x:260},{h:100,x:310}].map(({h,x},i)=>(
      <g key={i}>
        <polygon points={`${x},${160-h} ${x+28},${160-h} ${x+28},160 ${x},160`} fill={i>=4?'#6A6460':'#C8C4BE'}/>
        <polygon points={`${x+28},${160-h} ${x+36},${152-h} ${x+36},152 ${x+28},160`} fill={i>=4?'#58504C':'#B8B4AE'}/>
        <polygon points={`${x},${160-h} ${x+8},${152-h} ${x+36},${152-h} ${x+28},${160-h}`} fill={i>=4?'#7A7470':'#D8D4CE'}/>
      </g>
    ))}
    {/* ROAS card */}
    <g filter="url(#svc-ppc-sh)" transform="translate(40,170)">
      <rect width="310" height="54" rx="12" fill="#3E3C38"/>
      <polygon points="310,12 314,16 314,62 310,58" fill="#282624"/>
      <polygon points="12,54 16,58 314,58 310,54" fill="#201E1C"/>
      <text x="20" y="28" fontSize="8" fill="#8A8880" fontFamily="Inter,sans-serif">Avg. ROAS</text>
      <text x="20" y="46" fontSize="18" fontWeight="900" fill="#E8E4DE" fontFamily="Inter,sans-serif">4.8x</text>
      <text x="160" y="28" fontSize="8" fill="#8A8880" fontFamily="Inter,sans-serif">CPA Reduction</text>
      <text x="160" y="46" fontSize="18" fontWeight="900" fill="#E8E4DE" fontFamily="Inter,sans-serif">62%</text>
    </g>
  </svg>
)

const SmmIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-smm-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#DDE0E8"/><stop offset="100%" stopColor="#CDD0DC"/>
      </linearGradient>
      <filter id="svc-smm-sh"><feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#00000020"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-smm-bg)"/>
    {/* 3D phone */}
    <polygon points="120,30 120,220 180,240 180,50" fill="#A8AEBA"/>
    <polygon points="180,50 180,240 240,220 240,30" fill="#B8C0CC"/>
    <polygon points="120,30 180,50 240,30 180,10" fill="#C8D0DC"/>
    <rect x="130" y="46" width="98" height="168" rx="3" fill="#2A3040"/>
    {[0,1,2].map(i=>(
      <g key={i}>
        <rect x="136" y={54+i*52} width="86" height="44" rx="4" fill="#38404E"/>
        <circle cx="147" cy={64+i*52} r="6" fill="#505868"/>
        <rect x="158" y={60+i*52} width="48" height="4" rx="2" fill="#505868"/>
        <rect x="158" y={67+i*52} width="32" height="3" rx="1" fill="#404858"/>
        <rect x="136" y={75+i*52} width="86" height="18" rx="2" fill="#404858"/>
      </g>
    ))}
    {/* Engagement card */}
    <g filter="url(#svc-smm-sh)" transform="translate(260,40)">
      <rect width="110" height="70" rx="12" fill="#3E3C4A"/>
      <polygon points="110,12 114,16 114,78 110,74" fill="#28262E"/>
      <polygon points="12,70 16,74 114,74 110,70" fill="#201E26"/>
      <rect x="12" y="12" width="55" height="5" rx="2" fill="#5A5870"/>
      <text x="12" y="46" fontSize="22" fontWeight="900" fill="#C8CCE0" fontFamily="Inter,sans-serif">3.8x</text>
      <rect x="12" y="52" width="60" height="4" rx="2" fill="#4A4860"/>
    </g>
    <g filter="url(#svc-smm-sh)" transform="translate(260,126)">
      <rect width="110" height="70" rx="12" fill="#F0ECE6"/>
      <polygon points="110,12 114,16 114,78 110,74" fill="#D8D4CE"/>
      <polygon points="12,70 16,74 114,74 110,70" fill="#CCC8C2"/>
      <rect x="12" y="12" width="55" height="5" rx="2" fill="#8A8880"/>
      <text x="12" y="48" fontSize="20" fontWeight="900" fill="#3A3C4A" fontFamily="Inter,sans-serif">+310%</text>
      <rect x="12" y="54" width="70" height="4" rx="2" fill="#B0AEA8"/>
    </g>
  </svg>
)

const ContentIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-ct-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E2E0DA"/><stop offset="100%" stopColor="#D2D0CA"/>
      </linearGradient>
      <filter id="svc-ct-sh"><feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#00000020"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-ct-bg)"/>
    {/* 3D document stack */}
    {[3,2,1,0].map(i=>(
      <g key={i} transform={`translate(${i*6},${i*6})`}>
        <polygon points={`80,${60+i*2} 80,${200+i*2} 240,${220+i*2} 240,${80+i*2}`} fill="#B8B4AE" opacity={0.5+i*0.15}/>
        <polygon points={`240,${80+i*2} 240,${220+i*2} 320,${200+i*2} 320,${60+i*2}`} fill="#C8C4BE" opacity={0.5+i*0.15}/>
        <polygon points={`80,${60+i*2} 240,${80+i*2} 320,${60+i*2} 160,${40+i*2}`} fill="#D8D4CE" opacity={0.5+i*0.15}/>
        <rect x={90} y={76+i*2} width={140} height={118} rx="3" fill={i===3?'#F2EEE8':'#E8E4DE'} opacity={0.8+i*0.05}/>
        <rect x={100} y={88+i*2} width={100} height={6} rx="3" fill="#A8A49E" opacity={0.6+i*0.1}/>
        <rect x={100} y={100+i*2} width={120} height={4} rx="2" fill="#C4C0BA" opacity={0.5+i*0.1}/>
        <rect x={100} y={110+i*2} width={90} height={4} rx="2" fill="#C4C0BA" opacity={0.4+i*0.1}/>
      </g>
    ))}
    {/* Stats bottom */}
    <g filter="url(#svc-ct-sh)" transform="translate(50,190)">
      <rect width="300" height="52" rx="12" fill="#3E3C38"/>
      <polygon points="300,12 304,16 304,60 300,56" fill="#282624"/>
      <polygon points="12,52 16,56 304,56 300,52" fill="#201E1C"/>
      <text x="20" y="28" fontSize="8" fill="#8A8880" fontFamily="Inter,sans-serif">Inbound Leads</text>
      <text x="20" y="46" fontSize="18" fontWeight="900" fill="#E8E4DE" fontFamily="Inter,sans-serif">+240%</text>
      <text x="170" y="28" fontSize="8" fill="#8A8880" fontFamily="Inter,sans-serif">Subscribers</text>
      <text x="170" y="46" fontSize="18" fontWeight="900" fill="#E8E4DE" fontFamily="Inter,sans-serif">8,000</text>
    </g>
  </svg>
)

const AiIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-ai-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#D8DCE4"/><stop offset="100%" stopColor="#C8CCD8"/>
      </linearGradient>
      <filter id="svc-ai-sh"><feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#00000020"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-ai-bg)"/>
    {/* 3D hex core */}
    <polygon points="200,100 168,118 168,136 200,118 232,136 232,118" fill="#A8AEBF"/>
    <polygon points="168,118 168,136 200,154 200,136" fill="#989EB0"/>
    <polygon points="232,118 232,136 200,154 200,136" fill="#B0B6C8"/>
    <circle cx="200" cy="120" r="18" fill="#3A3E50"/>
    <text x="200" y="117" fontSize="8" fill="#9ABAC8" fontFamily="Inter,sans-serif" fontWeight="900" textAnchor="middle">AI</text>
    <text x="200" y="127" fontSize="5" fill="#6A7090" fontFamily="Inter,sans-serif" textAnchor="middle">ENGINE</text>
    {/* Nodes */}
    {[
      {cx:200,cy:50,l:'CRM'},{cx:270,cy:85,l:'Email'},
      {cx:270,cy:155,l:'Ads'},{cx:200,cy:190,l:'Chat'},
      {cx:130,cy:155,l:'Data'},{cx:130,cy:85,l:'AI'},
    ].map(({cx,cy,l})=>(
      <g key={l}>
        <line x1="200" y1="120" x2={cx} y2={cy} stroke="#9AA2B8" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
        <polygon points={`${cx-10},${cy-5} ${cx},${cy-10} ${cx+10},${cy-5} ${cx},${cy}`} fill="#C0C8D8"/>
        <polygon points={`${cx-10},${cy-5} ${cx-10},${cy+5} ${cx},${cy+10} ${cx},${cy}`} fill="#A0A8B8"/>
        <polygon points={`${cx+10},${cy-5} ${cx+10},${cy+5} ${cx},${cy+10} ${cx},${cy}`} fill="#B0B8C8"/>
        <text x={cx} y={cy+4} fontSize="6" fill="#5A6080" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{l}</text>
      </g>
    ))}
    {/* Bottom stats */}
    <g filter="url(#svc-ai-sh)" transform="translate(40,196)">
      <rect width="320" height="48" rx="12" fill="#3A3E50"/>
      <polygon points="320,12 324,16 324,56 320,52" fill="#22263A"/>
      <polygon points="12,48 16,52 324,52 320,48" fill="#1A1E30"/>
      <text x="20" y="26" fontSize="7" fill="#5A6080" fontFamily="Inter,sans-serif">Tasks Automated</text>
      <text x="20" y="40" fontSize="16" fontWeight="900" fill="#C8D0E0" fontFamily="Inter,sans-serif">70%</text>
      <text x="145" y="26" fontSize="7" fill="#5A6080" fontFamily="Inter,sans-serif">Faster Ops</text>
      <text x="145" y="40" fontSize="16" fontWeight="900" fill="#C8D0E0" fontFamily="Inter,sans-serif">10X</text>
      <text x="240" y="26" fontSize="7" fill="#5A6080" fontFamily="Inter,sans-serif">Avg ROI</text>
      <text x="240" y="40" fontSize="16" fontWeight="900" fill="#C8D0E0" fontFamily="Inter,sans-serif">3.5X</text>
    </g>
  </svg>
)

const illustrations = {
  seo: SeoIllustration,
  web: WebIllustration,
  ppc: PpcIllustration,
  smm: SmmIllustration,
  content: ContentIllustration,
  ai: AiIllustration,
}

const services = [
  {
    id: 'seo',
    label: 'SEO',
    metric: { value: '+184%', label: 'Organic Traffic Growth' },
    challenge: 'Buried on page 3+ for all high-intent keywords. Organic traffic plateaued at 4K/month with no growth trajectory.',
    solution: 'Deep technical audit, site architecture restructure, 200+ backlinks, and a topic-cluster content strategy targeting commercial-intent queries.',
    results: ['184% increase in organic traffic', '47 keywords on Page 1 of Google', '3.2x growth in leads from organic search'],
  },
  {
    id: 'web',
    label: 'Web Development',
    metric: { value: '+60%', label: 'Conversion Rate Lift' },
    challenge: '78% bounce rate, 6.4s load time, and unclear CTAs costing thousands in lost signups monthly.',
    solution: 'Full rebuild in React — sub-2s load, A/B-tested landing pages, and conversion-optimised funnel pages.',
    results: ['60% conversion rate improvement', 'Lighthouse score: 34 → 94', '41% bounce rate reduction in 30 days'],
  },
  {
    id: 'ppc',
    label: 'Performance Marketing',
    metric: { value: '+4.8x', label: 'Return on Ad Spend' },
    challenge: '1.2x ROAS with broad targeting and no creative testing. The account was entirely reactive.',
    solution: 'Rebuilt Google & Meta infrastructure with campaign tiers, dynamic product ads, creative rotation, and attribution modeling.',
    results: ['4.8x ROAS within 60 days', 'CPA dropped by 62%', 'Paid revenue grew 3.1x YoY'],
  },
  {
    id: 'smm',
    label: 'Social Media Marketing',
    metric: { value: '+310%', label: 'Engagement Growth' },
    challenge: '12K followers, near-zero engagement. Content was inconsistent and failing to convert.',
    solution: 'Social identity playbook, Reels-first strategy, creator partnerships, and engagement cadence across Instagram & TikTok.',
    results: ['310% engagement growth', 'Followers: 12K → 68K organically', '22% of monthly revenue from social'],
  },
  {
    id: 'content',
    label: 'Content Marketing',
    metric: { value: '+240%', label: 'Inbound Lead Growth' },
    challenge: 'Zero content presence. No inbound pipeline, no thought leadership, no search footprint.',
    solution: 'Editorial calendar, 60+ long-form articles, 12 whitepapers, and a weekly newsletter grown to 8,000 subscribers.',
    results: ['240% growth in inbound demos', '8,000 newsletter subscribers', 'Domain authority: 14 → 41'],
  },
  {
    id: 'ai',
    label: 'AI Automation',
    metric: { value: '-68%', label: 'Operational Cost Reduction' },
    challenge: "Manual reporting and repetitive tasks consuming 40+ hrs/week, limiting the team's growth capacity.",
    solution: 'AI reporting dashboards, automated nurture sequences, GPT content workflows, and full CRM automation.',
    results: ['68% less time on manual ops', 'Reporting: 6 hrs → 20 mins', 'Capacity to take on 3x more clients'],
  },
]

export default function Services() {
  const [active, setActive] = useState('seo')
  const navigate = useNavigate()
  const current = services.find(s => s.id === active)

  return (
    <section className="section svc-explorer" id="services">
      <div className="container">

        <div className="svc-explorer__head">
          <span className="section-tag">What We Offer</span>
          <h1 className="svc-explorer__title">
            Our <em>Services</em>
          </h1>
          <p className="svc-explorer__sub">
            Full-service digital marketing solutions tailored to grow your business online.
          </p>
        </div>

        <div className="svc-pills">
          {services.map(s => (
            <button
              key={s.id}
              className={`svc-pill${active === s.id ? ' svc-pill--active' : ''}`}
              onClick={() => setActive(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="svc-panel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="svc-panel__left">
              <div className="svc-metric">
                <span className="svc-metric__value">{current.metric.value}</span>
                <span className="svc-metric__label">{current.metric.label}</span>
              </div>

              <div className="svc-block">
                <h4 className="svc-block__title">
                  <span className="svc-block__icon svc-block__icon--challenge">⚠</span>
                  The Challenge
                </h4>
                <p>{current.challenge}</p>
              </div>

              <div className="svc-block">
                <h4 className="svc-block__title">
                  <span className="svc-block__icon svc-block__icon--solution">◎</span>
                  The Solution
                </h4>
                <p>{current.solution}</p>
              </div>

              <div className="svc-block">
                <h4 className="svc-block__title">
                  <span className="svc-block__icon svc-block__icon--results">✦</span>
                  The Results
                </h4>
                <ul className="svc-results">
                  {current.results.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <button className="svc-cta" onClick={() => navigate('/contact')}>
                Get Similar Results →
              </button>
            </div>

            <div className="svc-panel__right">
              <div className="svc-img-wrap">
                {(() => { const Illus = illustrations[current.id]; return <Illus /> })()}
                <div className="svc-img-badge">
                  <span className="svc-img-badge__value">{current.metric.value}</span>
                  <span className="svc-img-badge__label">{current.metric.label}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
