import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Orders } from './order.entity';
import { Product } from 'src/modules/products/infra/typeorm/entities/product.entity';

@Entity('items')
export class Items {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Orders, {
    cascade: true,
  })
  @JoinColumn()
  order: Orders;

  @OneToOne(() => Product, {
    cascade: true,
  })
  @JoinColumn()
  product: Product;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
