import { IsNotEmpty, IsString } from 'class-validator';
import { ParkingRegisterEnum } from '../entity/parking-registers.enum';

export class ThrowRegisterDto {
  @IsNotEmpty()
  @IsString()
  vehiclePlate: string;

  @IsNotEmpty()
  @IsString()
  registerType: ParkingRegisterEnum;
}
