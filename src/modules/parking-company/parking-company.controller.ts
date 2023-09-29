import {
  Controller,
  Get,
  Param,
  NotFoundException,
  Put,
  Body,
  Delete,
} from '@nestjs/common';
import { ParkingCompanyService } from './parking-company.service';
import { UpdateParkingCompanyDto } from './dtos/update-parking-company.dto';

@Controller('parking-company')
export class ParkingCompanyController {
  constructor(private companyService: ParkingCompanyService) {}

  @Get(':id')
  async findCompanyById(@Param('id') id: string) {
    const parkingCompany = await this.companyService.findById(id);

    if (!parkingCompany) {
      throw new NotFoundException('parkingCompany does not exists');
    }

    return parkingCompany;
  }

  @Put(':id')
  async updateParkingCompany(
    @Param('id') id: string,
    @Body() updateCompanyData: UpdateParkingCompanyDto,
  ) {
    const parkingCompany = await this.companyService.findById(id);

    if (!parkingCompany) {
      throw new NotFoundException('parkingCompany does not exists');
    }

    return await this.companyService.update(parkingCompany, updateCompanyData);
  }

  @Delete(':id')
  async deleteParkingCompany(@Param('id') id: string) {
    const parkingCompany = await this.companyService.findById(id);

    if (!parkingCompany) {
      throw new NotFoundException('parkingCompany does not exists');
    }

    await this.companyService.delete(id);

    return { message: 'Parking Company deleted successfully' };
  }
}
