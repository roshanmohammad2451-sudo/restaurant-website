# Restaurant Website

A modern, responsive restaurant landing site built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui components. This project is optimized for fast performance and can be deployed as a static site. [page:1]

## Features

- Responsive layout for mobile, tablet, and desktop. [page:1]
- Modern UI built with **React** and TypeScript. [page:1]
- Styling with Tailwind CSS and shadcn/ui component library. [page:1]
- Vite-based development workflow with hot module replacement. [page:1]
- Ready for deployment to GitHub Pages, Netlify, or Vercel. [page:1]
- Configured ESLint and TypeScript for better developer experience. [page:1]

## Tech Stack

- React + TypeScript [page:1]  
- Vite [page:1]  
- Tailwind CSS [page:1]  
- shadcn/ui [page:1]  
- Playwright & Vitest (testing setup from template) [page:1]  
- Bun / npm for package management (lockfiles included) [page:1]

## Getting Started

### Prerequisites

- Node.js (LTS recommended)  
- npm, pnpm, yarn, or Bun (choose one package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/roshanmohammad2451-sudo/restaurant-website.git

cd restaurant-website

# Install dependencies (pick one)
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

### Run in development

```bash
npm run dev
# or
bun dev
```

The app will usually be available at `http://localhost:5173/` (Vite default). [page:1]

### Build for production

```bash
npm run build
# or
bun run build
```

The production-ready files will be generated in the `dist` folder. [page:1]

### Preview production build

```bash
npm run preview
```

## Project Structure

```text
.
├── public/              # Static assets
├── src/                 # Application source code
│   ├── components/      # Reusable UI components
│   ├── pages/           # Top-level pages or views
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions / helpers
│   └── main.tsx         # Application entry
├── index.html           # Root HTML template
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig*.json       # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Scripts and dependencies
```

(Adjust folders above to match your actual `src` layout.)

## Available Scripts

Commonly used npm scripts (may vary slightly depending on your setup): [page:1]

- `npm run dev` – Start development server. [page:1]  
- `npm run build` – Build production bundle. [page:1]  
- `npm run preview` – Preview the production build locally. [page:1]  
- `npm run lint` – Run ESLint checks (if configured). [page:1]  
- `npm test` or `npm run test` – Run tests with Vitest/Playwright (if configured). [page:1]

## Customization

- Update restaurant branding (name, logo, colors) in the components and Tailwind configuration. [page:1]  
- Modify sections like hero, menu, gallery, testimonials, and contact form to match your restaurant content.  
- Add integration with backend or third-party services (for example, reservation APIs or WhatsApp order links).

## Deployment

You can deploy the built site to any static hosting provider:

- GitHub Pages  
- Netlify  
- Vercel  
- Cloudflare Pages  

Build the project and point your hosting provider to the `dist` directory. [page:1]

## Roadmap

- Add real menu data from an API.  
- Add authentication for admin menu updates.  
- Add SEO improvements (meta tags, structured data).  
- Add multi-language support.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. [page:1]

## License

This project is licensed under the MIT License (or your preferred license). Update this section if you use a different license.
