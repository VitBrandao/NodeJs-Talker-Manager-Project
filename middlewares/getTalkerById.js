/* Crie o endpoint GET /talker/:id
O endpoint deve retornar uma pessoa palestrante com base no id da rota. Devendo retornar o status 200 ao fazer uma requisição /talker/1 e o objeto referente ao id. 

Caso não seja encontrada uma pessoa palestrante com base no id da rota, o endpoint deve retornar o status 404 com o seguinte corpo:

{
  "message": "Pessoa palestrante não encontrada"
} */

const getTalkerById = (req, res) => {
  const { id } = req.params;
  const { talkers } = req;
  // console.log(id);
  const findTalker = talkers.find((t) => t.id === Number(id));
  
  if (!findTalker) {
    const errorMessage = { message: 'Pessoa palestrante não encontrada' };
    return res.status(404).send(errorMessage);
  }

  res.status(200).send(findTalker);
};

module.exports = getTalkerById;
