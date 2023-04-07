import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private users = [
    {
      id: 1,
      email: 'tanhun@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'huntan@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'huta@gmail.com',
      createdAt: new Date(),
    },
  ];

  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
