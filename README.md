# Shanghai Connect

**Shanghai Connect** is a bilingual English/Chinese platform that helps expats, tourists, international students, business travellers, and foreign residents navigate life in Shanghai.

**Tagline:** Shanghai starts here.

**Live site:** [shanghai-connect.com](https://shanghai-connect.com) — the root currently redirects to a coming-soon page until launch. To preview the full site, visit [shanghai-connect.com/?preview](https://shanghai-connect.com/?preview).

## Vision

Shanghai can be difficult to navigate for newcomers because important information is scattered across WeChat groups, blogs, forums, outdated articles, and word of mouth. Shanghai Connect brings essential Shanghai information together in one trusted, bilingual, easy-to-use place — less a traditional directory, more a **digital concierge for Shanghai**.

The first release is the **Shanghai Starter Pack**: curated, editor-managed guides covering essential apps, VPNs, neighbourhoods, transportation, foreign groceries, and must-know information for arriving in and living in Shanghai. User accounts, reviews, and community features come in later phases.

## What's built

The site is a static multi-page site with clean, extensionless URLs (each page lives at `<route>/index.html`).

**Core pages**

- [Homepage](index.html) — bilingual, organized around the newcomer journey (prepare / arrive / settle / explore), with search and category filters
- [Living in Shanghai](living-in-shanghai/index.html) and [Moving to Shanghai](moving-to-shanghai/index.html) — pillar pages
- [Coming soon](coming-soon/index.html) — launch gate shown at the root until launch
- [404](404.html)

**Guides** (in [guides/](guides/))

- [Essential Apps](guides/essential-apps/index.html)
- [Best VPNs for China](guides/best-vpns-for-china/index.html)
- [Areas to Live](guides/areas-to-live/index.html)
- [Arrival Checklist](guides/arrival-checklist/index.html)
- [Cost of Living](guides/cost-of-living-shanghai/index.html)
- [Emergency Contacts & Healthcare](guides/emergency-contacts-healthcare/index.html)
- [Foreign Groceries](guides/foreign-groceries/index.html)
- [Mobile Payments for Foreigners](guides/mobile-payments-china-foreigners/index.html), with dedicated [Alipay](guides/how-to-use-alipay-in-china/index.html) and [WeChat Pay](guides/how-to-use-wechat-pay/index.html) guides
- [Pudong Airport to City](guides/pudong-airport-to-city/index.html)
- [Shanghai Metro](guides/shanghai-metro-guide/index.html)
- [Transportation](guides/shanghai-transportation/index.html)
- [SIM Cards & Internet Access](guides/sim-cards-internet-access/index.html)
- [Taxis, Didi & Airport Transfers](guides/taxis-didi-airport-transfers/index.html)

**Neighbourhood pages** (in [neighbourhoods/](neighbourhoods/))

- [Jing'an](neighbourhoods/jingan/index.html)
- [Former French Concession](neighbourhoods/former-french-concession/index.html)
- [Jinqiao](neighbourhoods/jinqiao/index.html)

**SEO & deployment infrastructure**

- [sitemap.xml](sitemap.xml) and [robots.txt](robots.txt)
- [vercel.json](vercel.json) — clean URLs, legacy `.html` redirects, the coming-soon root redirect, cache and security headers
- Brand assets, logo mark, and favicon in [assets/brand/](assets/brand/)

## Repository structure

| Path | Purpose |
|---|---|
| `index.html`, `styles.css`, `script.js` | Homepage and shared styles/behavior |
| `guides/`, `neighbourhoods/`, `living-in-shanghai/`, `moving-to-shanghai/` | Content pages (folder-based routes) |
| `coming-soon/`, `404.html` | Launch gate and error page |
| `assets/` | Images, brand assets, and the [image source map](assets/shanghai-connect-source-map.md) |
| `docs/` | [Product & technical plan](docs/product-technical-plan.md), [collaboration guide](docs/how-we-work-together.md) |
| `CLAUDE.md` | SEO-first development rules applied to all AI-assisted work |
| `vercel.json`, `sitemap.xml`, `robots.txt` | Deployment and SEO configuration |

## Local development

There is no build step, but internal links use extensionless clean URLs, so opening `index.html` directly in a browser will break navigation. Serve the folder with a clean-URL-aware server instead:

```sh
npx serve .        # clean URLs on by default
# or
vercel dev         # uses vercel.json (includes the coming-soon redirect; open /?preview)
```

Note: `npx serve` does not apply the `vercel.json` redirects, so the homepage loads directly without the coming-soon gate.

## Technology

**Current:** static HTML/CSS/JS, no framework, hosted on Vercel with the custom domain `shanghai-connect.com`.

**Planned** (documented in [docs/product-technical-plan.md](docs/product-technical-plan.md)): Next.js + TypeScript + Tailwind, Sanity CMS, PostgreSQL in later phases, Typesense search, Cloudflare in front of Vercel.

## Design

The site should feel like **Lonely Planet × Apple × Notion**, with the usability of Airbnb and the discoverability of Google Travel. Mobile-first, fast, readable, accessible, SEO-friendly, and consistent with the design system in `styles.css`. The full inspiration list and design-system details are in [docs/product-technical-plan.md](docs/product-technical-plan.md); the working SEO and design rules are in [CLAUDE.md](CLAUDE.md).

## Next steps

1. Launch: remove the coming-soon root redirect
2. Build remaining neighbourhood pages (Pudong, Xuhui, Changning, Hongqiao, Minhang, Putuo, Huangpu, Yangpu)
3. Build remaining must-know guides (banking, visas, internet access, everyday living)
4. Set up analytics and Google Search Console
5. Migrate to Next.js + Sanity CMS per the technical plan

## Future expansion

After the Starter Pack: restaurants, cafés, bars, hotels, attractions, shopping, local services, events, communities, jobs, classifieds, user accounts, public reviews, saved favourites, native iOS/Android apps, and a WeChat Mini Program. The architecture should allow these to be added without major restructuring.
