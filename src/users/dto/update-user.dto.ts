import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'John', description: 'Nuevo nombre del usuario' })
  readonly firstName?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Doe', description: 'Nuevo apellido del usuario' })
  readonly lastName?: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ example: 'john.doe@example.com', description: 'Nuevo correo electrónico del usuario' })
  readonly email?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'johndoe', description: 'Nuevo nombre de usuario' })
  readonly username?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  @ApiProperty({ example: 'newpassword123', description: 'Nueva contraseña del usuario' })
  readonly password?: string;
}
