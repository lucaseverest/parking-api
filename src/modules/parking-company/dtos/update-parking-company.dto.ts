import { IsString, IsPositive, IsOptional } from 'class-validator';

export class UpdateParkingCompanyDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  cnpj: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsPositive()
  motorcycleSpacesQuantity: number;

  @IsOptional()
  @IsPositive()
  carSpacesQuantity: number;
}
