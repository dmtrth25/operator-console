import { Link, useParams } from 'react-router-dom'

export function CaseDetailsPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl p-6 space-y-4">
        <Link className="text-blue-600 hover:underline" to="/cases">
          ← Back
        </Link>

        <div className="rounded-xl border bg-white p-4">
          <h1 className="text-xl font-semibold">Case #{id}</h1>
          <p className="mt-2 text-gray-600">Next: load data from API (tRPC + Postgres + Drizzle)</p>
        </div>
      </div>
    </div>
  )
}
