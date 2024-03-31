import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { CustomerDTO } from 'src/modules/customer/dto/customer.dto';
import { InstallmentsDTO } from '../../dto/installments.dto';
import { CreateInstallmentsUseCase } from '../../usecase/create_installments/create.installments.usecase';

@ApiTags('Installments')
@Controller('/installments')
export class InstallmentsController {
  constructor(
    private readonly createInstallmentsUseCase: CreateInstallmentsUseCase,
  ) {}

  @Post('/')
  @ApiProperty({
    type: CustomerDTO,
    required: true,
    description: 'add a installments',
  })
  @ApiResponse({
    status: 201,
    description: 'Installments created',
    type: CustomerDTO,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public async createCustomer(
    @Body() installmentsDTO: InstallmentsDTO,
  ): Promise<any> {
    return this.createInstallmentsUseCase.exec(installmentsDTO);
  }
}
