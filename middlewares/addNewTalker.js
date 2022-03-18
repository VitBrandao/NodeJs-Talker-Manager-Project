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

const addNewTalker = (req, res) => {
  const { token } = req.headers;
  const { name, age } = req.body;

  const tokenValidation = validateToken(token);
  if (tokenValidation !== 'ok') return res.status(401).send(tokenValidation);

  const nameValidation = validateName(name);
  if (nameValidation !== 'ok') return res.status(400).send(nameValidation);

  const ageValidation = validateAge(age);
  if (ageValidation !== 'ok') return res.status(400).send(ageValidation);
};

module.exports = addNewTalker;