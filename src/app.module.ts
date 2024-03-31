import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './modules/customer/customer.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/order.module';
import useFactory from './shared/infra/typeorm';
import { InstallmentsModule } from './modules/installments/installments.module';
import { TerminusModule } from '@nestjs/terminus';
import { CacheModule } from '@nestjs/cache-manager';
// eslint-disable-next-line
const appPk = require('../package.json');
console.log(appPk);

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(useFactory),
    CustomersModule,
    OrdersModule,
    ProductsModule,
    InstallmentsModule,
    TerminusModule,
    CacheModule.register({
      isGlobal: true,
      ttl: 60000,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
