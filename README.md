# Doggie Daycare

a.k.a. "Coding with Claude"

A dog walking and daycare reservation service, built with [Claude Code](https://claude.com/claude-code).

Dog owners book **dog walks** with a specific walker in 30-minute slots, or **day care** for whole days (07:30–17:00) with limited capacity. Walkers manage their own availability and schedule. Admins manage walkers, roles and day care capacity.

> **Status:** early proof of concept. The project scaffold and dependencies are in place; features are being built milestone by milestone (see [Roadmap](#roadmap)).

## Features (POC)

- Email/password sign-in with three roles: **owner**, **walker** and **admin**
- Walk booking on a 30-minute slot grid; consecutive slots form one walk, up to 3 dogs per walk
- Whole-day day care booking with admin-configurable capacity per date
- Double-booking prevented at the database level
- Confirmation and cancellation emails

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | [Next.js](https://nextjs.org) 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| Auth | [Better Auth](https://www.better-auth.com) with the `admin` plugin |
| Database | PostgreSQL 17 |
| ORM | [Drizzle ORM](https://orm.drizzle.team) + drizzle-kit |
| Validation | Zod |
| Dates / time zones | date-fns + @date-fns/tz |
| Email | React Email; Mailpit locally, Resend in production |
| Testing | Vitest, Playwright |

## Prerequisites

- Node.js 24+ and npm
- Docker (for local PostgreSQL and Mailpit)

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Local services (coming in M1)

The app will run fully locally with Docker:

| Service | Address |
|---|---|
| PostgreSQL | `localhost:5432` |
| Mailpit (SMTP) | `localhost:1025` |
| Mailpit (web UI, view sent emails) | [http://localhost:8025](http://localhost:8025) |

Planned workflow once the database setup lands:

```bash
npm run db:up        # start Postgres + Mailpit
npm run db:migrate   # apply migrations
npm run db:seed      # create the first admin user
npm run dev
```

### Environment variables

Configuration will be read from `.env.local` (git-ignored) and validated at startup:

| Variable | Local value |
|---|---|
| `DATABASE_URL` | `postgres://dogapp:dogapp@localhost:5432/dogapp` |
| `BETTER_AUTH_SECRET` | random string, 32+ characters |
| `BETTER_AUTH_URL` | `http://localhost:3000` |
| `BUSINESS_TIMEZONE` | e.g. `Europe/Helsinki` |
| `EMAIL_TRANSPORT` | `smtp` |
| `SMTP_HOST` / `SMTP_PORT` | `localhost` / `1025` |
| `EMAIL_FROM` | `bookings@localhost` |
| `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD` | credentials for the first admin |

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

Database, auth schema and test scripts (`db:*`, `auth:schema`, `test`, `e2e`) will be added in M1.

Dependencies are pinned to exact versions (`save-exact=true` in `.npmrc`).

## Roadmap

| # | Deliverable |
|---|---|
| M1 | Project scaffold, Docker, Drizzle, Better Auth email/password, seed admin |
| M2 | Dogs CRUD, admin user list + promote to walker |
| M3 | Walker availability (weekly + exceptions), slot computation |
| M4 | Walk booking + constraints + confirmation email |
| M5 | Day care booking + capacity admin |
| M6 | Reservations list, cancellation, walker schedule |
| M7 | Tests, polish, Vercel deploy |
| Later | Social login, reviews, walker photos, payments, calendar export |

## Working with Claude

- `CLAUDE.md` / `AGENTS.md` — project instructions for Claude Code
- `.claude/` — shared agents, skills, and settings

Personal settings (`.claude/settings.local.json`, `CLAUDE.local.md`) are git-ignored.
