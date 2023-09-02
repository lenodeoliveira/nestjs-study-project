import { CustomerDTO } from 'src/module/customer/dto/CustomerDTO';
import { Customer } from '../../entities/customer.entity';

interface ICustomerRepository {
  createCustomer(data: CustomerDTO): Promise<Customer>;
  findCustomerByEmail(email: string): Promise<Customer>;
}

export { ICustomerRepository };
