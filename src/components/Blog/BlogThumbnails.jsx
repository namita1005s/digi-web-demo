/* 3D isometric SVG thumbnails for blog cards — muted dull color palette */

const defs = (id, c1, c2) => (
  <defs>
    <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="400" y2="220" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor={c1} /><stop offset="100%" stopColor={c2} />
    </linearGradient>
    <filter id={`sh-${id}`}><feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#00000020"/></filter>
  </defs>
)

/* 1 — SEO / Technical (magnifying glass + rank bars) */
export const Thumb1 = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    {defs('1','#E4E0DA','#D4D0CA')}
    <rect width="400" height="220" fill="url(#bg-1)"/>
    {/* 3D podium base */}
    <polygon points="100,160 200,185 300,160 200,135" fill="#C0BAB2"/>
    <polygon points="100,130 100,160 200,185 200,155" fill="#B0AAA2"/>
    <polygon points="300,130 300,160 200,185 200,155" fill="#C8C2BA"/>
    {/* bars */}
    {[{h:40,x:120},{h:60,x:155},{h:50,x:190},{h:80,x:225},{h:65,x:260}].map(({h,x},i)=>(
      <g key={i}>
        <polygon points={`${x},${135-h} ${x+22},${135-h} ${x+22},135 ${x},135`} fill={i>=3?'#6A6460':'#C4BEB8'}/>
        <polygon points={`${x+22},${135-h} ${x+30},${127-h} ${x+30},127 ${x+22},135`} fill={i>=3?'#58504C':'#B0AAA4'}/>
        <polygon points={`${x},${135-h} ${x+8},${127-h} ${x+30},${127-h} ${x+22},${135-h}`} fill={i>=3?'#7A7470':'#D4CEC8'}/>
      </g>
    ))}
    {/* magnifier */}
    <g filter="url(#sh-1)" transform="translate(280,20)">
      <rect width="100" height="80" rx="12" fill="#F0EDE8"/>
      <polygon points="100,12 104,16 104,88 100,84" fill="#D8D4CE"/>
      <polygon points="12,80 16,84 104,84 100,80" fill="#CCC8C2"/>
      <circle cx="44" cy="38" r="18" stroke="#8A8880" strokeWidth="4" fill="none"/>
      <line x1="57" y1="51" x2="72" y2="66" stroke="#8A8880" strokeWidth="4" strokeLinecap="round"/>
    </g>
    {/* stat pill */}
    <g filter="url(#sh-1)" transform="translate(20,160)">
      <rect width="120" height="40" rx="10" fill="#3E3C38"/>
      <text x="14" y="18" fontSize="7" fill="#8A8880" fontFamily="Inter,sans-serif">Organic Traffic</text>
      <text x="14" y="32" fontSize="13" fontWeight="900" fill="#E8E4DE" fontFamily="Inter,sans-serif">+184%</text>
    </g>
  </svg>
)

