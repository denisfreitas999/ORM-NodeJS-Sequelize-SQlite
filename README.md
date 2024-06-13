# ORM com Node.js: Desenvolvendo uma API com Sequelize e SQLite - Alura Course Overview

## Índice
1. [Conhecendo o Sequelize](#1-conhecendo-o-sequelize)
2. [Criando um Modelo](#2-criando-um-modelo)
3. [Desenvolvendo a API](#3-desenvolvendo-a-api)
4. [Relações e Associações](#4-relações-e-associações)
5. [Atualizando a API](#5-atualizando-a-api)

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
