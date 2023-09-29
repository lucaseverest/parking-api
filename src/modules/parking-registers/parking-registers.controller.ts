import {
  Controller,
  Body,
  Query,
  Post,
  Request,
  NotFoundException,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { ParkingRegistersService } from './parking-registers.service';
import { ThrowRegisterDto } from './dtos/throw-register.dto';
import { ParkingCompanyService } from '../parking-company/parking-company.service';
import { VehicleService } from '../vehicle/vehicle.service';
import { AuthGuardInformationsType } from '../auth/auth.guard';

@Controller('parking-registers')
export class ParkingRegistersController {
  constructor(
    private parkingRegistersService: ParkingRegistersService,
    private parkingCompanyService: ParkingCompanyService,
    private vehicleService: VehicleService,
  ) {}

  @Post('throw-register')
  async throwRegister(
    @Request() req: AuthGuardInformationsType,
    @Query('parkingCompanyId') parkingCompanyId: string,
    @Body() throwParkingRegisterData: ThrowRegisterDto,
  ) {
    const { sub: authParkingCompanyId } = req.user;

    if (authParkingCompanyId !== parkingCompanyId) {
      throw new UnauthorizedException(
        "A Parking Company can't throw registers in others companies",
      );
    }

    const parkingCompany =
      await this.parkingCompanyService.findById(authParkingCompanyId);

    if (!parkingCompany) {
      throw new NotFoundException('Parking Company does not exists');
    }

    const vehicle = await this.vehicleService.findVehicleByPlate(
      throwParkingRegisterData.vehiclePlate,
    );

    if (!vehicle) {
      throw new NotFoundException('Vehicle does not exists');
    }

    const lastParkingRegisterForVehicle =
      await this.parkingRegistersService.findLastParkingRegisterForVehicle(
        vehicle.id,
        parkingCompanyId,
      );

    // if the last throwment was entrance, the current must be exit, and vice versa
    if (
      lastParkingRegisterForVehicle &&
      lastParkingRegisterForVehicle.type ===
        throwParkingRegisterData.registerType
    ) {
      throw new ConflictException(
        'Register not permited. Make oposite register type first',
      );
    }

    const newParkingRegister = await this.parkingRegistersService.create({
      throwParkingRegisterData,
      company: parkingCompany,
      vehicle,
    });

    return newParkingRegister;
  }
}