/* 2 — PPC / Ads (coins + chart) */
export const Thumb2 = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    {defs('2','#E2DEDA','#D2CEC8')}
    <rect width="400" height="220" fill="url(#bg-2)"/>
    {/* 3D coin stack */}
    {[4,3,2,1,0].map(i=>(
      <g key={i}>
        <ellipse cx="120" cy={160-i*14} rx="48" ry="14" fill={i===0?'#D8D2C8':'#C8C2B8'}/>
        <path d={`M72,${160-i*14} L72,${168-i*14} Q72,${176-i*14} 120,${176-i*14} Q168,${176-i*14} 168,${168-i*14} L168,${160-i*14}`} fill={i===0?'#B8B2A8':'#A8A29A'}/>
        <ellipse cx="120" cy={168-i*14} rx="48" ry="14" fill={i===0?'#C8C2B8':'#B8B2A8'}/>
        {i===0 && <text x="120" y="173" fontSize="10" fontWeight="900" fill="#8A8880" textAnchor="middle" fontFamily="Inter,sans-serif">$</text>}
      </g>
    ))}
    {/* ROAS card */}
    <g filter="url(#sh-2)" transform="translate(200,30)">
      <rect width="160" height="100" rx="14" fill="#3E3C38"/>
      <polygon points="160,14 164,18 164,108 160,104" fill="#28261C"/>
      <polygon points="14,100 18,104 164,104 160,100" fill="#201E18"/>
      <text x="16" y="32" fontSize="8" fill="#7A7870" fontFamily="Inter,sans-serif">Return on Ad Spend</text>
      <text x="16" y="72" fontSize="34" fontWeight="900" fill="#E8E4DE" fontFamily="Inter,sans-serif">4.8x</text>
      <text x="16" y="88" fontSize="7" fill="#5A5850" fontFamily="Inter,sans-serif">within 60 days</text>
    </g>
    {/* sparkline */}
    <g filter="url(#sh-2)" transform="translate(200,146)">
      <rect width="160" height="48" rx="10" fill="#F0EDE8"/>
      <polygon points="160,10 164,14 164,54 160,50" fill="#D8D4CE"/>
      <polygon points="10,48 14,52 164,52 160,48" fill="#CCC8C2"/>
      <polyline points="14,36 34,30 54,28 74,20 94,16 114,10 134,8 154,4" stroke="#8A8880" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </g>
  </svg>
)

/* 3 — Web Design / UX (wireframe tablet) */
export const Thumb3 = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    {defs('3','#DDD8D2','#CDCCC6')}
    <rect width="400" height="220" fill="url(#bg-3)"/>
    {/* 3D tablet */}
    <polygon points="60,50 60,180 190,205 190,75" fill="#B0AAA2"/>
    <polygon points="190,75 190,205 320,180 320,50" fill="#C8C2BA"/>
    <polygon points="60,50 190,75 320,50 190,25" fill="#D8D4CC"/>
    {/* screen */}
    <rect x="76" y="62" width="228" height="122" rx="4" fill="#EAE6E0"/>
    {/* wireframe content */}
    <rect x="88" y="74" width="90" height="8" rx="3" fill="#B8B4AC"/>
    <rect x="88" y="88" width="120" height="5" rx="2" fill="#C8C4BC"/>
    <rect x="88" y="98" width="80" height="5" rx="2" fill="#C8C4BC"/>
    <rect x="88" y="112" width="200" height="34" rx="5" fill="#D0CCC4"/>
    <rect x="98" y="120" width="60" height="7" rx="3" fill="#B0AAA2"/>
    <rect x="98" y="131" width="100" height="5" rx="2" fill="#C0BAB2"/>
    {[0,1,2].map(i=>(
      <g key={i}>
        <rect x={88+i*70} y="156" width="60" height="20" rx="4" fill="#C8C2BA"/>
        <rect x={94+i*70} y="162" width="30" height="4" rx="2" fill="#B0AAA2"/>
      </g>
    ))}
    {/* CRO badge */}
    <g filter="url(#sh-3)" transform="translate(296,54)">
      <rect width="84" height="54" rx="10" fill="#3E3C38"/>
      <polygon points="84,10 88,14 88,60 84,56" fill="#28261C"/>
      <polygon points="10,54 14,58 88,58 84,54" fill="#201E18"/>
      <text x="12" y="26" fontSize="7" fill="#7A7870" fontFamily="Inter,sans-serif">Conversion</text>
      <text x="12" y="44" fontSize="16" fontWeight="900" fill="#E8E4DE" fontFamily="Inter,sans-serif">+67%</text>
    </g>
  </svg>
)

