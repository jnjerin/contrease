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

// 'use client'

// import { createContext, useContext } from 'react'
// import { useSession } from 'next-auth/react'

// type AuthContextType = {
//   user: any
//   isLoading: boolean
// }

// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   isLoading: true,
// })

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const { data: session, status } = useSession()

//   return (
//     <AuthContext.Provider value={{
//       user: session?.user,
//       isLoading: status === 'loading',
//     }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => useContext(AuthContext)
