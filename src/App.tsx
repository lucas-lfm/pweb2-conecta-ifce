import { Outlet } from 'react-router-dom'
import { Navbar } from './components/shared/navbar'
import { Footer } from './components/shared/footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col">
        {/* O Outlet é onde as páginas (Home, Login, etc) vão "aparecer" */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
