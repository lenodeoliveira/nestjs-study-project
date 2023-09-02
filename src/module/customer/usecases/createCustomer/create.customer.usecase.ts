import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateCustomerInPut, CustomerOutPut } from './customer.types';
import { ICustomerRepository } from '../../infra/typeorm/interfaces/customers/customer.interface';

@Injectable()
export class CreateCustomerUseCase {
  constructor(
    @Inject('CustomerRepositorytesteste')
    private readonly customerRepository: ICustomerRepository,
  ) {}
  public async exec(input: CreateCustomerInPut): Promise<CustomerOutPut> {
    const customerAlreadyExists =
      await this.customerRepository.findCustomerByEmail(input?.email);

    if (customerAlreadyExists) {
      throw new BadRequestException('customer already exists!');
    }

    await this.customerRepository.createCustomer(input);
    return input;
  }
}
