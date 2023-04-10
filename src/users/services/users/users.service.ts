import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'tanhun',
      password: 'tanhun',
    },
    {
      id: 2,
      username: 'th',
      password: 'th',
    },
    {
      id: 3,
      username: 'hn',
      password: 'hn',
    },
    {
      id: 4,
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

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
