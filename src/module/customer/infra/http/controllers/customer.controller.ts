import { Body, Controller, Get, Post, Query, UseFilters } from '@nestjs/common';
import { ApiTags, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { CreateCustomerUseCase } from '../../../usecases/createCustomer/create.customer.usecase';
import { CustomerDTO } from 'src/module/customer/dto/CustomerDTO';

@ApiTags('Customers')
@Controller('/customers')
export class CustomersController {
  constructor(private readonly createCustomerUseCase: CreateCustomerUseCase) {}

  @Post('/')
  @ApiProperty({
    type: CustomerDTO,
    required: true,
    description: 'add a customer',
  })
  public async createCustomer(
    @Body() createCustomerDto: CustomerDTO,
  ): Promise<CustomerDTO> {
    return this.createCustomerUseCase.exec(createCustomerDto);
  }
}
