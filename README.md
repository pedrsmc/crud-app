# CRUD Básico com Node.js, Fastify, TypeScript, Prisma e MongoDB

## Tecnologias Utilizadas

### Backend
- Node.js
- Fastify
- TypeScript
- Prisma
- MongoDB

### Frontend
- React
- Vite


## Configuração do Backend

### Pré-requisitos
- Node.js
- MongoDB

### Passos para configurar

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    cd nome-do-repositorio/backend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure o Prisma:

    Crie o arquivo `.env` na raiz do diretório `backend` e adicione sua URL do MongoDB:

    ```
    DATABASE_URL="mongodb://USERNAME:PASSWORD@HOST:PORT/DATABASE"
    ```

    Em seguida, execute o comando para gerar o cliente Prisma:

    ```bash
    npx prisma generate
    ```

4. Inicie o servidor:

    ```bash
    npm run dev
    ```

## Configuração do Frontend

### Passos para configurar

1. Navegue até o diretório do frontend:

    ```bash
    cd ../frontend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

## Configuração do Frontend

### Passos para configurar

1. Navegue até o diretório do frontend:

    ```bash
    cd ../frontend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

## Endpoints da API

- `POST /create` - Cria um usuário.
- `GET /users` - Retorna a lista de usuários cadastrados no banco.
- `PUT /update?id=[user_id]` - Edita um usuário pelo ID.
- `DELETE /remove?id=[user_id]` - Deleta um usuário pelo ID.
