const validateToken = (token) => {
  const expectedToken = { token: '7mqaVRXJSp886CGr' };

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

const addNewTalker = (req, res) => {
  const { token } = req.headers;

  const tokenValidation = validateToken(token);
  if (tokenValidation !== 'ok') {
    return res.status(401).send(tokenValidation);
  }
};

module.exports = addNewTalker;