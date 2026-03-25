import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <header className="sticky top-0 border-b border-border z-50 bg-card/80 backdrop-blur-md" >
      <nav>
        <a href="/">Logo</a>

        <div>
          <a href="/">Inicio</a>
          <a href="/#feature-section">Recursos</a>
          <a href="/#faq-section">Perguntas Frequentes</a>
        </div>

        <div>
          <Button variant="ghost" size="lg" asChild>
            <a href="/login">Entrar</a>
          </Button>

          <Button size="lg" asChild>
            <a href="/register">Criar Conta</a>
          </Button>
        </div>

      </nav>
    </header>
  )
}

export default Navbar
