import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName?: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName?: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email?: string;

  @IsString()
  @IsNotEmpty()
  readonly username?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  readonly password?: string;
}
