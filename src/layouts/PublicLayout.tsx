import { useAuth } from '@/features/auth/contexts/AuthContext'
import Footer from '@/shared/components/footer'
import Navbar from '@/shared/components/navbar'
import useScroll from '@/shared/hooks/useScroll'
import { Navigate, Outlet } from 'react-router'

function PublicLayout() {

  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to="/feed" replace />
  }

  useScroll()

  return (
    <>
      <div className="flex flex-col min-h-svh">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default PublicLayout
