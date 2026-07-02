# Shanghai Connect Product and Technical Plan

## 1. Product Requirements

Shanghai Connect is a bilingual English and Chinese digital concierge for expats, tourists, international students, business travellers, and foreign residents navigating life in Shanghai.

The MVP is the Shanghai Starter Pack: curated, editor-managed guides that answer the most common newcomer questions before and after arrival. The first release excludes user accounts, public reviews, forums, saved favourites, and other user-generated content, but the architecture should leave room for these later.

Primary MVP capabilities:

- Homepage with clear positioning, featured guides, categories, and search.
- Category landing pages for Essential Apps, VPN, Areas to Live, Metro, Transportation, Foreign Groceries, and Must-Know Guides.
- Guide/article pages with bilingual content, practical steps, related articles, breadcrumbs, SEO metadata, and structured data.
- Search with keyword, category, tag, topic, and neighbourhood filters.
- Language switcher with localized URLs and fallback handling.
- CMS-managed content with draft/publish workflow, roles, images, related articles, tags, and SEO fields.
- Analytics events for search, guide views, category clicks, affiliate clicks, language switches, and newsletter signups.

Success metrics:

- Organic impressions and clicks for starter-pack search intents.
- Search usage rate and zero-result search rate.
- Guide completion or scroll depth.
- Affiliate outbound click-through where relevant.
- Newsletter signup conversion.
- Core Web Vitals passing on mobile.

## 2. Recommended Architecture

Use a headless content architecture:

- Frontend: Next.js application rendering static and dynamic pages.
- CMS: Sanity for editor-managed bilingual content.
- Database: Sanity Content Lake for CMS content; PostgreSQL later for application data such as users, saved places, reviews, and transactional features.
- Search: Next.js server-side search over Sanity queries for MVP; add Typesense or Meilisearch when content volume and filtering complexity justify it.
- Analytics: GA4, Microsoft Clarity, Search Console, and Sentry.
- Hosting: Vercel for the first international MVP, with Cloudflare in front where useful. Reassess Tencent Cloud or Alibaba Cloud if mainland China performance or regulatory requirements become central.

High-level flow:

1. Editors create or update content in Sanity.
2. Sanity webhooks trigger Next.js revalidation.
3. Next.js serves localized pages with metadata, hreflang, JSON-LD, and sitemap entries.
4. Client search calls a lightweight route handler backed by Sanity queries.
5. Analytics capture product events without blocking page rendering.

## 3. Suggested Technology Stack

Frontend:

- Next.js App Router
- TypeScript
- Tailwind CSS
- next-intl or a small custom locale layer for routing and UI strings
- Zod for validation
- React Hook Form for future forms

CMS and content:

- Sanity Studio
- GROQ queries
- Portable Text for rich article content
- Sanity image pipeline

Search:

- MVP: Sanity query-based search plus precomputed searchable fields.
- Later: Typesense for typo tolerance, faceting, synonyms, and fast filtering.

Infrastructure:

- Vercel for frontend hosting and preview deployments.
- Cloudflare for DNS, caching, WAF, and bot controls.
- Sentry for error monitoring.
- GitHub Actions for checks.

## 4. CMS Recommendation

Recommended CMS: Sanity.

Why Sanity fits best:

- Strong structured content modeling for bilingual editorial content.
- Excellent custom Studio experience for editors.
- Draft/published workflow, scheduled publishing, roles, and media support.
- Portable Text works well for guide content, callouts, step lists, related content, and reusable blocks.
- Fast read APIs, CDN support, and webhook-driven static regeneration.
- Easier to operate for a small team than self-hosted Strapi, Directus, or Payload.

CMS comparison:

| CMS | Strengths | Tradeoffs | Fit |
| --- | --- | --- | --- |
| Sanity | Editorial modeling, hosted content lake, flexible Studio, strong localization patterns | Requires content modeling discipline and GROQ knowledge | Best MVP fit |
| Strapi | Familiar open-source CMS, REST/GraphQL, self-hostable | More ops burden, localization and upgrades need care | Good if self-hosting is required |
| Directus | Strong database-first admin, roles, SQL transparency | Less editorial-native than Sanity for rich guides | Good for directory/listing-heavy later phases |
| Payload | TypeScript-native, code-first, flexible | Requires more backend ownership and hosting | Strong later if app backend becomes central |

## 5. Content Model

Core content types:

