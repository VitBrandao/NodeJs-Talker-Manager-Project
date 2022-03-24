const express = require('express');
const bodyParser = require('body-parser');

const allTalkers = require('./middlewares/allTalkers'); // 1
const getTalkerById = require('./middlewares/getTalkerById'); // 2
const login = require('./middlewares/login'); // 3
const addNewTalker = require('./middlewares/addNewTalker'); // 4
const writeTalker = require('./middlewares/writeTalker'); // 4
const editTalker = require('./middlewares/editTalker'); // 5
const deleteTalker = require('./middlewares/deleteTalker'); // 6

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
app.put('/talker/:id', readTalkers, editTalker);

// Req. 1
app.use('/talker', readTalkers, allTalkers);

// Req.2
app.get('/talker/:id', readTalkers, getTalkerById);

// Req.3
app.post('/login', login);

// Req.4
app.post('/talker', readTalkers, addNewTalker, writeTalker);

// Req.6
app.delete('/talker/:id', readTalkers, deleteTalker);

app.listen(PORT, () => {
  console.log('Online');
});
