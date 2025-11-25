# PoolQuotes.com

A national pool services lead generation site built with Next.js 14, TypeScript, and TailwindCSS.

## Features

- **3,000+ SEO-optimized pages**:

  - 30 state pages
  - 600 city pages (20 cities per state)
  - 3,000 service pages (5 services per city)

- **SEO Features**:

  - Unique title and meta description for every page
  - JSON-LD Schema.org markup (WebSite, Organization, Service, FAQPage, BreadcrumbList)
  - Proper H1, H2, H3 heading structure
  - FAQ sections on every page
  - Internal linking structure

- **URL Structure**:
  - `/` - Homepage
  - `/services` - Services listing
  - `/[stateSlug]` - State pages
  - `/[stateSlug]/[citySlug]` - City pages
  - `/[stateSlug]/[citySlug]/[serviceSlug]` - Service pages

## Services

1. Pool Installation
2. Pool Repair
3. Pool Cleaning
4. Pool Resurfacing
5. Pool Remodeling

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
poolquotes/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── [stateSlug]/       # Dynamic state pages
│   │   ├── [citySlug]/        # Dynamic city pages
│   │   ├── [serviceSlug]/     # Dynamic service pages
│   │   ├── services/          # Services listing page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── FAQ.tsx            # FAQ component
│   │   └── JSONLDScript.tsx  # JSON-LD schema component
│   ├── data/
│   │   └── locations.ts       # States, cities, and services data
│   └── lib/
│       └── seo.ts            # SEO utility functions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Deployment

This project is configured for Vercel deployment. Simply connect your GitHub repository to Vercel and deploy.

### Build Output

The site generates static pages at build time using `generateStaticParams`, making it perfect for SEO and fast loading times.

## Data

All location data is stored in `src/data/locations.ts`. The file contains:

- 30 states with abbreviations
- 20 cities per state (600 total)
- 5 services

To modify locations or services, edit the `STATES` and `SERVICES` arrays in `src/data/locations.ts`.

## SEO

Every page includes:

- Unique `<title>` and meta description
- Proper heading hierarchy (H1, H2, H3)
- JSON-LD structured data
- FAQ sections with schema markup
- Breadcrumb navigation
- Internal linking

## License

MIT