- `guide`: long-form practical articles.
- `category`: starter-pack sections and future directory sections.
- `tag`: reusable topical tags.
- `neighbourhood`: geographic area profiles.
- `appListing`: structured app entries used inside guides and future app directories.
- `groceryListing`: imported grocery and specialty store entries.
- `transportMode`: metro, taxi, bus, bike sharing, ferry, airports, rail.
- `author`: editor profiles.
- `siteSettings`: navigation, footer, social links, default SEO, analytics IDs.

Shared localized field pattern:

```ts
type LocalizedString = {
  en: string;
  zh: string;
};

type LocalizedText = {
  en: string;
  zh: string;
};
```

Guide fields:

- `title`
- `slug`
- `languageStatus`
- `summary`
- `category`
- `tags`
- `neighbourhoods`
- `heroImage`
- `body`
- `quickFacts`
- `steps`
- `commonProblems`
- `relatedGuides`
- `featured`
- `lastReviewedAt`
- `publishedAt`
- `updatedAt`
- `seoTitle`
- `seoDescription`
- `canonicalUrl`
- `noIndex`

Category fields:

- `name`
- `slug`
- `description`
- `icon`
- `heroImage`
- `sortOrder`
- `featuredGuides`
- `seoTitle`
- `seoDescription`

Future directory listing fields:

- `name`
- `nameZh`
- `slug`
- `category`
- `description`
- `address`
- `neighbourhood`
- `geo`
- `openingHours`
- `priceLevel`
- `contact`
- `website`
- `mapLinks`
- `images`
- `editorNotes`
- `sponsorshipStatus`
- `correctionStatus`

## 6. Database Schema

For the MVP, Sanity stores CMS content. PostgreSQL should be introduced when Shanghai Connect adds users, saved favourites, reviews, listing claims, payments, or operational workflows.

Suggested future PostgreSQL tables:

```sql
create table users (
  id uuid primary key,
  email text unique not null,
  name text,
  preferred_locale text not null default 'en',
  created_at timestamptz not null default now()
);

create table saved_items (
  user_id uuid references users(id),
  item_type text not null,
  item_id text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, item_type, item_id)
);

create table business_claims (
  id uuid primary key,
  listing_id text not null,
  requester_email text not null,
  status text not null default 'pending',
  evidence_url text,
  created_at timestamptz not null default now()
);

create table corrections (
  id uuid primary key,
  item_type text not null,
  item_id text not null,
  submitter_email text,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);
```

## 7. Folder Structure

Recommended monorepo structure:

```txt
shanghai-connect/
  apps/
    web/
      app/
        [locale]/
          page.tsx
          guides/[slug]/page.tsx
          categories/[slug]/page.tsx
          search/page.tsx
        api/search/route.ts
        sitemap.ts
        robots.ts
      components/
      lib/
      styles/
      tests/
    studio/
      schemas/
      structure/
  packages/
    config/
    content-types/
    ui/
  docs/
  .github/workflows/
```

## 8. API Design

MVP API routes:

- `GET /api/search?q=&category=&tag=&neighbourhood=&locale=&page=&sort=`
- `POST /api/events` for lightweight first-party event capture if needed.
- `GET /sitemap.xml`
- `GET /robots.txt`

Search response:

```json
{
  "query": "alipay",
  "page": 1,
  "pageSize": 12,
  "total": 18,
  "results": [
    {
      "type": "guide",
      "title": "How to use Alipay in Shanghai",
      "slug": "/en/guides/how-to-use-alipay",
      "summary": "Set up payments, transport, and mini programs.",
      "category": "Essential Apps",
      "tags": ["payments", "apps"]
    }
  ]
}
```

Future API boundaries:

- Public content APIs stay cacheable.
- Authenticated user APIs are separate and rate-limited.
- Admin workflows remain inside CMS unless custom operational tools are needed.

## 9. Bilingual Implementation Plan

Locales:

- English: `en`
- Simplified Chinese: `zh`

Routing:

- `/en/guides/alipay-shanghai`
- `/zh/guides/alipay-shanghai`
- Use the same stable slug where possible, with optional localized slug aliases later.

Metadata:

- Separate SEO title and description per language.
- Add canonical URL and `hreflang` alternates.
- Provide Open Graph locale variants.

Fallback behavior:

- If a Chinese field is missing, show English content only with an internal editor-visible translation status in CMS, not a public warning.
- Do not publish a localized page until required fields meet the editorial threshold.

Translation workflow:

