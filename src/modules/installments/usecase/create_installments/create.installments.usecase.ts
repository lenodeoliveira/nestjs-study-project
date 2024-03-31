import { Injectable } from '@nestjs/common';
import { IUsecase } from 'src/shared/protocols/usecase/usecase';

type CreatedInstallmentsutPut = {
  tag: string;
  net_amount: number;
  full_value: number;
  discount_amount?: number;
  installment_number: number;
  actual_due_date: Date;
  original_due_date: Date;
  billing_date: Date;
};

type Input = {
  value: number;
  quantity_installments: number;
  purchase_date: Date;
};

@Injectable()
export class CreateInstallmentsUseCase implements IUsecase {
  //constructor() {}

  public async exec(input: Input): Promise<CreatedInstallmentsutPut[]> {
    console.log('Receided data', input);
    return Promise.resolve(null);
  }
}
