import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Drink from './Drink';

@Entity()
export default class Order extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToMany(() => Drink, drink => drink.order)
  drinks: Drink[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
