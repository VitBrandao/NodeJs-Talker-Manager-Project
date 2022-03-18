const validateToken = require('./validations/validateToken');
const validateName = require('./validations/validateName');
const validateAge = require('./validations/validateAge');
const validateTalk = require('./validations/validateTalk');

const editTalker = (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const { authorization } = req.headers;
  // console.log(`${age} name`);
  const tokenValidation = validateToken(authorization);
  if (tokenValidation !== 'ok') return res.status(401).send(tokenValidation);

  const nameValidation = validateName(name);
  if (nameValidation !== 'ok') return res.status(400).send(nameValidation);

  const ageValidation = validateAge(age);
  if (ageValidation !== 'ok') return res.status(400).send(ageValidation);

  const talkValidation = validateTalk(talk);
  if (talkValidation !== 'ok') return res.status(400).send(talkValidation);

  const findTalker = req.talkers.find((talker) => talker.id === Number(id));
  return res.status(200).send(findTalker);
};

module.exports = editTalker;