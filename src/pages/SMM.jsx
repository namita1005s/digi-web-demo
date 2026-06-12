import ServicePage from '../components/ServicePage/ServicePage'

// Video component for Social Media Marketing
const SMMVisual = () => (
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
      <source src="/public/SMvideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
)

export default function SMM() {
  return (
    <ServicePage
      headline={<>Turn Followers Into<br /><em>Loyal Customers.</em></>}
      description="Strategic social media management that builds brand authority, grows engaged audiences, and converts attention into revenue."
      cta1={{ label: 'Start Growing →', to: '/contact' }}
      cta2={{ label: 'See Results', to: '/portfolio' }}
      heroVisual={<SMMVisual />}
      stats={[
        { val: '+210%', label: 'Avg. Follower Growth' },
        { val: '8+', label: 'Platforms Managed' },
        { val: '3.8x', label: 'Avg. Engagement Lift' },
        { val: '95%', label: 'Client Retention Rate' },
      ]}
      delivers={[
        { icon: '◎', title: 'Content Strategy', desc: 'Platform-native content calendars built around your audience, brand voice, and business goals.' },
        { icon: '✦', title: 'Community Management', desc: 'Daily engagement, comment moderation, and DM handling to build a loyal, active community.' },
        { icon: '◈', title: 'Paid Social Ads', desc: 'Targeted Meta, Instagram, and LinkedIn ad campaigns that drive traffic, leads, and sales.' },
        { icon: '◆', title: 'Influencer Outreach', desc: 'Micro and macro influencer partnerships that expand your reach to qualified audiences.' },
        { icon: '⬡', title: 'Creative Production', desc: 'Scroll-stopping graphics, reels, and carousels designed to perform on every platform.' },
        { icon: '❋', title: 'Analytics & Reporting', desc: 'Monthly performance reports with reach, engagement, follower growth, and conversion data.' },
      ]}
      why={[
        { title: 'Platform-Native Content', body: 'We don\'t repurpose — we create content built specifically for each platform\'s algorithm and audience.' },
        { title: 'Brand Voice First', body: 'Every post sounds like you. We embed your tone and values before writing a single caption.' },
        { title: 'Paid + Organic Together', body: 'Organic builds trust; paid amplifies reach. We run both in sync for maximum impact.' },
        { title: 'Transparent Reporting', body: 'Monthly reports with real metrics — reach, engagement, link clicks, and lead attribution.' },
      ]}
      faqs={[
        { q: 'Which platforms do you manage?', a: 'Instagram, Facebook, LinkedIn, X, YouTube, Pinterest, TikTok, and Threads — tailored to where your audience is.' },
        { q: 'How many posts per week do you publish?', a: 'Typically 4–7 posts per week depending on the platform and your chosen package.' },
        { q: 'Do you handle customer replies and DMs?', a: 'Yes — community management including comments and DMs is included in all plans.' },
        { q: 'Can we approve content before it goes live?', a: 'Absolutely. We share a monthly content calendar for your review and approval before scheduling.' },
      ]}
    />
  )
}