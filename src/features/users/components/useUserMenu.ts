import { useAuth } from '@/features/auth/contexts/AuthContext'
import { logoutUser } from '@/features/auth/services/login.service'
import { useNavigate } from 'react-router'

export function useUserMenu() {
  const { authUser, clearAuthUser } = useAuth()
  const navigate = useNavigate()
  const triggerLogout = () => {
    clearAuthUser()
    logoutUser()
    navigate('/login')
  }

  return {
    authUser,
    triggerLogout,
  }
}
