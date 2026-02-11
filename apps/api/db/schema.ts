import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const cases = pgTable('cases', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  status: text('status').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
