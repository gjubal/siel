import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Order from './Order';

@Entity()
export default class Drink extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  category!: string;

  @Column()
  fruit?: string;

  @Column()
  description!: string;

  @Column()
  pictureUrl?: string;

  @Column({ type: 'float' })
  price!: number;

  @ManyToOne(() => Order, order => order.drinks)
  order: Order;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
