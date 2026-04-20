import { Router } from 'express';
import { logoutUser, loginUser, registerUser, getUsers, updateUser, deleteUser } from '../controllers/user.controller.js';

const router = Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(logoutUser);
router.route('/getusers').get(getUsers);
router.route('/updateUser/:id').patch(updateUser);
router.route('/deleteUser/:id').patch(deleteUser);
export default router;