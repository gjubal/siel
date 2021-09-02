import Drink from '@models/Drink';
import { Request, Response } from 'express';

export default class DrinksController {
  public async index(request: Request, response: Response): Promise<Response> {
    const allDrinks = await Drink.find({});

    return response.json(allDrinks);
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
}
