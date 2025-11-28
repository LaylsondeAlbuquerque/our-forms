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
│   │       ├── components/  # Arquitetura de Componentes
│   │       │   ├── public/              # Área Pública (Acesso Externo)
│   │       │   │   ├── initial/         # (Home, Login, Cadastro)
│   │       │   │   ├── shared-public/   # (Visualizadores de Dashboard/Form)
│   │       │   │   ├── public-layout/   # (Navbar Pública + Router Outlet)
│   │       │   │   └── not-found/       # (Erro 404)
│   │       │   ├── private/             # Área Logada (Gestão)
│   │       │   │   ├── private-layout/  # (Sidebar + Header Logado)
│   │       │   │   ├── profile/         # (Configurações do Usuário)
│   │       │   │   ├── dashboard/       # (Builder, List, View Privado)
│   │       │   │   └── forms/           # (Editor, List, Results)
│   │       │   └── shared/              # Recursos Globais
│   │       │       ├── ui/              # (Botões, Cards, Inputs)
│   │       │       └── features/        # (Motores de renderização reutilizáveis)
│   │       ├── guards/      # Proteção de Rotas (AuthGuard, GuestGuard)
│   │       ├── models/      # Interfaces e Tipos (CadastroModel, LoginModel)
│   │       ├── services/    # Comunicação com API (AuthService)
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
- [ ] **Construtor de Formulários:** Interface *drag-and-drop* para criar perguntas dinâmicas.
- [ ] **Dashboard Geral:** Visão panorâmica com Sidebar de navegação.
- [ ] **Análise de Dados:** Visualização das respostas em formato de tabela (Data Tables).

### Inteligência de Dados (BI)
- [ ] **Construtor de Dashboards:** Criação de gráficos personalizados a partir das tabelas de resposta.
- [ ] **Visualização de Gráficos:** Renderização dinâmica usando Chart.js (via Shared Components).

### Compartilhamento e Exportação
- [ ] **Public View:** Links externos para responder formulários e visualizar dashboards (se marcados como públicos).
- [ ] **Modo Apresentação:** Visualização limpa de dashboards para reuniões.
- [ ] **Exportação:** Geração de PDF dos relatórios e gráficos.

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
  <summary><h3>Construtor de Formulários (Etapa Atual)</h3></summary>

  1. [ ] **Banco de Dados (Modelagem):** Criação das tabelas `forms` (título, descrição) e `questions` (tipo, enunciado, ordem, opções JSON).
  2. [ ] **Backend (API Forms):** Rota `POST /api/forms` para criar o cabeçalho do formulário e `GET /api/forms` para listar os do usuário.
  3. [ ] **Backend (API Questions):** Lógica para salvar um array de perguntas vinculadas a um formulário (Transação SQL ou JSON).
  4. [ ] **Frontend (Models & Service):** Definição das interfaces (`Form`, `Question`) e criação do `FormService`.
  5. [ ] **Frontend (Drag-and-Drop):** Instalação do **Angular CDK** e implementação da lista de perguntas reordenável.
  6. [ ] **Frontend (Componentes Dinâmicos):** Criação da lógica visual para alternar entre tipos de pergunta (Texto, Múltipla Escolha, Checkbox).
  7. [ ] **Frontend (Edição):** Inputs para editar o texto da pergunta e adicionar/remover opções de resposta.
  8. [ ] **Integração:** Envio do objeto completo (Formulário + Perguntas) para o Backend salvar.
  9. [ ] **Estilização:** Refino visual com Tailwind CSS (Cards flutuantes, botões de ação).

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

<details open>
  <summary><h3>Na etapa de Login e Autenticação</h3></summary>

  * **Autenticação Stateless:** Implementação completa de fluxo JWT (JSON Web Tokens), desde a assinatura no backend até o armazenamento e persistência no frontend.
  * **Segurança & Rate Limiting:** Desenvolvimento de uma lógica de defesa contra *Brute Force* no Node.js, limitando tentativas falhas diárias via banco de dados.
  * **Criptografia & Comparação:** Uso de `bcrypt.compare()` para validação segura de credenciais e estratégias para evitar *User Enumeration* (mensagens de erro genéricas).
  * **Arquitetura de Rotas (Shell Pattern):** Implementação de **Rotas Filhas (Child Routes)** com Lazy Loading, separando a aplicação em Layouts distintos (`PublicLayout` vs `PrivateLayout`).
  * **Route Guards:** Criação de guardiões funcionais (`AuthGuard` e `GuestGuard`) para proteger rotas privadas e redirecionar usuários logados automaticamente.
  * **Gerenciamento de Estado:** Controle de sessão via `AuthService` (`setToken`, `getUser`) e atualização dinâmica da interface (Menu de Usuário com Avatar).
  * **UX & Design:** Estilização responsiva com Tailwind CSS, incluindo feedback visual de validação e menus dropdown interativos.

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

