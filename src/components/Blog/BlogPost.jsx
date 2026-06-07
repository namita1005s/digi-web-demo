import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import CTA from '../CTA/CTA'
import './BlogPost.css'

const articles = [
  {
    id: 1,
    tag: 'SEO',
    title: '10 Technical SEO Fixes That Will Double Your Organic Traffic',
    excerpt: 'Most websites are leaving rankings on the table due to fixable technical issues.',
    author: 'Aryan Verma',
    date: 'Jan 14, 2025',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?w=1200&h=600&fit=crop',
    content: `
      <p>Technical SEO is the foundation of search engine visibility. While content and backlinks are important, even the best content can struggle to rank if search engines cannot properly crawl, index, and understand your website. In this guide, we explore ten proven technical SEO improvements that can help increase rankings, improve user experience, and drive sustainable organic growth.</p>

      <h2>1. Fix Crawl Errors and Indexing Issues</h2>
      <p>Search engines rely on crawlers to discover your content. If important pages return errors, are blocked by robots.txt, or are excluded from indexing, they may never appear in search results. Regularly monitor Google Search Console and address crawl issues before they impact visibility.</p>

      <h2>2. Improve Core Web Vitals</h2>
      <p>User experience has become a critical ranking factor. Focus on optimizing metrics such as Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). Faster, smoother websites improve engagement and increase the likelihood of higher rankings.</p>

      <h2>3. Implement Structured Data</h2>
      <p>Structured data helps search engines better understand your content and can unlock rich results such as FAQs, ratings, product information, and review snippets. Rich results often improve click-through rates and increase visibility on search engine results pages.</p>

      <h2>4. Repair Broken Links</h2>
      <p>Broken links negatively impact both user experience and crawl efficiency. Conduct regular audits using SEO tools and replace or redirect broken URLs to maintain a healthy website structure.</p>

      <h2>5. Optimize XML Sitemaps</h2>
      <p>XML sitemaps act as a roadmap for search engines. Ensure your sitemap contains only valuable, indexable pages and automatically updates whenever new content is published.</p>

      <h2>6. Enhance Site Speed</h2>
      <p>Website speed directly influences bounce rates and conversions. Compress images, enable browser caching, reduce unused CSS and JavaScript, implement lazy loading, and use a Content Delivery Network (CDN). Every second saved can significantly improve user engagement.</p>

      <h2>7. Resolve Duplicate Content Problems</h2>
      <p>Duplicate content can dilute ranking signals and confuse search engines. Use canonical tags, proper redirects, and consistent URL structures to indicate the preferred version of a page.</p>

      <h2>8. Strengthen Internal Linking</h2>
      <p>Internal links help distribute authority throughout your website and guide visitors toward important content. A well-planned linking structure improves crawlability while enhancing user navigation.</p>

      <h2>9. Prioritize Mobile Optimization</h2>
      <p>Since Google primarily uses mobile-first indexing, your mobile experience plays a major role in rankings. Ensure pages are responsive, easy to navigate, and optimized for touch interactions.</p>

      <h2>10. Monitor Technical SEO Continuously</h2>
      <p>SEO is not a one-time activity. Regular audits help identify emerging issues before they impact performance. Schedule monthly reviews of crawl reports, page speed metrics, structured data, and indexing coverage.</p>

      <h2>Final Thoughts</h2>
      <p>Technical SEO creates the foundation that allows great content and marketing efforts to succeed. By implementing these ten improvements, businesses can enhance search visibility, improve user experience, and create long-term organic growth opportunities. Looking to improve your website's search performance? Our SEO specialists conduct comprehensive technical audits, identify growth opportunities, and implement data-driven optimization strategies that deliver measurable results.</p>
    `,
  },
  {
    id: 2,
    tag: 'PPC',
    title: 'How We Achieved 4.5x ROAS on a ₹15L/Month Google Ads Budget',
    excerpt: 'A behind-the-scenes breakdown of the campaign structure, bidding strategy, and creative testing.',
    author: 'Vikram Patel',
    date: 'Jan 08, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop',
    content: `
      <p>Managing a ₹15 lakh monthly ad budget requires precision, strategy, and constant optimization. When an e-commerce client approached us with flat ROAS of 1.8x and rising customer acquisition costs, we knew a complete overhaul was necessary. This case study reveals exactly how we transformed their Google Ads performance through systematic optimization.</p>

      <h2>Campaign Restructure</h2>
      <p>We completely rebuilt the account structure, organizing campaigns by intent level (branded, non-branded, competitor, remarketing) and product category. This approach allowed precise budget allocation and bid adjustments based on performance. Branded campaigns focused on protecting existing customers with lower CPCs and high conversion rates. Non-branded campaigns targeted informational and commercial intent keywords.</p>

      <h2>Smart Bidding Strategy</h2>
      <p>We switched from manual CPC to Target ROAS (tROAS) bidding after accumulating sufficient conversion data. tROAS uses Google's machine learning to predict conversion value and optimize bids in real-time. We set an initial target of 400% (4x ROAS), allowing the algorithm to learn for 2 weeks. Performance fluctuated initially but stabilized with ROAS ranging from 3.8x to 4.2x.</p>

      <h2>Creative Testing Framework</h2>
      <p>We implemented a systematic creative testing process using Responsive Search Ads (RSAs) and pinned headlines. For each ad group, we tested 5 headlines and 3 descriptions, letting Google optimize combinations. We rotated new creatives every 2-3 weeks to prevent ad fatigue. Winning elements were carried over to new tests, improving CTR from 4% to 8% over 3 months.</p>

      <h2>Negative Keyword Management</h2>
      <p>Regular negative keyword reviews saved 15-20% of budget that was previously wasted on irrelevant searches. We analyzed search term reports weekly, adding irrelevant terms as negatives. Common exclusions included "free," "cheap," "used," "DIY," and competitors' brand names that weren't converting.</p>

      <h2>Landing Page Optimization</h2>
      <p>We audited all landing pages for load speed, mobile responsiveness, and conversion friction points. Pages were redesigned with clear value propositions, prominent CTAs, trust badges, and customer testimonials. We reduced form fields from 8 to 4, increasing completion rates by 40%. Load times improved from 3.5 seconds to 1.8 seconds.</p>

      <h2>Results</h2>
      <p>After 90 days of implementation, ROAS hit 4.5x consistently, exceeding our target. CPCs decreased by 35%, CTR doubled, and conversion rates improved by 150%. Monthly revenue from Google Ads grew from ₹27 lakhs to ₹67.5 lakhs on the same ₹15 lakh budget.</p>
    `,
  },
  {
    id: 3,
    tag: 'Web Design',
    title: 'The 5 UX Principles Behind Every High-Converting Landing Page',
    excerpt: 'Conversion rate optimisation isn\'t magic — it\'s psychology.',
    author: 'Priya Sharma',
    date: 'Dec 28, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&h=600&fit=crop',
    content: `
      <p>Great design isn't just about looking good—it's about driving action. Here are 5 UX principles we use to create high-converting landing pages that consistently outperform industry averages.</p>

      <h2>1. Clear Visual Hierarchy</h2>
      <p>Guide users' eyes to what matters most using size, color, and spacing. Headlines should be prominent, CTAs should stand out, and supporting information should be easily scannable. A well-designed hierarchy reduces cognitive load and helps users find what they need quickly.</p>

      <h2>2. Compelling CTAs</h2>
      <p>Use action-oriented text that creates urgency and clarity. "Get Started Now" outperforms "Submit" every time. Place CTAs above the fold and repeat them strategically throughout the page. Use contrasting colors that stand out from your brand palette.</p>

      <h2>3. Social Proof</h2>
      <p>Testimonials, reviews, trust badges, and case studies build credibility. Place them near conversion points to reduce anxiety at decision moments. Video testimonials and photo-verified reviews have the highest impact on conversion rates.</p>

      <h2>4. Mobile-First Design</h2>
      <p>Over 60% of traffic comes from mobile devices. Design for small screens first, then scale up. Ensure buttons are thumb-friendly (minimum 48px touch target), text is readable without zooming (16px base font), and forms are optimized for mobile input.</p>

      <h2>5. Reduce Friction</h2>
      <p>Every additional form field reduces conversion rates by 10-15%. Minimize required fields, remove distractions like navigation menus, and make the desired action obvious. Use progress indicators for multi-step forms and offer guest checkout options.</p>

      <h2>Case Study Results</h2>
      <p>By applying these five principles, one client saw their landing page conversion rate increase from 2.5% to 7.8% within 60 days. The combination of clear hierarchy, compelling CTAs, social proof, mobile optimization, and reduced friction created a seamless user experience that consistently drove results.</p>
    `,
  },
  {
    id: 4,
    tag: 'Social Media',
    title: 'Why Your Instagram Reach Dropped and How to Fix It in 2025',
    excerpt: 'The algorithm changed again. Here\'s what\'s actually working right now.',
    author: 'Sneha Joshi',
    date: 'Dec 20, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=600&fit=crop',
    content: `
      <p>Instagram's algorithm evolves constantly. Here's what's working in 2025 to regain your reach and grow your audience organically.</p>

      <h2>Focus on Reels</h2>
      <p>Short-form video continues to get the highest organic reach. Post 3-5 Reels per week minimum, using trending audio, engaging hooks in the first 3 seconds, and clear calls-to-action. Reels showing behind-the-scenes content, tutorials, and user-generated content perform best.</p>

      <h2>Engage Within 60 Minutes</h2>
      <p>Responding to comments quickly signals the algorithm to boost your content to more users. Set up notifications for your posts and reply to every comment within the first hour. Meaningful engagement (asking questions, continuing conversations) is valued over generic responses.</p>

      <h2>Use All Features</h2>
      <p>Stories, posts, Reels, Guides, and Broadcast channels—use every format to increase your chances of being seen. Instagram rewards accounts that use multiple features consistently. Add location tags, hashtags (5-10 relevant ones), and collaborate with other accounts when possible.</p>

      <h2>Post at Peak Times</h2>
      <p>Use Instagram Insights to see when your audience is most active and schedule accordingly. Generally, weekdays 9-11 AM and 6-8 PM work well, but test different times for your specific audience. Consistency matters more than frequency.</p>

      <h2>Build Community</h2>
      <p>Engage with similar accounts in your niche. Meaningful comments on other posts lead to profile visits and follows. Host live sessions, create polls in Stories, and ask questions in captions to encourage interaction. The algorithm favors accounts that drive conversations.</p>
    `,
  },
  {
    id: 5,
    tag: 'Strategy',
    title: 'Full-Funnel Marketing: The Framework We Use for Every Client',
    excerpt: 'Siloed marketing channels waste budget. Here\'s our integrated framework.',
    author: 'Aryan Verma',
    date: 'Dec 12, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&h=600&fit=crop',
    content: `
      <p>Most agencies treat channels separately—SEO for awareness, PPC for conversions, social for engagement. We don't. Here's our integrated full-funnel approach that connects every channel into one cohesive growth engine.</p>

      <h2>Top of Funnel: Awareness</h2>
      <p>SEO content (blog posts, guides, infographics), social media organic posts, PR, and podcast appearances to attract ideal customers who don't know you yet. Measure success through reach, impressions, and new user acquisition cost. Focus on educational, non-sales content that solves problems.</p>

      <h2>Middle of Funnel: Consideration</h2>
      <p>Email sequences, retargeting ads, case studies, webinars, and comparison guides to nurture leads who are evaluating options. Provide social proof, address objections, and demonstrate expertise. Measure engagement rates, time-on-site, and lead quality scores.</p>

      <h2>Bottom of Funnel: Conversion</h2>
      <p>Optimized landing pages, branded PPC, sales outreach, free consultations, and limited-time offers to close deals with ready-to-buy prospects. Test different offers, urgency tactics, and risk reversals (guarantees, free trials). Measure conversion rates and customer acquisition cost.</p>

      <h2>Post-Purchase: Retention</h2>
      <p>Onboarding emails, loyalty programs, review requests, referral programs, and exclusive communities to turn customers into advocates. Happy customers are your best marketing channel—nurture them strategically.</p>
    `,
  },
  {
    id: 6,
    tag: 'Web Development',
    title: 'Why We Moved All Client Sites to Next.js (And You Should Too)',
    excerpt: 'Performance, SEO, and developer experience — Next.js wins on all three.',
    author: 'Rahul Gupta',
    date: 'Dec 05, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
    content: `
      <p>Next.js has transformed how we build websites. Here's why we made the switch and why you should consider it for your next project.</p>

      <h2>Server-Side Rendering (SSR)</h2>
      <p>Better SEO and faster initial page loads because content is pre-rendered on the server. Search engines can crawl fully-rendered HTML, improving indexation. Users see content immediately without waiting for JavaScript to load.</p>

      <h2>Image Optimization</h2>
      <p>The built-in Image component automatically optimizes images for performance without manual work. It serves modern formats (WebP), resizes appropriately, and lazy loads off-screen images. This alone improved our clients' Lighthouse scores by 20-30 points.</p>

      <h2>File-Based Routing</h2>
      <p>Creating new pages is as simple as adding files to the pages directory—no complex routing configuration. Nested routes, dynamic routes, and catch-all routes are intuitive and easy to implement.</p>

      <h2>API Routes</h2>
      <p>Build backend functionality right inside your Next.js app without needing a separate server. Handle form submissions, database queries, authentication, and webhooks directly within your frontend codebase.</p>

      <h2>Performance Results</h2>
      <p>After migrating 20+ client sites to Next.js, we saw average improvements of: 45% faster load times, 35% higher Lighthouse scores, 28% improvement in Core Web Vitals, and 22% increase in organic traffic within 3 months.</p>
    `,
  },
  {
    id: 7,
    tag: 'SEO',
    title: 'Local SEO in 2025: The Complete Guide for Service Businesses',
    excerpt: 'Google Business Profile, local citations, and review strategy explained.',
    author: 'Neha Singh',
    date: 'Nov 28, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1200&h=600&fit=crop',
    content: `
      <p>Local SEO is critical for service businesses. Here's your complete guide to dominating local search in 2025 and attracting more customers from your area.</p>

      <h2>Optimize Google Business Profile</h2>
      <p>Complete every section: business name, address, phone, website, hours, categories, attributes, and products/services. Add photos weekly (at least 100+ over time), respond to all reviews within 24 hours, and post updates (offers, events, announcements) at least 3x per week.</p>

      <h2>Build Local Citations</h2>
      <p>Ensure your NAP (Name, Address, Phone) is consistent across directories like Google Maps, Yelp, Yellow Pages, Justdial, Sulekha, and industry-specific sites. Inconsistent NAP confuses search engines and hurts rankings. Use citation management tools to find and fix inconsistencies.</p>

      <h2>Get More Reviews</h2>
      <p>Ask happy customers for reviews via email, SMS, or in-person. Send a direct link to your Google review form. Respond to every review—positive and negative—professionally and promptly. Businesses with 50+ reviews and 4.5+ star ratings significantly outperform competitors.</p>

      <h2>Create Location Pages</h2>
      <p>If you serve multiple cities, create unique pages for each with local content, testimonials from customers in that area, and embedded Google Maps showing your service zone. Avoid duplicate content by making each location page genuinely unique and valuable.</p>

      <h2>Track Local Rankings</h2>
      <p>Use tools like BrightLocal or SEMrush to track your "map pack" and organic rankings for location-specific keywords. Monitor competitors and adjust your strategy based on what's working in your market.</p>
    `,
  },
  {
    id: 8,
    tag: 'PPC',
    title: 'Meta Ads vs Google Ads: Which Should You Prioritise in 2025?',
    excerpt: 'The answer depends on your funnel stage, audience, and product type.',
    author: 'Vikram Patel',
    date: 'Nov 18, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200&h=600&fit=crop',
    content: `
      <p>Both platforms have strengths. Here's how to decide where to invest your ad budget based on your specific business goals, audience, and offer.</p>

      <h2>Google Ads: High Intent</h2>
      <p>Best for capturing demand when people are actively searching for solutions. Higher conversion rates (typically 3-5% for search ads), higher CPCs (₹30-150 depending on industry), but lower volume. Ideal for: B2B, high-ticket items, local services, and any business where customers search for solutions.</p>

      <h2>Meta Ads: Discovery</h2>
      <p>Ideal for building brand awareness and reaching new audiences before they search. Lower intent but greater scale potential. Lower CPCs (₹5-30), lower conversion rates (0.5-2%), but excellent for visual products, impulse purchases, and remarketing.</p>

      <h2>Our Recommendation</h2>
      <p>Start with Google Ads if you need leads fast and have clear search demand. Use Meta Ads for remarketing (target website visitors) and brand building (reach cold audiences). Run both for full-funnel coverage once you have sufficient budget. Small businesses with limited budgets should prioritize Google Ads for bottom-of-funnel conversions.</p>

      <h2>Testing Framework</h2>
      <p>Allocate 70% of budget to Google Ads and 30% to Meta Ads initially. After 30 days, analyze which platform delivers better ROAS for your specific business. Shift budget toward the winner, but never abandon either platform entirely—they serve different purposes in the customer journey.</p>
    `,
  },
  {
    id: 9,
    tag: 'Branding',
    title: 'Brand Strategy Before Marketing: Why Most Campaigns Fail',
    excerpt: 'Pouring budget into ads without a clear brand position is like filling a leaky bucket.',
    author: 'Priya Sharma',
    date: 'Nov 10, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop',
    content: `
      <p>Marketing amplifies what already exists. Here's why brand strategy must come before any significant marketing spend—and how to build a foundation that scales.</p>

      <h2>Define Your Position</h2>
      <p>What makes you different? Why should customers choose you over competitors? Answer these questions before spending on ads. Your unique value proposition should be clear, defensible, and relevant to your target audience. Test positioning with customer interviews before committing.</p>

      <h2>Create a Brand Voice</h2>
      <p>Consistent communication across all channels builds trust and recognition over time. Document your brand voice: tone (professional vs. casual), vocabulary (industry terms vs. plain language), and personality (authoritative vs. friendly). Train everyone who creates content on these guidelines.</p>

      <h2>Understand Your Audience</h2>
      <p>Create detailed buyer personas based on research, not assumptions. Know their pain points, desires, objections, media consumption habits, and decision-making criteria. Map the customer journey from awareness to purchase, identifying key touchpoints and opportunities.</p>

      <h2>Craft Your Message</h2>
      <p>Your value proposition should be clear, compelling, and communicated in every piece of content. Test different messaging frameworks through A/B testing on landing pages and ads. The winning message is usually simple, specific, and benefit-driven rather than feature-focused.</p>

      <h2>Case Study</h2>
      <p>A B2B SaaS client came to us spending ₹8 lakhs/month on Google Ads with flat results. We paused all spend, spent 6 weeks on brand strategy (positioning, messaging, audience research), rebuilt their website messaging, and restarted ads. Conversion rates tripled, customer acquisition cost dropped by 60%, and ROAS increased from 2x to 6x within 90 days.</p>
    `,
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

export default function BlogPost() {
  const { id } = useParams()
  const article = articles.find(a => a.id === parseInt(id))

  if (!article) {
    return (
      <div className="not-found">
        <h1>Article not found</h1>
        <Link to="/blog">Back to Blog</Link>
      </div>
    )
  }

  return (
    <>
      <article className="blog-post">
        <div className="blog-post__hero">
          <div className="container">
            <Link to="/blog" className="back-link">← Back to Blog</Link>
            <motion.div {...fadeUp(0)}>
              <span className="blog-post__tag">{article.tag}</span>
              <h1 className="blog-post__title">{article.title}</h1>
              <div className="blog-post__meta">
                <div className="blog-post__author">
                  <div className="blog-post__avatar">{article.author[0]}</div>
                  <span>{article.author}</span>
                </div>
                <span className="blog-post__date">{article.date}</span>
                <span className="blog-post__read-time">{article.readTime}</span>
              </div>
            </motion.div>
          </div>
        </div> 

        <div className="blog-post__image">
          <img src={article.image} alt={article.title} />
        </div>

        <div className="container">
          <motion.div 
            className="blog-post__content"
            dangerouslySetInnerHTML={{ __html: article.content }}
            {...fadeUp(0.1)}
          />
        </div>
      </article>
 
      <CTA />
    </>
  )
}