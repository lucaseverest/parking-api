import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingCompanyModule } from './modules/parking-company/parking-company.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { ParkingCompany } from './modules/parking-company/entity/parking-company.entity';
import { Vehicle } from './modules/vehicle/entity/vehicle.entity';
import { AuthModule } from './modules/auth/auth.module';

import 'dotenv/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { ParkingRegisters } from './modules/parking-registers/entity/parking-registers.entity';
import { ParkingRegistersModule } from './modules/parking-registers/parking-registers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [ParkingCompany, Vehicle, ParkingRegisters],
      synchronize: true,
    }),
    AuthModule,
    ParkingCompanyModule,
    VehicleModule,
    ParkingRegistersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
