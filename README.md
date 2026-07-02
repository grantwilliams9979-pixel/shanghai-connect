# Shanghai Connect

**Shanghai Connect** is a bilingual English/Chinese platform that helps expats, tourists, international students, business travellers, and foreign residents navigate life in Shanghai.

## Project Plan

The complete product and technical plan is available at [docs/product-technical-plan.md](docs/product-technical-plan.md). It covers product requirements, architecture, stack, CMS recommendation, content model, database schema, API design, bilingual implementation, search, SEO, analytics, security, compliance, deployment, GitHub workflow, testing, roadmap, and the MVP launch checklist.

## Website Prototype

The first static website prototype is available at [index.html](index.html). It includes a generated Shanghai hero image, bilingual English/Chinese copy, search, category filters, featured Starter Pack guides, neighbourhood cards, and a newsletter signup state.

To preview it, open `index.html` in a browser.

The first release focuses on building the ultimate **Shanghai Starter Pack**: a practical, curated guide covering essential apps, VPNs, neighbourhoods, transportation, foreign groceries, and must-know information for arriving in and living in Shanghai.

The long-term goal is for Shanghai Connect to become a complete Shanghai lifestyle platform and directory covering restaurants, services, communities, events, attractions, shopping, and everyday life.

---

## User Journey

The website should be designed around the needs of people who are new to Shanghai, including expats, tourists, international students, business travellers, and foreign residents.

The user journey should provide a clear and intuitive path from arrival on the homepage to finding practical, relevant information. Users should be able to quickly understand where to start, browse key categories, and access essential resources without confusion.

The experience should prioritize simplicity, clarity, and usefulness. Content should be organized around common newcomer needs, such as essential apps, VPNs, transportation, neighbourhoods, foreign groceries, local services, and everyday living tips.

The goal is to help users save time, reduce uncertainty, and feel more confident as they prepare for or settle into life in Shanghai.

---

## Vision

Shanghai can be difficult to navigate for newcomers because important information is often scattered across WeChat groups, blogs, forums, outdated articles, and word of mouth.

Shanghai Connect aims to become a trusted, bilingual, easy-to-use resource that brings essential Shanghai information together in one place.

The platform should feel less like a traditional directory and more like a **digital concierge for Shanghai**.

---

## Tagline

**Shanghai starts here.**

---

## First Release: Shanghai Starter Pack

The MVP will focus on curated, editor-managed content only.

User accounts, public reviews, community features, and user-generated content will be added in future phases.

The first release includes practical guides across the following categories. Full content model and editorial spec for each is in [docs/product-technical-plan.md](docs/product-technical-plan.md).

- **Essential Apps** — Payments, messaging, food delivery, maps, ride-hailing, translation, travel, healthcare, and productivity. Guide built: [Essential Apps Starter Pack](guides/essential-apps.html).
- **VPN Guide** — Recommended providers with affiliate links, setup instructions, reliability notes, and eSIM alternatives. Guide built: [Best VPNs for China](guides/best-vpns-for-china.html).
- **Areas to Live** — Neighbourhood guides for Pudong, Jing'an, Former French Concession, Xuhui, Changning, Hongqiao, Minhang, Putuo, Huangpu, and Yangpu. Guide built: [Areas to Live](guides/areas-to-live.html).
- **Shanghai Metro Guide** — Lines, fares, airport connections, payment methods, and recommended apps.
- **Transportation Guide** — Metro, taxis, Didi, high-speed rail, airports, bike sharing, buses, ferries, and walking.
- **Foreign Grocery Guide** — International supermarkets, specialty stores, online grocery services, and delivery options.
- **Must-Know Guides** — Mobile payments, bank accounts, SIM cards, internet access, healthcare, visas, cost of living, and everyday living essentials.

---

## Design Inspiration

Shanghai Connect should not look like a traditional business directory. It should feel like a premium digital guide that combines editorial content, local discovery, and practical tools.

The design should be original, but inspired by the user experience and structure of the following platforms:

### Lonely Planet