/* 4 — Social Media (phone + engagement) */
export const Thumb4 = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    {defs('4','#DDE0E8','#CDD2DC')}
    <rect width="400" height="220" fill="url(#bg-4)"/>
    {/* 3D phone isometric */}
    <polygon points="100,20 100,190 155,210 155,40" fill="#A8AEBA"/>
    <polygon points="155,40 155,210 210,190 210,20" fill="#B8C0CC"/>
    <polygon points="100,20 155,40 210,20 155,0" fill="#C8D0DC"/>
    <rect x="108" y="34" width="94" height="148" rx="3" fill="#2A3040"/>
    {/* feed posts */}
    {[0,1,2].map(i=>(
      <g key={i}>
        <rect x="112" y={42+i*46} width="86" height="38" rx="3" fill="#38404E"/>
        <circle cx="122" cy={52+i*46} r="6" fill="#505868"/>
        <rect x="132" y={48+i*46} width="48" height="4" rx="2" fill="#505868"/>
        <rect x="132" y={56+i*46} width="32" height="3" rx="1" fill="#404858"/>
        <rect x="112" y={63+i*46} width="86" height="12" rx="2" fill="#404858"/>
      </g>
    ))}
    {/* analytics card */}
    <g filter="url(#sh-4)" transform="translate(228,20)">
      <rect width="148" height="86" rx="12" fill="#F0EDE8"/>
      <polygon points="148,12 152,16 152,94 148,90" fill="#D8D4CE"/>
      <polygon points="12,86 16,90 152,90 148,86" fill="#CCC8C2"/>
      <text x="14" y="28" fontSize="7" fill="#8A8880" fontFamily="Inter,sans-serif">Follower Growth</text>
      <text x="14" y="56" fontSize="24" fontWeight="900" fill="#3A3C4A" fontFamily="Inter,sans-serif">+310%</text>
      <polyline points="14,76 34,70 54,66 74,56 94,50 114,42 134,34" stroke="#8A8880" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </g>
    {/* engagement pill */}
    <g filter="url(#sh-4)" transform="translate(228,122)">
      <rect width="148" height="54" rx="12" fill="#3A3C4A"/>
      <polygon points="148,12 152,16 152,62 148,58" fill="#22242E"/>
      <polygon points="12,54 16,58 152,58 148,54" fill="#1A1C26"/>
      <text x="14" y="28" fontSize="7" fill="#5A5C70" fontFamily="Inter,sans-serif">Engagement Rate</text>
      <text x="14" y="46" fontSize="18" fontWeight="900" fill="#C8CCE0" fontFamily="Inter,sans-serif">3.8x</text>
    </g>
  </svg>
)

/* 5 — Strategy / Funnel */
export const Thumb5 = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    {defs('5','#DAD8D2','#CACAC0')}
    <rect width="400" height="220" fill="url(#bg-5)"/>
    {/* 3D funnel stages */}
    {[
      {y:20,w:200,label:'Awareness',fi:'#7A7870'},
      {y:66,w:150,label:'Interest',fi:'#8A8880'},
      {y:108,w:108,label:'Consideration',fi:'#9A9890'},
      {y:146,w:72,label:'Conversion',fi:'#5A5850'},
    ].map(({y,w,label,fi},i)=>{
      const cx=200, lx=cx-w/2
      return (
        <g key={i}>
          <polygon points={`${lx},${y} ${lx+w},${y} ${lx+w+10},${y-6} ${lx+10},${y-6}`} fill="#C8C4BC" opacity="0.7"/>
          <polygon points={`${lx+w},${y} ${lx+w},${y+36} ${lx+w+10},${y+30} ${lx+w+10},${y-6}`} fill="#B8B4AC" opacity="0.7"/>
          <rect x={lx} y={y} width={w} height={36} fill={fi} opacity="0.85"/>
          <text x={cx} y={y+22} fontSize="8" fill="#F0EDE8" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{label}</text>
        </g>
      )
    })}
    {/* result bar */}
    <g filter="url(#sh-5)" transform="translate(20,176)">
      <rect width="355" height="36" rx="10" fill="#3E3C38"/>
      <text x="14" y="14" fontSize="6" fill="#7A7870" fontFamily="Inter,sans-serif">Lead Growth</text>
      <text x="14" y="28" fontSize="12" fontWeight="900" fill="#E8E4DE" fontFamily="Inter,sans-serif">+320%</text>
      <text x="130" y="14" fontSize="6" fill="#7A7870" fontFamily="Inter,sans-serif">Avg ROAS</text>
      <text x="130" y="28" fontSize="12" fontWeight="900" fill="#E8E4DE" fontFamily="Inter,sans-serif">4.2x</text>
      <text x="240" y="14" fontSize="6" fill="#7A7870" fontFamily="Inter,sans-serif">Channels</text>
      <text x="240" y="28" fontSize="12" fontWeight="900" fill="#E8E4DE" fontFamily="Inter,sans-serif">6+</text>
    </g>
  </svg>
)

