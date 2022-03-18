const fs = require('fs').promises;

const validateToken = require('./validations/validateToken');
const validateName = require('./validations/validateName');
const validateAge = require('./validations/validateAge');
const validateTalk = require('./validations/validateTalk');

const allValidations = (req, res) => {
  const { name, age, talk } = req.body;
  const { authorization } = req.headers;

  const tokenValidation = validateToken(authorization);
  if (tokenValidation !== 'ok') return res.status(401).send(tokenValidation);

  const nameValidation = validateName(name);
  if (nameValidation !== 'ok') return res.status(400).send(nameValidation);

  const ageValidation = validateAge(age);
  if (ageValidation !== 'ok') return res.status(400).send(ageValidation);

  const talkValidation = validateTalk(talk);
  if (talkValidation !== 'ok') return res.status(400).send(talkValidation);

  return 'ok';
};

const editTalker = async (req, res) => {
  const verify = allValidations(req, res);
  if (verify === 'ok') {
    const { name, age, talk } = req.body;
    req.talkerNewData = { name, age, talk };

    const { id } = req.params;
    const findTalker = req.talkers.find((talker) => talker.id === Number(id));

    req.talkerNewData.id = findTalker.id;
    req.talkers[findTalker.id] = req.talkerNewData;

    try {
      await fs.writeFile('talker.json', JSON.stringify(req.talkers));
      return res.status(200).send(req.talkerNewData);
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = editTalker;