# SeedBank

SeedBank is a fintech portfolio project that combines a marketing landing page, a login flow, a protected client area, and an AI-powered help assistant in the same product journey.

The current architecture uses a React frontend and a Spring Boot backend that acts as a BFF (Backend For Frontend). The BFF centralizes authentication endpoints, profile data, and the AI chat integration with Google Gemini.

## Production Links

- Live Demo: https://seed-bank-five.vercel.app
- API Endpoint: https://seedbank-akc6.onrender.com

## Product Overview

The project currently covers four connected layers:

- a public landing page focused on trust, positioning, and conversion
- a dedicated authentication experience at `/login`
- a protected client area at `/app`
- an AI help flow available from the landing experience

This keeps the project strong for portfolio use because it shows product thinking, frontend structure, route protection, and a frontend consuming a backend tailored to the UI.

## Current Scope

Implemented today:

- public landing page with reusable marketing sections
- separated layouts for public, auth, and protected app experiences
- dedicated login route instead of modal-based authentication
- JWT-based authentication flow with token persistence
- protected client area populated from backend profile data
- loading states for login, session restore, and protected navigation
- dual-tier AI chat experience backed by the Spring Boot BFF
- footer placeholder items kept as presentation only, without fake navigation

## Core Features

### Landing Experience

- branded landing page with marketing sections
- distinct header/footer structure for public pages
- support/help entry point through the AI assistant

### Authentication Flow

- dedicated `/login` route
- frontend-to-backend login requests
- token persistence in local storage
- protected route handling

### Client Area

- protected `/app` route
- customer dashboard fed by backend profile data
- account summary, transactions, and profile information
- isolated app layout, separate from the landing experience

### AI Assistant

- public chat available from the landing page without authentication
- private chat available only inside the authenticated client area
- isolated endpoints for public and private assistant flows
- Gemini-backed conversational support flow mediated by Spring Boot

## Architecture

### Frontend

- React 19
- TypeScript
- Vite
- styled-components

The frontend renders the landing, login, protected app, and private assistant flows. It consumes the BFF through HTTP requests and uses `VITE_API_URL` so local development can point to `localhost` while production uses Render.

### Backend BFF

- Java 17+
- Spring Boot
- Spring Web
- Spring Security
- Spring Data JPA
- H2 for current runtime persistence
- REST controllers for auth, profile, and chat
- JWT-based stateless auth
- native integration with Google Gemini via `RestClient`

The BFF is responsible for:

- exposing frontend-oriented endpoints under `/api/v1`
- isolating Gemini API access and secrets from the browser
- shaping chat responses into a frontend-friendly payload: `{ "reply": "..." }`
- keeping the UI decoupled from the external AI provider
- separating public AI context from authenticated financial context

## Project Structure

```text
backend/
  src/
    main/
      java/
        com/seedbank/api/
          config/
          controller/
          dto/
          model/
          repository/
          security/
          service/
      resources/
  Dockerfile
  pom.xml

frontend/
  src/
    components/
    content/
    context/
    layouts/
    pages/
    router/
    services/
    styles/
  package.json
  vite.config.ts
```

The project now follows a monorepo structure with strict isolation between frontend and backend concerns.

## Active Routes And Endpoints

Frontend routes currently in use:

- `/` public landing page
- `/login` authentication page
- `/app` protected client area
- `/app/assistant` authenticated AI assistant

Backend endpoints currently used:

- `POST /api/v1/auth/login`
- `GET /api/v1/auth/me`
- `POST /api/v1/auth/logout`
- `POST /api/v1/public/chat`
- `POST /api/v1/private/chat`

## Local Development

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend BFF

```bash
cd backend
./mvnw spring-boot:run
```

By default, the frontend calls the BFF on `http://localhost:8080`.

## Environment Variables

Frontend can use:

```bash
VITE_API_URL=http://localhost:8080
```

Backend uses properties such as:

```bash
server.port=8080
google.ai.api.key=your_key
gemini.api.model=gemini-2.5-flash
jwt.secret=your_secret
```

You can place those values in `backend/src/main/resources/application.properties` or inject them as environment variables in production.

## Demo Authentication

The authentication flow is still demo-oriented for portfolio purposes, but it is wired through real HTTP requests so the experience stays closer to a production product.

Current demo credentials:

- login: `client@seedbank.com`
- password: `senha123`

## Deployment Notes

The expected deployment model is:

- frontend on Vercel
- Spring Boot BFF on Render via Docker

For production to work correctly:

- `VITE_API_URL` must point to the deployed BFF base URL
- the BFF CORS configuration must allow the active frontend domain
- Gemini credentials must be configured only on the backend
- JWT secret must be configured only on the backend
- frontend builds must never embed Gemini secrets directly

Without that alignment, authentication requests and the AI help flow will fail in production.

## Latest Delivery

The most recent delivery focused on production readiness and strict context separation:

- monorepo restructuring into `backend/` and `frontend/`
- Docker and Render preparation for the Spring Boot backend
- Vercel-ready frontend API configuration through `VITE_API_URL`
- dual-tier chat architecture:
  - public assistant on the landing page
  - private financial assistant in `/app/assistant`
- Spring Security hardening with JWT and route protection
- explicit production CORS handling for Vercel domains
- Render login/JWT fix so token generation works with environment-based secrets
- private Gemini prompt enrichment using authenticated user data and recent transactions

## Current Status

This project is no longer just a landing page MVP.

Current phase:

- landing structure consolidated
- auth flow implemented with backend support
- protected client area implemented
- AI help experience migrated to the Spring Boot + Gemini BFF
- production deployment active on Vercel + Render
- final production validation and integration hardening in progress
