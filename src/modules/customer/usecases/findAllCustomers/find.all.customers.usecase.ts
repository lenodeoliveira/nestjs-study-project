import { NotFoundException, Inject, Injectable } from '@nestjs/common';
import { ICustomerRepository } from '../../infra/typeorm/interfaces/customers/customer.interface';
import { Customer } from '../../infra/typeorm/entities/customer.entity';

@Injectable()
export class FindAllCustomersUseCase {
  constructor(
    @Inject('CustomerRepositoryDB')
    private readonly customerRepository: ICustomerRepository,
  ) {}

  public async exec(): Promise<Customer[]> {
    const customers = await this.customerRepository.findAll();

    if (!customers) {
      throw new NotFoundException('Customer does not exists!');
    }
    return customers as unknown as Customer[];
  }
}
