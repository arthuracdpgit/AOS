import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const experiences = await req.context.models.Experience.findAll();
  return res.send(experiences);
});

router.get('/:experienceId', async (req, res) => {
  const experience = await req.context.models.Experience.findByPk(
    req.params.experienceId,
  );
  return res.send(experience);
});

router.post('/', async (req, res) => {
  const experience = await req.context.models.Experience.create({
    title: req.body.title,
    company: req.body.company,
    description: req.body.description,
    userId: req.body.userId, 
  });
  return res.send(experience);
});

router.delete('/:experienceId', async (req, res) => {
  const result = await req.context.models.Experience.destroy({
    where: { id: req.params.experienceId },
  });
  return res.send(result !== 0);
});

export default router;