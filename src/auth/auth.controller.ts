import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Autenticación')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Registrar un nuevo usuario', description: 'Registra un nuevo usuario en la base de datos.' })
  @ApiResponse({ status: 201, description: 'Usuario registrado exitosamente' })
  registerUser(@Body() userObject: RegisterAuthDto) {
    console.log({ body: userObject });
    return this.authService.register(userObject);
  }

  @Post('login')
  @ApiOperation({ summary: 'Iniciar sesión', description: 'Autentica un usuario y genera un token JWT.' })
  @ApiResponse({ status: 200, description: 'Inicio de sesión exitoso' })
  async loginUser(@Body() userObject: LoginAuthDto) {
    return this.authService.login(userObject);
  }
}
