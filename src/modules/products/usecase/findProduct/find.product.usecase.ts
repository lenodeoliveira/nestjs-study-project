import { Inject, Injectable } from '@nestjs/common';
import { Product } from '../../infra/typeorm/entities/product.entity';
import { IProductRepository } from '../../infra/typeorm/interfaces/product.repository.interface';

@Injectable()
export class FindProductsUseCase {
  constructor(
    @Inject('ProductRepositoryDB')
    private readonly productRepository: IProductRepository,
  ) {}

  public async exec(ids: number[]): Promise<Product[]> {
    const products = await this.productRepository.findProductsByIds(ids);

    return products;
  }
}
