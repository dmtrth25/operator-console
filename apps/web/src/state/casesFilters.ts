import { create } from 'zustand'

type Status = 'all' | 'open' | 'closed'

type State = {
  q: string
  status: Status
  setQ: (q: string) => void
  setStatus: (s: Status) => void
  hydrateFromUrl: (v: { q: string; status: Status }) => void
}

export const useCasesFilters = create<State>(set => ({
  q: '',
  status: 'all',
  setQ: q => set({ q }),
  setStatus: status => set({ status }),
  hydrateFromUrl: v => set({ q: v.q, status: v.status }),
}))
