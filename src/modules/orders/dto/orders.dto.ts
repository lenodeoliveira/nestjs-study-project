import { ApiProperty } from '@nestjs/swagger';
import { IsString, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
class Items {
  @ApiProperty({
    type: Number,
    example: 100,
    description: 'This is a required property',
  })
  @IsNumber()
  readonly product_id: number;

  @ApiProperty({
    type: Number,
    example: 100,
    description: 'This is a required property',
  })
  @IsNumber()
  readonly order_id: number;
}

export class OrderDTO {
  @IsString()
  @ApiProperty({
    type: String,
    example: 'Orders',
    description: 'This is a required property',
  })
  readonly order_name: string;

  @ApiProperty({
    type: String,
    example: 'Orders',
    description: 'This is a required property',
  })
  @IsString()
  readonly description: string;

  @ApiProperty({
    type: Number,
    example: 100,
    description: 'This is a required property',
  })
  @IsNumber()
  readonly value_paid: number;

  @ApiProperty({
    type: Number,
    example: 100,
    description: 'This is a required property',
  })
  @IsNumber()
  readonly total_value: number;

  @ApiProperty({
    type: Number,
    example: 1,
    description: 'This is a required property',
  })
  @IsNumber()
  readonly number_installments: number;

  @ApiProperty({
    type: Number,
    example: 1,
    description: 'This is a required property',
  })
  @IsNumber()
  readonly quantity: number;

  @ApiProperty({
    type: Number,
    example: 1,
    description: 'This is a required property',
  })
  @IsNumber()
  readonly id_customer: number;

  @ApiProperty({ type: () => Items })
  @ValidateNested({ each: true })
  @Type(() => Items)
  readonly items: Items[];
}
