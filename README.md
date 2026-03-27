# 🎓 ConectaIFCE

Uma mini rede social acadêmica desenvolvida para a comunidade do Instituto Federal do Ceará (Campus Tauá), permitindo a conexão, postagens e interação entre estudantes, professores e servidores.

Este projeto foi desenvolvido como parte avaliativa da disciplina de **Programação Web II** do curso de Análise e Desenvolvimento de Sistemas.

---

## 🚀 Tecnologias e Ferramentas

O projeto foi construído utilizando um ecossistema moderno para o desenvolvimento Front-end:

* **Core:** React 18, TypeScript, Vite.
* **Roteamento:** React Router DOM (v6+).
* **Estilização & UI:** TailwindCSS, Shadcn/UI, Lucide React (Ícones).
* **Gerenciamento de Formulários:** React Hook Form.
* **Validação de Dados:** Zod.
* **Comunicação HTTP:** Fetch API nativa (encapsulada em um Custom HTTP Client).

---

## 🏗️ Arquitetura e Padrões de Projeto

A aplicação foi estruturada focando em **escalabilidade, coesão e baixo acoplamento**, fugindo de lógicas amontoadas em componentes visuais. Os principais padrões aplicados foram:

* **Feature-Sliced Design (FSD):** Separação do código por "Domínios" (ex: `auth`, `users`, `follow`), contendo seus próprios componentes, contextos e serviços isolados.
* **Separation of Concerns (View-Model):** Utilização de Custom Hooks (ex: `useFormLogin`, `useFormRegister`) para gerenciar estado e regras de negócio, mantendo os componentes `.tsx` (Views) estritamente visuais e declarativos.
* **Service Layer & DTOs:** Centralização de toda comunicação com a API em módulos de `services`, tipados com *Data Transfer Objects (DTOs)* para garantir contratos estritos entre Front-end e Back-end.
* **Composition Pattern:** Utilizado na NavBar para permitir alta flexibilidade de renderização de links e avatares sem prop drilling.

---

## 🔥 Desafios e Funcionalidades Extras Implementadas

Além do escopo base das videoaulas, as seguintes funcionalidades e melhorias foram desenvolvidas como desafios de aprimoramento:

### 1. Responsividade Aprimorada no Formulário de Login
O *card* de login foi otimizado para uma experiência fluida em dispositivos móveis. A largura fixa (`w-md`) foi substituída por classes utilitárias responsivas (`w-full max-w-sm lg:max-w-md`), garantindo adaptação perfeita em telas pequenas sem quebrar o layout.

### 2. Fluxo Completo de Recuperação e Redefinição de Senha
Implementação de ponta a ponta do fluxo de esquecimento de senha:
* **Fase 1 (Solicitação):** Rota `/recover` onde o usuário informa o e-mail. Tratamento de *Account Enumeration* implementado para segurança (exibição de sucesso padronizada).
* **Fase 2 (Nova Senha):** Rota `/auth/reset-password` que intercepta o `token` via URL (Query Parameters), valida as novas senhas em tela (com Zod) e as envia junto ao token via *Body* para o back-end efetivar a troca.
* **Feedback Visual:** Uso do estado de rotas do React Router para redirecionar o usuário à tela de login exibindo um *banner* dinâmico de sucesso.

### 3. Otimização do Layout do Cadastro (CSS Grid)
Redução da rolagem excessiva na tela de registro. Os campos com seletores curtos ("Vínculo" e "Campus") foram agrupados lado a lado usando CSS Grid (`grid-cols-2` a partir do *breakpoint* `md:`), economizando espaço vertical e melhorando a UI.

### 4. Refatoração Total do Fluxo de Login (Hooks e View)
Desmembramento da página monolítica de login aplicando a mesma arquitetura do Registro. Criação do componente isolado `FormLogin` e abstração de todo o gerenciamento de estados, submissão e interceptação de erros da API para o Custom Hook `useFormLogin`.

### 5. Camada de Serviço (Services) e DTOs para o Fluxo de Auth
Remoção do uso direto da ferramenta HTTP dentro dos componentes/hooks.
* Criação de `login.service.ts`, `recover.service.ts` e `reset.service.ts`.
* Adição das interfaces de requisição (`LoginRequestDTO`, `RecoverRequestDTO`, `ResetPasswordRequestDTO`) centralizadas no contrato global do projeto, melhorando o *IntelliSense* e prevenindo erros de tipagem na comunicação.

