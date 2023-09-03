import { ProductDTO } from '../../../dto/product.dto';
import { Product } from '../entities/product.entity';

interface IProductRepository {
  createProduct(data: ProductDTO): Promise<Product>;
}

export { IProductRepository };
