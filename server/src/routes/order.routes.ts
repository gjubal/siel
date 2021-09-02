import OrdersController from '@controllers/OrdersController';
import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

const orderRouter = Router();

const ordersController = new OrdersController();

orderRouter.get('/', ordersController.index);
orderRouter.post(
  '/new',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      quantity: Joi.number(),
    },
  }),
  ordersController.create,
);

export default orderRouter;
