const tokenValidation = require('./validations/validateToken');

const searchTalker = (req, res) => {
  const { searchTerm } = req.query;
  const { talkers } = req;
  const { authorization } = req.headers;
  console.log(searchTerm);
  const verify = tokenValidation(authorization);
  if (verify !== 'ok') return res.status(401).send(verify);

  if (searchTerm === undefined || searchTerm === '') return res.status(200).send(talkers);

  const searchTalkerByQuery = talkers.find((t) => (
    t.name.toLowerCase().includes(searchTerm.toLowerCase())));
  
  if (!searchTalkerByQuery) return res.status(200).send([]);

  return res.status(200).send(searchTalkerByQuery);
};

module.exports = searchTalker;
