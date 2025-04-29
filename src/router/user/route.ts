import { Router } from 'express';
import { getUsers } from '../../modules/user/controllers/controller';
const router = Router();

router.get("/", getUsers);

export default router;
