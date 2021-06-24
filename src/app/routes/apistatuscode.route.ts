import {Router} from 'express';
import * as objectController from '../controllers/apistatuscode.controller';

const router = Router();
const pathbase = '/api/apistatus'

router.post(pathbase, objectController.createStatusCode);
router.get(pathbase, objectController.list);

export default router;