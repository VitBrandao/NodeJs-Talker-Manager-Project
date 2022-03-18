const fs = require('fs').promises;
const tokenValidation = require('./validations/validateToken');

const deleteTalker = async (req, res) => {
  const { authorization } = req.headers;
  const { id } = req.params;
  const verify = tokenValidation(authorization);

  if (verify !== 'ok') {
    return res.status(401).send(verify);
  }

  const findTalker = req.talkers.findIndex((talker) => talker.id === Number(id));

  delete req.talkers[findTalker];

  try {
    await fs.writeFile('talker.json', JSON.stringify(req.talkers));
    return res.status(204).json();
  } catch (error) {
    return console.log(error);
  }
};

module.exports = deleteTalker;