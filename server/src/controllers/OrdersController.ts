import Drink from '@models/Drink';
import Order from '@models/Order';
import { Request, Response } from 'express';

export default class OrdersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const orderQueue = await Order.find({});

    return response.json(orderQueue);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { drinks } = request.body;

    const order = await Order.create({ drinks });

    await Order.save(order);

    return response.json(order);
  }
}
