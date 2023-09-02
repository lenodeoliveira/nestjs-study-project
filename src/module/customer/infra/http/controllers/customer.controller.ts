import { Body, Controller, Get, Post, Query, UseFilters } from '@nestjs/common';
import { ApiTags, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { CreateCustomerUseCase } from '../../../usecases/createCustomer/create.customer.usecase';
import { CustomerDTO } from 'src/module/customer/dto/customer.dto';

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
}
