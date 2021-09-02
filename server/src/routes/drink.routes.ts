import DrinksController from '@controllers/DrinksController';
import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

const drinkRouter = Router();

const drinksController = new DrinksController();

drinkRouter.get('/', drinksController.index);
drinkRouter.post(
  '/new',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      category: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().required(),
      fruit: Joi.string(),
      pictureUrl: Joi.string(),
    },
  }),
  drinksController.create,
);

export default drinkRouter;
