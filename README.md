# Our Forms

Aplicação full stack em desenvolvimento para criar formulários e, futuramente, acompanhar suas respostas em dashboards.

O objetivo é reunir a montagem de perguntas, o compartilhamento do formulário e a análise dos resultados em uma mesma aplicação. A versão atual concentra-se no cadastro e login de usuários e no construtor de perguntas no frontend.

## Estado do projeto

| Área | Implementado no código atual | Próximas etapas |
| --- | --- | --- |
| Cadastro e login | Telas Angular integradas às rotas Express; senhas com hash usando bcryptjs; emissão de JWT; contador de tentativas de login por e-mail | Evoluir a autenticação conforme as próximas rotas da API forem criadas |
| Navegação | Layouts público e privado; guards que verificam a presença do token; sessão armazenada no `localStorage` | Ampliar o tratamento da sessão |
| Construtor de perguntas | Adicionar, remover e editar perguntas/opções; selecionar tipo e obrigatoriedade; reordenar com Angular CDK | Integrar o formulário completo ao backend |
| Persistência de formulários | Ainda não implementada; perguntas mantidas em memória no frontend | Modelar e salvar formulários e perguntas no MySQL |
| Listas e resultados | Componentes iniciais | Implementar listagem e consulta de respostas |
| Dashboards, compartilhamento e exportação | Estrutura inicial de componentes | Criar gráficos, links públicos para respostas e exportação de relatórios |

O construtor ainda não salva formulários: suas alterações não sobrevivem ao recarregamento da página. As telas iniciais de listagem, resultados e dashboards não representam funcionalidades completas.

## Tecnologias

| Camada | Tecnologias verificadas no repositório |
| --- | --- |
| Frontend | Angular 20, TypeScript 5.9, Angular Forms, Router, HttpClient e RxJS |
| Interface e estado | Tailwind CSS 4, Angular Signals e Angular CDK Drag and Drop |
| Backend | Node.js com módulos ES, Express 5, mysql2, bcryptjs, jsonwebtoken, dotenv e CORS |
| Dados | MySQL |
| Testes do frontend | Configuração de Jasmine e Karma |

Chart.js e geração de PDF fazem parte da proposta futura; não estão entre as dependências atuais.

## Organização

```text
our-forms/
├── backend/
│   ├── index.js              # Configuração do servidor e rotas de cadastro/login
│   ├── .env.example          # Nomes das variáveis de ambiente
│   └── package.json
├── frontend/
│   ├── src/app/
│   │   ├── components/       # Layouts público/privado, builder e componentes de interface
│   │   ├── guards/           # Regras de navegação no cliente
│   │   ├── models/
│   │   ├── services/         # Integração HTTP de cadastro/login e sessão
│   │   └── app.routes.ts
│   └── package.json
└── README.md
```

O `FormBuilderService` centraliza as operações sobre perguntas e opções com Signals. A interface é dividida em componentes de formulário, pergunta, opção e barra de ferramentas.

## Executar localmente

### Pré-requisitos

- Git, npm e uma versão do Node.js compatível com Angular 20: `^20.19.0`, `^22.12.0` ou `>=24.0.0`, conforme o lockfile do frontend.
- Servidor MySQL e um usuário com permissão para criar/acessar o banco.

### 1. Obter o código

```bash
git clone https://github.com/LaylsondeAlbuquerque/our-forms.git
cd our-forms
```

### 2. Preparar o MySQL

No cliente MySQL de sua preferência, execute o esquema usado pelo cadastro e login:

```sql
CREATE DATABASE meus_formularios_db
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE meus_formularios_db;

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

CREATE TABLE login_attempts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  tentativas INT DEFAULT 0,
  ultima_tentativa DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX (email)
);
```

Esse esquema atende às rotas atuais de autenticação. O repositório ainda não possui migrações nem tabelas de formulários e respostas.

### 3. Configurar e iniciar o backend

Crie `backend/.env` a partir de `backend/.env.example` e preencha suas configurações locais:

| Variável | Configuração |
| --- | --- |
| `PORT` | `3000`, porta esperada pelo frontend atual |
| `DB_HOST` | Endereço do servidor MySQL |
| `DB_USER` | Seu usuário MySQL |
| `DB_PASS` | Senha desse usuário |
| `DB_NAME` | `meus_formularios_db`, se usou o SQL acima |
| `JWT_SECRET` | Chave própria para assinatura dos tokens |

A partir da raiz do repositório:

```bash
cd backend
npm ci
node index.js
```

O backend usa `http://localhost:3000`. As rotas implementadas são `POST /api/cadastro` e `POST /api/login`.

### 4. Iniciar o frontend

Abra outro terminal **na raiz do repositório**:

```bash
cd frontend
npm ci
npm start
```

Acesse [http://localhost:4200/cadastro](http://localhost:4200/cadastro), crie uma conta e faça login. Para abrir o construtor, navegue para [http://localhost:4200/forms/create](http://localhost:4200/forms/create).

O `AuthService` aponta para `http://localhost:3000/api`, e o CORS do servidor aceita `http://localhost:4200`. Se mudar essas portas, ajuste as configurações correspondentes.

## Build e testes

Na pasta `frontend`:

```bash
npm run build
npm test
```

O comando de testes usa Karma com o launcher do Chrome. O backend ainda não possui uma suíte automatizada: seu script `npm test` é o placeholder padrão.

## Aprendizados e evolução

Este projeto reúne estudos de integração Angular/Express, consultas MySQL parametrizadas, hash de senhas, fluxo JWT, rotas com lazy loading, estado com Signals e composição de interfaces com drag and drop.

Os próximos marcos são persistir os formulários, implementar coleta de respostas e, depois, construir as visualizações dos resultados. O histórico de desenvolvimento e os aprendizados estão em [docs/DEVELOPMENT_NOTES.md](docs/DEVELOPMENT_NOTES.md).

## Autor e licença

Desenvolvido por [Laylson de Albuquerque](https://github.com/LaylsondeAlbuquerque).

Licença MIT, conforme o arquivo [LICENSE](LICENSE).

