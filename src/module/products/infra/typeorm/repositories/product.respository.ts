import { Repository } from 'typeorm';
import { IProductRepository } from '../interfaces/product.repository.interface';
import { ProductDTO } from 'src/module/products/dto/product.dto';
import { Product } from '../entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

class ProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async createProduct(data: ProductDTO): Promise<Product> {
    const product = Object.assign({}, data);
    this.productRepository.create(data);
    const productCreated = await this.productRepository.save(product);
    return productCreated;
  }
}

export { ProductRepository };
