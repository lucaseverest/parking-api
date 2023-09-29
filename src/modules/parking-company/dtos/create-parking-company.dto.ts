import { IsString, IsNotEmpty, Length, IsPositive } from 'class-validator';

export class CreateParkingCompanyDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20, { message: 'password must have 6-20 characters' })
  password: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsPositive()
  @IsNotEmpty()
  motorcycleSpacesQuantity: number;

  @IsPositive()
  @IsNotEmpty()
  carSpacesQuantity: number;
}
