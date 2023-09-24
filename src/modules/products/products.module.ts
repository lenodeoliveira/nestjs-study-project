import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './infra/typeorm/entities/product.entity';
import { ProductController } from './infra/http/controllers/product.controller';
import { ProductRepository } from './infra/typeorm/repositories/product.respository';
import { CreateProductUseCase } from './usecase/createProduct/create.product.usecase';
import { FindProductsUseCase } from './usecase/findProduct/find.product.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [
    CreateProductUseCase,
    FindProductsUseCase,
    {
      provide: 'ProductRepositoryDB',
      useClass: ProductRepository,
    },
  ],
  exports: [
    {
      provide: 'ProductRepositoryDB',
      useClass: ProductRepository,
    },
  ],
})
export class ProductsModule {}
