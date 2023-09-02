import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsOptional,
  ValidateNested,
  Matches,
} from 'class-validator';
import { Type } from 'class-transformer';

class Complement {
  @ApiProperty({
    type: Number,
    example: 'brooklyn',
    description: 'This is an optional property',
  })
  @IsString()
  borough: string;

  @ApiProperty({
    type: Number,
    example: 555,
    description: 'This is an optional property',
  })
  @IsInt()
  residential_number: number;
}

export class CustomerDTO {
  @ApiProperty({
    type: String,
    example: 'John Doe',
    description: 'This is a required property',
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    example: 'johnDoe@edu.pucrs.com.br',
    description: 'This is a required property',
  })
  @Matches(/^\S*\w+\@edu\.pucrs(\.\w{2,3})+$/)
  email: string;

  @ApiProperty({
    type: String,
    example: '55 999999999',
    description: 'This is a required property',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    type: String,
    example: 'Street test',
    description: 'This is a required property',
  })
  @IsString()
  street: string;

  @ApiProperty({
    type: String,
    example: '99999999',
    description: 'This is a required property',
  })
  @IsString()
  zipcode: string;

  @ApiPropertyOptional({
    type: Number,
    example: 21,
    description: 'This is an optional property',
  })
  @IsInt()
  @IsOptional()
  age?: number;

  @ApiProperty({ type: () => Complement })
  @ValidateNested()
  @IsOptional()
  @Type(() => Complement)
  complement?: Complement;
}
