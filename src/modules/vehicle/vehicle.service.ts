import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from './entity/vehicle.entity';
import { Repository } from 'typeorm';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { UpdateVehicleDto } from './dtos/update-vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async create(createVehicleData: CreateVehicleDto): Promise<Vehicle> {
    const vehicle = this.vehicleRepository.create(createVehicleData);

    return await this.vehicleRepository.save(vehicle);
  }

  async findVehicleByPlate(plate: string): Promise<Vehicle> {
    return await this.vehicleRepository.findOneBy({ plate });
  }

  async update(
    currentVehicleData: Vehicle,
    updateVehicleData: UpdateVehicleDto,
  ): Promise<Vehicle> {
    Object.assign(currentVehicleData, updateVehicleData);

    return await this.vehicleRepository.save(currentVehicleData);
  }

  async delete(plate: string) {
    return await this.vehicleRepository.delete({ plate });
  }
}
