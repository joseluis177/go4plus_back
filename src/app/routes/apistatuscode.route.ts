import {Router} from 'express';
import * as apiStatusController from '../controllers/apistatuscode.controller';

const router = Router();

router.post('/apistatus', apiStatusController.createStatusCode);

export default router;