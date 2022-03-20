# Boas vindas ao repositório do projeto Cookmaster!

# Tecnologias e ferramentas utilizadas

`JavaScript`\
`MongoDB`\
`Node.js`\
`express`\
`dotenv`\
`joi`\
`jsonwebtoken`\
`nodemon`\
`multer`

&nbsp;

# Sobre a aplicação

Projeto desenvolvido individualmente durante o curso da Trybe, no módulo de Back-End. Todo o código da API foi desenvolvido por mim seguindo o padrão arquitetura **MSC (Model, Service, Controller)**. 

Esta API possui um processo de cadastro e autenticação de usuários antes do acesso ao banco de dados. Uma vez autenticado, o usuário pode realizar operações C.R.U.D. em um banco de dados MongoDB que armazena receitas. Cada usuário pode realizar ações apenas nas receitas que ele mesmo criou.

&nbsp;

# Endpoints

Em todas as rotas onde há envio de dados na requisição são feitas verificações desses dados. Caso exista algum problema na requisição (falta de campos ou dados inválidos), uma resposta específica de erro será recebida pelo cliente.

## Cadastro de usuários (`/users`)

- O método HTTP é POST;

- Para criar um usuário através desta API são necessarios os campos: Email, Senha, Nome e Role. Todos são obrigatórios, exceto Role. O Role deve ser user;

- O Email deve ser único;

- O body da requisição deve estar no seguinte formato:

  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```
## Login (`/login`)

- O método HTTP é POST;

- A rota recebe os campos Email e Senha e esses campos são validados no banco de dados. Os dois campos são obrigatórios;

- O token gerado com o JWT é retornado quando o Login é bem sucedido;

- O body da requisição deve estar no seguinte formato:

  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

## Cadastro ou criação receitas (`/recipes`)

- O método HTTP é POST;

- A receita só pode ser criada caso o usuário esteja logado;

- No banco, a receita deve ter os campos Nome, Ingredientes, Modo de preparo, URL da imagem e Id do Autor. Nome, Ingredientes e Modo de preparo são obrigatórios;

- O URL da imagem será preenchido por outro endpoint e o Id é gerado automaticamente pelo MongoDB;

- A requisição deve ter o body no seguinte formato:


  ```json
  {
    "name": "string",
    "ingredients": "string",
    "preparation": "string"
  }
  ```

## Leitura de todas as receitas (`/recipes`)

- O método HTTP é GET;

- A rota pode ser acessada por usuários logados ou não;

- Não é necessário enviar body na requisição.

## Leitura de uma receita específica (`/recipes/:id`)

- O método HTTP é GET;

- A rota pode ser acessada por usuários logados ou não;

- Um id válido deve ser inserido no endereço desta rota.

## Edição de uma receita (`/recipes/:id`)

- O método HTTP é PUT;

- A receita só pode ser editada pelo usuário logado que criou essa receita;

- O corpo da requisição deve receber o seguinte formato:

  ```json
  {
    "name": "string",
    "ingredients": "string",
    "preparation": "string"
  }
  ```

## Remoção de um receita específica (`/recipes/:id`)

- O método HTTP é DELETE;

- A receita só pode ser excluída caso o usuário esteja logado;

- A receita só pode ser excluída caso seja de autoria do usuário logado;

## Adição de imagem .jpg à receita (`/recipes/:id/image/`)

- O método HTTP é PUT.

- A imagem deve ser lida do campo `image`.

- O endpoint deve aceitar requisições no formato `multipart/form-data`.

- A receita só pode ser atualizada caso o usuário esteja logado e seja o criador da receita.

&nbsp;
---
# Como rodar o projeto na sua máquina

**Pré-requisitos:**
Ter instalado o MongoDB e algum cliente HTTP (como o Insomnia).
<a href="https://docs.mongodb.com/manual/administration/install-community/">Link MongoDB</a>.
<a href="https://insomnia.rest/download">Link Insomnia</a>.

Abra o seu Visual Studio Code e aperte ctrl + J ou abra um terminal e siga as instruções a seguir.

1. Clone o repositório com o comando:
`git clone git@github.com:camila-mp/cookmaster-API.git`

2. Entre na pasta clonada com o comando:
`cd Cookmaster-API`

3. Instale as dependências com o comando:
`npm install` ou `yarn install`

4. Inicialize o servidor da API localmente com o comando:
`npm start` ou `yarn start`

5. Inicie o MongoDB com o comando:
`sudo service mongod start`

6. Abra o software Insomnia, ou outro cliente HTTP de sua preferência, e teste os endpoints.
