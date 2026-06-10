import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Services.css'

/* ─── 3D SVG Illustrations per service ─── */
const SeoIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-seo-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#C8C4BE"/><stop offset="100%" stopColor="#B8B4AE"/>
      </linearGradient>
      <linearGradient id="seo-card-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#D8D4CE"/><stop offset="100%" stopColor="#C0BCB6"/>
      </linearGradient>
      <linearGradient id="seo-dark-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#5A5854"/><stop offset="100%" stopColor="#3A3836"/>
      </linearGradient>
      <filter id="svc-sh"><feDropShadow dx="2" dy="6" stdDeviation="10" floodColor="#00000040"/></filter>
      <filter id="seo-inner-shadow"><feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#00000030"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-seo-bg)"/>
    {/* 3D podium — isometric box */}
    <polygon points="120,185 200,210 280,185 200,160" fill="#A8A49E"/>
    <polygon points="120,145 120,185 200,210 200,170" fill="#908C86"/>
    <polygon points="280,145 280,185 200,210 200,170" fill="#B8B4AE"/>
    <polygon points="120,145 200,170 280,145 200,120" fill="#C8C4BE"/>
    {/* podium edge highlight */}
    <line x1="120" y1="145" x2="200" y2="120" stroke="#D0CCC6" strokeWidth="1"/>
    <line x1="200" y1="120" x2="280" y2="145" stroke="#D0CCC6" strokeWidth="1"/>
    {/* Floating rank card — 3D box style */}
    <g filter="url(#svc-sh)" transform="translate(44,22)">
      {/* card depth sides */}
      <polygon points="130,6 136,12 136,102 130,96" fill="#A8A49E"/>
      <polygon points="6,96 12,102 136,102 130,96" fill="#989490"/>
      {/* card face */}
      <rect width="130" height="96" rx="10" fill="url(#seo-card-top)"/>
      <rect x="0" y="0" width="130" height="1" rx="1" fill="rgba(255,255,255,0.4)"/>
      <rect x="12" y="14" width="70" height="6" rx="3" fill="#908C86"/>
      {['#1','#2','#3'].map((r,i)=>(
        <g key={r}>
          <rect x="12" y={30+i*18} width="80" height="6" rx="3" fill="#C4C0BA"/>
          <rect x="100" y={28+i*18} width="22" height="10" rx="4" fill={i===0?'#5A5854':'#7A7870'}/>
          <text x={i===0?105:104} y={37+i*18} fontSize="7" fill="#D8D4CE" fontFamily="Inter,sans-serif" fontWeight="800">{r}</text>
        </g>
      ))}
    </g>
    {/* Floating traffic chart — 3D box style */}
    <g filter="url(#svc-sh)" transform="translate(216,14)">
      <polygon points="140,6 146,12 146,102 140,96" fill="#A8A49E"/>
      <polygon points="6,96 12,102 146,102 140,96" fill="#989490"/>
      <rect width="140" height="96" rx="10" fill="url(#seo-card-top)"/>
      <rect x="0" y="0" width="140" height="1" rx="1" fill="rgba(255,255,255,0.4)"/>
      <rect x="12" y="14" width="60" height="5" rx="2" fill="#908C86"/>
      {[18,26,22,36,30,46,40,58].map((h,i)=>(
        <g key={i}>
          <polygon points={`${12+i*14},${80-h*0.85} ${12+i*14+10},${80-h*0.85} ${12+i*14+14},${76-h*0.85} ${12+i*14+4},${76-h*0.85}`} fill={i>=6?'#7A7870':'#D0CCC6'}/>
          <rect x={12+i*14} y={80-h*0.85} width="10" height={h*0.85} rx="1" fill={i>=6?'#5A5854':'#B0ACA6'}/>
        </g>
      ))}
    </g>
    {/* Bottom stat bar — 3D box style */}
    <g filter="url(#svc-sh)" transform="translate(44,168)">
      <polygon points="300,8 306,14 306,66 300,60" fill="#282624"/>
      <polygon points="8,60 14,66 306,66 300,60" fill="#201E1C"/>
      <rect width="300" height="60" rx="10" fill="url(#seo-dark-top)"/>
      <rect x="0" y="0" width="300" height="1" rx="1" fill="rgba(255,255,255,0.15)"/>
      <text x="20" y="28" fontSize="8" fill="#908C86" fontFamily="Inter,sans-serif">Organic Traffic</text>
      <text x="20" y="50" fontSize="18" fontWeight="900" fill="#C8C4BE" fontFamily="Inter,sans-serif">+184%</text>
      <text x="170" y="28" fontSize="8" fill="#908C86" fontFamily="Inter,sans-serif">Page 1 Keywords</text>
      <text x="170" y="50" fontSize="18" fontWeight="900" fill="#C8C4BE" fontFamily="Inter,sans-serif">47</text>
    </g>
  </svg>
)

const WebIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-web-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#B8BCC4"/><stop offset="100%" stopColor="#A4A8B0"/>
      </linearGradient>
      <linearGradient id="web-mon-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#C4C8D0"/><stop offset="100%" stopColor="#A0A4AC"/>
      </linearGradient>
      <linearGradient id="web-badge-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#D0CCC6"/><stop offset="100%" stopColor="#B8B4AE"/>
      </linearGradient>
      <filter id="svc-web-sh"><feDropShadow dx="2" dy="6" stdDeviation="10" floodColor="#00000040"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-web-bg)"/>
    {/* 3D monitor box — isometric */}
    <polygon points="78,48 78,212 200,244 200,80" fill="#8A8E96"/>
    <polygon points="200,80 200,244 322,212 322,48" fill="#A4A8B0"/>
    <polygon points="78,48 200,80 322,48 200,16" fill="url(#web-mon-top)"/>
    {/* top edge highlight */}
    <line x1="78" y1="48" x2="200" y2="16" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
    <line x1="200" y1="16" x2="322" y2="48" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
    {/* Screen */}
    <rect x="94" y="62" width="194" height="138" rx="4" fill="#242C36"/>
    <rect x="94" y="62" width="194" height="22" rx="4" fill="#1A2230"/>
    <circle cx="107" cy="73" r="3" fill="#404C5A" opacity="0.8"/>
    <circle cx="117" cy="73" r="3" fill="#404C5A" opacity="0.65"/>
    <circle cx="127" cy="73" r="3" fill="#404C5A" opacity="0.5"/>
    <rect x="102" y="93" width="80" height="7" rx="3" fill="#374450"/>
    <rect x="102" y="105" width="120" height="5" rx="2" fill="#2C3840"/>
    <rect x="102" y="115" width="46" height="10" rx="5" fill="#404C58"/>
    {[0,1,2].map(i=>(
      <g key={i}>
        {/* card with 3D depth */}
        <polygon points={`${103+i*62+52},${137+2} ${103+i*62+56},${137+6} ${103+i*62+56},${137+44} ${103+i*62+52},${137+40}`} fill="#1E2830"/>
        <rect x={103+i*62} y="137" width="52" height="40" rx="4" fill="#2E3C48"/>
        <rect x={109+i*62} y="145" width="20" height="5" rx="2" fill="#3A4A58"/>
        <rect x={109+i*62} y="154" width="34" height="4" rx="2" fill="#303E4A"/>
        <rect x={109+i*62} y="162" width="28" height="4" rx="2" fill="#303E4A"/>
      </g>
    ))}
    {/* Speed badge — 3D box */}
    <g filter="url(#svc-web-sh)" transform="translate(236,166)">
      <polygon points="92,8 98,14 98,60 92,54" fill="#989490"/>
      <polygon points="8,54 14,60 98,60 92,54" fill="#888480"/>
      <rect width="92" height="54" rx="9" fill="url(#web-badge-top)"/>
      <rect x="0" y="0" width="92" height="1" rx="1" fill="rgba(255,255,255,0.4)"/>
      <text x="13" y="26" fontSize="7" fill="#908C86" fontFamily="Inter,sans-serif">PageSpeed</text>
      <text x="13" y="46" fontSize="18" fontWeight="900" fill="#4A4844" fontFamily="Inter,sans-serif">98+</text>
    </g>
  </svg>
)

const PpcIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-ppc-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#B4B0AA"/><stop offset="100%" stopColor="#A4A09A"/>
      </linearGradient>
      <linearGradient id="ppc-dark-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#545250"/><stop offset="100%" stopColor="#343230"/>
      </linearGradient>
      <filter id="svc-ppc-sh"><feDropShadow dx="2" dy="6" stdDeviation="10" floodColor="#00000040"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-ppc-bg)"/>
    {/* 3D isometric bar chart */}
    {[{h:40,x:56},{h:65,x:106},{h:52,x:156},{h:82,x:206},{h:70,x:256},{h:100,x:306}].map(({h,x},i)=>(
      <g key={i}>
        {/* front face */}
        <rect x={x} y={160-h} width={28} height={h} fill={i>=4?'#5A5654':'#A8A49E'}/>
        {/* right face */}
        <polygon points={`${x+28},${160-h} ${x+36},${152-h} ${x+36},152 ${x+28},160`} fill={i>=4?'#484644':'#929090'}/>
        {/* top face */}
        <polygon points={`${x},${160-h} ${x+8},${152-h} ${x+36},${152-h} ${x+28},${160-h}`} fill={i>=4?'#6A6664':'#C0BCB6'}/>
        {/* top edge highlight */}
        <line x1={x} y1={160-h} x2={x+8} y2={152-h} stroke="rgba(255,255,255,0.25)" strokeWidth="0.8"/>
        <line x1={x+8} y1={152-h} x2={x+36} y2={152-h} stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
      </g>
    ))}
    {/* floor shadow */}
    <ellipse cx="196" cy="162" rx="160" ry="8" fill="rgba(0,0,0,0.08)"/>
    {/* ROAS stat bar — 3D box */}
    <g filter="url(#svc-ppc-sh)" transform="translate(38,172)">
      <polygon points="312,8 318,14 318,66 312,60" fill="#242220"/>
      <polygon points="8,60 14,66 318,66 312,60" fill="#1C1A18"/>
      <rect width="312" height="60" rx="10" fill="url(#ppc-dark-top)"/>
      <rect x="0" y="0" width="312" height="1" rx="1" fill="rgba(255,255,255,0.15)"/>
      <text x="20" y="28" fontSize="8" fill="#807C78" fontFamily="Inter,sans-serif">Avg. ROAS</text>
      <text x="20" y="50" fontSize="18" fontWeight="900" fill="#B8B4AE" fontFamily="Inter,sans-serif">4.8x</text>
      <text x="160" y="28" fontSize="8" fill="#807C78" fontFamily="Inter,sans-serif">CPA Reduction</text>
      <text x="160" y="50" fontSize="18" fontWeight="900" fill="#B8B4AE" fontFamily="Inter,sans-serif">62%</text>
    </g>
  </svg>
)

const SmmIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-smm-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#B0B4BC"/><stop offset="100%" stopColor="#A0A4AC"/>
      </linearGradient>
      <linearGradient id="smm-phone-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#B4B8C0"/><stop offset="100%" stopColor="#909498"/>
      </linearGradient>
      <linearGradient id="smm-dark-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#484654"/><stop offset="100%" stopColor="#302E3A"/>
      </linearGradient>
      <linearGradient id="smm-light-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#C8C4BE"/><stop offset="100%" stopColor="#B0ACA6"/>
      </linearGradient>
      <filter id="svc-smm-sh"><feDropShadow dx="2" dy="6" stdDeviation="10" floodColor="#00000040"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-smm-bg)"/>
    {/* 3D phone — isometric */}
    <polygon points="118,28 118,222 180,244 180,50" fill="#888C94"/>
    <polygon points="180,50 180,244 242,222 242,28" fill="#9CA0A8"/>
    <polygon points="118,28 180,50 242,28 180,6" fill="url(#smm-phone-top)"/>
    <line x1="118" y1="28" x2="180" y2="6" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
    <line x1="180" y1="6" x2="242" y2="28" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
    <rect x="128" y="44" width="100" height="172" rx="3" fill="#20283A"/>
    {[0,1,2].map(i=>(
      <g key={i}>
        <rect x="134" y={52+i*54} width="88" height="46" rx="4" fill="#2C3448"/>
        <circle cx="145" cy={63+i*54} r="6" fill="#3C4456"/>
        <rect x="156" y={59+i*54} width="48" height="4" rx="2" fill="#3C4456"/>
        <rect x="156" y={66+i*54} width="32" height="3" rx="1" fill="#303848"/>
        <rect x="134" y={73+i*54} width="88" height="18" rx="2" fill="#303848"/>
      </g>
    ))}
    {/* Engagement card — 3D dark */}
    <g filter="url(#svc-smm-sh)" transform="translate(258,36)">
      <polygon points="112,8 118,14 118,80 112,74" fill="#201E28"/>
      <polygon points="8,74 14,80 118,80 112,74" fill="#181620"/>
      <rect width="112" height="74" rx="10" fill="url(#smm-dark-card)"/>
      <rect x="0" y="0" width="112" height="1" rx="1" fill="rgba(255,255,255,0.15)"/>
      <rect x="12" y="14" width="55" height="5" rx="2" fill="#4A4858"/>
      <text x="12" y="50" fontSize="22" fontWeight="900" fill="#A8ACBE" fontFamily="Inter,sans-serif">3.8x</text>
      <rect x="12" y="56" width="60" height="4" rx="2" fill="#3A3848"/>
    </g>
    {/* Reach card — 3D light */}
    <g filter="url(#svc-smm-sh)" transform="translate(258,124)">
      <polygon points="112,8 118,14 118,80 112,74" fill="#989490"/>
      <polygon points="8,74 14,80 118,80 112,74" fill="#888480"/>
      <rect width="112" height="74" rx="10" fill="url(#smm-light-card)"/>
      <rect x="0" y="0" width="112" height="1" rx="1" fill="rgba(255,255,255,0.4)"/>
      <rect x="12" y="14" width="55" height="5" rx="2" fill="#908C86"/>
      <text x="12" y="52" fontSize="20" fontWeight="900" fill="#484644" fontFamily="Inter,sans-serif">+310%</text>
      <rect x="12" y="58" width="70" height="4" rx="2" fill="#A0A09A"/>
    </g>
  </svg>
)

const ContentIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-ct-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#B8B4AE"/><stop offset="100%" stopColor="#A8A49E"/>
      </linearGradient>
      <linearGradient id="ct-dark-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#525050"/><stop offset="100%" stopColor="#323030"/>
      </linearGradient>
      <filter id="svc-ct-sh"><feDropShadow dx="2" dy="6" stdDeviation="10" floodColor="#00000040"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-ct-bg)"/>
    {/* 3D document stack — each layer is a proper isometric box */}
    {[3,2,1,0].map(i=>(
      <g key={i} transform={`translate(${i*8},${i*7})`}>
        {/* left face */}
        <polygon points={`78,${58} 78,${196} 90,${208} 90,${70}`} fill={`rgba(100,96,90,${0.4+i*0.15})`}/>
        {/* right face */}
        <polygon points={`236,${76} 236,${214} 248,${202} 248,${64}`} fill={`rgba(120,116,110,${0.4+i*0.15})`}/>
        {/* top face */}
        <polygon points={`78,${58} 90,${70} 248,${64} 236,${52}`} fill={`rgba(180,176,170,${0.45+i*0.15})`}/>
        {/* document face */}
        <rect x={90} y={70} width={146} height={138} rx="2" fill={i===3?'#D8D4CE':'#C8C4BE'} opacity={0.75+i*0.07}/>
        {/* top edge highlight */}
        <line x1={90} y1={70} x2={236} y2={70} stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
        <rect x={100} y={86+i} width={100} height={6} rx="3" fill="#909090" opacity={0.5+i*0.12}/>
        <rect x={100} y={98+i} width={120} height={4} rx="2" fill="#B0AEA8" opacity={0.45+i*0.1}/>
        <rect x={100} y={108+i} width={90} height={4} rx="2" fill="#B0AEA8" opacity={0.4+i*0.1}/>
        <rect x={100} y={118+i} width={110} height={4} rx="2" fill="#B0AEA8" opacity={0.35+i*0.1}/>
      </g>
    ))}
    {/* Stats bar — 3D box */}
    <g filter="url(#svc-ct-sh)" transform="translate(44,186)">
      <polygon points="308,8 314,14 314,66 308,60" fill="#242220"/>
      <polygon points="8,60 14,66 314,66 308,60" fill="#1C1A18"/>
      <rect width="308" height="60" rx="10" fill="url(#ct-dark-top)"/>
      <rect x="0" y="0" width="308" height="1" rx="1" fill="rgba(255,255,255,0.15)"/>
      <text x="20" y="28" fontSize="8" fill="#787674" fontFamily="Inter,sans-serif">Inbound Leads</text>
      <text x="20" y="50" fontSize="18" fontWeight="900" fill="#B0ACA6" fontFamily="Inter,sans-serif">+240%</text>
      <text x="170" y="28" fontSize="8" fill="#787674" fontFamily="Inter,sans-serif">Subscribers</text>
      <text x="170" y="50" fontSize="18" fontWeight="900" fill="#B0ACA6" fontFamily="Inter,sans-serif">8,000</text>
    </g>
  </svg>
)

