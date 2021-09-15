import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import OrdersController from '../controllers/OrdersController';

const orderRouter = Router();

const ordersController = new OrdersController();

orderRouter.get('/', ordersController.index);

orderRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      quantity: Joi.number().required(),
    },
  }),
  ordersController.create,
);

orderRouter.delete('/:orderId', ordersController.destroy);

export default orderRouter;
