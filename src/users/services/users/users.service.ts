import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'tanhun',
      password: 'tanhun',
    },
    {
      username: 'th',
      password: 'th',
    },
    {
      username: 'hn',
      password: 'hn',
    },
    {
      username: 'huong',
      password: 'huong',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
