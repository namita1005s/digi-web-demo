import ServicePage from '../components/ServicePage/ServicePage'

const WebDevVisual = () => (
  <div style={{ 
    width: '100%', 
    height: '100%', 
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    backgroundColor: '#111',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: '4/3',
  }}>
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        display: 'block',
        borderRadius: '20px',
      }}
    >
      <source src="/public/Web_D-video.mp4" type="video/mp4" />
    </video>
  </div>
)

export default function WebDevelopment() {
  return (
    <ServicePage
      headline={<>Fast, Scalable Websites<br /><em>Built to Last.</em></>}
      description="Custom web development using modern technologies — engineered for performance, security, and growth."
      cta1={{ label: 'Start Your Project →', to: '/contact' }}
      cta2={{ label: 'View Our Work', to: '/portfolio' }}
      heroVisual={<WebDevVisual />}
      heroStyle={{
        backgroundColor: '#000',
        color: '#fff',
      }}
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