/* 6 — Web Development / Code */
export const Thumb6 = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    {defs('6','#DCE0E6','#CCD0D8')}
    <rect width="400" height="220" fill="url(#bg-6)"/>
    {/* 3D monitor */}
    <polygon points="60,36 60,170 190,196 190,62" fill="#A8B0BA"/>
    <polygon points="190,62 190,196 320,170 320,36" fill="#B8C0CA"/>
    <polygon points="60,36 190,62 320,36 190,10" fill="#C8D0D8"/>
    <rect x="74" y="48" width="232" height="118" rx="4" fill="#1E2C38"/>
    <rect x="74" y="48" width="232" height="18" rx="4" fill="#162230"/>
    <circle cx="86" cy="57" r="3" fill="#3C5060" opacity="0.7"/>
    <circle cx="96" cy="57" r="3" fill="#3C5060" opacity="0.5"/>
    <circle cx="106" cy="57" r="3" fill="#3C5060" opacity="0.4"/>
    {[0,1,2,3,4,5,6].map(i=>(
      <g key={i}>
        <rect x="86" y={74+i*12} width="4" height="6" rx="1" fill="#3C5060"/>
        <rect x="96" y={74+i*12} width={[28,44,20,50,36,24,40][i]} height="6" rx="2" fill={['#7A9AA8','#6A8A98','#5A7A88'][i%3]} opacity="0.7"/>
      </g>
    ))}
    <rect x="86" y="162" width="2" height="10" rx="1" fill="#9ABAC8" opacity="0.9"/>
    {/* speed card */}
    <g filter="url(#sh-6)" transform="translate(290,50)">
      <rect width="90" height="58" rx="10" fill="#3A4850"/>
      <polygon points="90,10 94,14 94,64 90,60" fill="#22303A"/>
      <polygon points="10,58 14,62 94,62 90,58" fill="#1A2830"/>
      <text x="12" y="24" fontSize="7" fill="#6A8090" fontFamily="Inter,sans-serif">PageSpeed</text>
      <text x="12" y="46" fontSize="20" fontWeight="900" fill="#C0CED8" fontFamily="Inter,sans-serif">98+</text>
    </g>
  </svg>
)

