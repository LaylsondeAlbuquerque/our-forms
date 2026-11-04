# Notas de desenvolvimento do Our Forms

Este rascunho reúne o conteúdo útil de trajetória e aprendizados do README anterior, revisado para distinguir decisões técnicas de funcionalidades futuras. A referência consultada foi a branch `main`, árvore `1eefc8332bc90cba1bb9437d4e9710fdc0fa63b9`, em 4 de novembro de 2026. O README anterior tem blob SHA `6f687cf4e6f3cfef5725ad065ea51705593f9c2d`.

Estas notas preservam o relato de construção do autor. A revisão foi feita por leitura do código e da documentação; instalação, build, testes e fluxo com MySQL não foram executados nesta revisão.

## Proposta do produto

A proposta é permitir que o usuário crie formulários e analise respostas em dashboards. Compartilhamento público, gráficos e exportação de relatórios pertencem à evolução planejada.

A divisão entre layouts públicos e privados e componentes de visualização compartilhados oferece uma estrutura para essa evolução. A existência das pastas e rotas não significa que essas funções estejam concluídas.

## Etapa 1 — Cadastro de usuários

O histórico anterior registrava:

- Estruturação da página e da navegação.
- Validação no Angular com `required`, `minlength` e `pattern`, incluindo feedback visual.
- Modelagem da tabela `users` no MySQL.
- Criação da rota `POST /api/cadastro` com Express.
- Uso de bcryptjs para gerar o hash da senha e de parâmetros nas consultas SQL.
- Validação manual da API com Postman, conforme relato do autor no README anterior.
- Integração HTTP pelo `AuthService`.
- Estilização com Tailwind CSS.

Aprendizados relatados:

- Organização de frontend e backend no mesmo repositório e resolução de repositórios Git aninhados.
- Componentes standalone, injeção com `inject()`, `HttpClient` e Observables.
- Diferença entre validação de entrada, hash de senhas e consultas parametrizadas.
- Configuração do Tailwind CSS 4, uso de classes arbitrárias e estilos responsivos.
- Estilos associados aos estados de validação dos formulários Angular.
- Composição de layouts com Flexbox e retorno visual ao usuário.
- Fluxo de requisição/resposta e uso de status HTTP, incluindo 201, 400 e 409.

## Etapa 2 — Login e sessão

O histórico anterior registrava:

- Página de login e modelos de dados.
- Rota `POST /api/login` e uso de `jsonwebtoken`.
- Comparação de senha com bcryptjs.
- Contagem de falhas por e-mail em `login_attempts`, com bloqueio após cinco falhas na mesma data do servidor.
- Emissão de JWT com validade de 24 horas.
- Armazenamento de token e dados do usuário no `localStorage`.
- Layouts distintos, rotas filhas e lazy loading.
- Menu do usuário e logout.
- Guards de navegação para usuários com/sem token.
- Estilos responsivos e feedback de erro na tela de login.

Aprendizados relatados:

- Fluxo de emissão de token e persistência da sessão no cliente.
- Mensagens genéricas de credenciais incorretas.
- Organização de rotas em layouts e carregamento por demanda.
- Atualização da interface a partir dos dados do usuário.
- Tratamento de sucesso e falha em chamadas HTTP.

Esses mecanismos descrevem a implementação atual. Os guards verificam a presença do token no cliente; estas notas não tratam isso como garantia de autorização no servidor nem como certificação de segurança da aplicação.

## Etapa 3 — Construtor de perguntas

O histórico anterior registrava:

- Estado das perguntas gerenciado por Angular Signals.
- `FormBuilderService` com campo privado e exposição de leitura por `asReadonly()`.
- Divisão da interface em `FormCreate`, `QuestionCard`, `OptionItem` e `Toolbar`.
- Adição, remoção e edição de perguntas e opções no frontend.
- Reordenação de perguntas e opções com Angular CDK.
- Uso de `cdkDropList`, `cdkDrag`, `cdkDragHandle` e placeholders.
- Templates com `@if`, `@for` e `@switch`.
- Investigação de tipagem estrita e comunicação por inputs/outputs.

Aprendizados relatados:

- Separação das responsabilidades dos componentes.
- Centralização das operações de lista em um serviço.
- Atualização de coleções com `map()`, `filter()` e cópias de arrays.
- Composição de interfaces interativas com drag and drop.
- Tratamento de propriedades opcionais em TypeScript.

O uso de `asReadonly()` não torna os objetos internos profundamente imutáveis. O código atual também edita propriedades das perguntas nos templates; por isso o novo README não repete a alegação anterior de ausência de mutação direta.

A implementação atual mantém perguntas em memória e exibe o estado para depuração. Persistência do formulário completo, incluindo título e descrição, ainda precisa ser integrada.

## Próximas etapas preservadas do planejamento

- Modelar tabelas de formulários, perguntas e respostas.
- Criar as rotas de persistência e conectá-las ao frontend.
- Implementar listagem de formulários e consulta de resultados.
- Disponibilizar formulários para respostas por link público.
- Construir dashboards e visualizações gráficas.
- Avaliar integração de Chart.js e exportação de relatórios em PDF.

## Ajustes documentais desta revisão

- Abertura centrada no problema e no estado atual do produto.
- Remoção de efeitos SVG e do excesso de badges.
- Substituição de afirmações amplas de segurança por mecanismos verificáveis.
- Separação entre componentes iniciais e funcionalidades concluídas.
- Correção do clone para uma URL Git sem sintaxe Markdown.
- Uso de `npm start` para executar o Angular CLI instalado no frontend.
- Terminais do frontend e backend com ponto de partida explícito.
- Indicação de `DB_PASS`, nome realmente usado em `backend/index.js`.
- Instrução para criar `.env` a partir do exemplo, preservando `.env.example`.
- Preservação do esquema SQL de cadastro/login no README principal.

## Referências do repositório

- [README anterior](https://github.com/LaylsondeAlbuquerque/our-forms/blob/main/README.md)
- [Backend](https://github.com/LaylsondeAlbuquerque/our-forms/blob/main/backend/index.js)
- [Dependências do frontend](https://github.com/LaylsondeAlbuquerque/our-forms/blob/main/frontend/package.json)
- [Dependências do backend](https://github.com/LaylsondeAlbuquerque/our-forms/blob/main/backend/package.json)
- [Serviço do builder](https://github.com/LaylsondeAlbuquerque/our-forms/blob/main/frontend/src/app/components/private/forms/form-create/service/form-builder.service.ts)

