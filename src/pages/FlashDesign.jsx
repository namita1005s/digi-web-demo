import ServicePage from '../components/ServicePage/ServicePage'

const FlashVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="fl-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E4DCE0" />
        <stop offset="100%" stopColor="#D4CCD0" />
      </linearGradient>
      <linearGradient id="fl-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#302838" />
        <stop offset="100%" stopColor="#201828" />
      </linearGradient>
      <linearGradient id="fl-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F0E8F0" />
        <stop offset="100%" stopColor="#E4DCE4" />
      </linearGradient>
      <filter id="fl-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#fl-bg)" />

    {/* Animation timeline */}
    <g filter="url(#fl-shadow)" transform="translate(22,22)">
      <rect width="436" height="70" rx="14" fill="url(#fl-dark)" />
      <polygon points="436,14 440,18 440,78 436,74" fill="#181020" />
      <polygon points="14,70 18,74 440,74 436,70" fill="#100820" />
      {/* timeline tracks */}
      {[0,1,2].map(ti=>(
        <g key={ti}>
          <rect x="14" y={18+ti*17} width="408" height="10" rx="3" fill="#201828" />
          {[0,1,2,3,4,5,6,7,8].map(ki=>(
            <rect key={ki} x={14+ki*46+Math.random()*10} y={18+ti*17}
              width={[30,24,36,20,40,28,32,26,38][ki]}
              height="10" rx="3"
              fill={[['#9860B0','#B07090','#8090B8'],['#60A890','#8090B8','#9860B0'],['#B07090','#9860B0','#60A890']][ti][ki%3]}
              opacity="0.7" />
          ))}
        </g>
      ))}
      {/* playhead */}
      <rect x="200" y="12" width="2" height="52" rx="1" fill="#E0C0E0" opacity="0.9" />
    </g>

    {/* Banner preview cards */}
    {[{x:22,y:108,w:130,h:90,label:'Banner Ad'},{x:166,y:108,w:130,h:90,label:'Motion Graphic'},{x:310,y:108,w:148,h:90,label:'Explainer'}].map(({x,y,w,h,label})=>(
      <g key={label} filter="url(#fl-shadow)" transform={`translate(${x},${y})`}>
        <rect width={w} height={h} rx="12" fill="url(#fl-card)" />
        <polygon points={`${w},12 ${w+4},16 ${w+4},${h+8} ${w},${h+4}`} fill="#D4C8D4" />
        <polygon points={`12,${h} 16,${h+4} ${w+4},${h+4} ${w},${h}`} fill="#CCC0CC" />
        {/* animated content */}
        <rect x="12" y="12" width={w-24} height={h-50} rx="6" fill="#E0D4E0" />
        <circle cx={w/2} cy={h/2-16} r="16" fill="#C890C8" opacity="0.4" />
        <text x={w/2} y={h/2-10} fontSize="14" fill="#906090" fontFamily="Inter,sans-serif" textAnchor="middle">▶</text>
        <rect x="12" y={h-34} width={w-24} height="6" rx="3" fill="#C8B0C8" opacity="0.6" />
        <rect x="12" y={h-24} width={(w-24)*0.6} height="6" rx="3" fill="#B890B8" opacity="0.5" />
        <rect x="14" y={h-10} width="60" height="5" rx="2" fill="#A890A8" />
      </g>
    ))}

    {/* Stats */}
    <g filter="url(#fl-shadow)" transform="translate(22,216)">
      <rect width="432" height="52" rx="12" fill="url(#fl-dark)" />
      <polygon points="432,12 436,16 436,60 432,56" fill="#181020" />
      <polygon points="12,52 16,56 436,56 432,52" fill="#100820" />
      {[['3x','Engagement Boost',10],['500+','Assets Created',165],['HTML5','Format',320]].map(([v,l,x])=>(
        <g key={l}>
          <text x={x+14} y="22" fontSize="7" fill="#706078" fontFamily="Inter,sans-serif">{l}</text>
          <text x={x+14} y="42" fontSize="18" fontWeight="900" fill="#D8C0E0" fontFamily="Inter,sans-serif">{v}</text>
          {x<320 && <rect x={x+152} y="12" width="1" height="32" fill="#402840" />}
        </g>
      ))}
    </g>

    {/* Format row */}
    <g filter="url(#fl-shadow)" transform="translate(22,284)">
      <rect width="432" height="44" rx="10" fill="url(#fl-card)" />
      <polygon points="432,10 436,14 436,50 432,46" fill="#D4C8D4" />
      <polygon points="10,44 14,48 436,48 432,44" fill="#CCC0CC" />
      {['HTML5','MP4','GIF','SVG','WebM','PNG'].map((f,i)=>(
        <g key={f}>
          <rect x={12+i*72} y={10} width={62} height={24} rx="6" fill="#E8D8E8" />
          <text x={43+i*72} y={26} fontSize="9" fill="#605060" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">{f}</text>
        </g>
      ))}
    </g>
  </svg>
)

