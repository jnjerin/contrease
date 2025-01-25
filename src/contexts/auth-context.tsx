'use client'

import { createContext, useContext } from 'react'

const AuthContext = createContext({
  user: {
    id: '1',
    name: 'Demo User',
    email: 'demo@example.com'
  },
  loading: false
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthContext.Provider value={{
      user: {
        id: '1',
        name: 'Demo User',
        email: 'demo@example.com'
      },
      loading: false
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
