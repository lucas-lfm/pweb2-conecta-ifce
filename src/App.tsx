import Navbar from "./components/shared/navbar";
import { Footer } from "./components/shared/footer"; // Importação nova

function App() {
  return (
    <div className="flex flex-col min-h-svh">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* O conteúdo das próximas aulas entrará aqui */}
        <h1 className="text-2xl font-bold">Conteúdo Principal</h1>
      </main>
      <Footer /> {/* Substituímos a tag footer simples pelo componente */}
    </div>
  );
}

export default App;
