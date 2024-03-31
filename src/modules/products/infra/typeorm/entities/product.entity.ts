import { Orders } from 'src/modules/orders/intra/typeorm/entities/order.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  name_product: string;

  @Column()
  image_url: string;

  @Column()
  available: boolean;

  @Column()
  quantity_in_stock: number;

  @Column()
  purchase_price: number;

  @Column()
  sale_price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
