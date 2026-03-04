# SeedBank – AI-Powered Student Banking Concept

SeedBank is a student-focused digital banking concept designed to grow with users from childhood to university and beyond.

This project started as a modern landing page focused on storytelling and long-term financial growth.  
During development, the idea evolved into something more interactive: an **AI support agent integrated directly into the application**.

The result is a full-stack project combining a responsive frontend, a backend API, and an AI assistant capable of answering questions about the platform using a structured knowledge base.

---

# 🎯 Product Vision

SeedBank follows a hybrid growth model — a banking experience that evolves with each stage of life:

• supervised accounts for children  
• independent financial tools for teens  
• university-focused rewards and benefits  
• a long-term financial ecosystem built on transparency and security  

The goal is to create a financial partner that grows alongside the user — from their first savings to their first degree and beyond.

---

# 🤖 AI Support Agent

A conversational assistant was added to help users quickly find information about SeedBank products.

Instead of navigating the entire page, users can simply ask questions in a chat interface.

The agent works using a **knowledge-based retrieval system**, where the backend searches for relevant information and provides that context to the AI model before generating a response.

Key characteristics:

• contextual responses based on a local knowledge base  
• focused answers about SeedBank products and features  
• integration directly into the website interface  
• secure API communication through a backend server  

This creates a **context-aware support experience directly within the application**.

---

# 🧠 Architecture Overview

The project follows a **full-stack architecture** separating presentation, API logic, and AI integration.

```

User
↓
React Frontend
↓
API Request
↓
Node.js Backend
↓
Knowledge Retrieval (RAG)
↓
OpenAI API
↓
Response returned to the interface

```

The backend acts as a secure intermediary between the frontend and the AI service.

---

# 🚀 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Styled-components
- CSS Grid & Flexbox

## Backend

- Node.js
- Express.js
- REST API

## AI Integration

- OpenAI API
- Retrieval Augmented Generation (RAG)
- Knowledge Base (JSON)

## Infrastructure

- Vercel (frontend deployment)
- Render (backend API)
- Git / GitHub

---

# 🧱 UI Architecture

The frontend follows a component-based architecture with a structured layout system:

• **Section & Container pattern** for consistent spacing  
• responsive layout using CSS Grid  
• centralized theme configuration (colors, spacing, breakpoints)  
• reusable UI primitives for consistency  

This ensures scalability while keeping the interface easy to maintain.

---

# 📱 Responsiveness

The interface adapts across mobile, tablet, and desktop breakpoints.

Features include:

• fluid grid layouts using `auto-fit` and `minmax`  
• mobile-adaptive navigation  
• scalable typography hierarchy  
• structured spacing system using theme tokens  

Tested across common viewport widths (480px, 768px, 1024px and desktop screens).

---

# 🔐 API Security

Several protective layers were implemented on the backend:

• rate limiting to prevent abuse  
• application token authentication  
• CORS configuration for controlled frontend access  
• environment variables for sensitive credentials  

These mechanisms help ensure safe communication between the application and the AI service.

---

# 📂 Project Structure

```

frontend/
src/
components/
styles/
assets/

server/
index.js
knowledge.json

````

The project separates UI components, styling layers, and backend logic to keep responsibilities clearly defined.

---

# 🛠️ Running Locally

Clone the repository and install dependencies.

Frontend:

```bash
npm install
npm run dev
````

Backend:

```bash
cd server
npm install
node index.js
```

---

# 🌐 Live Project

Frontend
[https://seed-bank-five.vercel.app](https://seed-bank-five.vercel.app)

Backend API
[https://seedbank-api.onrender.com](https://seedbank-api.onrender.com)

---

# 📌 Future Improvements

• conversation memory for the AI agent
• vector-based semantic search for improved retrieval
• improved accessibility (ARIA roles and semantics)
• analytics for user queries
• enhanced UI micro-interactions

---

# ✨ Project Status

Responsive landing page implemented
AI support agent integrated
Backend API deployed
Full-stack architecture established

The project continues to evolve as new features and improvements are explored.
