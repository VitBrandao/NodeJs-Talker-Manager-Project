const validateToken = require('./validations/validateToken');
const validateName = require('./validations/validateName');
const validateAge = require('./validations/validateAge');
const validateTalk = require('./validations/validateTalk');

const addNewTalker = (req, res, next) => {
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

  req.newTalker = { name, age, talk };
  next();
};

module.exports = addNewTalker;
