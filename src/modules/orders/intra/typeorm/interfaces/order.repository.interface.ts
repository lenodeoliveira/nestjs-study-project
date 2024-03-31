import { Product } from 'src/modules/products/infra/typeorm/entities/product.entity';
import { Orders } from '../../typeorm/entities/order.entity';

type InputOrderRepository = {
  order_name: string;
  description: string;
  value_paid: number;
  total_value: number;
  number_installments: number;
  quantity: number;
  id_customer: number;
  items: Product[];
};

interface IOrdersRepository {
  createOrder(data: InputOrderRepository): Promise<Orders>;
}

export { IOrdersRepository };
