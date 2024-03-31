import { Module } from '@nestjs/common';
import { CustomersController } from './infra/http/controllers/customer.controller';
import { CreateCustomerUseCase } from './usecases/createCustomer/create.customer.usecase';
import { Customer } from './infra/typeorm/entities/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerRepository } from './infra/typeorm/repositorios/custOmer.repository';
import { Complement } from './infra/typeorm/entities/complement.entity';
import { FindCustomerUseCase } from './usecases/findCustomer/find.customer.usecase';
import { FindAllCustomersUseCase } from './usecases/findAllCustomers/find.all.customers.usecase';
import { StarWarsAPIModule } from 'src/shared/providers/starWarsAPIProviders/star.wars.api.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer, Complement]),
    StarWarsAPIModule,
  ],
  controllers: [CustomersController],
  providers: [
    CreateCustomerUseCase,
    FindCustomerUseCase,
    FindAllCustomersUseCase,
    {
      provide: 'CustomerRepositoryDB',
      useClass: CustomerRepository,
    },
  ],
  exports: [
    {
      provide: 'CustomerRepositoryDB',
      useClass: CustomerRepository,
    },
  ],
})
export class CustomersModule {}
