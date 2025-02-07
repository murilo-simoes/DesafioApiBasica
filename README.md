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
- **Swagger** (para documentação da API)
- **Docker** (para containerização)
- **Docker Compose** (para facilitar a inicialização do ambiente)

---

## 🚀 Instruções de Execução

### 1. Clone o Repositório
Primeiro, você precisará clonar o repositório da aplicação para a sua máquina local. Execute o seguinte comando no terminal:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Acesse a Pasta do Projeto
Entre na pasta do projeto clonado:

```bash
cd seu-repositorio
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
- **GET /users** - Lista todos os usuários.
- **POST /users** - Cria um novo usuário.
- **PUT /users/:id** - Atualiza um usuário existente.
- **DELETE /users/:id** - Remove um usuário.
### Tarefas
- **GET /tasks** - Lista todas as tarefas.
- **POST /tasks** - Cria uma nova tarefa.
- **PUT /tasks/:id** - Atualiza uma tarefa existente.
- **DELETE /tasks/:id** - Remove uma tarefa.

---
## 📦 Scripts Disponíveis
Alguns scripts úteis para o desenvolvimento:
**Rodar em ambiente de desenvolvimento:**
```bash
npm install
npm run dev
```
