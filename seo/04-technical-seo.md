# Technical SEO — Rudren Solutions LLP

## robots.txt

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /static/_

Sitemap: https://www.rudren.com/sitemap.xml
```

**Implementation:** Place at `public/robots.txt`

---

## sitemap.xml

Generate using Vite + React Router. Install `vite-plugin-sitemap`:

```bash
npm install vite-plugin-sitemap
```

**vite.config.ts integration:**

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

const dynamicRoutes = [
  '/',
  '/about',
  '/services',
  '/on-site-packaging',
  '/products',
  '/contact',
  '/faqs',
  '/tools-and-tackles',
  '/industries',
  '/industrial-packaging-verna-goa',
  '/industrial-packaging-madkai-goa',
  '/packaging-supplier-ponda-goa',
  '/packaging-company-margao-goa',
  '/industrial-packaging-vasco-goa',
  '/packaging-services-panaji-goa',
  '/packaging-supplier-mapusa-goa',
  '/packaging-company-bicholim-goa',
  '/industrial-packaging-kundaim-goa',
  '/packaging-supplier-curchorem-goa',
]

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://www.rudren.com',
      routes: dynamicRoutes,
      lastmod: true,
      changefreq: 'monthly',
      priority: {
        '/': 1.0,
        '/about': 0.8,
        '/services': 0.9,
        '/on-site-packaging': 0.9,
        '/products': 0.9,
        '/contact': 0.7,
        '/faqs': 0.6,
      },
    }),
  ],
})
```

**Manual sitemap.xml** (`public/sitemap.xml`):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.rudren.com/</loc>
    <lastmod>2026-07-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.rudren.com/about</loc>
    <lastmod>2026-07-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.rudren.com/services</loc>
    <lastmod>2026-07-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.rudren.com/products</loc>
    <lastmod>2026-07-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.rudren.com/contact</loc>
    <lastmod>2026-07-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.rudren.com/faqs</loc>
    <lastmod>2026-07-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

---

## Canonical URLs

Every page must have a self-referencing canonical tag:

```html
<link rel="canonical" href="https://www.rudren.com/" />
```

**Implementation in React (using react-helmet-async):**

```tsx
import { Helmet } from 'react-helmet-async'

function SEO({ title, description, canonical }: { title: string; description: string; canonical: string }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Rudren Solutions" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
```

---

## Open Graph Tags

```html
<meta property="og:title" content="Industrial Packaging Company Goa | On-Site Packaging Services | Rudren Solutions" />
<meta property="og:description" content="Goa's trusted industrial packaging company — supply, machinery, and on-site teams for manufacturers and exporters." />
<meta property="og:url" content="https://www.rudren.com/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Rudren Solutions" />
<meta property="og:image" content="https://www.rudren.com/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="en_IN" />
```

**OG Image:** Create a branded 1200×630px image with logo + tagline.

---

## Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Industrial Packaging Company Goa | On-Site Packaging Services | Rudren Solutions" />
<meta name="twitter:description" content="Goa's trusted industrial packaging company — supply, machinery, and on-site teams for manufacturers and exporters." />
<meta name="twitter:image" content="https://www.rudren.com/og-image.jpg" />
<meta name="twitter:site" content="@rudrensolutions" />
```

---

## Schema Markup (JSON-LD)

### Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.rudren.com/#organization",
  "name": "Rudren Solutions",
  "url": "https://www.rudren.com",
  "logo": "https://www.rudren.com/logo.png",
  "description": "Industrial packaging solutions provider in Goa — packaging supply, on-site teams, machinery, and cargo securing.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Goa",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9607024997",
    "contactType": "sales",
    "email": "info@rudren.com",
    "availableLanguage": ["English", "Hindi", "Konkani"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/rudrensolutions",
    "https://www.indiamart.com/rudrensolutions"
  ]
}
```

### Local Business Schema

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.rudren.com/#localbusiness",
  "name": "Rudren Solutions",
  "image": "https://www.rudren.com/logo.png",
  "url": "https://www.rudren.com",
  "telephone": "+91-9607024997",
  "email": "info@rudren.com",
  "description": "Industrial packaging solutions provider in Goa — packaging supply, on-site teams, machinery, and cargo securing.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Goa",
    "addressRegion": "Goa",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "15.4909",
    "longitude": "73.8278"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    {"@type": "City", "name": "Goa"},
    {"@type": "AdministrativeArea", "name": "Verna Industrial Estate"},
    {"@type": "AdministrativeArea", "name": "Madkai Industrial Estate"},
    {"@type": "AdministrativeArea", "name": "Ponda"},
    {"@type": "AdministrativeArea", "name": "Margao"},
    {"@type": "AdministrativeArea", "name": "Panaji"}
  ],
  "priceRange": "₹₹"
}
```

### Breadcrumb Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rudren.com/"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.rudren.com/services"},
    {"@type": "ListItem", "position": 3, "name": "Industrial Packaging", "item": "https://www.rudren.com/services"}
  ]
}
```

### FAQ Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What industrial packaging services does Rudren Solutions offer in Goa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rudren Solutions provides complete industrial packaging services in Goa including packaging supply, on-site packaging teams, export packaging, cargo securing, packaging audits, and annual service contracts."
      }
    },
    {
      "@type": "Question",
      "name": "Does Rudren Solutions supply PET and steel strapping in Goa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Rudren Solutions supplies both PET strapping and steel strapping in Goa for industrial bundling, pallet stabilization, and heavy-load securing."
      }
    },
    {
      "@type": "Question",
      "name": "What areas in Goa does Rudren Solutions serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rudren Solutions serves all major industrial areas in Goa including Verna, Madkai, Ponda, Margao, Vasco, Panaji, Mapusa, Bicholim, Kundaim, and Curchorem."
      }
    }
  ]
}
```

### Website Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.rudren.com/#website",
  "name": "Rudren Solutions",
  "url": "https://www.rudren.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.rudren.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### Product Schema (per product page)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "PET Strapping",
  "description": "High-quality PET strapping for industrial bundling and pallet stabilization.",
  "brand": {"@type": "Brand", "name": "Rudren Solutions"},
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "areaServed": "Goa"
  }
}
```

---

## Core Web Vitals Recommendations

| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | < 2.5s | Optimize images (WebP + responsive), lazy load below-fold images, preload hero image |
| FID | < 100ms | Code-split JS bundles, defer non-critical JS, minimize main thread work |
| CLS | < 0.1 | Set explicit width/height on all images, avoid layout shifts from dynamic content |

**Image Optimization:**
- Convert all PNG/JPG to WebP format
- Use srcSet for responsive images
- Lazy load all below-the-fold images

**JavaScript Optimization:**
- Implement React.lazy() for route-based code splitting
- Remove unused JavaScript
- Defer analytics scripts
- Use `type="module"` for script tags

**CSS Optimization:**
- Purge unused CSS (Tailwind already helps)
- Inline critical CSS above the fold
- Load non-critical CSS asynchronously

**Font Optimization:**
- Use `font-display: swap` for all custom fonts
- Preload Google Fonts using `<link rel="preload">`
- Subset fonts if possible

---

## HTTPS & Security

- ✅ Valid SSL certificate installed
- ✅ HSTS header enabled
- ✅ All internal links use HTTPS
- ✅ All external resources loaded over HTTPS
- ✅ Redirect HTTP → HTTPS (301)

---

## 404 & Redirect Management

- Custom 404 page with navigation back to homepage
- Monitor 404 errors in Google Search Console monthly
- Implement 301 redirects for any structural URL changes
- Redirect broken external backlinks