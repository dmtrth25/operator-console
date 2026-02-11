import express from 'express'
import cors from 'cors'
import { createExpressMiddleware } from '@trpc/server/adapters/express'
import { env } from './env'
import { appRouter } from './router'

const app = express()

app.use(cors({ origin: env.CORS_ORIGIN }))

app.get('/health', (_req, res) => res.json({ ok: true }))

app.use('/trpc', createExpressMiddleware({ router: appRouter }))

app.listen(env.PORT, () => {
  console.log(`API running on http://localhost:${env.PORT}`)
})
