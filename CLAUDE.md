# Shanghai Connect – Development Rules

Shanghai Connect is a bilingual English/Chinese static site (plain HTML/CSS/JS, no build step) that helps newcomers navigate life in Shanghai. Deployed on Vercel at https://shanghai-connect.com with clean URLs — every page lives at `<route>/index.html` and is linked without the `.html` extension.

## Design principles

The site should feel like **Lonely Planet × Apple × Notion**, with the usability of Airbnb and the discoverability of Google Travel. Every page should answer:

1. What is this?
2. Why is it useful?
3. What should the user do next?

Priorities: mobile-first, fast loading, highly readable, accessible (WCAG AA), search-first, consistent with the design system in `styles.css` — never introduce one-off styles.

# SEO First Development Rules

**Every decision made for Shanghai Connect must consider SEO as a core requirement**, not as an afterthought. The objective is to make Shanghai Connect the highest-quality English-language resource for newcomers to Shanghai while building long-term organic search traffic.

## SEO Philosophy

Every page should answer a real question that someone is searching for.

When creating or modifying any page, always ask:

- What would someone type into Google to find this?
- What search intent does this satisfy?
- Is this page better than the current top-ranking pages?
- Does this page naturally encourage users to continue exploring the website?

SEO should never reduce readability. Pages should be written for humans first and search engines second.

## Keyword Strategy

Before creating any new page:

1. Identify the primary keyword.
2. Identify 5–15 supporting keywords.
3. Identify related search intent.
4. Identify internal pages that should link to it.
5. Identify future pages it should eventually connect to.

Each page should target **one primary keyword** and multiple related long-tail keywords. Avoid creating multiple pages targeting the same keyword unless there is a clear difference in search intent.

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

## Internal Linking

Every page should link naturally to related content. For example, Essential Apps should link to the VPN, mobile payments, metro, transportation, and SIM card guides. The website should function as a tightly connected knowledge base rather than isolated articles.

## Pillar and Cluster Strategy

Organize content into pillar pages supported by cluster articles. Example: **Living in Shanghai** (pillar) → Essential Apps, Mobile Payments, VPN Guide, SIM Cards, Banking, Healthcare, Cost of Living, Transportation, Metro Guide.

Each cluster article should link back to the pillar page, and the pillar page should link to every supporting article.

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

## Technical SEO

All development should prioritize:

- Fast page speed
- Mobile-first design
- Responsive layouts
- Accessibility (WCAG)
- Semantic HTML
- Structured data
- XML sitemap (update `sitemap.xml` whenever a page is added, removed, or renamed)
- robots.txt
- Clean navigation
- Descriptive URLs
- Core Web Vitals optimisation

## Content Quality

Never create thin content. Each guide should become one of the best resources available online. Content should include practical advice, screenshots where useful, step-by-step instructions, pros and cons, local insights, frequently updated information, and helpful tips for newcomers. Whenever possible, improve on existing competitor content instead of simply matching it.

## Images

Images should be compressed, use descriptive filenames, include meaningful alt text, support the surrounding content, and improve user understanding rather than decorate the page.

## Future Scalability

All content should fit into a scalable information architecture. Before creating a page, consider where it belongs in the hierarchy, its parent category, child pages, related guides, and future expansion opportunities. Avoid creating isolated content.

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
