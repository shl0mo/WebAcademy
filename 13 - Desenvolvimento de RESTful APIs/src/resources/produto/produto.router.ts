import { Router } from 'express';
import produtoController from './produto.controller'
import { schema } from './produto.schemas';
import { validate } from '../../middlewares/validate';

const router = Router();

router.get('/', produtoController.index);
router.post('/', validate(schema), proutoController.create)
router.post('/', produtoController.create);
router.get('/:id', produtoController.read);
router.put('/:id', produtoController.update);
router.delete('/:id', produtoController.remove);

export default router;
