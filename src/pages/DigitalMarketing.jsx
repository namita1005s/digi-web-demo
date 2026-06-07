import ServicePage from '../components/ServicePage/ServicePage'

export default function DigitalMarketing() {
  return (
    <ServicePage
      badge="Digital Marketing"
      headline={<>Full-Funnel Marketing<br /><em>That Drives Revenue.</em></>}
      description="Integrated digital marketing strategies that connect every channel into a single, high-performing growth engine."
      cta1={{ label: 'Get Your Strategy →', to: '/contact' }}
      cta2={{ label: 'See Case Studies', to: '/portfolio' }}
      stats={[
        { val: '+320%', label: 'Avg. Lead Growth' },
        { val: '6+', label: 'Channels Managed' },
        { val: '4.2x', label: 'Average ROAS' },
        { val: '95%', label: 'Client Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'Search Marketing', desc: 'Dominate Google with a combined SEO and PPC strategy that captures demand at every stage.' },
        { icon: '◈', title: 'Social Media', desc: 'Organic and paid social campaigns that build community and drive qualified traffic.' },
        { icon: '✦', title: 'Email Marketing', desc: 'Automated nurture sequences and broadcast campaigns that convert leads into customers.' },
        { icon: '◆', title: 'Content Marketing', desc: 'Strategic content that educates, builds trust, and ranks — driving inbound leads 24/7.' },
        { icon: '⬡', title: 'Conversion Rate Optimisation', desc: 'A/B testing, heatmaps, and UX improvements that turn more visitors into buyers.' },
        { icon: '❋', title: 'Analytics & Reporting', desc: 'Full-funnel attribution and monthly dashboards so you always know your ROI.' },
      ]}
      why={[
        { title: 'Integrated Strategy', body: 'We connect SEO, PPC, social, and email into one cohesive funnel — no siloed campaigns.' },
        { title: 'Full-Funnel Thinking', body: 'From awareness to retention, every tactic maps to a stage in your customer journey.' },
        { title: 'Data-Driven Decisions', body: 'Every campaign is backed by analytics. We optimise weekly, not monthly.' },
        { title: 'No Lock-In Contracts', body: 'We earn your business every month. No 12-month lock-ins or hidden exit fees.' },
      ]}
      faqs={[
        { q: 'What channels do you manage?', a: 'We cover SEO, Google Ads, Meta Ads, LinkedIn, email marketing, and content — tailored to your goals.' },
        { q: 'Do I need all channels at once?', a: 'No. We start with the highest-impact channels for your business and expand as results compound.' },
        { q: 'How do you measure success?', a: 'We track leads, revenue, ROAS, and CAC — not vanity metrics like impressions or followers.' },
        { q: 'How long before we see results?', a: 'Paid channels show results within weeks. SEO and content build over 3–6 months for compounding returns.' },
      ]}
    />
  )
}
