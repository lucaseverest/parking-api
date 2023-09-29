import { Module } from '@nestjs/common';
import { VehicleController } from './vehicle.controller';
import { Vehicle } from './entity/vehicle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleService } from './vehicle.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle])],
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class VehicleModule {}
