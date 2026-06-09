# AGENTS.md

## Commands

- `pnpm dev` - Runs Next.js dev with Turbopack + codegen watchers in parallel
- `pnpm dev:email` - Runs email preview server
- `pnpm build` - Runs `prebuild` script first, then `next build`
- `pnpm codegen` - Watches `graphql/*.gql` and `geins/graphql/*.gql`, auto-regenerates types
- `pnpm codegen:website` / `pnpm codegen:geins` - Run codegen for specific project
- `pnpm codegen:datocms` - Generates DatoCMS CMA types
- `pnpm lint` - Next.js lint
- `pnpm geins:sync` / `pnpm geins:sync-all` - Sync products from Geins e-commerce API
- `pnpm reset` - Full reset: rm node_modules, lock, .next, then pnpm i

## Architecture

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript + Turbopack
- **Content**: DatoCMS (graphql.datocms.com) + Geins e-commerce API
- **i18n**: next-intl with `se` as default locale, routes under `/[locale]/`
- **Styling**: Sass with global mixins/functions in `@/styles`, components in `@/components`
- **State**: Zustand store in `lib/store.ts`

## Gotchas

- `next.config.ts:21-23`: `ignoreBuildErrors: true` - TypeScript errors ignored in build
- `next.config.ts:20`: `reactStrictMode: false` - Strict mode disabled
- `datocms.config.ts` - Defines all routes, sitemap, manifest, robots.txt
- Two GraphQL projects in `graphql.config.ts` - DatoCMS (active) and Geins (commented out)
- `package.json:7`: `dev` script runs codegen in background via chokidar - types auto-update
- Uses custom `next-dato-utils` from github (not npm)

## Key directories

- `app/[locale]/*` - Main pages with locale routing
- `graphql/*.gql` - DatoCMS queries
- `geins/graphql/*.gql` - Geins e-commerce queries
- `lib/actions/*` - Server actions
- `types/` - Generated GraphQL types