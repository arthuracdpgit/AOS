import { Router } from 'express';
import tarefaController from '../controllers/tarefaController';

const router = Router();

router.get('/', tarefaController.getAll);
router.post('/', tarefaController.create);

export default router;