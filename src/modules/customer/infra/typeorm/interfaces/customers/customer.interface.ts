import { CustomerDTO } from 'src/modules/customer/dto/customer.dto';
import { Customer } from '../../entities/customer.entity';

interface ICustomerRepository {
  createCustomer(data: CustomerDTO): Promise<Customer>;
  findCustomerByEmail(email: string): Promise<Customer>;
  findCustomerById(id: number): Promise<Customer>;
}

export { ICustomerRepository };
