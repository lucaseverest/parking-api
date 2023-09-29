import { Controller } from '@nestjs/common';
import { ParkingCompanyService } from './parking-company.service';

@Controller('parking-company')
export class ParkingCompanyController {
  constructor(private companyService: ParkingCompanyService) {}
}
