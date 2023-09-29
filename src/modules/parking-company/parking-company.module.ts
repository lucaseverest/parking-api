import { Module } from '@nestjs/common';
import { ParkingCompanyController } from './parking-company.controller';
import { ParkingCompanyService } from './parking-company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingCompany } from './entity/parking-company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingCompany])],
  controllers: [ParkingCompanyController],
  providers: [ParkingCompanyService],
  exports: [ParkingCompanyService],
})
export class ParkingCompanyModule {}
