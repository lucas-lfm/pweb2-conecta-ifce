
import Brand from "./brand";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Coluna 1: Logo e Descrição */}
          <div className="flex flex-col gap-4">
            <Brand />
            <p className="text-sm text-muted-foreground">
              Rede social acadêmica do Instituto Federal do Ceará.
              Conectando a comunidade para crescer juntos.
            </p>
          </div>

          {/* Coluna 2: Plataforma */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Plataforma</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="/feed" className="text-sm text-muted-foreground hover:text-primary transition-colors">Feed Acadêmico</a></li>
              <li><a href="/groups" className="text-sm text-muted-foreground hover:text-primary transition-colors">Grupos de Estudo</a></li>
              <li><a href="/profile" className="text-sm text-muted-foreground hover:text-primary transition-colors">Perfil</a></li>
            </ul>
          </div>

          {/* Coluna 3: Institucional */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Institucional</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="https://ifce.edu.br" target="_blank" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portal IFCE</a></li>
              <li><a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre o Projeto</a></li>
              <li><a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Coluna 4: Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior (Direitos) */}
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ConectaIFCE. Projeto acadêmico desenvolvido no IFCE Campus Tauá. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
