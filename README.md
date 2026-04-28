# 🧠 MindEase

> An AI-powered mental wellness companion that helps you reflect, express, and feel better — one conversation at a time.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-404D59?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-8E75B2?style=for-the-badge&logo=google&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

## 📖 Overview

MindEase is a full-stack AI wellness application that leverages Google's Gemini AI to provide users with a supportive, conversational space for mental well-being. The app features secure authentication via Google OAuth and JWT, enabling a personalized and private experience for every user.

---

## ✨ Features

- 🤖 **AI-Powered Conversations** — Powered by the `@google/genai` SDK (Gemini AI), offering thoughtful, context-aware wellness responses.
- 🔐 **Dual Authentication** — Supports both **Google OAuth 2.0** (via Passport.js) and **JWT-based** email/password login.
- 🗄️ **Persistent Storage** — User data, sessions, and conversation history stored in **PostgreSQL** via **Prisma ORM**.
- 🐳 **Docker Support** — Fully containerized for easy local setup and deployment.
- 📱 **Responsive UI** — Clean, accessible frontend built with **Next.js** and CSS.

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js, TypeScript, CSS |
| **Backend** | Node.js, Express, TypeScript |
| **Database** | PostgreSQL, Prisma ORM |
| **AI** | Google Gemini AI (`@google/genai`) |
| **Auth** | Passport.js, Google OAuth 2.0, JWT |
| **DevOps** | Docker, Dockerfile |

---

## 📁 Project Structure

```
MindEase/
├── frontend/          # Next.js app (UI, pages, components)
├── backend/           # Express API server (routes, controllers, Prisma)
└── .vscode/           # Editor settings
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/) *(optional but recommended)*
- A [Google Cloud](https://console.cloud.google.com/) project with OAuth 2.0 credentials
- A [Google Gemini API](https://ai.google.dev/) key

---

### 1. Clone the Repository

```bash
git clone https://github.com/student-ankitpandit/MindEase.git
cd MindEase
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
# Server
PORT=5000

# Database
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/mindease"

# JWT
JWT_SECRET=your_jwt_secret_here

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback

# Gemini AI
GEMINI_API_KEY=your_gemini_api_key
```

Run Prisma migrations:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

Start the backend server:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env.local` file in the `frontend/` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

The app will be running at **http://localhost:3000**.

---

### 4. Run with Docker *(Optional)*

```bash
# From the project root
docker compose up --build
```

---

## 🔑 Authentication Flow

```
User
 │
 ├──▶ Google OAuth ──▶ Passport.js ──▶ JWT issued ──▶ Session stored
 │
 └──▶ Email/Password ──▶ bcrypt verify ──▶ JWT issued ──▶ Session stored
```

All protected API routes require a valid **JWT** in the `Authorization` header:

```
Authorization: Bearer <token>
```

---

## 🤖 AI Integration

MindEase uses the **`@google/genai`** SDK to interact with the Gemini AI model. The backend sends user messages to the Gemini API and streams back empathetic, wellness-focused responses.

> **Note:** This project was migrated from the legacy `@google/generative-ai` SDK to the newer `@google/genai` package.

---

## 🛠️ Scripts

### Backend

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Compile TypeScript |
| `npm run start` | Run compiled production build |
| `npx prisma studio` | Open Prisma database GUI |

### Frontend

| Command | Description |
|---|---|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feat/your-feature-name`
3. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/): `git commit -m "feat: add your feature"`
4. Push to your fork: `git push origin feat/your-feature-name`
5. Open a Pull Request.

---

<p align="center">Built with ❤️ to make mental wellness more accessible.</p>
