import { Injectable } from '@nestjs/common';
import { IOrdersRepository } from '../interfaces/order.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from '../entities/order.entity';
import { Repository } from 'typeorm';
import { Items } from '../entities/items.entity';
import { InputOrder } from 'src/modules/orders/usecase/createOrder/create.order.type';

@Injectable()
class OrderRepository implements IOrdersRepository {
  constructor(
    @InjectRepository(Orders)
    private orderRepository: Repository<Orders>,
    @InjectRepository(Items)
    private itemsRepository: Repository<Items>,
  ) {}

  async createOrder(data: InputOrder): Promise<Orders> {
    const createOrder = {
      order_name: data?.order_name,
      description: data?.description,
      id_customer: data?.id_customer,
      quantity: data?.quantity,
      number_installments: data.number_installments,
      total_value: data?.total_value,
      value_paid: data?.value_paid,
      items: [data.items[0]],
    };

    // const order = await this.orderRepository.save(createOrder);

    // return order;
    return null;
  }
}

export { OrderRepository };
