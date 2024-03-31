import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './intra/typeorm/entities/order.entity';
import { Items } from './intra/typeorm/entities/items.entity';
import { CustomersModule } from '../customer/customer.module';
import { OrdersController } from './intra/http/controllers/orders.controller';
import { CreateOrderUseCase } from './usecase/createOrder/create.order.usecase';

@Module({
  // imports: [TypeOrmModule.forFeature([Orders, Items]), CustomersModule],
  // controllers: [OrdersController],
  // providers: [CreateOrderUseCase],
})
export class OrdersModule {}
