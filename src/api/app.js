const express = require('express');
const usersRouter = require('./controllers/users/router');
const loginRouter = require('./controllers/login/router');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use('/users', usersRouter);
app.use('/login', loginRouter);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use(errorHandler);

module.exports = app;
