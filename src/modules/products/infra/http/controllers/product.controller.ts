import { Body, Controller, Get, Post, Query, UseFilters } from '@nestjs/common';
import { ApiTags, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { ProductDTO } from '../../../dto/product.dto';
import { CreateProductUseCase } from 'src/modules/products/usecase/createProduct/create.product.usecase';

@ApiTags('Products')
@Controller('/product')
export class ProductController {
  constructor(private readonly createProductUseCase: CreateProductUseCase) {}

  @Post('/')
  @ApiProperty({
    type: ProductDTO,
    required: true,
    description: 'add a product',
  })
  @ApiResponse({
    status: 200,
    description: 'Product created',
    type: ProductDTO,
  })
  @ApiResponse({ status: 409, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public async createCustomer(
    @Body() productDTO: ProductDTO,
  ): Promise<ProductDTO> {
    return await this.createProductUseCase.exec(productDTO);
  }
}
