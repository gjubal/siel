import { Request, Response } from 'express';
import AppError from '@common/errors/AppError';
import Drink from '../../typeorm/entities/Drink';

export default class DrinksController {
  public async index(request: Request, response: Response): Promise<Response> {
    const allDrinks = await Drink.find({});

    return response.json(allDrinks);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { drinkId } = request.params;

    const findDrink = await Drink.findOne(drinkId);

    if (!findDrink) {
      throw new AppError('A drink with the ID provided does not exist.');
    }

    return response.json(findDrink);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, category, description, price, fruit, pictureUrl } =
      request.body;

    const drink = await Drink.create({
      name,
      category,
      description,
      price,
      fruit,
      pictureUrl,
    });

    await Drink.save(drink);

    return response.json(drink);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, category, description, price, fruit, pictureUrl } =
      request.body;
    const { drinkId } = request.params;

    const drink = await Drink.findOne(drinkId);

    if (!drink) {
      throw new AppError('A drink with the given ID does not exist.');
    }

    drink.name = name;
    drink.category = category;
    drink.description = description;
    drink.price = price;
    drink.fruit = fruit;
    drink.pictureUrl = pictureUrl;

    await Drink.save(drink);

    return response.json(drink);
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { drinkId } = request.params;

    const drink = await Drink.findOne(drinkId);

    if (!drink) {
      throw new AppError('A drink with the given ID does not exist.');
    }

    await Drink.remove(drink);

    return response.json(drink);
  }
}
