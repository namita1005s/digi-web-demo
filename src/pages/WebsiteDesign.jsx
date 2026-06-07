import ServicePage from '../components/ServicePage/ServicePage'

export default function WebsiteDesign() {
  return (
    <ServicePage
      badge="Website Design"
      headline={<>Websites That Convert<br /><em>Visitors Into Clients.</em></>}
      description="Premium, brand-aligned website design crafted to make a powerful first impression and drive measurable results."
      cta1={{ label: 'Start Your Project →', to: '/contact' }}
      cta2={{ label: 'View Our Work', to: '/portfolio' }}
      stats={[
        { val: '+67%', label: 'Avg. Conversion Lift' },
        { val: '<2s', label: 'Target Load Time' },
        { val: '200+', label: 'Designs Delivered' },
        { val: '100%', label: 'Mobile Responsive' },
      ]}
      delivers={[
        { icon: '✦', title: 'UX-First Design', desc: 'Every layout decision is rooted in user psychology and conversion principles.' },
        { icon: '◎', title: 'Brand-Aligned Visuals', desc: 'Designs that authentically reflect your brand identity and speak to your audience.' },
        { icon: '◈', title: 'Mobile-Responsive', desc: 'Pixel-perfect across all devices — desktop, tablet, and mobile.' },
        { icon: '◆', title: 'CRO Optimised', desc: 'Strategic placement of CTAs, trust signals, and flow to maximise conversions.' },
        { icon: '❋', title: 'Fast Load Times', desc: 'Optimised assets and clean code ensure sub-2-second load performance.' },
        { icon: '⬡', title: 'Scalable Systems', desc: 'Design systems built to grow with your brand — consistent and maintainable.' },
      ]}
      why={[
        { title: 'Conversion-Focused', body: 'Beautiful isn\'t enough. Every design decision is backed by CRO principles and tested against real user behaviour.' },
        { title: 'Brand Consistency', body: 'We create full design systems — not one-off pages — so your brand looks cohesive everywhere.' },
        { title: 'Fast Turnaround', body: 'Most design projects are completed in 2–4 weeks without sacrificing quality.' },
        { title: 'Dev-Ready Handoff', body: 'Figma files with full specs, assets, and documentation so development is seamless.' },
      ]}
      faqs={[
        { q: 'What do you deliver at the end of a design project?', a: 'Fully annotated Figma files, exported assets, a style guide, and a component library ready for development.' },
        { q: 'Do you also build the website after designing it?', a: 'Yes — we offer end-to-end design and development. Many clients choose both services together.' },
        { q: 'How many revision rounds are included?', a: 'We include two rounds of revisions in every project. Additional rounds can be added if needed.' },
        { q: 'Can you redesign just one part of our site?', a: 'Absolutely. We can redesign individual pages, landing pages, or specific sections without touching the rest.' },
      ]}
    />
  )
}
