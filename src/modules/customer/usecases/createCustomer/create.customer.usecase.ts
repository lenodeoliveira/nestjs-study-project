import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateCustomerInPut, CustomerOutPut } from './customer.types';
import { ICustomerRepository } from '../../infra/typeorm/interfaces/customers/customer.interface';
import { IUsecase } from 'src/shared/protocols/usecase/usecase';
import { IStarWarsAPIProvider } from 'src/shared/providers/starWarsAPIProviders/interface/IStarWarsAPIProvider';

@Injectable()
export class CreateCustomerUseCase implements IUsecase {
  constructor(
    @Inject('CustomerRepositoryDB')
    private readonly customerRepository: ICustomerRepository,
    @Inject('StarWarsAPIProviderModule')
    private readonly starWarsAPIProviderModule: IStarWarsAPIProvider,
  ) {}

  public async exec(input: CreateCustomerInPut): Promise<CustomerOutPut> {
    const data = await this.starWarsAPIProviderModule.findAll();

    const customerAlreadyExists =
      await this.customerRepository.findCustomerByEmail(input?.email);

    if (customerAlreadyExists) {
      throw new ConflictException('Customer already exists!');
    }
    const customer = await this.customerRepository.createCustomer(input);
    return customer;
  }
}
