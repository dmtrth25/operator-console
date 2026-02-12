import { Link, useSearchParams } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import { useCasesFilters } from '../state/casesFilters'
import { useDebouncedValue } from '../lib/useDebouncedValue'
import { trpc } from '../lib/trpc'

export function CasesListPage() {
  const [params, setParams] = useSearchParams()
  const { q, status, setQ, setStatus, hydrateFromUrl } = useCasesFilters()
  const debouncedQ = useDebouncedValue(q, 250)

  // hydrate from URL once
  useEffect(() => {
    const urlQ = params.get('q') ?? ''
    const urlStatus = (params.get('status') as unknown) ?? 'all'
    hydrateFromUrl({
      q: urlQ,
      status: urlStatus === 'open' || urlStatus === 'closed' ? urlStatus : 'all',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // sync to URL
  useEffect(() => {
    const next = new URLSearchParams()
    if (q) next.set('q', q)
    if (status !== 'all') next.set('status', status)
    setParams(next, { replace: true })
  }, [q, status, setParams])

  const input = useMemo(
    () => ({
      q: debouncedQ ? debouncedQ : undefined,
      status: status === 'all' ? undefined : status,
    }),
    [debouncedQ, status],
  )

  const {
    data: filtered = [],
    isLoading,
    error,
  } = trpc.casesList.useQuery(input, {
    placeholderData: prev => prev,
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Cases</h1>
            <p className="text-sm text-gray-600">Search + filters (Zustand + URL sync + tRPC)</p>
          </div>
          <Link className="text-blue-600 hover:underline" to="/admin">
            Admin
          </Link>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search cases…"
            className="w-full sm:w-80 rounded-lg border px-3 py-2 bg-white"
          />

          <select
            value={status}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={e => setStatus(e.target.value as any)}
            className="w-full sm:w-48 rounded-lg border px-3 py-2 bg-white">
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>

          <div className="text-sm text-gray-600 sm:ml-auto">
            {isLoading ? 'Loading…' : `${filtered.length} shown`}
          </div>
        </div>

        {error && <div className="text-sm text-red-600">{error.message}</div>}

        <div className="rounded-xl border bg-white">
          <div className="p-3 border-b font-medium">Results</div>
          <ul className="divide-y">
            {filtered.map(c => (
              <li key={c.id} className="p-3 flex items-center justify-between">
                <Link className="hover:underline" to={`/cases/${c.id}`}>
                  {c.title}
                </Link>
                <span className="text-sm text-gray-600">{c.status}</span>
              </li>
            ))}
            {!isLoading && filtered.length === 0 && (
              <li className="p-6 text-gray-600">No results</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
