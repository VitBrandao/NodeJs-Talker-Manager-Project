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

module.exports = validateAge;