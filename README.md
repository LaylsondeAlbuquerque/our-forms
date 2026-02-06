<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=9DCEDC&height=120&section=header"/>

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?center=true&vCenter=true&color=9DCEDC&font=Poppins&weight=700&size=50&height=90&width=1200&lines=Olá,+eu+sou+o+Laylson.;Seja+bem-vindo(a)+ao+Our+Forms" alt="Typing SVG" />
</div>
<br/><br/>

##  Sobre o Projeto 

O **Our Forms** é uma plataforma Full-Stack para construção de formulários e **inteligência de dados**. Mais do que apenas coletar respostas (similar ao Google Forms), o objetivo é permitir que usuários criem **Dashboards Dinâmicos** para visualizar e analisar os resultados de forma gráfica e intuitiva.

O projeto adota uma arquitetura moderna baseada em **componentes reutilizáveis** (Shared Public/Private Views), focando em escalabilidade, segurança robusta e separação clara de responsabilidades.

<br/><br/>

##  Tecnologias Utilizadas

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

<br/><br/>

##  Estrutura das Pastas

```
our-forms/
├── backend/                 # API Node.js + Express
│   ├── node_modules/
│   ├── index.js             # Ponto de entrada e rotas da API
│   ├── package.json         # Dependências (Express, MySQL2, Bcrypt, CORS)
│   └── ...
├── frontend/                # Aplicação Angular v20
│   ├── src/
│   │   └── app/
│   │       ├── components/
│   │       │   ├── private/               # Área Administrativa (Logado)
│   │       │   │   ├── dashboard/         # Gestão de Dashboards
│   │       │   │   │   ├── dashboard-builder/
│   │       │   │   │   ├── dashboard-list/
│   │       │   │   │   ├── dashboard-view/
│   │       │   │   │   └── dashboard.routes.ts
│   │       │   │   ├── forms/             # Gestão de Formulários
│   │       │   │   │   ├── form-create/   # O "Coração" do Builder
│   │       │   │   │   │   ├── service/   # (FormBuilderService - Lógica local)
│   │       │   │   │   │   └── ui/        # Componentes exclusivos do Builder
│   │       │   │   │   │       ├── question-card/
│   │       │   │   │   │       │   └── ui/option-item/ # (Sub-item da pergunta)
│   │       │   │   │   │       └── toolbar/
│   │       │   │   │   ├── form-list/
│   │       │   │   │   ├── form-results/
│   │       │   │   │   └── form.routes.ts
│   │       │   │   ├── private-layout/    # (Sidebar + Header)
│   │       │   │   └── profile/
│   │       │   ├── public/                # Área Pública
│   │       │   │   ├── initial/           # (Cadastro, Home, Login)
│   │       │   │   ├── not-found/
│   │       │   │   ├── public-layout/
│   │       │   │   └── shared-public/     # (Views públicas de Form/Dash)
│   │       │   └── shared/                # Reutilizáveis Globais
│   │       │       ├── features/          # (DashboardViewer, FormViewer)
│   │       │       └── ui/                # (DeleteComp, UI-Select, UI-Toggle)
│   │       ├── guards/                    # (AuthGuard, GuestGuard)
│   │       ├── models/                    # (Cadastro, Login, Question)
│   │       ├── services/                  # (AuthService - Global)
│   │       ├── app.config.ts
│   │       └── app.routes.ts
│   ├── angular.json
│   └── ...
├── .gitignore               # Arquivos ignorados pelo Git
├── LICENSE                  # Licença do projeto
└── README.md                # Documentação
```

<br/><br/>

##  Funcionalidades

### Autenticação e Segurança
- [x] **Cadastro de Usuários:** Criação de conta com criptografia de senha (bcrypt).
- [x] **Login Seguro:** Autenticação via JWT com proteção contra força bruta (rate limiting).
- [x] **Controle de Acesso:** Rotas protegidas (Guards) e redirecionamento inteligente.

### Gestão de Formulários (Private)
- [x] **Construtor de Formulários (Frontend):** Interface reativa usando Signals e Drag-and-Drop.
- [x] **Editor de Perguntas:** Edição em tempo real de enunciados e opções.
- [ ] **Integração Backend:** Salvar a estrutura do formulário no banco de dados.
- [ ] **Listagem de Formulários:** Dashboard com os formulários criados pelo usuário.

### Inteligência de Dados (BI)
- [ ] **Construtor de Dashboards:** Criação de gráficos personalizados.
- [ ] **Visualização de Gráficos:** Renderização dinâmica usando Chart.js.

### Compartilhamento e Exportação
- [ ] **Public View:** Links externos para responder formulários.
- [ ] **Exportação:** Geração de PDF dos relatórios.

