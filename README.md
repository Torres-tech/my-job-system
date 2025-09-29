## Job Application Copilot

Multi-agent web app to automate end-to-end job applications.

### Tech Stack
- Next.js (App Router) + TypeScript + TailwindCSS
- API routes (Node 18+)
- MongoDB (Mongoose), Redis, LangGraph (planned), Playwright (planned)

### Getting Started
1. Copy envs:
```bash
cp config/env.example .env.local
```
2. Install deps:
```bash
pnpm install
```
3. Run dev server:
```bash
pnpm dev
```
Open http://localhost:3000

### Database
- Set `MONGODB_URI` in `.env.local`.
- Seed sample data:
```bash
pnpm seed
```
- Health checks:
  - API: `/api/health`
  - DB: `/api/health/db`

### Auth
Add to `.env.local`:
```bash
JWT_SECRET=replace-with-strong-secret
JWT_EXPIRES_IN=7d
```

Endpoints:
- `POST /api/auth/register` { name, email, password, role? }
- `POST /api/auth/login` { email, password } → `{ token, user }`
- `GET /api/auth/me` with `Authorization: Bearer <token>`

### Scripts
- `pnpm dev` – start dev server
- `pnpm build` – production build
- `pnpm start` – start production server
- `pnpm lint` / `pnpm lint:fix` – run ESLint
- `pnpm format` / `pnpm format:check` – run Prettier
- `pnpm seed` – run seed script (placeholder)

### Structure
- `src/app` – routes and API endpoints
- `src/components` – UI components
- `src/lib` – shared utilities/config
- `src/types` – shared types
- `scripts/seed.ts` – seed script

### Next Steps
Step 2 will add MongoDB models, connection utilities, and initial schemas.

### Core API Endpoints
- `GET /api/jobs/list?q=` – list jobs (auth)
- `POST /api/jobs/scrape` – create placeholder job (mentor/admin)
- `POST /api/analyze` – returns `{ match }` score (auth)
- `POST /api/resume/tailor` – returns `{ resume }` tailored text (auth)
- `POST /api/coverletter/generate` – returns `{ cover_letter }` (auth)
- `POST /api/apply/submit` – create submitted application (auth)
- `GET /api/applications/history` – list user’s applications with job info (auth)
- `GET /api/mentor/overview` – basic stats (mentor/admin)

### Orchestration
- Redis URL in `.env.local`: `REDIS_URL=redis://localhost:6379`
- Start pipeline: `POST /api/orchestrate/start` with `{ jobId }` (auth)
- Logs stored in `Logs` collection
