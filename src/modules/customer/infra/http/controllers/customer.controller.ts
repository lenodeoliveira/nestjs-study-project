import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { CreateCustomerUseCase } from '../../../usecases/createCustomer/create.customer.usecase';
import { CustomerDTO } from '../../../dto/customer.dto';
import { Customer } from '../../typeorm/entities/customer.entity';
import { FindCustomerUseCase } from '../../../usecases/findCustomer/find.customer.usecase';
import { FindAllCustomersUseCase } from '../../../usecases/findAllCustomers/find.all.customers.usecase';
import { CacheInterceptor } from '@nestjs/cache-manager';
@ApiTags('Customers')
@Controller('/customers')
export class CustomersController {
  constructor(
    private readonly createCustomerUseCase: CreateCustomerUseCase,
    private readonly findCustomerUseCase: FindCustomerUseCase,
    private readonly findAllCustomersUseCase: FindAllCustomersUseCase,
  ) {}

  @Post('/')
  @ApiProperty({
    type: CustomerDTO,
    required: true,
    description: 'add a customer',
  })
  @ApiResponse({
    status: 200,
    description: 'Customer created',
    type: CustomerDTO,
  })
  @ApiResponse({ status: 409, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public async createCustomer(
    @Body() createCustomerDto: CustomerDTO,
  ): Promise<CustomerDTO> {
    return this.createCustomerUseCase.exec(createCustomerDto);
  }

  @Get('/:id')
  @UseInterceptors(CacheInterceptor)
  @ApiProperty({
    type: Number,
    required: true,
    description: 'Find a customer',
  })
  @ApiResponse({
    status: 200,
    description: 'Customer',
    type: Customer,
  })
  public async findCustomer(@Param('id') id: number): Promise<Customer> {
    const customer = await this.findCustomerUseCase.exec(+id);
    return customer;
  }

  @Get('/')
  @UseInterceptors(CacheInterceptor)
  @ApiResponse({
    status: 200,
    description: 'Customers',
    type: Customer,
  })
  public async findAll(): Promise<Customer[]> {
    const customers = await this.findAllCustomersUseCase.exec();
    console.log('Dados retornando do banco de dados!!');
    return customers;
  }
}