<br/><br/>

##  Trajetória de Construção das Etapas
<details>
  <summary><h3> Cadastro de usuário </h3></summary>
  
  1.  [x] **Estrutura Inicial:** Criação do esqueleto HTML e navegação básica.
  2.  [x] **Validação Frontend:** Implementação de regras no Angular (`required`, `minlength`, `pattern`) com feedback visual.
  3.  [x] **Banco de Dados:** Modelagem e criação da tabela `users` no MySQL.
  4.  [x] **Backend (API):** Desenvolvimento da rota POST `/api/cadastro` com Node.js e Express.
  5.  [x] **Segurança:** Implementação de Hash de senha (`bcrypt`) e proteção contra SQL Injection.
  6.  [x] **Testes de API:** Validação isolada do backend utilizando **Postman**.
  7.  [x] **Integração:** Conexão do Frontend com Backend via `HttpClient` e `AuthService`.
  8.  [x] **Estilização:** Refatoração do design utilizando **Tailwind CSS**.

</details>
<details>
  <summary><h3>Login e Autenticação</h3></summary>

  1. [x] **Frontend (Estrutura):** Criação do esqueleto HTML da página de Login e modelos de dados.
  2. [x] **Backend (Setup):** Instalação e configuração do pacote `jsonwebtoken` (JWT).
  3. [x] **Backend (API):** Desenvolvimento da rota POST `/api/login` com validação de dados.
  4. [x] **Segurança Backend:** Implementação de `bcrypt` para senhas e **Rate Limiting** (limite de 5 tentativas diárias) via banco de dados.
  5. [x] **Integração:** Atualização do `AuthService` para login, persistência do Token e dados do usuário (`localStorage`).
  6. [x] **Arquitetura de Layouts:** Reestruturação do projeto em Layouts (`Public` e `Private`) e configuração de Rotas Filhas.
  7. [x] **Gerenciamento de Estado:** Lógica de menu do usuário (Avatar dinâmico e Logout) na interface privada.
  8. [x] **Proteção de Rotas:** Implementação de `AuthGuard` (protege painel) e `GuestGuard` (redireciona logados).
  9. [x] **Estilização:** Design responsivo da tela de Login com Tailwind CSS e feedback visual de erros.

</details>

<details open>
  <summary><h3>3. Construtor de Formulários (Builder) - Etapa Atual</h3></summary>

  1. [x] **Arquitetura Reativa (Signals):** Migração do gerenciamento de estado para **Angular Signals**, garantindo performance e reatividade fina.
  2. [x] **Service Centralizado:** Criação do `FormBuilderService` com padrão "Cofre e Vitrine" (Private Fields `#` para escrita, ReadOnly para leitura).
  3. [x] **Componentização Atômica:** Quebra da interface em `FormCreate` (Pai), `QuestionCard` (Item) e `OptionItem` (Sub-item).
  4. [x] **CRUD no Frontend:**
     - Adição dinâmica de perguntas e opções.
     - Remoção inteligente com validação (ex: impedir exclusão da última opção).
     - Edição de textos sem mutação direta (evitando erros de `undefined`).
  5. [x] **Drag-and-Drop (CDK):**
     - Instalação e configuração do **Angular CDK**.
     - Reordenação de Perguntas (Lista Principal).
     - Reordenação de Opções (Lista Interna).
     - Implementação de *Handles* e *Placeholders* para melhor UX.
  6. [x] **Controle de Fluxo Moderno:** Adoção da nova sintaxe `@if`, `@for` e `@switch` do Angular 17+.
  7. [ ] **Banco de Dados:** Modelagem das tabelas `forms` e `questions`.
  8. [ ] **Backend (API):** Rotas para salvar o JSON do formulário completo.

</details>

<br/><br/>

##  O que eu aprendi até agora

<details>
  <summary><h3>Na etapa da construção de cadastro de usuários</h3></summary>

  * **Arquitetura Monorepo:** Como organizar Frontend e Backend no mesmo repositório Git, resolvendo conflitos de pastas `.git` aninhadas.
  * **Angular Moderno (v20):** Uso de componentes `Standalone`, injeção `inject()` e comunicação via `HttpClient` e `Observables`.
  * **Segurança Backend:** Validação manual de dados no Node.js, proteção contra SQL Injection e hash de senhas com `bcrypt`.
  * **Tailwind CSS v4:** Configuração moderna via `@theme` no CSS (sem `tailwind.config.js`), uso de classes arbitrárias e responsividade (`md:flex-row`, `md:w-2/3`).
  * **Estilização Dinâmica:** Como estilizar inputs do Angular baseados em seu estado de validação usando seletores como `[&.ng-invalid.ng-touched]`.
  * **Layout & UX:** Centralização vertical/horizontal com Flexbox, uso de fontes personalizadas (Google Fonts) e feedback visual para o usuário (botões desabilitados, cursores).
  * **API REST:** Fluxo completo de Request/Response e tratamento correto de Status Codes (201, 400, 409).

