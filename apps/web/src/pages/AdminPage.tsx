import { Link } from 'react-router-dom'

export function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl p-6 space-y-4">
        <Link className="text-blue-600 hover:underline" to="/cases">
          ← Back
        </Link>

        <div className="rounded-xl border bg-white p-4">
          <h1 className="text-xl font-semibold">Admin</h1>
          <p className="mt-2 text-gray-600">Later: feature flags, users, roles.</p>
        </div>
      </div>
    </div>
  )
}
