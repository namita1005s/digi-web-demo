import ServicePage from '../components/ServicePage/ServicePage'

// Image component for PPC Advertising - no background card
const PPCVisual = () => (
  <div style={{ 
    width: '100%', 
    height: '100%', 
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <img 
      src="/public/PPCimage.png" 
      alt="PPC Advertising Dashboard"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        display: 'block',
      }}
    />
  </div>
)

export default function PPC() {
  return (
    <ServicePage
      headline={<>Paid Ads That Deliver<br /><em>Measurable ROI.</em></>}
      description="Data-driven PPC campaigns across Google, Meta, and LinkedIn — engineered to maximise return on every rupee spent."
      cta1={{ label: 'Launch Your Campaign →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroVisual={<PPCVisual />}
      stats={[
        { val: '4.5x', label: 'Average ROAS' },
        { val: '38%', label: 'Lower Cost Per Lead' },
        { val: '$2M+', label: 'Ad Spend Managed' },
        { val: '95%', label: 'Client Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'Google Search Ads', desc: 'Capture high-intent buyers at the exact moment they search for your product or service.' },
        { icon: '✦', title: 'Google Display & YouTube', desc: 'Visual campaigns that build brand awareness and retarget warm audiences across the web.' },
        { icon: '◈', title: 'Meta & Instagram Ads', desc: 'Precision-targeted social ads that drive traffic, leads, and purchases at scale.' },
        { icon: '◆', title: 'LinkedIn Ads', desc: 'B2B campaigns targeting decision-makers by job title, industry, and company size.' },
        { icon: '⬡', title: 'Retargeting Campaigns', desc: "Re-engage visitors who didn't convert with personalised ads that bring them back." },
        { icon: '❋', title: 'Conversion Tracking', desc: 'Full attribution setup so every rupee spent is tied to a real business outcome.' },
      ]}
      why={[
        { title: 'Multi-Platform Expertise', body: 'We manage Google, Meta, and LinkedIn under one roof — consistent strategy, unified reporting.' },
        { title: 'Profit-First Bidding', body: 'We optimise for revenue and ROAS, not just clicks. Every campaign is tied to your bottom line.' },
        { title: 'Full Attribution', body: 'No last-click guesswork. We set up proper attribution so you see the true impact of every ad.' },
        { title: 'Weekly Optimisation', body: 'Campaigns are reviewed and adjusted weekly — not left to run on autopilot.' },
      ]}
      faqs={[
        { q: 'What is the minimum ad budget you work with?', a: 'We typically recommend a minimum monthly ad spend of $1,500 to generate meaningful data and results.' },
        { q: 'How quickly can you launch a campaign?', a: 'Most campaigns are live within 5–7 business days of kickoff, including tracking setup and creative.' },
        { q: 'Do you create the ad creatives?', a: 'Yes — copywriting and static creative are included. Video ads can be produced at an additional cost.' },
        { q: 'How do you report on performance?', a: 'You get a live dashboard plus a monthly report covering spend, ROAS, CPA, and key recommendations.' },
      ]}
    />
  )
}