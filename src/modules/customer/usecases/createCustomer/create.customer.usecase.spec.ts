import { Test, TestingModule } from '@nestjs/testing';
import { ConflictException } from '@nestjs/common';
import { TypeOrmSQLITETestingModule } from '../../../../shared/utils/test-utils/TypeORMSQLITETestingModule';
import { CreateCustomerUseCase } from './create.customer.usecase';
import { CustomerRepository } from '../../infra/typeorm/repositorios/custOmer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from '../../infra/typeorm/entities/customer.entity';
import { Complement } from '../../infra/typeorm/entities/complement.entity';
import { StarWarsAPIModule } from 'src/shared/providers/starWarsAPIProviders/star.wars.api.module';
import { StarWarsAPIProviderModule } from 'src/shared/providers/starWarsAPIProviders/implementation/star.wars.provider';
import { IStarWarsAPIProvider } from 'src/shared/providers/starWarsAPIProviders/interface/IStarWarsAPIProvider';
import { PlanetsModel } from 'src/shared/providers/starWarsAPIProviders/model/StarWarsModel';
import { ICustomerRepository } from '../../infra/typeorm/interfaces/customers/customer.interface';
import { CustomerDTO } from '../../dto/customer.dto';

const customer = {
  name: 'John Doe',
  email: 'johnDoe222@edu.pucrs.com.br',
  phone: '55 999999999',
  street: 'Street test',
  age: 21,
  zipcode: '99999999',
  complement: {
    borough: 'brooklyn',
    residential_number: 555,
  },
};

const outPutCustomer = {
  name: 'John Doe',
  email: 'johnDoe222@edu.pucrs.com.br',
  phone: '55 999999999',
  street: 'Street test',
  age: 21,
  zipcode: '99999999',
  complement: {
    borough: 'brooklyn',
    residential_number: 555,
    id: 4,
    created_at: new Date(),
    updated_at: new Date(),
  },
  id: 6,
  created_at: new Date(),
  updated_at: new Date(),
};

class StarWarsFake implements IStarWarsAPIProvider {
  findAll(): Promise<PlanetsModel[]> {
    return Promise.resolve(null);
  }
}

class CustomerRepositoryMock implements ICustomerRepository {
  createCustomer(data: CustomerDTO): Promise<Customer> {
    return Promise.resolve(outPutCustomer);
  }
  findCustomerByEmail(email: string): Promise<Customer> {
    return Promise.resolve(null);
  }
  findCustomerById(id: number): Promise<Customer> {
    return Promise.resolve(null);
  }
  findAll(): Promise<Customer[]> {
    return Promise.resolve(null);
  }
}

describe('CreateCustomerUseCase', () => {
  let usecase: CreateCustomerUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateCustomerUseCase,
        {
          provide: 'CustomerRepositoryDB',
          useClass: CustomerRepositoryMock,
        },
        {
          provide: 'StarWarsAPIProviderModule',
          useClass: StarWarsFake,
        },
      ],
    }).compile();

    usecase = module.get<CreateCustomerUseCase>(CreateCustomerUseCase);
  });
  it('Should be defined', () => {
    expect(usecase).toBeDefined();
  });
  it('Should create a new customer', async () => {
    const output = await usecase.exec(customer);
    expect(output.email).toBe(customer.email);
  });
  it('should throw ConflictException if customer already exists', async () => {
    jest
      .spyOn(usecase['customerRepository'], 'findCustomerByEmail')
      .mockResolvedValue(outPutCustomer);

    await expect(usecase.exec(customer)).rejects.toThrowError(
      ConflictException,
    );
  });
});
