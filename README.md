This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). Pinned to Next.js 14 + React 18, using npm and Tailwind CSS.

## Getting Started

### Node version

Use Node 20 (via `.nvmrc`). If you use nvm:

```bash
nvm use || (nvm install 20 && nvm use 20)
```

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Project Scripts

- `npm run dev` — start dev server (Turbopack)
- `npm run build` — production build
- `npm start` — run production server
- `npm run lint` — run ESLint
- `npm run lint:fix` — fix lint issues
- `npm run type-check` — TS type-check only
- `npm run format` — check Prettier formatting
- `npm run format:fix` — write Prettier formatting
- `npm run check` — type-check + lint + format check

## Monogatari

Install:

```bash
npm i @monogatari/core@2.6.0 --save-exact
```

Basic usage (example):

```ts
import { SomeExport } from "@monogatari/core";
// Use in your components or services
```

Demo route:

- Visit `/monogatari` for a client-only dynamic import demo with comments.
- The page is intended as a temporary placeholder and can be deleted later.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
