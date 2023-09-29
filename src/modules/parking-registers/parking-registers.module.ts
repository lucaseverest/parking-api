import { Module } from '@nestjs/common';
import { ParkingRegistersController } from './parking-registers.controller';
import { ParkingRegisters } from './entity/parking-registers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingRegistersService } from './parking-registers.service';
import { ParkingCompanyModule } from '../parking-company/parking-company.module';
import { VehicleModule } from '../vehicle/vehicle.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ParkingRegisters]),
    ParkingCompanyModule,
    VehicleModule,
  ],
  controllers: [ParkingRegistersController],
  providers: [ParkingRegistersService],
})
export class ParkingRegistersModule {}
