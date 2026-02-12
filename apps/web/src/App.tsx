import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { CasesListPage } from './pages/CasesListPage'
import { CaseDetailsPage } from './pages/CaseDetailsPage'
import { AdminPage } from './pages/AdminPage'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/cases" className="font-semibold text-gray-900">
            Operator Console
          </Link>

          <nav className="flex items-center gap-4 text-sm">
            <Link to="/cases" className="text-gray-700 hover:text-gray-900">
              Cases
            </Link>
            <Link to="/admin" className="text-gray-700 hover:text-gray-900">
              Admin
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/cases" replace />} />
          <Route path="/cases" element={<CasesListPage />} />
          <Route path="/cases/:id" element={<CaseDetailsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<div className="mx-auto max-w-5xl p-6">Not found</div>} />
        </Routes>
      </main>
    </div>
  )
}

