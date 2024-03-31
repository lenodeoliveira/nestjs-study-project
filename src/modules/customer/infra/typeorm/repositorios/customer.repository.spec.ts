import { TypeOrmSQLITETestingModule } from 'src/shared/utils/test-utils/TypeORMSQLITETestingModule';
import { Customer } from '../entities/customer.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { Complement } from '../entities/complement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerRepository } from './custOmer.repository';
import MockDate from 'mockdate';

MockDate.set('2023-01-01');

const customer = {
  name: 'lennon',
  email: 'lenodeoliveira@gmail.com',
  phone: '11111',
  zipcode: '9999',
  age: 12,
  street: 'street test',
};

const expectedCustomer = {
  name: 'lennon',
  email: 'lenodeoliveira@gmail.com',
  phone: '11111',
  street: 'street test',
  age: 12,
  zipcode: '9999',
  complement: null,
  id: 1,
  created_at: new Date(),
  updated_at: new Date(),
};

describe('CreateCustomerUseCase', () => {
  let repository: CustomerRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ...TypeOrmSQLITETestingModule(),
        TypeOrmModule.forFeature([Customer, Complement]),
      ],
      providers: [CustomerRepository],
    }).compile();
    repository = module.get<CustomerRepository>(CustomerRepository);
  });

  afterAll(() => {
    MockDate.reset();
  });
  it('Should create a new customer', async () => {
    const output = await repository.createCustomer(customer);
    expect(output.email).toBe(expectedCustomer.email);
  });
  it('', async () => {
    await repository.createCustomer(customer);

    const output = repository.findAll();
  });
});
