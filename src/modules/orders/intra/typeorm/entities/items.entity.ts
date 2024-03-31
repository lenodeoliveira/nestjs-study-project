import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Orders } from './order.entity';
import { Product } from 'src/modules/products/infra/typeorm/entities/product.entity';

@Entity('items')
export class Items {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Orders, (order) => order.id)
  @JoinColumn({ name: 'order_id' })
  order: Orders;

  @ManyToOne(() => Product, (product) => product.product_id)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
