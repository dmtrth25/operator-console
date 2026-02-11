export const env = {
  PORT: Number(process.env.PORT ?? 4000),
  DATABASE_URL: process.env.DATABASE_URL ?? 'postgres://app:app@localhost:5433/operator_console',
  CORS_ORIGIN: process.env.CORS_ORIGIN ?? 'http://localhost:5173',
} as const
