import Navbar from '@/components/shared/navbar'
import { Footer } from '@/components/shared/footer'
import HomePage from '@/pages/homepage/HomePage'

function App() {
  return (
    <div className="flex flex-col min-h-svh">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default App
