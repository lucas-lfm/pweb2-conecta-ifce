import { useAuth } from '@/features/auth/contexts/AuthContext'
import Navbar from '@/shared/components/navbar'
import { Navigate, Outlet } from 'react-router'

function AppLayout() {

  const  { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to='/login' replace/>
  }

  return (
    <>
      <div className="flex flex-col min-h-svh">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default AppLayout
