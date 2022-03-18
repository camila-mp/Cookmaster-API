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

## Sobre a aplicação

Projeto desenvolvido individualmente durante o curso da Trybe, no módulo de Back-End. Todo o código da API foi desenvolvido por mim seguindo o padrão arquitetura MSC (Model, Service, Controller). Nesta API o usuário passa por cadastro e autenticação antes de ter acesso ao banco de dados. Uma vez autenticado, o usuário pode realizar operações C.R.U.D. em um banco de dados MongoDB que armazena receitas. Cada usuário pode realizar ações apenas nas receitas que ele mesmo criou.

---

# Como rodar o projeto na sua máquina

### Pré-requisitos

Ter instalado o MongoDB e algum cliente HTTP (como o Insomnia).
<a href="https://docs.mongodb.com/manual/administration/install-community/">Link MongoDB</a>.
<a href="https://insomnia.rest/download">Link Insomnia</a>.

---

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
