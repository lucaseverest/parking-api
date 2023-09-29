import {
  Controller,
  Get,
  Param,
  NotFoundException,
  Put,
  Body,
  Delete,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { ParkingCompanyService } from './parking-company.service';
import { UpdateParkingCompanyDto } from './dtos/update-parking-company.dto';
import { AuthGuardInformationsType } from '../auth/auth.guard';

@Controller('parking-company')
export class ParkingCompanyController {
  constructor(private parkingCompanyService: ParkingCompanyService) {}

  @Get(':id')
  async findCompanyById(@Param('id') id: string) {
    const parkingCompany = await this.parkingCompanyService.findById(id);

    if (!parkingCompany) {
      throw new NotFoundException('parkingCompany does not exists');
    }

    return parkingCompany;
  }

  @Put(':id')
  async updateParkingCompany(
    @Request() req: AuthGuardInformationsType,
    @Param('id') id: string,
    @Body() updateParkingCompanyData: UpdateParkingCompanyDto,
  ) {
    const { sub: authParkingCompanyId } = req.user;

    if (authParkingCompanyId !== id) {
      throw new UnauthorizedException(
        "A Parking Company can't update others companies",
      );
    }

    const parkingCompany = await this.parkingCompanyService.findById(id);

    if (!parkingCompany) {
      throw new NotFoundException('parkingCompany does not exists');
    }

    return await this.parkingCompanyService.update(
      parkingCompany,
      updateParkingCompanyData,
    );
  }

  @Delete(':id')
  async deleteParkingCompany(
    @Request() req: AuthGuardInformationsType,
    @Param('id') id: string,
  ) {
    const { sub: authParkingCompanyId } = req.user;

    if (authParkingCompanyId !== id) {
      throw new UnauthorizedException(
        "A Parking Company can't delete others companies",
      );
    }

    const parkingCompany = await this.parkingCompanyService.findById(id);

    if (!parkingCompany) {
      throw new NotFoundException('parkingCompany does not exists');
    }

    await this.parkingCompanyService.delete(id);

    return { message: 'Parking Company deleted successfully' };
  }
}
