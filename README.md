# SeedBank

SeedBank is a fintech portfolio project that combines a marketing landing page, a login flow, a protected client area, and an AI-powered help assistant in the same product journey.

The current architecture uses a React frontend and a Spring Boot backend that acts as a BFF (Backend For Frontend). The BFF centralizes authentication endpoints, profile data, and the AI chat integration with Google Gemini.

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
- demo authentication flow with token persistence
- protected client area populated from backend profile data
- loading states for login, session restore, and protected navigation
- AI help modal backed by the Spring Boot BFF
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

- AI help modal available in the public experience
- local React state for messages, input, and loading
- BFF endpoint at `POST /api/v1/chat`
- Gemini-backed conversational support flow mediated by Spring Boot

## Architecture

### Frontend

- React 19
- TypeScript
- Vite
- styled-components

The frontend renders the landing, login, and protected app flows, and consumes the BFF through HTTP requests. The help modal sends the user message to the BFF and renders the returned reply locally.

### Backend BFF

- Java 21+
- Spring Boot
- Spring Web
- REST controllers for auth, profile, and chat
- native integration with Google Gemini via `RestClient`

The BFF is responsible for:

- exposing frontend-oriented endpoints under `/api/v1`
- isolating Gemini API access and secrets from the browser
- shaping chat responses into a frontend-friendly payload: `{ "reply": "..." }`
- keeping the UI decoupled from the external AI provider

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
  main/
    java/
      com/seedbank/api/
        controller/
        dto/
        service/
    resources/
```

The project keeps frontend UI concerns and backend BFF code in the same repository, which makes local integration and portfolio demonstration straightforward.

## Active Routes And Endpoints

Frontend routes currently in use:

- `/` public landing page
- `/login` authentication page
- `/app` protected client area

Backend endpoints currently used:

- `POST /api/v1/auth/login`
- `GET /api/v1/auth/me`
- `POST /api/v1/auth/logout`
- `POST /api/v1/chat`

## Local Development

### Frontend

```bash
npm install
npm run dev
```

### Backend BFF

```bash
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
gemini.api.key=your_key
gemini.api.model=gemini-2.5-flash
```

You can place those values in `src/main/resources/application.properties` or externalize them per environment.

## Demo Authentication

The authentication flow is still demo-oriented for portfolio purposes, but it is wired through real HTTP requests so the experience stays closer to a production product.

Current demo credentials:

- login: `client@seedbank.com`
- password: `Seed1234`

## Deployment Notes

The expected deployment model is:

- frontend on Vercel
- Spring Boot BFF on a Java-capable hosting platform

For production to work correctly:

- `VITE_API_URL` must point to the deployed BFF base URL
- the BFF CORS configuration must allow the active frontend domain
- Gemini credentials must be configured only on the backend
- frontend builds must never embed Gemini secrets directly

Without that alignment, authentication requests and the AI help flow will fail in production.

## Current Status

This project is no longer just a landing page MVP.

Current phase:

- landing structure consolidated
- auth flow implemented with backend support
- protected client area implemented
- AI help experience migrated to the Spring Boot + Gemini BFF
- visual polish and deployment alignment in progress
