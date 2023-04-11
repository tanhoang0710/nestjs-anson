import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}

  async validateUser(username: string, password: string) {
    const userDB = await this.usersService.findUserByUsername(username);
    if (userDB) {
      const matched = comparePassword(password, userDB.password);
      if (matched) {
        console.log('User validation success');
        return userDB;
      } else {
        console.log('Password do not match');
        return null;
      }
    }
    console.log('User validation failed');
    return null;
  }
}
