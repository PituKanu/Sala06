# API de Usuários com NestJS

Esta API permite criar, listar, consultar e excluir usuários em memória, usando Node.js e NestJS.

## Funcionalidades

- Criar usuário com nome e e-mail
- Consultar todos os usuários
- Consultar um usuário por ID
- Excluir um usuário por ID

## Endpoints

- POST /users
- GET /users
- GET /users/:id
- DELETE /users/:id

## Como executar

```bash
npm install
npm run start:dev
```

## Exemplo de requisição

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Ana","email":"ana@example.com"}'
```

## Alunos

- Ana Beatriz
- Bruno Silva
- Carla Mendes
- Diego Oliveira
