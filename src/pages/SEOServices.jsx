import ServicePage from '../components/ServicePage/ServicePage'

// Video component with cropped/zoomed styling
const SEOVisual = () => (
  <div style={{ 
    width: '100%', 
    height: '100%', 
    position: 'relative',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    backgroundColor: '#E8E4DE' // Matching the original SVG background
  }}>
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover', // This crops the video to fill the container
        objectPosition: 'center', // Centers the cropped area
        transform: 'scale(1.05)', // Optional: slight zoom for better coverage
        display: 'block'
      }}
    >
      <source src="/public/SEO.mp4" type="video/mp4" />
      {/* Fallback content or alternative video format */}
      Your browser does not support the video tag.
    </video>
  </div>
)

export default function SEOServices() {
  return (
    <ServicePage
      headline={<>Rank Higher.<br /><em>Drive More Organic Traffic.</em></>}
      description="Data-driven SEO strategies that build long-term search visibility and deliver compounding organic growth."
      cta1={{ label: 'Get SEO Audit →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroVisual={<SEOVisual />}
      stats={[
        { val: '+180%', label: 'Avg. Organic Traffic Growth' },
        { val: '3–6mo', label: 'Typical Time to Results' },
        { val: 'Page 1', label: 'Target Keyword Rankings' },
        { val: '95%', label: 'Client Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'Technical SEO', desc: 'Site audits, crawl fixes, Core Web Vitals, schema markup, and indexation optimisation.' },
        { icon: '✦', title: 'On-Page SEO', desc: 'Keyword-optimised content, meta tags, internal linking, and semantic HTML structure.' },
        { icon: '◈', title: 'Link Building', desc: 'High-authority backlink acquisition through ethical, white-hat outreach strategies.' },
        { icon: '◆', title: 'Local SEO', desc: 'Google Business Profile optimisation and local citation building for geo-targeted visibility.' },
        { icon: '⬡', title: 'Content Strategy', desc: 'Topic clusters, pillar pages, and editorial calendars that build topical authority.' },
        { icon: '❋', title: 'SEO Reporting', desc: 'Monthly reports with rankings, traffic, and ROI data — no vanity metrics.' },
      ]}
      why={[
        { title: 'White-Hat Only', body: 'We never risk your domain with shortcuts — every tactic we use is Google-compliant and built to last.' },
        { title: 'Full Transparency', body: 'You get clear monthly reports with real rankings, traffic data, and plain-English insights.' },
        { title: 'Content + Technical', body: 'Most agencies do one or the other. We combine both for compounding results.' },
        { title: 'No Lock-In Contracts', body: 'We earn your business every month. No 12-month lock-ins or hidden exit fees.' },
      ]}
      faqs={[
        { q: 'How long does SEO take to show results?', a: 'Most clients see meaningful ranking improvements within 3–6 months, with significant traffic growth by month 6–12.' },
        { q: 'Do you guarantee Page 1 rankings?', a: 'No ethical agency can guarantee specific rankings — but our track record shows consistent Page 1 results for target keywords.' },
        { q: 'What does the monthly reporting include?', a: 'Keyword rankings, organic traffic, backlink growth, technical health scores, and a clear summary of work completed.' },
        { q: 'Do you work with eCommerce sites?', a: 'Yes. We have dedicated eCommerce SEO workflows covering product pages, category optimisation, and structured data.' },
      ]}
    />
  )
}