# SeedBank

SeedBank is a fintech portfolio project built around three connected experiences:

- a public landing page
- an authentication flow
- a protected client area backed by a fake API

The project is designed to look and behave more like a real product than a static marketing page, while still keeping the backend simple enough for portfolio use.

## Current Scope

The project currently includes:

- public landing page with marketing sections
- dedicated `/login` route with its own layout
- protected `/app` client area
- fake authentication flow with token storage
- fake customer profile served by the backend
- loading states for session restore and protected navigation
- footer placeholder items without active routes

## Tech Stack

Frontend:

- React 19
- TypeScript
- Vite
- styled-components

Backend:

- Node.js
- Express
- CORS
- express-rate-limit

## Project Structure

```text
src/
  components/
  content/
  context/
  layouts/
  pages/
  router/
  services/
  styles/

server/
  src/
    config/
    controllers/
    data/
    middlewares/
    routes/
    services/
```

## Routes

Frontend routes currently in use:

- `/` public landing page
- `/login` authentication page
- `/app` protected client area

## Local Development

Frontend:

```bash
npm install
npm run dev
```

Backend:

```bash
cd server
npm install
npm run dev
```

## Environment Variables

Frontend expects:

```bash
VITE_API_URL=http://localhost:3001
```

Backend currently uses environment variables such as:

```bash
PORT=3001
OPENAI_API_KEY=your_key
OPENAI_WORKFLOW_ID=your_workflow_id
```

## Fake Auth Flow

The backend exposes fake auth endpoints for portfolio/demo purposes:

- `POST /api/v1/auth/login`
- `GET /api/v1/auth/me`
- `POST /api/v1/auth/logout`

Current demo credentials:

- login: `client@seedbank.com`
- password: `Seed1234`

## Deployment Notes

The frontend is intended for Vercel and the backend for Render.

For production to work correctly:

- `VITE_API_URL` in Vercel must point to the Render backend URL
- the backend CORS configuration in Render must allow the active Vercel domain
- if the Vercel deployment URL changes, the backend must be updated accordingly

Without that alignment, authentication and help/chat requests will fail in production.

## Current Status

The project is no longer just an initial landing page MVP.

Current phase:

- landing structure consolidated
- auth flow implemented with mock backend support
- client dashboard experience implemented
- visual polish and deployment alignment in progress
