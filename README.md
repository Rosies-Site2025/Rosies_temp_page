# Rosie's Temporary Site

This repository is a Next.js (App Router) TypeScript project used for a marketing/services site. It uses Tailwind CSS for styling and Framer Motion for animations. The project also includes a small API route for contact handling.

## Quick overview

- Framework: Next.js 16 (app router)
- Language: TypeScript + React 18
- Styling: Tailwind CSS
- Animations: Framer Motion
- Additional libs: Three.js, lucide-react, react-icons, resend

## Requirements

- Node.js 16+ (Node 18+ recommended)
- npm (or yarn / pnpm)



## Project structure (high-level)

- `app/` — Next.js App Router pages and components
	- `app/page.tsx` — home page
	- `app/api/contact/route.ts` — contact API route
	- `app/components/` — shared React components
- `public/` — static assets (images, icons)
- `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, and Tailwind config at repo root



## Notes & suggestions

- Accessibility: ensure images and iframes include alt/title attributes and that interactive elements are keyboard-accessible.
- Performance: the site includes animations and Three.js assets — test on low-end devices and reduce animation complexity if needed.
- Types: keep TypeScript types strict for components and API routes to avoid runtime errors.


## License

Not licensable. 




