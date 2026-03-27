import { useAuth } from '@/features/auth/contexts/AuthContext'
import Footer from '@/shared/components/footer'
import NavBar from '@/shared/components/navbar'
import { Button } from '@/shared/components/ui/button'
import { useScroll } from '@/shared/hooks/useScroll'
import { Link, Navigate, Outlet } from 'react-router'

function PublicLayout() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to="/feed" replace />
  }

  useScroll()

  return (
    <>
      <div className="flex flex-col min-h-svh">
        <NavBar>
          <NavBar.Brand to="/" />

          <NavBar.Links>
            <NavBar.Link to="/" text="Início" />
            <NavBar.Link to="#feature-section" text="Recursos" />
            <NavBar.Link to="#faq-section" text="Perguntas Frequentes" />
          </NavBar.Links>

          <NavBar.Actions>
            <Button variant="ghost" size="lg" asChild>
              <Link to="/login">Entrar</Link>
            </Button>

            <Button size="lg" asChild>
              <Link to="/register">Criar Conta</Link>
            </Button>
          </NavBar.Actions>
        </NavBar>
        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default PublicLayout
