import {Router} from 'express';
import * as sysConfigController from '../controllers/syscofig.controller';

const router = Router();

router.get('/sysconfig/:name', sysConfigController.getSysConfigByName);
router.get('/sysconfig', sysConfigController.listSysConfig);
router.post('/sysconfig', sysConfigController.createSysConfig);
router.put('/sysconfig/:name', sysConfigController.updateSysConfig);

export default router;