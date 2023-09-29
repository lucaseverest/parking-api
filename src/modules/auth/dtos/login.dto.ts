import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20, { message: 'password must have 6-20 characters' })
  password: string;
}
