import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ICustomerRepository } from 'src/modules/customer/infra/typeorm/interfaces/customers/customer.interface';
import { InputOrder } from './create.order.type';
import { Orders } from '../../intra/typeorm/entities/order.entity';

@Injectable()
export class CreateOrderUseCase {
  constructor(
    @Inject('CustomerRepositoryDB')
    private readonly customerRepository: ICustomerRepository,
  ) {}
  public async exec(input: InputOrder): Promise<Orders> {
    const customer = await this.customerRepository.findCustomerById(
      +input?.id_customer,
    );

    if (!customer) {
      throw new NotFoundException('Customer does not exists!');
    }

    return null;
  }
}
