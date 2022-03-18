const validateToken = (token) => {
  const expectedToken = '7mqaVRXJSp886CGr';

  if (!token) {
    const message = { message: 'Token não encontrado' };
    return message;
  }

  if (token !== expectedToken) {
    const message = { message: 'Token inválido' };
    return message;
  }

  return 'ok';
};

const validateName = (name) => {
  if (!name) {
    const message = { message: 'O campo "name" é obrigatório' };
    return message;
  }

  if (name.length < 3) {
    const message = { message: 'O "name" deve ter pelo menos 3 caracteres' };
    return message;
  }

  return 'ok';
};

const validateAge = (age) => {
  if (!age) {
    const message = { message: 'O campo "age" é obrigatório' };
    return message;
  }

  if (age < 18) {
    const message = { message: 'A pessoa palestrante deve ser maior de idade' };
    return message;
  }

  return 'ok';
};

const talkEmptyFields = (talk) => {
  const { watchedAt, rate } = talk;
  
  if (!watchedAt || !rate) {
    const message = { 
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    };
    return message;
  }
  
  return 'ok';
};

const validateTalk = (talk) => {
  const { watchedAt, rate } = talk;

  const validateEmptyFields = talkEmptyFields(talk);
  if (validateEmptyFields !== 'ok') return validateEmptyFields;

  const dateFormat = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  if (!watchedAt.match(dateFormat)) {
    const message = { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' };
    return message;
  }

  if (rate < 0 || rate > 5) {
    const message = { message: 'O campo "rate" deve ser um inteiro de 1 à 5' };
    return message;
  }
  
  return 'ok';
};

const talkersList = require('../talker.json');

const addNewTalker = (req, res) => {
  const { authorization } = req.headers;
  const { name, age, talk } = req.body;

  const tokenValidation = validateToken(authorization);
  if (tokenValidation !== 'ok') return res.status(401).send(tokenValidation);

  const nameValidation = validateName(name);
  if (nameValidation !== 'ok') return res.status(400).send(nameValidation);

  const ageValidation = validateAge(age);
  if (ageValidation !== 'ok') return res.status(400).send(ageValidation);

  const talkValidation = validateTalk(talk);
  if (talkValidation !== 'ok') return res.status(400).send(talkValidation);
  
  const finalObject = { id: 1, name, age, talk };
  talkersList.push(finalObject);
  return res.status(201).send(finalObject);
};

module.exports = addNewTalker;