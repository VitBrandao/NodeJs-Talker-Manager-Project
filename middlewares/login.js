const validateEmail = (email) => {
  const mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (email.match(mailformat)) {
    return true;
  }

  return false;
};

const validatePassword = (password) => {
  if (!password) {
    const message = { message: 'O campo "password" é obrigatório' };
    return message;
  }

  if (password.length < 6) {
    const message = { message: 'O "password" deve ter pelo menos 6 caracteres' };
    return message;
  }

  return 'ok';
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).send({ message: 'O campo "email" é obrigatório' });
  }

  const emailValidation = validateEmail(email);  
  if (emailValidation === false) {
    return res.status(400).send({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  const passwordValidation = validatePassword(password);
  if (passwordValidation === 'ok') {
    return res.status(200).send({ token: '7mqaVRXJSp886CGr' });
  }

  return res.status(400).send(passwordValidation); 
};

module.exports = login;