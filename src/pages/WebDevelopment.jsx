import ServicePage from '../components/ServicePage/ServicePage'

const WebDevVisual = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="480" height="360" rx="12" fill="#F7F7F5" />
    {/* Browser chrome */}
    <rect x="16" y="16" width="448" height="328" rx="10" fill="#fff" />
    <rect x="16" y="16" width="448" height="36" rx="10" fill="#EBEBEB" />
    <rect x="16" y="38" width="448" height="14" fill="#EBEBEB" />
    <circle cx="36" cy="34" r="6" fill="#FF6B6B" />
    <circle cx="54" cy="34" r="6" fill="#FFD93D" />
    <circle cx="72" cy="34" r="6" fill="#6BCB77" />
    <rect x="90" y="26" width="280" height="16" rx="8" fill="#fff" />
    {/* Code editor — left panel */}
    <rect x="16" y="52" width="220" height="292" fill="#1E1E2E" />
    {/* line numbers + code lines */}
    {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
      <rect key={i} x="38" y={72 + i * 20} width="4" height="8" rx="2" fill="#555577" />
    ))}
    {/* code tokens */}
    <rect x="52" y="72" width="28" height="8" rx="2" fill="#C084FC" />
    <rect x="86" y="72" width="44" height="8" rx="2" fill="#60A5FA" />
    <rect x="136" y="72" width="16" height="8" rx="2" fill="#F8F8F2" />
    <rect x="52" y="92" width="20" height="8" rx="2" fill="#34D399" />
    <rect x="78" y="92" width="60" height="8" rx="2" fill="#F8F8F2" />
    <rect x="52" y="112" width="36" height="8" rx="2" fill="#C084FC" />
    <rect x="94" y="112" width="50" height="8" rx="2" fill="#60A5FA" />
    <rect x="52" y="132" width="24" height="8" rx="2" fill="#34D399" />
    <rect x="82" y="132" width="80" height="8" rx="2" fill="#F8F8F2" />
    <rect x="52" y="152" width="44" height="8" rx="2" fill="#C084FC" />
    <rect x="102" y="152" width="30" height="8" rx="2" fill="#FCD34D" />
    <rect x="52" y="172" width="16" height="8" rx="2" fill="#34D399" />
    <rect x="74" y="172" width="56" height="8" rx="2" fill="#F8F8F2" />
    <rect x="52" y="192" width="60" height="8" rx="2" fill="#60A5FA" />
    <rect x="52" y="212" width="28" height="8" rx="2" fill="#C084FC" />
    <rect x="86" y="212" width="44" height="8" rx="2" fill="#F8F8F2" />
    {/* cursor blink */}
    <rect x="52" y="232" width="2" height="14" rx="1" fill="#60A5FA" opacity="0.9" />
    {/* Preview panel */}
    <rect x="236" y="52" width="228" height="292" fill="#fff" />
    {/* Preview nav */}
    <rect x="248" y="66" width="60" height="8" rx="3" fill="#111" />
    <rect x="360" y="64" width="48" height="12" rx="6" fill="#111" />
    {/* Hero block */}
    <rect x="248" y="88" width="204" height="60" rx="8" fill="#F7F7F5" />
    <rect x="260" y="98" width="80" height="10" rx="4" fill="#111" />
    <rect x="260" y="114" width="120" height="7" rx="3" fill="#DADADB" />
    <rect x="260" y="126" width="52" height="14" rx="6" fill="#111" />
    {/* Feature cards */}
    {[0,1,2].map(i => (
      <g key={i}>
        <rect x={248 + i * 70} y="162" width="60" height="50" rx="6" fill="#F7F7F5" />
        <rect x={256 + i * 70} y="172" width="20" height="6" rx="2" fill="#DADADB" />
        <rect x={256 + i * 70} y="182" width="40" height="5" rx="2" fill="#EBEBEB" />
        <rect x={256 + i * 70} y="190" width="32" height="5" rx="2" fill="#EBEBEB" />
      </g>
    ))}
    {/* PageSpeed badge */}
    <rect x="248" y="228" width="204" height="48" rx="8" fill="#F0FDF4" />
    <circle cx="270" cy="252" r="14" fill="#22C55E" opacity="0.15" />
    <circle cx="270" cy="252" r="8" fill="#22C55E" />
    <rect x="288" y="246" width="30" height="7" rx="3" fill="#111" />
    <rect x="288" y="257" width="50" height="5" rx="2" fill="#DADADB" />
    <rect x="386" y="244" width="36" height="16" rx="4" fill="#22C55E" />
    <rect x="392" y="249" width="24" height="6" rx="2" fill="#fff" />
  </svg>
)

export default function WebDevelopment() {
  return (
    <ServicePage
      badge="Web Development"
      headline={<>Fast, Scalable Websites<br /><em>Built to Last.</em></>}
      description="Custom web development using modern technologies — engineered for performance, security, and growth."
      cta1={{ label: 'Start Your Project →', to: '/contact' }}
      cta2={{ label: 'View Our Work', to: '/portfolio' }}
      heroVisual={<WebDevVisual />}
      heroMetrics={[
        { icon: '⚡', val: '98+', label: 'PageSpeed Score' },
        { icon: '🚀', val: '<2s', label: 'Load Time' },
        { icon: '📱', val: '100%', label: 'Mobile Ready' },
      ]}
      stats={[
        { val: '98+', label: 'PageSpeed Score' },
        { val: '<2s', label: 'Average Load Time' },
        { val: '150+', label: 'Sites Launched' },
        { val: '100%', label: 'Mobile Responsive' },
      ]}
      delivers={[
        { icon: '⬡', title: 'React & Next.js', desc: 'Modern component-based architecture for fast, scalable, and maintainable web apps.' },
        { icon: '◎', title: 'Performance First', desc: '98+ PageSpeed scores through optimised code, lazy loading, and CDN delivery.' },
        { icon: '◈', title: 'CMS Integration', desc: 'Headless CMS setups with Sanity, Contentful, or WordPress for easy content management.' },
        { icon: '◆', title: 'API & Backend', desc: 'RESTful and GraphQL APIs, serverless functions, and third-party integrations.' },
        { icon: '✦', title: 'Security Hardened', desc: 'SSL, OWASP best practices, and regular audits to keep your site protected.' },
        { icon: '❋', title: 'Ongoing Support', desc: 'Post-launch maintenance, updates, and monitoring so you never have to worry.' },
      ]}
      why={[
        { title: 'Modern Stack', body: 'We build with React, Next.js, and TypeScript — tools that scale with your business and stay maintainable.' },
        { title: 'Performance Obsessed', body: 'Every site we ship hits 95+ PageSpeed. Fast sites rank better and convert more.' },
        { title: 'You Own Everything', body: 'Full source code and IP ownership — no proprietary lock-in, ever.' },
        { title: 'Post-Launch Support', body: 'We don\'t disappear after launch. Ongoing retainers keep your site fast, secure, and up to date.' },
      ]}
      faqs={[
        { q: 'How long does a website project take?', a: 'A standard marketing site typically takes 4–8 weeks from kickoff to launch, depending on scope.' },
        { q: 'What CMS do you recommend?', a: 'For most clients we recommend Sanity or Contentful. WordPress is available for those who prefer it.' },
        { q: 'Do you handle hosting?', a: 'We recommend and set up hosting on Vercel or AWS, and can manage it on an ongoing basis.' },
        { q: 'Can you redesign an existing website?', a: 'Yes — redesigns are one of our most common projects. We start with a full audit before touching any code.' },
      ]}
    />
  )
}
