/* Crie o endpoint GET /talker
Os seguintes pontos serão avaliados:
O endpoint deve retornar um array com todas as pessoas palestrantes cadastradas. Devendo retornar o status 200, com o seguinte corpo:

Caso não exista nenhuma pessoa palestrante cadastrada o endpoint deve retornar um array vazio e o status 200. */
const express = require('express');

const router = express.Router();

const API = require('../talker.json');

router.get('/', (_req, res) => {
  // if (API.length === 0) {
  //   return res.status(200).send([]);
  // }

  res.status(200).send(API);
});

module.exports = router;