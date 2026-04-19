import models from '../models';

export const criarTarefa = async (dados) => {
  return await models.Tarefa.create(dados);
};

export const listarTarefas = async () => {
  return await models.Tarefa.findAll();
};

export default {
  criarTarefa,
  listarTarefas,
};