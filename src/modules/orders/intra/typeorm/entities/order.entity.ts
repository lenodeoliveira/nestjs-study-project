import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Customer } from 'src/modules/customer/infra/typeorm/entities/customer.entity';
import { Product } from 'src/modules/products/infra/typeorm/entities/product.entity';
import { Items } from './items.entity';

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

  @ManyToMany(() => Items)
  @JoinTable()
  items: Items[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
