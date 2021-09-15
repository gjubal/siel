import { v4 as uuid } from 'uuid';

import Drink from '@modules/drinks/infra/typeorm/entities/Drink';
import ICreateDrinkDTO from '@modules/drinks/dtos/ICreateDrinkDTO';
import IDrinksRepository from '../IDrinksRepository';

export default class FakeDrinksRepository implements IDrinksRepository {
  private drinks: Drink[] = [];

  public async findAll(): Promise<Drink[]> {
    return this.drinks;
  }

  public async findById(id: string): Promise<Drink | undefined> {
    const findDrink = this.drinks.find(drink => drink.id === id);

    return findDrink;
  }

  public async create(drinkData: ICreateDrinkDTO): Promise<Drink> {
    const drink = new Drink();

    Object.assign(drink, { id: uuid() }, drinkData);

    this.drinks.push(drink);

    return drink;
  }

  public async save(drink: Drink): Promise<Drink> {
    const findIndex = this.drinks.findIndex(
      findDrink => findDrink.id === drink.id,
    );

    this.drinks[findIndex] = drink;

    return drink;
  }
}
