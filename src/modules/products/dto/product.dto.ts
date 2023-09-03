import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, Length } from 'class-validator';

class ProductDTO {
  @ApiProperty({
    type: String,
    example: 'Product test',
    description: 'name product',
  })
  @IsString()
  @Length(2)
  name_product: string;

  @ApiProperty({
    type: String,
    example: 'https://api.bucket.com',
    description: 'image url',
  })
  @IsString()
  @Length(2)
  image_url: string;

  @ApiProperty({
    type: Boolean,
    example: true,
    description: 'product availability',
  })
  @IsBoolean()
  available: boolean;

  @ApiProperty({
    type: Number,
    example: 1,
    description: 'product quantity',
  })
  @IsNumber()
  quantity_in_stock: number;

  @ApiProperty({
    type: Number,
    example: 100,
    description: 'purchase price',
  })
  @IsNumber()
  purchase_price: number;

  @ApiProperty({
    type: Number,
    example: 150,
    description: 'sale price',
  })
  @IsNumber()
  sale_price: number;
}

export { ProductDTO };
