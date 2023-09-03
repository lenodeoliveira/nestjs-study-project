import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Items } from './items.entity';
import { Customer } from 'src/modules/customer/infra/typeorm/entities/customer.entity';

@Entity('orders')
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_name: string;

  @Column()
  description: string;

  @Column()
  value_paid: number;

  @Column()
  total_value: number;

  @Column()
  number_installments: number;

  @Column()
  quantity: number;

  @OneToOne(() => Customer, {
    cascade: true,
  })
  @JoinColumn()
  customer: Customer;

  @OneToOne(() => Items, (items) => items.order, {
    cascade: true,
  })
  items: Items;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
