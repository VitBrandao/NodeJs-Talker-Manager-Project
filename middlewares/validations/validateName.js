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

module.exports = validateName;