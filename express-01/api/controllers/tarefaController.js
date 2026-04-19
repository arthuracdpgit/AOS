import * as tarefaService from '../services/tarefaService';

const create = async (req, res) => {
  try {
    const tarefa = await tarefaService.criarTarefa(req.body);
    return res.status(201).send(tarefa);
  } catch (error) {
    return res.status(500).send({ erro: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const tarefas = await tarefaService.listarTarefas();
    return res.send(tarefas);
  } catch (error) {
    return res.status(500).send({ erro: error.message });
  }
};

export default {
  create,
  getAll,
};