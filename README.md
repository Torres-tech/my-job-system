## LearnWise AI

Your personal AI learning assistant that adapts to your learning style and helps you master new skills through intelligent course recommendations and personalized learning paths.

### Tech Stack
- Next.js (App Router) + TypeScript + TailwindCSS
- API routes (Node 18+)
- MongoDB (Mongoose), Redis, LangGraph (planned)

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
- `GET /api/courses/list?category=&difficulty=` – list available courses (auth)
- `POST /api/courses/create` – create new course (instructor/admin)
- `POST /api/learn/analyze` – analyze learning progress and get recommendations (auth)
- `POST /api/learn/adapt` – adapt content based on learning style (auth)
- `POST /api/enroll` – enroll in a course (auth)
- `GET /api/enrollments/history` – list user's enrollments with progress (auth)
- `GET /api/instructor/overview` – teaching stats (instructor/admin)
- `POST /api/learn/complete-lesson` – mark lesson as completed (auth)

### AI Learning Features
- Redis URL in `.env.local`: `REDIS_URL=redis://localhost:6379`
- Start learning session: `POST /api/learn/start` with `{ courseId }` (auth)
- Learning logs and progress tracking stored in `Logs` collection
