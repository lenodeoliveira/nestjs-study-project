import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../entities/customer.entity';
import { ICustomerRepository } from '../interfaces/customers/customer.interface';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CustomerDTO } from 'src/module/customer/dto/CustomerDTO';

@Injectable()
class CustomerRepository implements ICustomerRepository {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}
  findCustomerByEmail(email: string): Promise<Customer> {
    const customer = this.customerRepository
      .createQueryBuilder('customer')
      .leftJoinAndSelect('customer.complement', 'complement')
      .where('customer.email = :email', { email: email })
      .getOne();

    return customer;
  }
  async createCustomer(data: CustomerDTO): Promise<Customer> {
    const complement =
      data?.complement && Object.values(data?.complement).length > 0
        ? data?.complement
        : null;

    const customer = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      age: data.age,
      zipcode: data.zipcode,
      complement: complement,
    };

    const res = this.customerRepository.create(data);
    await this.customerRepository.save(customer);
    return res;
  }
}

export { CustomerRepository };