/* 7 — Local SEO (map pin + location) */
export const Thumb7 = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    {defs('7','#E4E0DA','#D4D0CA')}
    <rect width="400" height="220" fill="url(#bg-7)"/>
    {/* 3D map base */}
    <polygon points="60,100 200,130 340,100 200,70" fill="#C8C2BA"/>
    <polygon points="60,70 60,100 200,130 200,100" fill="#B8B2A8"/>
    <polygon points="340,70 340,100 200,130 200,100" fill="#D0CAC0"/>
    <polygon points="60,70 200,100 340,70 200,40" fill="#DED8D0"/>
    {/* grid lines on map */}
    {[0,1,2].map(i=>(
      <line key={i} x1={100+i*80} y1="45" x2={80+i*80} y2="125" stroke="#C8C2B8" strokeWidth="0.8" opacity="0.6"/>
    ))}
    {[0,1,2].map(i=>(
      <line key={i} x1="60" y1={60+i*20} x2="340" y2={60+i*20} stroke="#C8C2B8" strokeWidth="0.8" opacity="0.4"/>
    ))}
    {/* pin */}
    <g filter="url(#sh-7)" transform="translate(170,10)">
      <circle cx="30" cy="30" r="20" fill="#6A6460"/>
      <circle cx="30" cy="30" r="10" fill="#F0EDE8"/>
      <line x1="30" y1="50" x2="30" y2="72" stroke="#6A6460" strokeWidth="3" strokeLinecap="round"/>
    </g>
    {/* stat cards */}
    <g filter="url(#sh-7)" transform="translate(20,148)">
      <rect width="110" height="52" rx="10" fill="#3E3C38"/>
      <text x="12" y="22" fontSize="7" fill="#8A8880" fontFamily="Inter,sans-serif">Maps Pack</text>
      <text x="12" y="40" fontSize="14" fontWeight="900" fill="#E8E4DE" fontFamily="Inter,sans-serif">Top 3</text>
    </g>
    <g filter="url(#sh-7)" transform="translate(144,148)">
      <rect width="110" height="52" rx="10" fill="#F0EDE8"/>
      <polygon points="110,10 114,14 114,58 110,54" fill="#D8D4CE"/>
      <polygon points="10,52 14,56 114,56 110,52" fill="#CCC8C2"/>
      <text x="12" y="22" fontSize="7" fill="#8A8880" fontFamily="Inter,sans-serif">Local Traffic</text>
      <text x="12" y="40" fontSize="14" fontWeight="900" fill="#3E3C38" fontFamily="Inter,sans-serif">+220%</text>
    </g>
    <g filter="url(#sh-7)" transform="translate(268,148)">
      <rect width="110" height="52" rx="10" fill="#3E3C38"/>
      <text x="12" y="22" fontSize="7" fill="#8A8880" fontFamily="Inter,sans-serif">Avg Rating</text>
      <text x="12" y="40" fontSize="14" fontWeight="900" fill="#E8E4DE" fontFamily="Inter,sans-serif">4.9 ★</text>
    </g>
  </svg>
)

/* 8 — Meta vs Google / Ad platforms */
export const Thumb8 = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    {defs('8','#E2DEDA','#D2CEC8')}
    <rect width="400" height="220" fill="url(#bg-8)"/>
    {/* VS layout — two 3D cards */}
    <g filter="url(#sh-8)" transform="translate(20,20)">
      <rect width="160" height="160" rx="14" fill="#F0EDE8"/>
      <polygon points="160,14 164,18 164,172 160,168" fill="#D8D4CE"/>
      <polygon points="14,160 18,164 164,164 160,160" fill="#CCC8C2"/>
      <text x="16" y="36" fontSize="9" fill="#8A8880" fontFamily="Inter,sans-serif" fontWeight="700">Google Ads</text>
      <text x="16" y="52" fontSize="7" fill="#A8A49C" fontFamily="Inter,sans-serif">High intent search</text>
      {[['ROAS','4.5x'],['CPA drop','62%'],['Conv rate','8.4%']].map(([l,v],i)=>(
        <g key={l}>
          <rect x="16" y={68+i*28} width="128" height="20" rx="5" fill="#E8E4DE"/>
          <text x="24" y={82+i*28} fontSize="7" fill="#8A8880" fontFamily="Inter,sans-serif">{l}</text>
          <text x="110" y={82+i*28} fontSize="8" fontWeight="800" fill="#4A4840" fontFamily="Inter,sans-serif">{v}</text>
        </g>
      ))}
    </g>
    {/* VS badge */}
    <g transform="translate(182,86)">
      <circle cx="18" cy="18" r="18" fill="#6A6460"/>
      <text x="18" y="23" fontSize="9" fontWeight="900" fill="#F0EDE8" textAnchor="middle" fontFamily="Inter,sans-serif">VS</text>
    </g>
    <g filter="url(#sh-8)" transform="translate(220,20)">
      <rect width="160" height="160" rx="14" fill="#3A3C48"/>
      <polygon points="160,14 164,18 164,172 160,168" fill="#22242E"/>
      <polygon points="14,160 18,164 164,164 160,160" fill="#1A1C26"/>
      <text x="16" y="36" fontSize="9" fill="#9A9CB0" fontFamily="Inter,sans-serif" fontWeight="700">Meta Ads</text>
      <text x="16" y="52" fontSize="7" fill="#6A6C80" fontFamily="Inter,sans-serif">Discovery & reach</text>
      {[['ROAS','3.2x'],['CPM','₹48'],['Reach','2.4M']].map(([l,v],i)=>(
        <g key={l}>
          <rect x="16" y={68+i*28} width="128" height="20" rx="5" fill="#2A2C3A"/>
          <text x="24" y={82+i*28} fontSize="7" fill="#6A6C80" fontFamily="Inter,sans-serif">{l}</text>
          <text x="110" y={82+i*28} fontSize="8" fontWeight="800" fill="#C8CCE0" fontFamily="Inter,sans-serif">{v}</text>
        </g>
      ))}
    </g>
    {/* bottom bar */}
    <g filter="url(#sh-8)" transform="translate(20,192)">
      <rect width="360" height="20" rx="6" fill="#6A6460" opacity="0.3"/>
      <text x="180" y="14" fontSize="7" fill="#6A6460" fontFamily="Inter,sans-serif" textAnchor="middle" fontWeight="700">Run both for full-funnel coverage</text>
    </g>
  </svg>
)

