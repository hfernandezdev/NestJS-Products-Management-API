import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'John', description: 'Nombre del usuario' })
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Doe', description: 'Apellido del usuario' })
  readonly lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ example: 'john.doe@example.com', description: 'Correo electrónico del usuario' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'johndoe', description: 'Nombre de usuario' })
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  @ApiProperty({ example: 'password123', description: 'Contraseña del usuario' })
  readonly password: string;
}
