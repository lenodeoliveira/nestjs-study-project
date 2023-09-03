import { Body, Controller, Get, Post, Query, UseFilters } from '@nestjs/common';
import { ApiTags, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { CustomerDTO } from 'src/modules/customer/dto/customer.dto';

@ApiTags('Orders')
@Controller('/orders')
export class OrdersController {
  //constructor(private readonly createCustomerUseCase: CreateCustomerUseCase) {}

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
    return Promise.resolve(null);
  }
}
