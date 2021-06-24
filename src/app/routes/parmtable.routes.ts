import {Router} from 'express';
import * as objectController from '../controllers/parmtable.controller';

const router = Router();
const pathbase = '/api/parm-table'

router.post(pathbase, objectController.create);
router.get(pathbase + '/:name', objectController.get);
router.get(pathbase, objectController.list);


export default router;