import { Injectable, HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(userObject: RegisterAuthDto) {
    return this.usersService.create(userObject);
  }

  async login(userObject: LoginAuthDto) {
    const { username, password } = userObject;
    const findUser = await this.usersService.findOneByUsername(username);
    if (!findUser) throw new HttpException('USER_NOT_FOUND', 404);

    const checkPassword = await compare(password, findUser.password);
    if (!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403);

    const payload = { id: findUser.id, username: findUser.username };
    const token = this.jwtService.sign(payload);

    const data = {
      user: findUser,
      token
    }

    return data;
  }
}
