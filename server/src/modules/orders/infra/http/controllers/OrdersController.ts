import AppError from '@common/errors/AppError';
import Drink from '@modules/drinks/infra/typeorm/entities/Drink';
import { Request, Response } from 'express';
import Order from '../../typeorm/entities/Order';

export default class OrdersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const orderQueue = await Order.find({});

    return response.json(orderQueue);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, quantity } = request.body;

    const findDrink = await Drink.findOne({
      where: {
        name,
      },
    });

    if (!findDrink) {
      throw new AppError('A drink with the name provided does not exist.');
    }

    const total = findDrink.price * quantity;

    const order = await Order.create({ name, quantity, total });

    await Order.save(order);

    return response.json(order);
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { orderId } = request.params;

    const order = await Order.findOne(orderId);

    if (!order) {
      throw new AppError('An order with the given ID does not exist.');
    }

    await Order.remove(order);

    return response.json(order);
  }
}
