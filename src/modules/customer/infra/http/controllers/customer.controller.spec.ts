import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { CustomersModule } from '../../../customer.module';
import { FindAllCustomersUseCase } from '../../../usecases/findAllCustomers/find.all.customers.usecase';
import { CreateCustomerUseCase } from '../../../usecases/createCustomer/create.customer.usecase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmSQLITETestingModule } from '../../../../../shared/utils/test-utils/TypeORMSQLITETestingModule';
import { Customer } from '../../typeorm/entities/customer.entity';
import { Complement } from '../../typeorm/entities/complement.entity';
import { StarWarsAPIModule } from 'src/shared/providers/starWarsAPIProviders/star.wars.api.module';
import { StarWarsAPIProviderModule } from 'src/shared/providers/starWarsAPIProviders/implementation/star.wars.provider';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { CustomerRepository } from '../../typeorm/repositorios/custOmer.repository';
import { AppModule } from 'src/app.module';
import { PlanetsModel } from 'src/shared/providers/starWarsAPIProviders/model/StarWarsModel';
import { IStarWarsAPIProvider } from 'src/shared/providers/starWarsAPIProviders/interface/IStarWarsAPIProvider';
import { CacheModule } from '@nestjs/cache-manager';

// describe('Customers', () => {
//   let app: INestApplication;
//   const findAllCustomersUseCase = { exec: () => ['test'] };

//   beforeAll(async () => {
//     const moduleRef = await Test.createTestingModule({
//       imports: [
//         CustomersModule,
//         ...TypeOrmSQLITETestingModule(),
//         TypeOrmModule.forFeature([Customer, Complement]),
//       ],
//     })
//       .overrideProvider(FindAllCustomersUseCase)
//       .useValue(findAllCustomersUseCase)
//       .compile();

//     app = moduleRef.createNestApplication();
//     await app.init();
//   });

//   it(`/GET customers`, () => {
//     return request(app.getHttpServer())
//       .get('/customers')
//       .expect(200)
//       .expect(findAllCustomersUseCase.exec());
//   });

//   afterAll(async () => {
//     await app.close();
//   });
// });

const expected = {
  name: 'John Doe',
  email: 'johnDoe222@edu.pucrs.com.br',
  phone: '55 999999999',
  street: 'Street test',
  age: 21,
  zipcode: '99999999',
  complement: {
    borough: 'brooklyn',
    residential_number: 555,
    id: 1,
    created_at: '2024-02-04T19:12:40.000Z',
    updated_at: '2024-02-04T19:12:40.000Z',
  },
  id: 1,
  created_at: '2024-02-04T19:12:40.000Z',
  updated_at: '2024-02-04T19:12:40.000Z',
};

describe('Customers', () => {
  let app: INestApplication;
  let usecase: CreateCustomerUseCase;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        CustomersModule,
        HttpModule,
        ...TypeOrmSQLITETestingModule(),
        TypeOrmModule.forFeature([Customer, Complement]),
        CacheModule.register({
          isGlobal: true,
          ttl: 0,
        }),
      ],
      providers: [
        CreateCustomerUseCase,
        {
          provide: 'StarWarsAPIProviderModule',
          useClass: StarWarsAPIProviderModule,
        },
      ],
    }).compile();
    app = module.createNestApplication();
    usecase = module.get<CreateCustomerUseCase>(CreateCustomerUseCase);

    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it(`/POST customers`, async () => {
    const body = {
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
    jest
      .spyOn(usecase['starWarsAPIProviderModule'], 'findAll')
      .mockResolvedValue(null);

    const response = await request(app.getHttpServer())
      .post('/customers')
      .send(body)
      .expect(201);

    expect(response.body.name).toEqual(expected.name);
  });
});
