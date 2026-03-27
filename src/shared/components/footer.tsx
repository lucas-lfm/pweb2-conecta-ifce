import { Link } from 'react-router'
import Brand from './brand'

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-main py-12">
        <div className="grid grid-cols-4">
          <div>
            <Link to="/">
              <Brand />
            </Link>
            <p className="mt-3 mb-4 text-sm text-muted-foreground text-balance leading-relaxed">
              Rede social acadêmica do IFCE. Conectando a comunidade para
              crescer juntos
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-sm mb-3">
              Plataforma
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/feed"
                  className="text-muted-foreground text-sm font-medium hover:text-primary"
                >
                  Feed acadêmico
                </Link>
              </li>
              <li>
                <Link
                  to="/groups"
                  className="text-muted-foreground text-sm font-medium hover:text-primary"
                >
                  Grupos de Estudo
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-muted-foreground text-sm font-medium hover:text-primary"
                >
                  Perfil
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-sm mb-3">
              Institucional
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://portal.ifce.edu.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm font-medium hover:text-primary"
                >
                  IFCE
                </a>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground text-sm font-medium hover:text-primary"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground text-sm font-medium hover:text-primary"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-sm mb-3">
              Legal
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground text-sm font-medium hover:text-primary"
                >
                  Termos de uso
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground text-sm font-medium hover:text-primary"
                >
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6">
          <p className="text-center text-xs text-muted-foreground">
            2026 ConectaIFCE. Instituto Federal de Educação, Ciência e
            Tecnologia do Ceará. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
