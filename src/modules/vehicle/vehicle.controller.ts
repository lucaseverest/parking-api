import {
  Controller,
  Post,
  Body,
  ConflictException,
  Get,
  Param,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { UpdateVehicleDto } from './dtos/update-vehicle.dto';

@Controller('vehicle')
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @Post()
  async createVehicle(@Body() createVehicleData: CreateVehicleDto) {
    const vehicleExists = await this.vehicleService.findVehicleByPlate(
      createVehicleData.plate,
    );

    if (vehicleExists) {
      throw new ConflictException('vehicle already exists');
    }

    return await this.vehicleService.create(createVehicleData);
  }

  @Get(':plate')
  async findVehicleByPlate(@Param('plate') plate: string) {
    const vehicle = await this.vehicleService.findVehicleByPlate(plate);

    if (!vehicle) {
      throw new NotFoundException('vehicle does not exists');
    }

    return vehicle;
  }

  @Put(':plate')
  async updateVehicle(
    @Param('plate') plate: string,
    @Body() updateVehicleData: UpdateVehicleDto,
  ) {
    const vehicle = await this.vehicleService.findVehicleByPlate(plate);

    if (!vehicle) {
      throw new NotFoundException('vehicle does not exists');
    }

    return await this.vehicleService.update(vehicle, updateVehicleData);
  }

  @Delete(':plate')
  async deleteVehicle(@Param('plate') plate: string) {
    const vehicle = await this.vehicleService.findVehicleByPlate(plate);

    if (!vehicle) {
      throw new NotFoundException('vehicle does not exists');
    }

    await this.vehicleService.delete(plate);

    return { message: 'Vehicle deleted successfully' };
  }
}
