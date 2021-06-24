import {Router} from 'express';
import * as objectController from '../controllers/syscofig.controller';

const router = Router();
const pathbase = '/api/sysconfig'

router.get(pathbase + '/:name', objectController.get);
router.get(pathbase, objectController.list);
router.post(pathbase, objectController.create);
router.delete(pathbase + '/:name', objectController.remove);
router.put(pathbase + '/:name', objectController.update);

export default router;