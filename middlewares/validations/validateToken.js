const validateToken = (token) => {
  const expectedToken = '7mqaVRXJSp886CGr';

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

module.exports = validateToken;