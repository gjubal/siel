import ICreateDrinkDTO from '../dtos/ICreateDrinkDTO';
import Drink from '../infra/typeorm/entities/Drink';

export default interface IDrinksRepository {
  findAll(): Promise<Drink[]>;
  findById(id: string): Promise<Drink | undefined>;
  create(data: ICreateDrinkDTO): Promise<Drink>;
  save(drink: Drink): Promise<Drink>;
}
