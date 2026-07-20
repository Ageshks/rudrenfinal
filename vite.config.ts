import { defineConfig } from 'vite'
import path from 'path'
import fs from 'node:fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

function seoRoutePages() {
  const pages = [
    ["about", "About Rudren Solutions LLP | Packaging Company in Goa", "Learn about Rudren Solutions LLP, a Goa-based industrial packaging company supporting businesses with dependable packaging solutions."],
    ["services", "Industrial Packaging Services in Goa | Rudren Solutions", "Explore industrial packaging, on-site packaging, cargo securing, packaging audits and technical support from Rudren Solutions in Goa."],
    ["products", "Packaging Machinery & Consumables in Goa | Rudren", "Browse packaging machinery, strapping, tapes, stretch films and industrial packaging consumables supplied by Rudren Solutions in Goa."],
    ["industries", "Industries We Serve | Industrial Packaging Goa | Rudren", "Rudren provides industrial packaging solutions for manufacturing, pharmaceuticals, food processing, shipping, logistics and more across Goa."],
    ["tools-tackles", "Packaging Tools & Tackles in Goa | Rudren Solutions", "Find dependable steel strapping tools, composite strapping tools, industrial strappers and packaging tools in Goa."],
    ["contact", "Contact Rudren Solutions LLP | Packaging Supplier in Goa", "Contact Rudren Solutions LLP for industrial packaging, machinery, consumables, cargo securing and on-site packaging in Goa."],
  ] as const

  return {
    name: "seo-route-pages",
    closeBundle() {
      const outputDirectory = path.resolve(__dirname, "dist")
      const indexPath = path.join(outputDirectory, "index.html")
      if (!fs.existsSync(indexPath)) return
      const home = fs.readFileSync(indexPath, "utf8")
      for (const [slug, title, description] of pages) {
        const canonical = `https://www.rudren.com/${slug}/`
        const pageHtml = home
          .replace("Rudren Solutions LLP | Industrial Packaging Solutions in Goa", title)
          .replace("Rudren Solutions LLP provides industrial packaging, packaging machinery, consumables, cargo securing and on-site packaging services across Goa.", description)
          .replaceAll("https://www.rudren.com/\"", `${canonical}\"`)
        const targetDirectory = path.join(outputDirectory, slug)
        fs.mkdirSync(targetDirectory, { recursive: true })
        fs.writeFileSync(path.join(targetDirectory, "index.html"), pageHtml)
      }
    },
  }
}

export default defineConfig({
  // Custom domain (https://www.rudren.com)
  base: '/',

  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
    seoRoutePages(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  optimizeDeps: {
    include: ['motion', 'framer-motion'],
  },

  build: {
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-helmet-async"],
          email: ["@emailjs/browser"],
        },
      },
    },
  },

  assetsInclude: [
    '**/*.svg',
    '**/*.csv',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.webp',
  ],
})