1. Editor drafts English guide.
2. Translator fills Chinese fields.
3. Reviewer checks terminology and local accuracy.
4. Publisher schedules both locales or publishes one locale with a known fallback policy.

## 10. Search Implementation Plan

MVP:

- Search Sanity documents using title, summary, tags, category, body excerpts, and neighbourhood fields.
- Normalize query input, trim length, and validate filters with Zod.
- Support pagination and newest/relevance sorting.
- Track search terms and zero-result searches.

Future advanced search:

- Add Typesense when there are many listings, typo-tolerant search matters, or map/list filters become central.
- Index localized fields separately.
- Add synonyms such as `metro/subway`, `taxi/Didi`, `phone/SIM/eSIM`, `payments/Alipay/WeChat Pay`.

## 11. Homepage Structure

First viewport:

- Brand navigation with language switcher.
- Search-first hero: "Shanghai starts here."
- Short supporting line explaining the Starter Pack.
- Prominent search input.
- Starter Pack category shortcuts.

Main content:

- Featured guides.
- "Before you arrive" collection.
- "First week in Shanghai" collection.
- Neighbourhood explorer.
- Essential apps preview.
- Latest reviewed guides.
- Newsletter signup.

## 12. Category Page Structure

Each category page should include:

- Category title, Chinese title, and concise description.
- Search/filter controls scoped to the category.
- Featured guide.
- Guide cards sorted by editorial priority.
- Related categories.
- FAQ block where useful.
- SEO copy that answers common search intent without feeling stuffed.

## 13. Guide and Article Page Structure

Article template:

- Breadcrumbs.
- Title and Chinese title where relevant.
- Summary.
- Last reviewed date.
- Quick facts.
- Table of contents.
- Body content with callouts, steps, checklists, and warnings.
- Related guides.
- Category and tag links.
- Affiliate disclosure when needed.
- Structured data.

Each guide should quickly answer:

1. What is this?
2. Why is it useful?
3. What should I do next?

## 14. Design System Recommendations

Brand feel:

- Helpful, modern, trustworthy, practical, international, locally informed, premium but approachable.

Visual direction:

- Clean editorial layout inspired by travel guides and knowledge bases.
- Strong typography and generous reading space.
- Cards only for repeated items such as guide cards and listing cards.
- Sticky mobile-friendly navigation.
- Filter chips for search and browsing.
- Practical callout components for warnings, tips, setup steps, and documents needed.

Suggested tokens:

- Background: `#FAFAF7`
- Text: `#17211B`
- Muted text: `#657069`
- Primary: `#0E7C66`
- Accent: `#D84A2B`
- Gold: `#C99A3D`
- Border: `#E4E1D8`
- Surface: `#FFFFFF`

Accessibility:

- WCAG AA contrast.
- Keyboard-accessible navigation and filters.
- Visible focus states.
- Alt text required for editorial images.
- Avoid hiding critical content inside hover-only UI.

## 15. SEO Plan

Technical SEO:

- Localized URLs.
- Metadata per page.
- Open Graph and Twitter/X cards.
- Canonical URLs.
- `hreflang` tags.
- XML sitemap.
- `robots.txt`.
- JSON-LD for Article, BreadcrumbList, FAQPage where relevant.
- Fast image loading with responsive sizes.
- Internal links between related guides.

Content SEO:

- Target practical intent such as "how to use Alipay in China", "Shanghai SIM card guide", "where to live in Shanghai", and "Shanghai metro guide".
- Keep every guide review-dated.
- Build hub pages around major categories.
- Add FAQs based on search queries and editor knowledge.

## 16. Analytics Plan

Implement:

- Google Analytics 4.
- Microsoft Clarity.
- Google Search Console.
- Sentry for errors.
- Vercel Analytics or Speed Insights for performance.

Track events:

- `search_submitted`
- `search_filter_applied`
- `category_clicked`
- `guide_viewed`
- `affiliate_link_clicked`
- `language_switched`
- `newsletter_signup`
- `related_guide_clicked`

Privacy:

- Respect consent requirements.
- Avoid collecting sensitive personal data in MVP.
- Document analytics providers in privacy and cookie policies.

## 17. Security Checklist

- Store secrets in environment variables.
- Use CMS role-based access control.
- Require strong admin authentication and MFA.
- Validate all API inputs with Zod.
- Rate-limit public API endpoints.
- Use secure response headers.
- Restrict image uploads by file type and size.
- Keep dependencies updated.
- Run dependency scanning in CI.
- Configure backups and restore tests for CMS content.
- Use least-privilege tokens for CMS access.
- Separate preview tokens from production read tokens.