const AiIllustration = () => (
  <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    <defs>
      <linearGradient id="svc-ai-bg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#A8ACBA"/><stop offset="100%" stopColor="#989CAA"/>
      </linearGradient>
      <linearGradient id="ai-core-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#484C5A"/><stop offset="100%" stopColor="#2C3040"/>
      </linearGradient>
      <linearGradient id="ai-stat-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4A4E60"/><stop offset="100%" stopColor="#2C3044"/>
      </linearGradient>
      <filter id="svc-ai-sh"><feDropShadow dx="2" dy="6" stdDeviation="10" floodColor="#00000040"/></filter>
    </defs>
    <rect width="400" height="260" fill="url(#svc-ai-bg)"/>
    {/* 3D hex prism core */}
    {/* bottom face */}
    <polygon points="200,144 168,126 168,144 200,162 232,144 232,126" fill="#242838"/>
    {/* left face */}
    <polygon points="168,108 168,126 200,144 200,126" fill="#3A3E50"/>
    {/* right face */}
    <polygon points="232,108 232,126 200,144 200,126" fill="#444858"/>
    {/* top hex face */}
    <polygon points="200,96 168,114 200,132 232,114" fill="url(#ai-core-top)"/>
    <line x1="200" y1="96" x2="168" y2="114" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
    <line x1="200" y1="96" x2="232" y2="114" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
    {/* Core circle on top face */}
    <circle cx="200" cy="114" r="16" fill="#343848"/>
    <text x="200" y="111" fontSize="8" fill="#8A90A8" fontFamily="Inter,sans-serif" fontWeight="900" textAnchor="middle">AI</text>
    <text x="200" y="121" fontSize="5" fill="#585E78" fontFamily="Inter,sans-serif" textAnchor="middle">ENGINE</text>
    {/* Node connections and 3D diamonds */}
    {[
      {cx:200,cy:44,l:'CRM'},{cx:272,cy:80,l:'Email'},
      {cx:272,cy:150,l:'Ads'},{cx:200,cy:186,l:'Chat'},
      {cx:128,cy:150,l:'Data'},{cx:128,cy:80,l:'AI'},
    ].map(({cx,cy,l})=>(
      <g key={l}>
        <line x1="200" y1="114" x2={cx} y2={cy} stroke="#7A8098" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
        {/* 3D diamond node */}
        <polygon points={`${cx},${cy-12} ${cx+10},${cy-4} ${cx},${cy+4} ${cx-10},${cy-4}`} fill="#B4B8C8"/>
        <polygon points={`${cx-10},${cy-4} ${cx},${cy+4} ${cx-6},${cy+10} ${cx-16},${cy+2}`} fill="#9094A8"/>
        <polygon points={`${cx+10},${cy-4} ${cx},${cy+4} ${cx+6},${cy+10} ${cx+16},${cy+2}`} fill="#A4A8B8"/>
        <line x1={cx-10} y1={cy-4} x2={cx} y2={cy-12} stroke="rgba(255,255,255,0.25)" strokeWidth="0.8"/>
        <text x={cx} y={cy+2} fontSize="6" fill="#484C60" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{l}</text>
      </g>
    ))}
    {/* Bottom stats — 3D box */}
    <g filter="url(#svc-ai-sh)" transform="translate(38,194)">
      <polygon points="322,8 328,14 328,58 322,52" fill="#1A1C28"/>
      <polygon points="8,52 14,58 328,58 322,52" fill="#141620"/>
      <rect width="322" height="52" rx="10" fill="url(#ai-stat-top)"/>
      <rect x="0" y="0" width="322" height="1" rx="1" fill="rgba(255,255,255,0.15)"/>
      <text x="20" y="24" fontSize="7" fill="#545870" fontFamily="Inter,sans-serif">Tasks Automated</text>
      <text x="20" y="42" fontSize="16" fontWeight="900" fill="#9498B0" fontFamily="Inter,sans-serif">70%</text>
      <text x="142" y="24" fontSize="7" fill="#545870" fontFamily="Inter,sans-serif">Faster Ops</text>
      <text x="142" y="42" fontSize="16" fontWeight="900" fill="#9498B0" fontFamily="Inter,sans-serif">10X</text>
      <text x="238" y="24" fontSize="7" fill="#545870" fontFamily="Inter,sans-serif">Avg ROI</text>
      <text x="238" y="42" fontSize="16" fontWeight="900" fill="#9498B0" fontFamily="Inter,sans-serif">3.5X</text>
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
