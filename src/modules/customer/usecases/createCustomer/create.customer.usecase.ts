import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateCustomerInPut, CustomerOutPut } from './customer.types';
import { ICustomerRepository } from '../../infra/typeorm/interfaces/customers/customer.interface';

@Injectable()
export class CreateCustomerUseCase {
  constructor(
    @Inject('CustomerRepositoryDB')
    private readonly customerRepository: ICustomerRepository,
  ) {}

  public async exec(input: CreateCustomerInPut): Promise<CustomerOutPut> {
    const customerAlreadyExists =
      await this.customerRepository.findCustomerByEmail(input?.email);

    if (customerAlreadyExists) {
      throw new ConflictException('Customer already exists!');
    }

    const customer = await this.customerRepository.createCustomer(input);
    return customer;
  }
}
