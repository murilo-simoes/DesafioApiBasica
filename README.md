# 📝 ToDo List API

Esta é uma API simples de **ToDo List** desenvolvida como parte de um desafio técnico. A API permite gerenciar usuários e tarefas, com rotas para criar, editar e listar essas entidades. A documentação da API foi gerada utilizando o **Swagger**, permitindo fácil visualização e teste das rotas diretamente no navegador.

## 📋 Funcionalidades da API
- **Usuários**: CRUD de usuários (criação, listagem, atualização e exclusão).
- **Tarefas**: CRUD de tarefas associadas a usuários (criação, listagem, listagem por usuario, atualização e exclusão).
- **Documentação**: A API possui documentação interativa feita com Swagger.

## 🛠️ Tecnologias Utilizadas
- **Node.js**
- **Express**
- **TypeScript**
- **MongoDB**
- **Mongoose**
- **Swagger** (para documentação da API)
- **Docker** (para containerização)
- **Docker Compose** (para facilitar a inicialização do ambiente)

---

## 🚀 Instruções de Execução

### 1. Clone o Repositório
Primeiro, você precisará clonar o repositório da aplicação para a sua máquina local. Execute o seguinte comando no terminal:

```bash
git clone https://github.com/murilo-simoes/ToDoListApi.git
```

### 2. Acesse a Pasta do Projeto
Entre na pasta do projeto clonado:

```bash
cd ToDoListApi
```
### 3. Inicialize a Aplicação com Docker
Para facilitar o processo, foi configurado um arquivo ```docker-compose.yml ```. Basta rodar o seguinte comando para construir e iniciar a aplicação:

```bash
docker-compose up --build
```
Este comando irá:
- Construir a imagem Docker da aplicação.
- Subir os containers necessários.
- Rodar a aplicação no endereço http://localhost:3000.

### 4. Acessar a API
Após rodar o comando anterior, a API estará disponível em:

```arduino
http://localhost:3000
```

### 5. Acessar a Documentação da API (Swagger)
A documentação da API estará disponível no seguinte endereço:

```bash
http://localhost:3000/api-docs
```
Você pode usar a interface do Swagger para testar as rotas da API diretamente pelo navegador!

---

## Exemplos de Rotas da API
### Usuários
- **GET /user/list** - Lista todos os usuários.
- **POST /user/add** - Cria um novo usuário.
- **PATCH /user/edit/:id** - Atualiza um usuário existente.
- **DELETE /user/delete/:id** - Deleta um usuário.
### Tarefas
- **GET /task/list** - Lista todas as tarefas.
- **GET /task/list/:id** - Lista todas as tarefas de um usuário.
- **POST /task/add** - Cria uma nova tarefa.
- **PUT /task/edit/:id** - Atualiza o status de uma tarefa existente.
- **DELETE /task/delete/:id** - Deleta uma tarefa.

---
## 📦 Scripts Disponíveis
Alguns scripts úteis para o desenvolvimento:
**Rodar em ambiente de desenvolvimento:**
```bash
npm install
npm run dev
```
