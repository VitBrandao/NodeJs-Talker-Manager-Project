/* Crie o endpoint GET /talker
Os seguintes pontos serão avaliados:
O endpoint deve retornar um array com todas as pessoas palestrantes cadastradas. Devendo retornar o status 200, com o seguinte corpo:

Caso não exista nenhuma pessoa palestrante cadastrada o endpoint deve retornar um array vazio e o status 200. */
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { talkers } = req;

  res.status(200).send(talkers);
});

module.exports = router;