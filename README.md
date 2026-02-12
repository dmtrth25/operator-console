# Operator Console (Full-Stack)

A full-stack TypeScript monorepo simulating a production-grade frontend-heavy architecture with a fully type-safe API layer.

---

## Stack

Frontend:

- React + TypeScript + Vite
- TailwindCSS
- Zustand
- React Router
- React Query v5
- tRPC client
- SuperJSON

Backend:

- Node.js + Express
- tRPC v11
- Zod
- Drizzle ORM
- PostgreSQL (Docker)

Tooling:

- pnpm workspaces

---

## Monorepo Structure

apps/
web/ → React frontend  
 api/ → Node + tRPC backend

---

## Getting Started

Install dependencies:

```bash
pnpm install
```

To run the application

```bash
docker compose up
```

```bash
pnpm dev
```

(api)

```bash
pnpm dev
```

(web)
