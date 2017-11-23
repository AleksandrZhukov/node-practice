import { Router } from 'express';
import practices from './practices';
import tools from './tools';

const router = Router();

router.use('/practices', practices);
router.use('/tools', tools);

export default router
