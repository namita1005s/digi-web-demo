import ServicePage from '../components/ServicePage/ServicePage'

const EcomSEOVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="es-bg" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E2DDD8" />
        <stop offset="100%" stopColor="#D2CEC8" />
      </linearGradient>
      <linearGradient id="es-card" x1="0" y1="0" x2="0" y2="1"> 
        <stop offset="0%" stopColor="#F2EEEA" />
        <stop offset="100%" stopColor="#E6E2DC" />
      </linearGradient>
      <linearGradient id="es-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4A4640" />
        <stop offset="100%" stopColor="#3A3630" />
      </linearGradient>
      <filter id="es-shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000022" /></filter>
    </defs>
    <rect width="480" height="360" fill="url(#es-bg)" />

    {/* 3D isometric product grid */}
    <polygon points="60,280 240,320 420,280 240,240" fill="#BEB8B0" />
    <polygon points="60,230 60,280 240,320 240,270" fill="#AEAAA2" />
    <polygon points="420,230 420,280 240,320 240,270" fill="#C8C4BC" />

    {/* SERP results card */}
    <g filter="url(#es-shadow)" transform="translate(24,20)">
      <rect width="260" height="190" rx="14" fill="url(#es-card)" />
      <polygon points="260,14 264,18 264,202 260,198" fill="#D4CEC6" />
      <polygon points="14,190 18,194 264,194 260,190" fill="#CCC6BE" />
      {/* search bar */}
      <rect x="14" y="14" width="232" height="20" rx="8" fill="#E0D8D0" />
      <rect x="22" y="18" width="100" height="12" rx="5" fill="#D0C8C0" />
      <rect x="236" y="16" width="6" height="16" rx="3" fill="#9A9490" />
      {/* 3 SERP results */}
      {[0,1,2].map(i=>(
        <g key={i}>
          <rect x="14" y={44+i*46} width="232" height="38" rx="8" fill={i===0?'#E8E4DC':'#EEE8E2'} />
          <rect x="22" y={50+i*46} width={i===0?120:80} height="5" rx="2" fill={i===0?'#7A8A90':'#A8A49C'} />
          <rect x="22" y={59+i*46} width={i===0?180:140} height="4" rx="2" fill={i===0?'#9AA0A6':'#B8B4AC'} />
          <rect x="22" y={67+i*46} width={i===0?100:60} height="4" rx="2" fill={i===0?'#8A9296':'#C0BCBA'} />
          {i===0 && <rect x="206" y="46" width="36" height="14" rx="6" fill="#6A8890" />}
          {i===0 && <text x="224" y="57" fontSize="7" fill="#E8F0F4" fontFamily="Inter,sans-serif" fontWeight="800" textAnchor="middle">#1</text>}
        </g>
      ))}
    </g>

    {/* Traffic chart */}
    <g filter="url(#es-shadow)" transform="translate(300,20)">
      <rect width="156" height="120" rx="14" fill="url(#es-dark)" />
      <polygon points="156,14 160,18 160,128 156,124" fill="#2A2620" />
      <polygon points="14,120 18,124 160,124 156,120" fill="#221E18" />
      <rect x="14" y="14" width="70" height="5" rx="2" fill="#6A6460" />
      <text x="116" y="30" fontSize="11" fontWeight="900" fill="#E8E0D8" fontFamily="Inter,sans-serif">+240%</text>
      {[20,32,26,44,38,56,50,68,62,80,90,100].map((h,i)=>(
        <rect key={i} x={14+i*11} y={102-h*0.72} width={8} height={h*0.72} rx="2"
          fill={i>=9?'#8A8480':i>=6?'#A8A098':'#C8C4BC'} />
      ))}
    </g>

    {/* Keyword rank + revenue */}
    <g filter="url(#es-shadow)" transform="translate(300,152)">
      <rect width="156" height="72" rx="14" fill="url(#es-card)" />
      <polygon points="156,14 160,18 160,80 156,76" fill="#D4CEC6" />
      <polygon points="14,72 18,76 160,76 156,72" fill="#CCC6BE" />
      <rect x="14" y="14" width="70" height="5" rx="2" fill="#8A8480" />
      <text x="14" y="54" fontSize="22" fontWeight="900" fill="#4A4640" fontFamily="Inter,sans-serif">500+</text>
      <rect x="14" y="60" width="80" height="4" rx="2" fill="#B0A8A0" />
    </g>

    {/* Bottom row stats */}
    <g filter="url(#es-shadow)" transform="translate(24,228)">
      <rect width="260" height="52" rx="12" fill="url(#es-dark)" />
      <polygon points="260,12 264,16 264,60 260,56" fill="#2A2620" />
      <polygon points="12,52 16,56 264,56 260,52" fill="#221E18" />
      {[['-45%','Paid Dependency',10],['+240%','Revenue',138]].map(([v,l,x])=>(
        <g key={l}>
          <text x={x+10} y="24" fontSize="7" fill="#6A6460" fontFamily="Inter,sans-serif">{l}</text>
          <text x={x+10} y="44" fontSize="18" fontWeight="900" fill="#E8E0D8" fontFamily="Inter,sans-serif">{v}</text>
          {x < 138 && <rect x={x+120} y="10" width="1" height="34" fill="#5A5450" />}
        </g>
      ))}
    </g>
  </svg>
)

