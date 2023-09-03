import { Inject, Injectable } from '@nestjs/common';
import { IProductRepository } from '../../infra/typeorm/interfaces/product.repository.interface';
import { InputProduct, OutPutProduct } from './create.product.types';

@Injectable()
export class CreateProductUseCase {
  constructor(
    @Inject('ProductRepositoryDB')
    private readonly productRepository: IProductRepository,
  ) {}

  public async exec(input: InputProduct): Promise<OutPutProduct> {
    const product = await this.productRepository.createProduct(input);
    return product;
  }
}