[https://www.lonelyplanet.com/](https://www.lonelyplanet.com/)

Inspiration for:

- Destination guides
- Editorial storytelling
- Search experience
- Category navigation
- Featured guides
- Travel-focused content structure

### Apple

[https://www.apple.com/](https://www.apple.com/)

Inspiration for:

- Premium design
- Whitespace
- Typography
- Visual hierarchy
- Simplicity
- Clean user interface

### Notion

[https://www.notion.so/](https://www.notion.so/)

Inspiration for:

- Knowledge-base structure
- Documentation-style guides
- Callout boxes
- Internal linking
- Readability
- Simple navigation

### Airbnb

[https://www.airbnb.com/](https://www.airbnb.com/)

Inspiration for:

- Search experience
- Filter chips
- Mobile-first design
- Cards
- Sticky navigation
- Discovery-focused browsing

### Google Travel

[https://www.google.com/travel/](https://www.google.com/travel/)

Inspiration for:

- Location-based discovery
- Map integration
- Nearby recommendations
- Trip-planning structure
- Geographic browsing

### Time Out

[https://www.timeout.com/](https://www.timeout.com/)

Inspiration for:

- Editorial guides
- Local recommendations
- Best-of articles
- Seasonal collections
- Events and city discovery

### HappyCow

[https://www.happycow.net/](https://www.happycow.net/)

Inspiration for future restaurant listings:

- Listing cards
- Filters
- Maps
- Restaurant detail pages
- Photo galleries

### Atlas Obscura

[https://www.atlasobscura.com/](https://www.atlasobscura.com/)

Inspiration for:

- Storytelling
- Hidden gems
- Local context
- Unique experiences
- Editorial personality

### Spotted by Locals

[https://www.spottedbylocals.com/](https://www.spottedbylocals.com/)

Inspiration for:

- Authentic recommendations
- Insider knowledge
- Local voices
- Curated discovery
- Personal writing style

---

## Design Principles

Shanghai Connect should feel like:

**Lonely Planet × Apple × Notion**

with the usability of **Airbnb** and the discoverability of **Google Travel**.

Every page should answer:

1. What is this?
2. Why is it useful?
3. What should the user do next?

Design priorities:

- Mobile-first
- Fast loading
- Clean and modern
- Highly readable
- SEO-friendly
- Accessible
- Easy to navigate
- Search-first
- Visually polished
- Consistent design system
- Original, not copied from inspiration sites

---

## Technology Stack

The recommended stack is documented in full in [docs/product-technical-plan.md](docs/product-technical-plan.md).

- **Frontend** — Next.js, TypeScript, Tailwind CSS
- **CMS** — Sanity
- **Database** — PostgreSQL (future phases)
- **Search** — Sanity query-based search for MVP; Typesense later
- **Hosting** — Vercel (shanghai-connect.com), with Cloudflare in front

---

## Future Expansion

After the Shanghai Starter Pack has been established, Shanghai Connect should expand to include:

- Restaurants
- Cafés
- Bars
- Hotels
- Attractions
- Shopping
- Local services
- Events
- Communities
- Jobs
- Classifieds
- User accounts
- Public reviews
- Saved favourites
- Native iOS app
- Native Android app
- WeChat Mini Program

The architecture should be designed from the beginning so these features can be added without major restructuring.

---

## Project Status

Current stage: **Active development — static guides built, Vercel deployment in progress**

Completed:

- Product requirements defined
- Technology stack recommended
- Content model defined
- Static homepage prototype built with bilingual support, search, category filters, and featured guides
- Essential Apps guide built ([guides/essential-apps.html](guides/essential-apps.html))
- Best VPNs for China guide built ([guides/best-vpns-for-china.html](guides/best-vpns-for-china.html))
- Areas to Live guide built ([guides/areas-to-live.html](guides/areas-to-live.html))
- Vercel deployment in progress for shanghai-connect.com

Next steps:

1. Complete Vercel deployment for shanghai-connect.com
2. Configure custom domain DNS in GoDaddy
3. Verify SSL and www/root redirect
4. Set up CMS (Sanity)
5. Migrate prototype to Next.js
6. Build guide and category page templates

---

# Shanghai Connect – SEO First Development Rules

From this point forward, **every decision made for Shanghai Connect must consider SEO as a core requirement**, not as an afterthought.

The objective is to make Shanghai Connect the highest-quality English-language resource for newcomers to Shanghai while building long-term organic search traffic.

---

## SEO Philosophy

Every page should answer a real question that someone is searching for.

When creating or modifying any page, always ask:

- What would someone type into Google to find this?
- What search intent does this satisfy?
- Is this page better than the current top-ranking pages?
- Does this page naturally encourage users to continue exploring the website?

SEO should never reduce readability. Pages should be written for humans first and search engines second.

---

## Keyword Strategy

Before creating any new page:

1. Identify the primary keyword.
2. Identify 5–15 supporting keywords.
3. Identify related search intent.
4. Identify internal pages that should link to it.
5. Identify future pages it should eventually connect to.

Each page should target **one primary keyword** and multiple related long-tail keywords.

Avoid creating multiple pages targeting the same keyword unless there is a clear difference in search intent.

---

## Content Structure

Every article should include:

- SEO title
- Meta description
- URL slug
- H1
- Logical H2 and H3 hierarchy
- Internal links
- External authoritative references where appropriate
- Frequently Asked Questions (FAQ)
- Call to Action
- Suggested related guides

Content should be comprehensive enough to become the best resource on the topic.

---

## Internal Linking

Every page should link naturally to related content.

For example:

**Essential Apps**

→ VPN Guide

→ Mobile Payments

→ Metro Guide

→ Transportation Guide

→ SIM Card Guide

→ Banking Guide

The website should function as a tightly connected knowledge base rather than isolated articles.

---

## Pillar and Cluster Strategy

Organize content into pillar pages supported by cluster articles.

**Example:**

Living in Shanghai (Pillar)

- Essential Apps
- Mobile Payments
- VPN Guide
- SIM Cards
- Banking
- Healthcare
- Cost of Living
- Transportation
- Metro Guide

Each cluster article should link back to the pillar page, and the pillar page should link to every supporting article.

---

## On-Page SEO Requirements

Every page should include:

- Optimized title tag (50–60 characters)
- Optimized meta description (140–160 characters)
- Clean URL slug
- One H1 only
- Proper H2/H3 structure
- Descriptive image alt text
- Image compression
- Schema markup where appropriate
- Canonical URL
- Open Graph metadata
- Twitter Card metadata
- Breadcrumb navigation

---

## Technical SEO

All development should prioritize:

- Fast page speed
- Mobile-first design
- Responsive layouts
- Accessibility (WCAG)
- Semantic HTML
- Structured data
- XML sitemap
- robots.txt
- Clean navigation
- Descriptive URLs
- Core Web Vitals optimisation

---

## Content Quality

Never create thin content.

Each guide should become one of the best resources available online.

Content should include:

- Practical advice
- Screenshots where useful
- Step-by-step instructions
- Pros and cons
- Local insights
- Frequently updated information
- Helpful tips for newcomers

Whenever possible, improve on existing competitor content instead of simply matching it.

---

## Images

Images should:

- Be compressed
- Use descriptive filenames
- Include meaningful alt text
- Support the surrounding content
- Improve user understanding rather than decorate the page

---

## Future Scalability

All content should fit into a scalable information architecture.

Before creating a page, consider:

- Where it belongs in the hierarchy
- Parent category
- Child pages
- Related guides
- Future expansion opportunities

Avoid creating isolated content.

---

## AI Development Rule

Whenever creating or modifying any page, automatically provide:

1. Primary keyword
2. Supporting keywords
3. Search intent
4. Suggested URL slug
5. SEO title
6. Meta description
7. Suggested H1
8. Recommended H2 structure
9. Internal linking opportunities
10. Suggested schema markup
11. Image recommendations with alt text
12. Future related articles to strengthen topical authority

If any proposed change weakens SEO, recommend a better alternative before implementing it.

SEO is considered a core feature of Shanghai Connect and should influence every design, content, navigation, and development decision.
