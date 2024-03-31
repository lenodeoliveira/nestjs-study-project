import { Module } from '@nestjs/common';
import { CreateInstallmentsUseCase } from './usecase/create_installments/create.installments.usecase';
import { InstallmentsController } from './infra/http/installments.controller';

@Module({
  imports: [],
  controllers: [InstallmentsController],
  providers: [CreateInstallmentsUseCase],
})
export class InstallmentsModule {}