/* 9 — Branding / Brand Strategy */
export const Thumb9 = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
    {defs('9','#E0DDD8','#D0CEC8')}
    <rect width="400" height="220" fill="url(#bg-9)"/>
    {/* 3D brand pyramid */}
    {[
      {y:160,w:240,fill:'#7A7870',label:'Audience'},
      {y:122,w:180,fill:'#8A8880',label:'Voice'},
      {y:88,w:128,fill:'#9A9890',label:'Positioning'},
      {y:58,w:80,fill:'#5A5850',label:'Purpose'},
    ].map(({y,w,fill,label},i)=>{
      const cx=200
      return (
        <g key={i}>
          <polygon points={`${cx-w/2},${y} ${cx+w/2},${y} ${cx+w/2+8},${y-6} ${cx-w/2+8},${y-6}`} fill="#C0BAB2" opacity="0.6"/>
          <polygon points={`${cx+w/2},${y} ${cx+w/2},${y+30} ${cx+w/2+8},${y+24} ${cx+w/2+8},${y-6}`} fill="#B0AAA2" opacity="0.6"/>
          <rect x={cx-w/2} y={y} width={w} height={30} fill={fill} opacity="0.9"/>
          <text x={cx} y={y+19} fontSize="8" fill="#F0EDE8" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{label}</text>
        </g>
      )
    })}
    {/* result card */}
    <g filter="url(#sh-9)" transform="translate(296,30)">
      <rect width="86" height="130" rx="12" fill="#3E3C38"/>
      <polygon points="86,12 90,16 90,138 86,134" fill="#28261C"/>
      <polygon points="12,130 16,134 90,134 86,130" fill="#201E18"/>
      <text x="12" y="28" fontSize="7" fill="#7A7870" fontFamily="Inter,sans-serif">Before</text>
      <text x="12" y="46" fontSize="13" fontWeight="900" fill="#E8E4DE" fontFamily="Inter,sans-serif">2x</text>
      <text x="12" y="60" fontSize="6" fill="#5A5850" fontFamily="Inter,sans-serif">ROAS</text>
      <rect x="12" y="70" width="62" height="1" fill="#4A4840"/>
      <text x="12" y="88" fontSize="7" fill="#7A7870" fontFamily="Inter,sans-serif">After</text>
      <text x="12" y="106" fontSize="13" fontWeight="900" fill="#E8E4DE" fontFamily="Inter,sans-serif">6x</text>
      <text x="12" y="120" fontSize="6" fill="#5A5850" fontFamily="Inter,sans-serif">ROAS</text>
    </g>
  </svg>
)

export const blogThumbs = [Thumb1,Thumb2,Thumb3,Thumb4,Thumb5,Thumb6,Thumb7,Thumb8,Thumb9]
