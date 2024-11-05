import { Router } from 'express';
import { createRobotmsg} from '../Controllers/robotmsgController.js';

const router = Router();

// Route to create a new robot message
router.post('/robotmsgs', createRobotmsg); 



export default router;