</details>

<details>
  <summary><h3>Na etapa de Login e Autenticação</h3></summary>

  * **Autenticação Stateless:** Implementação completa de fluxo JWT (JSON Web Tokens), desde a assinatura no backend até o armazenamento e persistência no frontend.
  * **Segurança & Rate Limiting:** Desenvolvimento de uma lógica de defesa contra *Brute Force* no Node.js, limitando tentativas falhas diárias via banco de dados.
  * **Criptografia & Comparação:** Uso de `bcrypt.compare()` para validação segura de credenciais e estratégias para evitar *User Enumeration* (mensagens de erro genéricas).
  * **Arquitetura de Rotas (Shell Pattern):** Implementação de **Rotas Filhas (Child Routes)** com Lazy Loading, separando a aplicação em Layouts distintos (`PublicLayout` vs `PrivateLayout`).
  * **Route Guards:** Criação de guardiões funcionais (`AuthGuard` e `GuestGuard`) para proteger rotas privadas e redirecionar usuários logados automaticamente.
  * **Gerenciamento de Estado:** Controle de sessão via `AuthService` (`setToken`, `getUser`) e atualização dinâmica da interface (Menu de Usuário com Avatar).
  * **UX & Design:** Estilização responsiva com Tailwind CSS, incluindo feedback visual de validação e menus dropdown interativos.

</details>

<details open>
  <summary><h3>Na etapa do Form Builder (Atual)</h3></summary>

  * **Angular Signals:** Aprendi a gerenciar estado de forma reativa e segura, substituindo variáveis simples por Signals e `computed()`.
  * **Arquitetura de Componentes (SRP):** Aplicação do **Princípio da Responsabilidade Única**, quebrando interfaces complexas em componentes menores (Smart vs Dumb Components) para facilitar a manutenção.
  * **Padrão de Serviço:** Implementação de **Private Fields (`#`)** no Service para encapsulamento total (ninguém mexe nos dados sem permissão).
  * **Angular CDK (Drag & Drop):** Domínio das diretivas `cdkDropList`, `cdkDrag` e `cdkDragHandle` para criar interfaces interativas complexas.
  * **Manipulação de Arrays Imutáveis:** Uso de `.filter()`, `.map()` e `.splice()` dentro de Signals (`.update()`) para garantir a integridade dos dados.
  * **Debug e TypeScript:** Resolução de problemas de tipagem estrita (`Object is possibly 'undefined'`) e uso correto de *Optional Chaining* e *Non-null Assertions*.
  * **Componentização:** Comunicação eficiente entre Pai e Filho usando `@Input`, `@Output` e *Event Emitters*.

</details>

<br/><br/>

## 💻 Como executar localmente

<br/>

> ⚠️ **Aviso:** O projeto ainda está em construção. As instruções abaixo consideram que você tem o **Node.js** e o **MySQL** (ex: XAMPP) instalados.

<br/>

### 1. Clone o repositório
```bash
git clone [https://github.com/LaylsondeAlbuquerque/our-forms.git](https://github.com/LaylsondeAlbuquerque/our-forms.git)
cd our-forms
```

### 2. Configure o Banco de Dados
Abra seu cliente MySQL (ex: phpMyAdmin) e execute o seguinte script SQL para criar o banco e as tabelas necessárias:

```sql
-- 1. Cria o Banco
CREATE DATABASE meus_formularios_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 2. Seleciona o Banco
USE meus_formularios_db;

-- 3. Cria a Tabela de Usuários
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    primeiroNome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(15),
    dataNascimento DATE,
    senha_hash VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Cria a Tabela de Tentativas de Login (Rate Limiting)
CREATE TABLE login_attempts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    tentativas INT DEFAULT 0,
    ultima_tentativa DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX (email)
);
```

### 3. Inicie o Backend (API)
Abra um terminal, navegue até a pasta do servidor e instale as dependências:

> ⚠️ **Importante:** Renomeie o arquivo `.env.example` para `.env` e configure suas variáveis de ambiente (banco de dados e chave JWT) antes de rodar.

```bash
cd backend
npm install
node index.js
```

O servidor rodará em: `http://localhost:3000`

### 4. Inicie o Frontend (Angular)
Abra **outro** terminal, navegue até a pasta do cliente e instale as dependências:

```bash
cd ../frontend
npm install
ng serve
```

Acesse o projeto no navegador: `http://localhost:4200`

