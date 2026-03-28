import {
  celarStoredUser,
  getStoredUser,
  setStoredUser,
} from '@/features/auth/storages/authUser.storage'
import type { AuthUser } from '@/features/auth/types/dto/AuthDTO'
import { createContext, useContext, useState, type ReactNode } from 'react'

type AuthContextType = {
  isAuthenticated: boolean
  authUser: AuthUser | null
  setAuthUser: (user: AuthUser) => void
  clearAuthUser: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authUser, setAuthUser] = useState<AuthUser | null>(() =>
    getStoredUser(),
  )

  function setUser(user: AuthUser) {
    setStoredUser(user)
    setAuthUser(user)
  }

  function clearUser() {
    celarStoredUser()
    setAuthUser(null)
  }

  return (
    <AuthContext
      value={{
        isAuthenticated: authUser !== null,
        authUser,
        setAuthUser: setUser,
        clearAuthUser: clearUser,
      }}
    >
      {children}
    </AuthContext>
  )
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) {
    throw Error(
      'O contexto de autenticação não pode ser acessado fora do AuthProvider',
    )
  }

  return context
}
