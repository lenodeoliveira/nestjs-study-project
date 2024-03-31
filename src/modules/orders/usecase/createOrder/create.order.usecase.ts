import {
  Inject,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { ICustomerRepository } from 'src/modules/customer/infra/typeorm/interfaces/customers/customer.interface';
import { IProductRepository } from 'src/modules/products/infra/typeorm/interfaces/product.repository.interface';
import { InputOrder, OutPutOrder } from './create.order.type';
import { Product } from 'src/modules/products/infra/typeorm/entities/product.entity';
import { IOrdersRepository } from '../../intra/typeorm/interfaces/order.repository.interface';

@Injectable()
export class CreateOrderUseCase {
  constructor(
    // @Inject('CustomerRepository')
    // private readonly customerRepository: ICustomerRepository,
    // @Inject('ProductRepositoryDB')
    // private readonly productRepository: IProductRepository,
    @Inject('OrderRepositoryDB')
    private readonly orderRepository: IOrdersRepository,
  ) {}
  public async exec(input: InputOrder): Promise<OutPutOrder> {
    // const customer = await this.customerRepository.findCustomerById(
    //   +input?.id_customer,
    // );

    // if (!customer) {
    //   throw new NotFoundException('Customer does not exists!');
    // }

    // const products = await this.productRepository.findProductsByIds(
    //   input?.items?.map((product) => product.product_id),
    // );

    // if (products.length === 0) {
    //   throw new NotFoundException('Products does not exists!');
    // }

    // this.validProducts(products);

    // await this.orderRepository.createOrder({
    //   description: input.description,
    //   id_customer: input.id_customer,
    //   number_installments: input.number_installments,
    //   order_name: input.order_name,
    //   quantity: products.length,
    //   total_value: input.total_value,
    //   value_paid: input.value_paid,
    //   items: products,
    // });

    return input;
  }
  private validProducts(products: Product[]): {
    products_ids: number[];
    total: number;
  } {
    const products_ids = products.map((product) => {
      if (!product.available) {
        throw new BadRequestException('The product is not available');
      }

      if (product.quantity_in_stock === 0) {
        throw new BadRequestException('Product not available');
      }
      return product?.product_id;
    });
    return {
      products_ids: products_ids,
      total: products.reduce((acc, curr) => acc + +curr.sale_price, 0),
    };
  }
}
