# SeedBank

SeedBank is a fintech portfolio project that combines a marketing experience, a login flow, a protected client area, and an AI-powered help assistant in the same product journey.

The goal is to present something closer to a real digital banking product than a static landing page: users can move from the public experience into authentication, access a protected customer area, and interact with an AI help flow backed by a server.

## Product Overview

The project currently covers four connected layers:

- a public landing page focused on trust, positioning, and conversion
- a dedicated authentication experience at `/login`
- a protected client area at `/app`
- an AI help flow available from the landing experience

This keeps the project strong for portfolio use because it shows product thinking, frontend structure, backend integration, route protection, and external service integration in the same codebase.

## Current Scope

Implemented today:

- public landing page with reusable marketing sections
- separated layouts for public, auth, and protected app experiences
- dedicated login route instead of modal-based authentication
- fake authentication flow with token persistence
- protected client area populated from backend profile data
- loading states for login, session restore, and protected navigation
- AI help modal powered by OpenAI ChatKit
- footer placeholder items kept as presentation only, without fake navigation

## Core Features

### Landing Experience

- branded landing page with marketing sections
- distinct header/footer structure for public pages
- support/help entry point through the AI assistant

### Authentication Flow

- dedicated `/login` route
- fake login backed by real frontend-to-backend requests
- token persistence in local storage
- protected route handling

### Client Area

- protected `/app` route
- customer dashboard fed by mock API data
- account summary, transactions, and profile information
- isolated app layout, separate from the landing experience

### AI Assistant

- AI help modal available in the public experience
- frontend integration with `@openai/chatkit-react`
- backend session endpoint for ChatKit
- OpenAI-backed conversational support flow

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
- OpenAI / ChatKit session integration

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
  index.js
  src/
    config/
    controllers/
    data/
    middlewares/
    routes/
    services/
```

The project separates UI components, styling layers, routing, auth state, and backend logic to keep responsibilities clearly defined.

## Active Routes

Frontend routes currently in use:

- `/` public landing page
- `/login` authentication page
- `/app` protected client area

Backend endpoints currently used:

- `POST /api/v1/auth/login`
- `GET /api/v1/auth/me`
- `POST /api/v1/auth/logout`
- `POST /api/v1/chatkit/sessions`

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

Backend uses environment variables such as:

```bash
PORT=3001
OPENAI_API_KEY=your_key
OPENAI_WORKFLOW_ID=your_workflow_id
```

## Demo Authentication

The authentication flow is intentionally mocked for portfolio/demo purposes, but it is wired through real HTTP requests so the experience feels closer to a production application.

Current demo credentials:

- login: `client@seedbank.com`
- password: `Seed1234`

## Deployment Notes

The expected deployment model is:

- frontend on Vercel
- backend on Render

For production to work correctly:

- `VITE_API_URL` in Vercel must point to the Render backend URL
- the backend CORS configuration in Render must allow the active Vercel domain
- ChatKit/OpenAI environment variables must be configured in the backend
- if the Vercel deployment URL changes, the backend must be updated accordingly

Without that alignment, authentication requests and the AI help flow will fail in production.

## Current Status

This project is no longer just a landing page MVP.

Current phase:

- landing structure consolidated
- auth flow implemented with mock backend support
- protected client area implemented
- AI help experience integrated
- visual polish and deployment alignment in progress
