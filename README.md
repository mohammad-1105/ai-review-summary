# AI Review Summary

A Next.js app that summarizes and analyzes product reviews with AI so users can make better purchase decisions.

## What it does

The app will let people paste or load product reviews and get AI-generated summaries: pros, cons, key themes, and sentiment. The goal is to surface what matters in reviews without reading every one.

## Tech stack

- **Next.js 16** — App Router, React Server Components
- **TypeScript** — Type-safe code and data layer for reviews
- **Tailwind CSS 4** — Styling
- **shadcn/ui** (v3.8.0) — UI components (Card, Button, Avatar, etc.), New York style, Lucide icons
- **Biome** — Linting and formatting
- **Bun** — Package manager and scripts

Planned: **Vercel AI SDK** for summarization, structured output (e.g. Zod), caching, and production concerns like error handling and monitoring.

## Getting started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description                    |
| ------------- | ------------------------------ |
| `bun dev`     | Start dev server               |
| `bun build`   | Production build               |
| `bun start`   | Run production server          |
| `bun lint`    | Run Biome check                |
| `bun format`  | Format with Biome              |
| `bun run add:ui <component>` | Add a shadcn/ui component (uses shadcn@3.8.0) |

Example: `bun run add:ui dialog` to add the Dialog component.
