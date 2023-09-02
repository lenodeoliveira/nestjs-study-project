import { Module } from '@nestjs/common';
import { CustomersController } from './infra/http/controllers/customer.controller';
import { CreateCustomerUseCase } from './usecases/createCustomer/create.customer.usecase';
import { Customer } from './infra/typeorm/entities/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerRepository } from './infra/typeorm/repositorios/custOmer.repository';
import { Complement } from './infra/typeorm/entities/complement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Complement])],
  controllers: [CustomersController],
  providers: [
    CreateCustomerUseCase,
    {
      provide: 'CustomerRepositorytesteste',
      useClass: CustomerRepository,
    },
  ],
  exports: [
    {
      provide: 'CustomerRepositorytesteste',
      useClass: CustomerRepository,
    },
  ],
})
export class CustomersModule {}
