import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  registerUser(@Body() userObject: RegisterAuthDto) {
    console.log({ body: userObject });
    return this.authService.register(userObject);
  }

  @Post('login')
  async loginUser(@Body() userObject: LoginAuthDto) {
    return this.authService.login(userObject);
  }
}