## 18. Compliance Checklist

Required policies:

- Privacy policy.
- Terms of service.
- Cookie policy.
- Affiliate disclosure.
- Sponsored content disclosure.

Operational processes:

- Image licensing records.
- Business listing correction/removal process.
- Data retention policy.
- Personal data access/deletion request process.
- Editorial correction process.
- Clear labeling for sponsored or affiliate content.

China-focused considerations:

- Review hosting, ICP, and local regulatory obligations before intentionally serving mainland China at scale from mainland infrastructure.
- Avoid publishing sensitive or legally risky claims without editorial review.
- Keep medical, visa, tax, and legal content clearly informational and review-dated.

## 19. Deployment Plan

MVP hosting recommendation:

- Vercel for frontend and previews.
- Sanity hosted content lake and Studio.
- Cloudflare for DNS, caching, WAF, and redirects.

Environments:

- `development`
- `preview`
- `production`

Deployment flow:

1. Pull request opens.
2. CI runs lint, typecheck, tests, and build.
3. Vercel creates preview deployment.
4. Content/editorial QA happens against preview.
5. Merge to main deploys production.
6. Sanity webhook triggers revalidation on content changes.

China performance:

- Test from mainland networks before launch.
- Keep pages static where possible.
- Avoid heavy third-party scripts.
- Consider regional CDN or mainland hosting only after compliance review.

## 20. GitHub Workflow

Branches:

- `main`: production.
- `develop` optional if release batching is needed.
- Feature branches: `feature/search`, `feature/guide-template`.

Required checks:

- TypeScript typecheck.
- ESLint.
- Unit tests.
- Build.
- Playwright smoke tests for homepage, category page, guide page, search, and language switcher.

Pull request template:

- Summary.
- Screenshots for UI changes.
- Test plan.
- SEO impact.
- Analytics impact.
- Content migration notes.

## 21. Testing Strategy

Unit tests:

- Locale helpers.
- Search query parsing.
- URL builders.
- Metadata builders.
- CMS data mappers.

Integration tests:

- Search API.
- Sitemap generation.
- Guide page rendering from CMS fixtures.

End-to-end tests:

- Homepage loads and search works.
- Category filters return expected results.
- Guide page includes breadcrumbs, related articles, and metadata.
- Language switcher maps between localized pages.
- Mobile navigation works.

Manual QA:

- Core Web Vitals.
- Accessibility scan.
- SEO crawl.
- Mainland China loading spot checks.
- Editorial preview workflow.

## 22. Development Roadmap

Phase 0: Foundation

- Confirm stack and CMS.
- Create Next.js app and Sanity Studio.
- Define content schemas.
- Set up design tokens and core components.

Phase 1: Starter Pack MVP

- Build homepage, category pages, guide pages, search, sitemap, robots, and analytics.
- Enter seed content for all MVP categories.
- Add bilingual fields and language switcher.
- Launch editor preview workflow.

Phase 2: SEO and Growth

- Expand guide library.
- Add newsletter.
- Add affiliate link tracking.
- Improve internal linking and FAQs.
- Add performance dashboards.

Phase 3: Directory Foundations

- Add structured listings for restaurants, groceries, services, attractions, and schools.
- Add map-aware browsing.
- Add correction/removal workflows.

Phase 4: Community and Accounts

- Add user accounts, saved favourites, reviews, and personalization.
- Introduce PostgreSQL application database.
- Consider native apps and WeChat Mini Program.

## 23. MVP Launch Checklist

Product:

- Starter Pack categories are complete.
- Priority guides are written, reviewed, translated, and dated.
- Related guides and internal links are populated.
- No user-generated content surfaces are live.

Technical:

- Production build passes.
- Sitemap and robots are live.
- Metadata, canonical URLs, and hreflang are verified.
- Search works with filters and pagination.
- Analytics events are validated.
- Error monitoring is configured.
- Environment variables are documented.

Design and QA:

- Mobile, tablet, and desktop layouts are checked.
- Accessibility issues are resolved or tracked.
- Images are optimized and licensed.
- Core Web Vitals pass on key pages.

Operations:

- CMS roles are assigned.
- Backup and restore process is documented.
- Privacy, terms, cookies, affiliate, and sponsored content policies are published.
- Editorial correction process is ready.
- Search Console is connected.
