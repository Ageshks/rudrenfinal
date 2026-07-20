# Google Search Console Setup & Checklist — Rudren Solutions LLP

## Initial Setup

- [ ] **Verify website ownership** — Add TXT record, HTML tag, or Google Analytics property
- [ ] **Submit sitemap.xml** — `https://www.rudren.com/sitemap.xml`
- [ ] **Submit robots.txt** — Verify `https://www.rudren.com/robots.txt` is accessible
- [ ] **Set preferred domain** — `https://www.rudren.com` (with www if applicable)

## Indexing

- [ ] **Check Index Coverage report** — Review all indexed pages
- [ ] **Request indexing** for new or updated pages
- [ ] **Identify non-indexed pages** and fix issues
- [ ] **Check for "Crawled - currently not indexed"** — Improve content quality
- [ ] **Check for "Discovered - currently not indexed"** — Improve internal linking
- [ ] **Check for "Page with redirect"** — Fix unnecessary redirects
- [ ] **Check for "404 Not Found"** — Implement 301 redirects or restore pages
- [ ] **Check for "Soft 404"** — Improve thin content pages
- [ ] **URL Inspection tool** — Test individual URLs for indexability

## Coverage Issues

| Issue | Action |
|-------|--------|
| Crawled but not indexed | Improve content quality, add internal links |
| Discovered but not indexed | Submit URL for indexing, improve crawlability |
| Soft 404 | Remove or improve thin content |
| 404 errors | Redirect to relevant pages |
| Server errors (5xx) | Check hosting, optimize server response |
| Redirect errors | Fix redirect chains (keep max 3 hops) |
| Blocked by robots.txt | Check if critical pages are blocked |
| Blocked by noindex tag | Remove noindex from pages meant to be indexed |

## Core Web Vitals

- [ ] **Check LCP report** — Should be < 2.5s
- [ ] **Check FID report** — Should be < 100ms
- [ ] **Check CLS report** — Should be < 0.1
- [ ] **Identify problematic URLs** — Review the "Poor" URLs
- [ ] **Check mobile vs desktop** — Optimize both experiences
- [ ] **Run Lighthouse test** — Score target: 90+ on all categories
- [ ] **Implement fixes** for identified issues
- [ ] **Re-test after fixes** — Verify improvement

## Mobile Usability

- [ ] **Check Mobile Usability report** — Fix any issues
- [ ] **Test viewport configuration** — Ensure proper meta viewport tag
- [ ] **Check text size** — Should be legible without zooming
- [ ] **Check tap targets** — Buttons and links should be minimum 48px
- [ ] **Check content width** — Should fit within viewport
- [ ] **Test on real mobile devices** — iPhone, Android, tablets
- [ ] **Check mobile page speed** — Target < 3s load time

## Structured Data

- [ ] **Test Organization schema** — Using Rich Results Test
- [ ] **Test LocalBusiness schema** — Verify all fields
- [ ] **Test Breadcrumb schema** — Verify breadcrumb display
- [ ] **Test FAQ schema** — Verify FAQ rich results
- [ ] **Test Product schema** — Verify product rich results
- [ ] **Test Website schema** — Verify search action
- [ ] **Check for schema errors** — Fix any validation issues
- [ ] **Check for schema warnings** — Address non-critical issues
- [ ] **Monitor Schema report** — Review impressions and clicks from rich results

## XML Sitemap

- [ ] **Sitemap submitted** — Via GSC
- [ ] **Sitemap format** — XML, UTF-8 encoded
- [ ] **Sitemap size** — < 50,000 URLs and < 50MB
- [ ] **Lastmod dates** — Accurate and updated
- [ ] **Changefreq** — Set appropriately per page type
- [ ] **Priority** — Set appropriately (1.0 for homepage, 0.5+ for key pages)
- [ ] **Only indexable URLs** — Exclude non-indexable pages
- [ ] **No broken URLs** — Verify all URLs in sitemap resolve correctly
- [ ] **Update frequency** — Regenerate sitemap after content changes

## robots.txt

