import { IsNotEmpty, IsString } from 'class-validator';
import { VehicleEnum } from '../entity/vehicle-type.enum';

export class CreateVehicleDto {
  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  plate: string;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsString()
  type: VehicleEnum;
}
