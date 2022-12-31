import express from 'express'
import { accountActivation, register } from '../controllers/userController.js';
const router = express.Router();


router.post('/register', register)
router.post('/account-activation/:token', accountActivation)

export default router