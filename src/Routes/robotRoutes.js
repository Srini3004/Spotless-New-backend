// routes/robotRoutes.js

import { Router } from 'express';
import { getRobotDetails , getRobotsByEmail} from '../Controllers/robotController.js';


const router = Router();

router.get('/robot/:robotId',getRobotDetails);
router.get('/robots',  getRobotsByEmail);


export default router;
