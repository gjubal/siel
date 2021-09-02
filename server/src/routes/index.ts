import { Router } from 'express';
import drinkRouter from './drink.routes';
import orderRoutes from './order.routes';
import profileRouter from './profile.routes';
import sessionsRouter from './sessions.routes';
import usersRouter from './users.routes';

const router = Router();

router.use('/menu', drinkRouter);
router.use('/orders', orderRoutes);
router.use('/users', usersRouter);
router.use('/sessions', sessionsRouter);
router.use('/profile', profileRouter);

export default router;
