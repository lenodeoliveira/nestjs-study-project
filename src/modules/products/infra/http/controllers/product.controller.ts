import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseFilters,
} from '@nestjs/common';
import { ApiTags, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { ProductDTO } from '../../../dto/product.dto';
import { CreateProductUseCase } from 'src/modules/products/usecase/createProduct/create.product.usecase';
import { Product } from '../../typeorm/entities/product.entity';
import { FindProductsUseCase } from 'src/modules/products/usecase/findProduct/find.product.usecase';

@ApiTags('Products')
@Controller('/product')
export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly findProductsUseCase: FindProductsUseCase,
  ) {}

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

  @Get('/:ids')
  @ApiProperty({
    type: String,
    required: true,
    example: '1, 2, 3',
    description: 'Find a product',
  })
  @ApiResponse({
    status: 200,
    description: 'Product',
    type: Product,
  })
  public async findProducts(@Query('ids') ids: string): Promise<Product[]> {
    return await this.findProductsUseCase.exec(ids.split(',').map(Number));
  }
}
