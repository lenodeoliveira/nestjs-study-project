import { NotFoundException, Inject, Injectable } from '@nestjs/common';
import { ICustomerRepository } from '../../infra/typeorm/interfaces/customers/customer.interface';
import { Customer } from '../../infra/typeorm/entities/customer.entity';

@Injectable()
export class FindCustomerUseCase {
  constructor(
    @Inject('CustomerRepositoryDB')
    private readonly customerRepository: ICustomerRepository,
  ) {}

  public async exec(id: number): Promise<Customer> {
    const customer = await this.customerRepository.findCustomerById(+id);

    if (!customer) {
      throw new NotFoundException('Customer does not exists!');
    }
    return customer;
  }
}
