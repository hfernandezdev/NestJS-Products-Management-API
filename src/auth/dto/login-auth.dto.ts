import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class LoginAuthDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'johndoe', description: 'Nombre de usuario' })
  username: string

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(12)
  @ApiProperty({ example: 'password123', description: 'Contraseña del usuario' })
  password: string;
}
