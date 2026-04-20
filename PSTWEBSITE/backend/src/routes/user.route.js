import { Router } from 'express';
import { logoutUser, loginUser, registerUser, getUsers } from '../controllers/user.controller.js';

const router = Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(logoutUser);
router.route('/getusers').get(getUsers);
export default router;