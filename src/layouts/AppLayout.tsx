import { useAuth } from '@/features/auth/contexts/AuthContext'
import NavBar from '@/shared/components/navbar'
import UserMenu from '@/features/users/components/user-menu'
import { Navigate, Outlet } from 'react-router'

function AppLayout() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated){
    return <Navigate to='/login' replace/>
  }

  return (
    <>
      <div className="flex flex-col min-h-svh">
        <NavBar>
          <NavBar.Brand to="/feed" />
          <NavBar.Search/>

          <NavBar.Links>
            <NavBar.Link to="/feed" text="Feed" />
            <NavBar.Link to="/groups" text="Grupos" />
          </NavBar.Links>

          <NavBar.Actions>
            <UserMenu/>
          </NavBar.Actions>
        </NavBar>
        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default AppLayout
