import express from 'express';
import { Login } from '../controller/userController.js';
import { Register } from '../controller/userController.js';
import { Product } from '../controller/userController.js';
const router  = express.Router();

router.post('/login',Login)
router.post('/register',Register);
router.get('/product',Product);

export  default router;