- [ ] **robots.txt accessible** — Returns 200, not 404
- [ ] **Sitemap referenced** — `Sitemap: https://www.rudren.com/sitemap.xml`
- [ ] **No critical pages blocked** — Verify homepage, services, products aren't blocked
- [ ] **Test using robots.txt tester** — In GSC
- [ ] **Clean syntax** — No syntax errors

## Canonical URLs

- [ ] **Self-referencing canonicals** — Every page has a canonical pointing to itself
- [ ] **No conflicting signals** — Canonical tag matches hreflang, sitemap
- [ ] **Verify in GSC** — Check for "Alternate page with proper canonical tag"

## 404 Errors

- [ ] **Check 404 report** — Review all 404 errors in GSC
- [ ] **Fix important 404s** — Redirect to relevant pages (301)
- [ ] **Custom 404 page** — User-friendly page with navigation options
- [ ] **Monitor weekly** — Check new 404s weekly

## Redirects

- [ ] **Check redirect chains** — Max 3 hops
- [ ] **Check redirect loops** — None
- [ ] **301 for permanent moves** — Never use 302 for permanent changes
- [ ] **Update internal links** — Point directly to final URLs
- [ ] **Update sitemap** — Only include final (non-redirected) URLs

## Internal Linking

- [ ] **Check crawl depth** — Key pages within 3 clicks of homepage
- [ ] **Review orphan pages** — Every page should have at least one internal link
- [ ] **Check link text** — Use descriptive anchor text
- [ ] **Check for broken internal links** — Fix 404s
- [ ] **Review site structure** — Silo structure implemented

## Image SEO

- [ ] **Image ALT text** — Every image has descriptive ALT text
- [ ] **Image file names** — Descriptive, keyword-relevant filenames
- [ ] **Image size** — Compressed, WebP format, < 100KB per image
- [ ] **Responsive images** — srcSet for different viewport sizes
- [ ] **Lazy loading** — Below-fold images use loading="lazy"
- [ ] **Check Search results with images** — Review image impressions

## Page Speed

- [ ] **Lighthouse test** — Score 90+ on all categories
- [ ] **First Contentful Paint (FCP)** — < 1.8s
- [ ] **Time to Interactive (TTI)** — < 3.5s
- [ ] **Total Blocking Time (TBT)** — < 200ms
- [ ] **Speed Index** — < 3.0s
- [ ] **Optimize images** — Convert to WebP, implement srcSet
- [ ] **Minify CSS/JS** — Remove unused code
- [ ] **Enable compression** — Gzip or Brotli
- [ ] **Leverage browser caching** — Set appropriate cache headers
- [ ] **Reduce server response time** — TTFB < 200ms

## HTTPS

- [ ] **SSL certificate valid** — No expiration warnings
- [ ] **HTTPS enabled** — All pages served over HTTPS
- [ ] **HTTP → HTTPS redirect** — 301 permanent redirect
- [ ] **Mixed content** — No HTTP resources on HTTPS pages
- [ ] **HSTS header** — Enabled

## Weekly GSC Tasks

- [ ] Check new 404 errors
- [ ] Review performance report for keyword changes
- [ ] Check for manual actions
- [ ] Review new indexing issues
- [ ] Submit new/updated URLs for indexing
- [ ] Monitor Core Web Vitals

## Monthly GSC Tasks

- [ ] Review full Index Coverage report
- [ ] Analyze query performance (impressions, clicks, CTR)
- [ ] Identify keyword opportunities (pages ranking 4–10)
- [ ] Review backlinks report
- [ ] Check for security issues
- [ ] Review Mobile Usability report
- [ ] Export performance data for reporting
- [ ] Check Enhancements section (Structured Data, Sitelinks Search Box)

## Quarterly GSC Tasks

- [ ] Full SEO audit using GSC data
- [ ] Update sitemap if structure changed
- [ ] Review and update canonical tags
- [ ] Check for duplicate content issues
- [ ] Review international targeting (if applicable)
- [ ] Comprehensive backlink audit
- [ ] Update target keywords report