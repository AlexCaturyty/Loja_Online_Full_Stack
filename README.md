# Aplicação de Gerenciamento de Coleção de Itens

Este projeto é um desenvolvimento Full Stack, com o objetivo de criar uma aplicação web completa para gerenciar uma coleção de itens (produtos). O desenvolvimento envolve tanto o front-end, utilizando React com Typescript, quanto o back-end, implementado em Java Spring Boot.

## Parte 1: Front-end (React com Typescript)

### Tarefa Front-end:

- Criar uma interface de usuário para visualizar, adicionar, deletar e atualizar itens.
- A interface inclui:
  - Uma página principal exibindo todos os itens.
  - Formulários para adicionar e atualizar itens.
  - Opções para deletar itens diretamente na lista.
  - Opção para visualizar detalhes de cada item.
- A interface é responsiva e possui um design atraente.

## Parte 2: Back-end (Java Spring Boot)

### Tarefa Back-end:

- Desenvolver uma API RESTful para gerenciar a coleção de itens.
- A API fornece endpoints para:
  - Listar todos os itens (GET).
  - Obter detalhes de um item específico (GET com ID).
  - Adicionar um novo item (POST).
  - Atualizar um item existente (PUT/PATCH).
  - Remover um item (DELETE).
- Integração da API com um banco de dados (MySQL ou Postgres) para persistência dos dados.

## Como executar a aplicação:

1. **Front-end:**
   - Navegue até o diretório `Front_End_Full_Stack` usando o terminal.
   - Execute `npm install` para instalar as dependências.
   - Execute `npm run dev` para iniciar o servidor de desenvolvimento.

2. **Back-end:**
   - Navegue até o diretório `produtos` usando o terminal.
   - Aperte F5 ou no play do seu editor de código para iniciar o servidor Spring Boot.

A aplicação estará acessível em [http://localhost:3000](http://localhost:3000) para o front-end e [http://localhost:8080](http://localhost:8080) para o back-end.
