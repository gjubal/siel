import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import DrinksController from '../controllers/DrinksController';

const drinkRouter = Router();

const drinksController = new DrinksController();

drinkRouter.get('/', drinksController.index);
drinkRouter.get('/:drinkId', drinksController.show);

drinkRouter.post(
  '/',
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

drinkRouter.put('/:drinkId', drinksController.update);

drinkRouter.delete('/:drinkId', drinksController.destroy);

export default drinkRouter;