export default function EcommerceSEO() {
  return (
    <ServicePage
      badge="Ecommerce SEO Services"
      headline={<>More Organic Traffic.<br /><em>More Sales.</em></>}
      description="Ecommerce-specific SEO that drives high-intent shoppers to your product and category pages, reducing reliance on paid ads."
      cta1={{ label: 'Boost My Store →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroVisual={<EcomSEOVisual />}
      heroMetrics={[
        { icon: '🛒', val: '+240%', label: 'Organic Revenue' },
        { icon: '🔑', val: '500+', label: 'Keywords Ranked' },
        { icon: '📉', val: '-45%', label: 'Paid Ad Spend' },
      ]}
      stats={[
        { val: '+240%', label: 'Avg. Organic Revenue Growth' },
        { val: '500+', label: 'Product Keywords Ranked' },
        { val: '-45%', label: 'Reduction in Paid Ad Dependency' },
        { val: '3–6mo', label: 'Time to Measurable Results' },
      ]}
      delivers={[
        { icon: '◎', title: 'Product Page SEO', desc: 'Keyword-optimised titles, descriptions, schema markup, and UGC signals for every product.' },
        { icon: '◈', title: 'Category Page Optimisation', desc: 'Structured, indexable category pages targeting high-volume commercial keywords.' },
        { icon: '◆', title: 'Technical Ecommerce SEO', desc: 'Faceted navigation, duplicate content fixes, crawl budget optimisation, and Core Web Vitals.' },
        { icon: '✦', title: 'Shopping Schema', desc: 'Rich snippets implementation to show ratings, prices, and availability directly in SERPs.' },
        { icon: '⬡', title: 'Content Marketing', desc: 'Buying guides, comparison pages, and blog content that captures top-of-funnel traffic.' },
        { icon: '❋', title: 'Link Building', desc: 'Authoritative backlinks from industry publications, bloggers, and comparison sites.' },
      ]}
      why={[
        { title: 'Platform Expertise', body: 'We\'ve optimised Shopify, WooCommerce, Magento, and BigCommerce stores at scale.' },
        { title: 'Revenue Attribution', body: 'Every SEO action is tied back to revenue impact — not just traffic or rankings.' },
        { title: 'No Cannibalism', body: 'We carefully structure SEO to complement, not compete with, your paid channels.' },
        { title: 'Seasonal Strategy', body: 'We plan content and link building around your peak trading seasons for maximum impact.' },
      ]}
      faqs={[
        { q: 'Does ecommerce SEO work for small stores?', a: 'Yes — even stores with fewer than 100 products can see significant organic growth with the right strategy.' },
        { q: 'Which platforms do you support?', a: 'Shopify, WooCommerce, Magento, BigCommerce, and custom-built stores.' },
        { q: 'How do you handle duplicate product content?', a: 'We use canonical tags, URL parameter handling, and unique content strategies to eliminate duplication.' },
        { q: 'Can SEO reduce my Google Shopping spend?', a: 'Yes — organic product rankings can significantly reduce dependency on paid Shopping campaigns over time.' },
      ]}
    />
  )
}
