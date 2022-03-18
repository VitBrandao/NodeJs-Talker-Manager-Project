const talkEmptyFields = (talk) => {
  if (!talk) {
    const message = {
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    };
    return message;
  }

  const { watchedAt, rate } = talk;

  if (!watchedAt || rate === undefined) {
    const message = {
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    };
    return message;
  }

  return 'ok';
};

const validateTalk = (talk) => {
  const validateEmptyFields = talkEmptyFields(talk);
  if (validateEmptyFields !== 'ok') return validateEmptyFields;

  const { watchedAt, rate } = talk;

  const dateFormat = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  if (!watchedAt.match(dateFormat)) {
    const message = { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' };
    return message;
  }

  if (rate < 1 || rate > 5) {
    const message = { message: 'O campo "rate" deve ser um inteiro de 1 à 5' };
    return message;
  }

  return 'ok';
};

module.exports = validateTalk;