import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './intra/typeorm/entities/order.entity';
import { Items } from './intra/typeorm/entities/items.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Orders, Items])],
  controllers: [],
  providers: [],
})
export class OrdersModule {}
