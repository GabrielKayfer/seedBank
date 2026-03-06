# SeedBank – AI-Powered Student Banking Concept

SeedBank is a student-focused digital banking concept designed to grow with users from childhood to university and beyond.

What started as a modern landing page focused on storytelling and long-term financial growth evolved into a more interactive full-stack experience: an application with an integrated AI support agent.

The project now combines a responsive frontend, a backend API, and an AI assistant powered through **OpenAI Agent Builder + ChatKit**, enabling users to interact with the platform through a secure embedded chat experience.

---

# 🎯 Product Vision

SeedBank follows a hybrid growth model — a banking experience that evolves with each stage of life:

- supervised accounts for children
- independent financial tools for teens
- university-focused rewards and benefits
- a long-term financial ecosystem built on transparency and security

The goal is to create a financial partner that grows alongside the user — from their first savings to their first degree and beyond.

---

# 🤖 AI Support Agent

A conversational assistant was integrated into the platform to help users quickly find information about SeedBank products and features.

Instead of navigating the entire page, users can interact directly with an embedded chat interface.

This assistant is now powered through **OpenAI Agent Builder**, with the chat experience embedded into the application using **ChatKit**.

Key characteristics:

- embedded AI support experience directly in the interface
- backend-created secure chat sessions
- workflow-based agent integration using Agent Builder
- separation between frontend UI, backend session handling, and agent workflow
- cloud-based architecture ready for real-world deployment scenarios

This creates a more scalable and production-oriented support experience inside the application.

---

# 🧠 Architecture Overview

The project now follows a **full-stack architecture** with a clear separation between UI, backend session handling, and hosted agent execution.

```text
User
↓
React Frontend
↓
ChatKit Embedded UI
↓
Backend Session Endpoint
↓
OpenAI ChatKit Session
↓
Agent Builder Workflow
↓
Response returned to the interface
````

The backend no longer handles the full conversational logic directly.
Instead, it acts as a secure intermediary responsible for creating ChatKit sessions and protecting sensitive credentials.

---

# 🚀 Tech Stack

## Frontend

* React
* TypeScript
* Vite
* Styled-components
* CSS Grid & Flexbox

## Backend

* Node.js
* Express.js
* REST API

## AI Integration

* OpenAI Agent Builder
* OpenAI ChatKit
* Workflow-based conversational backend

## Infrastructure

* Vercel (frontend deployment)
* Render (backend API)
* Git / GitHub

---

# 🧱 UI Architecture

The frontend follows a component-based architecture with a structured layout system:

* **Section & Container pattern** for consistent spacing
* responsive layout using CSS Grid
* centralized theme configuration (colors, spacing, breakpoints)
* reusable UI primitives for consistency
* embedded modal-based support experience

This structure keeps the interface scalable and maintainable while allowing new integrations to be added cleanly.

---

# 📱 Responsiveness

The interface adapts across mobile, tablet, and desktop breakpoints.

Features include:

* fluid grid layouts using `auto-fit` and `minmax`
* mobile-adaptive navigation
* scalable typography hierarchy
* structured spacing system using theme tokens

Tested across common viewport widths such as 480px, 768px, 1024px, and desktop screens.

---

# 🔐 API Security

Several protective layers were implemented on the backend:

* rate limiting to prevent abuse
* controlled CORS configuration for approved frontend origins
* environment variables for sensitive credentials
* secure backend-side session creation for ChatKit
* no exposure of OpenAI secret keys in the frontend

This architecture helps ensure safer communication between the application, the backend, and the hosted AI workflow.

---

# 📂 Project Structure

```text
src/
  components/
  styles/
  assets/

server/
  index.js
```

The project separates UI components, styling layers, and backend logic to keep responsibilities clearly defined.

---

# 🛠️ Running Locally

Clone the repository and install dependencies.

## Frontend

```bash
npm install
npm run dev
```

## Backend

```bash
cd server
npm install
node index.js
```

Make sure to configure the required environment variables before running the backend.

Example:

```env
OPENAI_API_KEY=your_openai_api_key
OPENAI_WORKFLOW_ID=your_workflow_id
PORT=3001
```

---

# 🌐 Live Project

## Frontend

[https://seed-bank-five.vercel.app](https://seed-bank-five.vercel.app)

## Backend API

[https://seedbank-api.onrender.com](https://seedbank-api.onrender.com)

---

# 📌 What This Project Demonstrates

This project goes beyond UI implementation and explores real full-stack integration challenges, including:

* frontend and backend communication
* secure API architecture
* deployment across different platforms
* environment variable management
* CORS handling in production
* integration with hosted AI workflows
* migration from a custom chat backend to a session-based embedded AI architecture

It represents hands-on practice with problems commonly found in real-world product development.

---

# 📌 Future Improvements

* conversation memory
* richer customization of the embedded support experience
* improved accessibility (ARIA roles and semantics)
* analytics for user interactions
* enhanced UI micro-interactions
* domain and environment management refinements for production workflows

---

# ✨ Project Status

* responsive landing page implemented
* AI support agent integrated
* backend API deployed
* ChatKit session architecture implemented
* Agent Builder workflow connected
* full-stack deployment established

The project continues to evolve as new features and architectural improvements are explored.
