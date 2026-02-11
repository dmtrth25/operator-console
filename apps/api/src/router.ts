import { z } from 'zod'
import { db } from './db'
import { publicProcedure, router } from './trpc'
import { cases } from '../db/schema'
import { eq, ilike, and } from 'drizzle-orm'

export const appRouter = router({
  casesList: publicProcedure
    .input(
      z
        .object({
          q: z.string().optional(),
          status: z.string().optional(),
        })
        .optional(),
    )
    .query(async ({ input }) => {
      const conditions = []

      if (input?.q) {
        conditions.push(ilike(cases.title, `%${input.q}%`))
      }

      if (input?.status) {
        conditions.push(eq(cases.status, input.status))
      }

      const query = db.select().from(cases)

      if (conditions.length > 0) {
        return query.where(and(...conditions))
      }

      return query
    }),
})

export type AppRouter = typeof appRouter
