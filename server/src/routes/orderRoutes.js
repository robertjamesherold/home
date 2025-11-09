import { Router } from 'express';
import { checkoutOrder, listOrders } from '../controllers/orderController.js';

const router = Router();

router.post('/checkout', checkoutOrder);
router.get('/', listOrders);

export default router;
