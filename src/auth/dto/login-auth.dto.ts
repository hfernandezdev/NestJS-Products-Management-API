import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginAuthDto {
  @IsString()
  @IsNotEmpty()
  username: string

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(12)
  password: string;
}
