import { Body, Controller, Get, Post, Query, UseFilters } from '@nestjs/common';
import { ApiTags, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { CustomerDTO } from 'src/modules/customer/dto/customer.dto';
import { OrderDTO } from 'src/modules/orders/dto/orders.dto';
import { CreateOrderUseCase } from 'src/modules/orders/usecase/createOrder/create.order.usecase';
import { OutPutOrder } from 'src/modules/orders/usecase/createOrder/create.order.type';

@ApiTags('Orders')
@Controller('/orders')
export class OrdersController {
  constructor(private readonly createOrderUseCase: CreateOrderUseCase) {}

  @Post('/')
  @ApiProperty({
    type: CustomerDTO,
    required: true,
    description: 'add a order',
  })
  @ApiResponse({
    status: 200,
    description: 'Order created',
    type: OrderDTO,
  })
  @ApiResponse({ status: 409, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public async createCustomer(
    @Body() createOrderDto: OrderDTO,
  ): Promise<OutPutOrder> {
    const orderCreated = await this.createOrderUseCase.exec(createOrderDto);
    return orderCreated;
  }
}
