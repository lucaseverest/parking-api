import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingRegisters } from './entity/parking-registers.entity';
import { Repository } from 'typeorm';
import { ThrowRegisterDto } from './dtos/throw-register.dto';
import { ParkingCompany } from '../parking-company/entity/parking-company.entity';
import { Vehicle } from '../vehicle/entity/vehicle.entity';

type CreateNewParkingRegisterType = {
  throwParkingRegisterData: ThrowRegisterDto;
  company: ParkingCompany;
  vehicle: Vehicle;
};

@Injectable()
export class ParkingRegistersService {
  constructor(
    @InjectRepository(ParkingRegisters)
    private parkingRegistersRepository: Repository<ParkingRegisters>,
  ) {}

  async create({
    throwParkingRegisterData,
    company,
    vehicle,
  }: CreateNewParkingRegisterType) {
    const { registerType } = throwParkingRegisterData;

    const register = this.parkingRegistersRepository.create({
      company,
      vehicle,
      type: registerType,
    });

    return await this.parkingRegistersRepository.save(register);
  }

  async findLastParkingRegisterForVehicle(
    vehicleId: string,
    parkingCompanyId: string,
  ): Promise<ParkingRegisters | undefined> {
    return await this.parkingRegistersRepository.findOne({
      where: {
        vehicle: { id: vehicleId },
        company: { id: parkingCompanyId },
      },
      order: { createdAt: 'desc' },
    });
  }
}
