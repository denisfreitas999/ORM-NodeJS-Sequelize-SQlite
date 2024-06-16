# Alura Course Overview

### ORM com Node.js: Desenvolvendo uma API com Sequelize e SQLite (01 - 05)
### ORM com Node.js: Avançando nas Funcionalidades do Sequelize (06 - 10)

## Índice
1. [Conhecendo o Sequelize](#1-conhecendo-o-sequelize)
2. [Criando um Modelo](#2-criando-um-modelo)
3. [Desenvolvendo a API](#3-desenvolvendo-a-api)
4. [Relações e Associações](#4-relações-e-associações)
5. [Atualizando a API](#5-atualizando-a-api)
6. [Soft Delete](#6-soft-delete)
7. [Escopo de Modelo e Validações](#7-escopo-de-modelo-e-validações)
8. [Escopo de Associação](#8-escopo-de-associação)
9. [Operadores e Agregadores](#9-operadores-e-agregadores)
10. [Transações](#10-transações)
11. [Estrutura do Projeto](#10-estrutura-do-projeto)

## Tecnologias Envolvidas
<div style="display: inline_block">
  <img align="center" alt="NodeJS" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
   <img align="center" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
   <img align="center" alt="ExpressJS" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
   <img align="center" alt="Sequelize" src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue"/>
   <img align="center" alt="SQlite" src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white"/>
   <img align="center" alt="Eslint" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/>
</div>

## 1. Conhecendo o Sequelize
Na primeira etapa do curso, aprendi sobre os fundamentos e a importância dos ORMs:
- **O que são ORMs**: Compreendi o que são Object-Relational Mappers (ORMs) e os motivos pelos quais são utilizados no desenvolvimento back-end.
- **Diferenças entre SQL e ORM**: Analisei as diferenças entre utilizar SQL diretamente no código JavaScript e usar métodos de um ORM para realizar as mesmas tarefas.
- **Sequelize CLI**: Utilizei o sequelize-cli para gerar a base de um projeto como ponto de partida.
- **Instalação e Configuração**: Instalei e configurei o Sequelize através dos arquivos próprios de configuração.
- **Conexão com o Banco de Dados**: Conectei a API a uma base de dados utilizando o Sequelize.

## 2. Criando um Modelo
Na segunda etapa, foquei na criação e automação de modelos:
- **Modelos**: Entendi o que são modelos e como eles representam e mapeiam os dados de tabelas no banco de dados.
- **Automatização com Sequelize CLI**: Utilizei o sequelize-cli para automatizar a criação de modelos.
- **Tipos de Dados em SQL**: Estudei os tipos de dados em SQL e como o Sequelize adapta esses tipos para diversos bancos de dados.
- **Migrações**: Compreendi o conceito de migrações no contexto de ORMs e como utilizá-las para fazer mudanças rastreáveis e incrementais no banco de dados.
- **Seeds**: Utilizei o sequelize-cli para criar arquivos de seed e popular o banco de dados com dados de teste.

## 3. Desenvolvendo a API
Na terceira etapa, explorei a arquitetura MVC e a implementação de controladores:
- **Padrão MVC**: Estudei o padrão Model-View-Controller (MVC) e cada uma de suas partes principais.
- **Implementação de Controllers**: Implementei controllers que recebem dados de requisições HTTP e retornam respostas.
- **Rotas Organizadas**: Separei as rotas em arquivos organizados com apenas um ponto de entrada.
- **Camada de Serviços**: Entendi a função da camada de serviços no contexto de uma aplicação MVC.
- **Herança de Classe**: Utilizei herança de classe para reaproveitar métodos nos Controllers e Services.

## 4. Relações e Associações
Na quarta etapa, aprofundei-me nas associações entre modelos:
- **Associações no Sequelize**: Aprendi a utilizar métodos do Sequelize para associar modelos.
- **Associações de Migrações vs. Modelos**: Compreendi as diferenças entre associações feitas em migrações e aquelas feitas entre modelos.
- **Padrões de Relacionamento**: Estudei os diferentes padrões de relacionamento entre entidades (1:1, 1:n, n:m).
- **Características dos Relacionamentos**: Explorei as características e usos de cada padrão de relacionamento e como identificar o tipo de relacionamento entre tabelas.

## 5. Atualizando a API
Na quinta e última etapa, foquei em adicionar funcionalidades à API:
- **Herança de Classe em Services e Controllers**: Usei a herança de classe para adicionar Services e Controllers sem duplicar os métodos de CRUD.
- **Métodos Especiais**: Utilizei métodos especiais criados com associações de modelos para adicionar funcionalidades à API.

## 6. Soft Delete
Na sexta etapa do curso, aprendi sobre a organização e aprimoramento do projeto:
- **Organização do Projeto**: Estruturei o projeto para refletir as camadas da aplicação, melhorando a organização e manutenção do código.
- **Soft Delete**: Implementei a funcionalidade de soft delete usando Sequelize, permitindo marcar registros como deletados sem removê-los do banco de dados.
- **Migrações**: Criei novas migrações para alterar tabelas utilizando o Sequelize.queryInterface, garantindo que as mudanças no esquema do banco de dados sejam rastreáveis e controladas.

## 7. Escopo de Modelo e Validações
Na sétima etapa, foquei na implementação de escopos e validações:
- **Escopos de Modelo**: Implementei escopos específicos no modelo Pessoa para realizar consultas comuns e complexas de forma mais eficiente.
- **Abstração de Lógicas**: Utilize escopos para consultas comuns com where e include, melhorando a reutilização de código.
- **Associações**: Criei escopos de associação padrão e específicos para facilitar a navegação entre modelos relacionados.
- **Validações**: Utilizei métodos built-in de validação e refinei validações de campo para garantir a integridade dos dados.
- **Diferença Entre Validação e Constraint**: Entendi a importância de diferenciar validações (lógicas de aplicação) de constraints (regras de banco de dados).

## 8. Escopo de Associação
Na oitava etapa, trabalhei com métodos avançados e funções auxiliares:
- **Métodos “Mixin”**: Trabalhei com métodos gerados a partir de associações entre modelos, facilitando operações complexas.
- **Finders Genéricos**: Refatorei o código para criar métodos finders reutilizáveis, aumentando a eficiência e clareza do código.
- **Helper Functions**: Separei responsabilidades no código utilizando funções auxiliares, promovendo a modularidade e manutenibilidade do projeto.

## 9. Operadores e Agregadores
Na nona etapa, explorei operadores avançados e parâmetros de consulta:
- **Operadores de Comparação**: Explorei novas formas de utilização de operadores de comparação no Sequelize para realizar consultas mais flexíveis.
- **Query Params**: Utilizei parâmetros de consulta para trafegar dados e melhorar a usabilidade das APIs.
- **Finders do Sequelize**: Aprendi sobre findAndCountAll e consultas SQL diretas para realizar operações complexas de busca e contagem de registros.

## 10. Transações
Na décima e última etapa, foquei em garantir a integridade das operações:
- **Transações**: Garanti a integridade das operações no banco de dados com transações gerenciadas pelo Sequelize, permitindo reverter mudanças em caso de erros durante a execução de múltiplas operações.

## 11. Estrutura do Projeto
```
📦curso-orm-nodejs-sequelize-sqlite
 ┣ 📂docs
 ┃ ┣ 📜comandos-sequelize.md
 ┃ ┣ 📜entidades.png
 ┃ ┣ 📜requisitos.md
 ┃ ┣ 📜saiba-mais.md
 ┃ ┣ 📜seederCategorias.js
 ┃ ┣ 📜seederCursos.js
 ┃ ┣ 📜seederMatriculas.js
 ┃ ┗ 📜seederPessoas.js
 ┣ 📂src
 ┃ ┣ 📂controllers
 ┃ ┃ ┣ 📜CategoriaController.js
 ┃ ┃ ┣ 📜Controller.js
 ┃ ┃ ┣ 📜CursoController.js
 ┃ ┃ ┣ 📜MatriculaController.js
 ┃ ┃ ┗ 📜PessoaController.js
 ┃ ┣ 📂database
 ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┗ 📜config.json
 ┃ ┃ ┣ 📂migrations
 ┃ ┃ ┃ ┣ 📜20240613130905-create-pessoa.js
 ┃ ┃ ┃ ┣ 📜20240613172530-create-categoria.js
 ┃ ┃ ┃ ┣ 📜20240613172717-create-curso.js
 ┃ ┃ ┃ ┣ 📜20240613172813-create-matricula.js
 ┃ ┃ ┃ ┣ 📜20240614130905-addColumn-pessoa.js
 ┃ ┃ ┃ ┣ 📜20240614130906-addColumn-categoria.js
 ┃ ┃ ┃ ┣ 📜20240614130907-addColumn-curso.js
 ┃ ┃ ┃ ┗ 📜20240614130908-addColumn-matricula.js
 ┃ ┃ ┣ 📂models
 ┃ ┃ ┃ ┣ 📜categoria.js
 ┃ ┃ ┃ ┣ 📜curso.js
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┣ 📜matricula.js
 ┃ ┃ ┃ ┗ 📜pessoa.js
 ┃ ┃ ┣ 📂seeders
 ┃ ┃ ┃ ┣ 📜20240613134716-demo-pessoa.js
 ┃ ┃ ┃ ┣ 📜20240613182325-demo-categorias.js
 ┃ ┃ ┃ ┣ 📜20240613182344-demo-cursos.js
 ┃ ┃ ┃ ┗ 📜20240613182402-demo-matriculas.js
 ┃ ┃ ┗ 📂storage
 ┃ ┃ ┃ ┗ 📜database.sqlite
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📜categoriaRoutes.js
 ┃ ┃ ┣ 📜cursoRoutes.js
 ┃ ┃ ┣ 📜pessoaRoutes.js
 ┃ ┃ ┗ 📜routes.js
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📜CategoriaServices.js
 ┃ ┃ ┣ 📜CursoServices.js
 ┃ ┃ ┣ 📜MatriculaServices.js
 ┃ ┃ ┣ 📜PessoaServices.js
 ┃ ┃ ┗ 📜Services.js
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜conversorDeStringHelper.js
 ┃ ┃ ┗ 📜validaCPFHelper.js
 ┃ ┗ 📜app.js
 ┣ 📜.editorconfig
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.sequelizerc
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜server.js
```
