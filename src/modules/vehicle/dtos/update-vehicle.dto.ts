import { IsString, IsOptional } from 'class-validator';
import { VehicleEnum } from '../entity/vehicle-type.enum';

export class UpdateVehicleDto {
  @IsOptional()
  @IsString()
  model: string;

  @IsOptional()
  @IsString()
  brand: string;

  @IsOptional()
  @IsString()
  plate: string;

  @IsOptional()
  @IsString()
  color: string;

  @IsOptional()
  @IsString()
  type: VehicleEnum;
}
