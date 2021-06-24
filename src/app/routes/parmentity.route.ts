import {Router} from 'express';
import * as objectController from '../controllers/parmentity.controller';

const router = Router();
const pathbase = '/api/parm-entity'

router.post(pathbase, objectController.create);
router.get(pathbase, objectController.list);

export default router;