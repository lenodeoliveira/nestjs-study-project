import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsDateString } from 'class-validator';

export class InstallmentsDTO {
  @ApiProperty({
    type: Number,
    required: true,
    example: 750,
    description: 'This is a required property',
  })
  @IsNumber()
  readonly value: number;

  @ApiProperty({
    type: Number,
    required: true,
    example: 24,
    description: 'This is a required property',
  })
  @IsNumber()
  quantity_installments: number;

  @ApiProperty({
    type: Date,
    required: true,
    example: new Date(),
    description: 'This is a required property',
  })
  @IsDateString()
  purchase_date: Date;
}
