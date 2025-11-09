import { Router } from 'express';
import {
  createPaymentSessionHandler,
  getPaymentMethods,
} from '../controllers/paymentController.js';

const router = Router();

router.get('/methods', getPaymentMethods);
router.post('/session', createPaymentSessionHandler);

export default router;