export default function FlashDesign() {
  return (
    <ServicePage
      badge="Flash Design & Multimedia"
      headline={<>Captivating Multimedia<br /><em>That Tells Your Story.</em></>}
      description="Creative multimedia design including animated banners, interactive presentations, explainer graphics, and rich media content that engages your audience."
      cta1={{ label: 'Start a Multimedia Project →', to: '/contact' }}
      cta2={{ label: 'View Our Work', to: '/portfolio' }}
      heroVisual={<FlashVisual />}
      heroMetrics={[
        { icon: '🎬', val: '100%', label: 'Custom Animations' },
        { icon: '🎨', val: '3x', label: 'Engagement Boost' },
        { icon: '📲', val: 'All', label: 'Formats Delivered' },
      ]}
      stats={[
        { val: '3x', label: 'Avg. Engagement Increase' },
        { val: '500+', label: 'Multimedia Assets Created' },
        { val: '100%', label: 'Brand-Aligned Output' },
        { val: '95%', label: 'Client Satisfaction' },
      ]}
      delivers={[
        { icon: '◎', title: 'Animated Banners', desc: 'Eye-catching HTML5 and GIF banner ads designed for display advertising campaigns.' },
        { icon: '✦', title: 'Interactive Presentations', desc: 'Engaging slide decks and interactive presentations for sales, pitches, and conferences.' },
        { icon: '◈', title: 'Motion Graphics', desc: 'Logo animations, transitions, and kinetic typography for video and web use.' },
        { icon: '◆', title: 'Explainer Animations', desc: 'Short animated explainer content that communicates complex ideas simply and visually.' },
        { icon: '⬡', title: 'Rich Media Ads', desc: 'Interactive rich media ad units that outperform standard static display ads.' },
        { icon: '❋', title: 'Multimedia Assets', desc: 'Icons, illustrations, infographics, and custom graphics for web, print, and social media.' },
      ]}
      why={[
        { title: 'Story-Driven Creative', body: 'Every animation we create is built around a narrative that connects with your audience emotionally.' },
        { title: 'Multi-Format Delivery', body: 'We deliver assets in all formats you need — HTML5, MP4, GIF, SVG, and more.' },
        { title: 'Brand Consistent', body: 'All multimedia work follows your brand guidelines to ensure a cohesive visual identity.' },
        { title: 'Fast Production', body: 'Efficient production workflows mean most projects are delivered within 5–10 business days.' },
      ]}
      faqs={[
        { q: 'What file formats do you deliver?', a: 'HTML5, MP4, GIF, WebM, SVG, PNG, and PDF — whatever your project requires.' },
        { q: 'Can you animate our existing logo?', a: 'Yes — logo animation is one of our most popular multimedia services.' },
        { q: 'Do you create interactive presentations?', a: 'Yes — we build interactive slide decks in PowerPoint, Keynote, or web-based formats.' },
        { q: 'How long does a multimedia project take?', a: 'Simple animations take 3–5 days. Complex interactive projects typically take 2–4 weeks.' },
      ]}
    />
  )
}
