import { Injectable } from '@nestjs/common';
import { CreateCustomer } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'tanhun@gmail.com',
      name: 'tan',
    },
    {
      id: 2,
      email: 'huntan@gmail.com',
      name: 'hun',
    },
    {
      id: 3,
      email: 'huta@gmail.com',
      name: 'tanhun',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(createCustomerDto: CreateCustomer) {
    this.customers.push(createCustomerDto);
  }

  getCustomers() {
    return this.customers;
  }
}
