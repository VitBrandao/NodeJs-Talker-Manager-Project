const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// Função de ler arquivos
const readTalkers = require('./middlewares/readTalkers');

// Req.5 - antecipado na lista por dar conflitos com o 2
const editTalker = require('./middlewares/editTalker');

app.put('/talker/:id', readTalkers, editTalker);

// Req. 1
const allTalkers = require('./middlewares/allTalkers');

app.use('/talker', readTalkers, allTalkers);

// Req.2
const getTalkerById = require('./middlewares/getTalkerById');

app.get('/talker/:id', readTalkers, getTalkerById);

// Req.3
const login = require('./middlewares/login');

app.post('/login', login);

// Req.4
const addNewTalker = require('./middlewares/addNewTalker');

const writeTalker = require('./middlewares/writeTalker');

app.post('/talker', readTalkers, addNewTalker, writeTalker);

app.listen(PORT, () => {
  console.log('Online');
});
