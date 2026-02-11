import { Navigate, Route, Routes } from 'react-router-dom'
import { CasesListPage } from './pages/CasesListPage'
import { CaseDetailsPage } from './pages/CaseDetailsPage'
import { AdminPage } from './pages/AdminPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cases" replace />} />
      <Route path="/cases" element={<CasesListPage />} />
      <Route path="/cases/:id" element={<CaseDetailsPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<div className="p-6">Not found</div>} />
    </Routes>
  )
}

