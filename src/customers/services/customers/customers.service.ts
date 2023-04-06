import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  findCustomer() {
    return {
      id: 1,
      email: 'tanhun@gmail.com',
      createAt: new Date(),
    };
  }
}
