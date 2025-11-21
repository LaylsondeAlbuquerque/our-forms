<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=9DCEDC&height=120&section=header"/>

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?center=true&vCenter=true&color=9DCEDC&font=Poppins&weight=700&size=50&height=90&width=1200&lines=Olá,+eu+sou+o+Laylson.;Seja+bem-vindo(a)+ao+Our+Forms" alt="Typing SVG" />
</div>
<br/><br/>

##  Sobre o Projeto 

O **Our Forms** é uma aplicação Full-Stack para criação e gerenciamento de formulários personalizados. O objetivo é permitir que usuários se cadastrem, criem seus próprios formulários dinâmicos e coletem respostas de outras pessoas, similar ao Google Forms.

Este projeto está sendo desenvolvido para consolidar conhecimentos em arquitetura web, integração entre frontend e backend, e segurança de dados.

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

O projeto está organizado no formato de **Monorepo**, contendo tanto o cliente (frontend) quanto o servidor (backend).

```text
our-forms/
├── backend/                 # API Node.js + Express
│   ├── node_modules/
│   ├── index.js             # Ponto de entrada e rotas da API
│   ├── package.json         # Dependências (Express, MySQL2, Bcrypt, CORS)
│   └── ...
├── frontend/                # Aplicação Angular v20
│   ├── src/
│   │   └── app/
│   │       ├── components/  # Componentes Standalone (Cadastro, Login, Home)
│   │       ├── models/      # Interfaces e Tipos (CadastroModel)
│   │       ├── services/    # Comunicação com API (AuthService)
│   │       ├── app.config.ts
│   │       └── app.routes.ts
│   ├── angular.json
│   └── ...
├── LICENSE                  # Licença do projeto
└── README.md                # Documentação
```

<br/><br/>

##  Funcionalidades

- [x] **Cadastro de Usuários:** Criação de conta com criptografia de senha.
- [ ] **Login de Usuários:** Autenticação segura com JWT.
- [ ] **Dashboard:** Visão geral dos formulários do usuário.
- [ ] **Criação de Formulários:** Interface para montar perguntas dinâmicas.
- [ ] **Responder Formulários:** Página pública para coleta de respostas.
- [ ] **Visualização de Respostas:** Gráficos ou listas com os dados coletados.

<br/><br/>

##  Trajetória de Construção das Etapas
<details>
  <summary><h3> Cadastro de usuário (etapa atual) </h3></summary>
  
  1.  [x] **Estrutura Inicial:** Criação do esqueleto HTML e navegação básica.
  2.  [x] **Validação Frontend:** Implementação de regras no Angular (`required`, `minlength`, `pattern`) com feedback visual.
  3.  [x] **Banco de Dados:** Modelagem e criação da tabela `users` no MySQL.
  4.  [x] **Backend (API):** Desenvolvimento da rota POST `/api/cadastro` com Node.js e Express.
  5.  [x] **Segurança:** Implementação de Hash de senha (`bcrypt`) e proteção contra SQL Injection.
  6.  [x] **Testes de API:** Validação isolada do backend utilizando **Postman**.
  7.  [x] **Integração:** Conexão do Frontend com Backend via `HttpClient` e `AuthService`.
  8.  [x] **Estilização:** Refatoração do design utilizando **Tailwind CSS**.

</details>
<details open>
  <summary><h3>Login e Autenticação (Etapa Atual) 🚧</h3></summary>

  1. [ ] **Frontend (Estrutura):** Criação do esqueleto HTML da página de Login.
  2. [ ] **Backend (Setup):** Instalação do pacote `jsonwebtoken` (JWT) no Node.js.
  3. [ ] **Backend (API):** Criação da rota POST `/api/login` para receber credenciais.
  4. [ ] **Segurança Backend:** Lógica de comparação de senha (`bcrypt.compare`) e geração do Token JWT.
  5. [ ] **Integração:** Atualização do `AuthService` para realizar login e salvar o Token no `localStorage`.
  6. [ ] **Gerenciamento de Estado:** Lógica para identificar se o usuário está logado ou não (Botão Sair/Logout).
  7. [ ] **Proteção de Rotas:** Criação de um `AuthGuard` no Angular para proteger a rota `/dashboard`.
  8. [ ] **Feedback:** Tratamento de erros de login (senha incorreta, usuário não encontrado).
  9. [ ] **Estilização:** Refatoração do design da página de Login utilizando **Tailwind CSS**.

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
Abra seu cliente MySQL (ex: phpMyAdmin) e execute o seguinte script SQL para criar o banco e a tabela necessária:

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
```

### 3. Inicie o Backend (API)
Abra um terminal, navegue até a pasta do servidor e instale as dependências:

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

