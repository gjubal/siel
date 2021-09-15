import { getRepository, Repository } from 'typeorm';

import IDrinksRepository from '@modules/drinks/repositories/IDrinksRepository';
import ICreateDrinkDTO from '@modules/drinks/dtos/ICreateDrinkDTO';
import Drink from '../entities/Drink';

export default class DrinksRepository implements IDrinksRepository {
  private ormRepository: Repository<Drink>;

  constructor() {
    this.ormRepository = getRepository(Drink);
  }

  public async findAll(): Promise<Drink[]> {
    const allDrinks = this.ormRepository.find({});

    return allDrinks;
  }

  public async findById(id: string): Promise<Drink | undefined> {
    const drink = await this.ormRepository.findOne(id);

    return drink;
  }

  public async create(drinkData: ICreateDrinkDTO): Promise<Drink> {
    const drink = this.ormRepository.create(drinkData);

    await this.ormRepository.save(drink);

    return drink;
  }

  public async save(drink: Drink): Promise<Drink> {
    return this.ormRepository.save(drink);
  }
}
