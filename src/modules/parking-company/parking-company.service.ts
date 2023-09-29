import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingCompany } from './entity/parking-company.entity';
import { Repository } from 'typeorm';
import { CreateParkingCompanyDto } from './dtos/create-parking-company.dto';
import { UpdateParkingCompanyDto } from './dtos/update-parking-company.dto';

@Injectable()
export class ParkingCompanyService {
  constructor(
    @InjectRepository(ParkingCompany)
    private parkingCompanyRepository: Repository<ParkingCompany>,
  ) {}

  async create(
    parkingCompanyData: CreateParkingCompanyDto,
  ): Promise<ParkingCompany> {
    const companyAlreadyExists = await this.parkingCompanyRepository.findOneBy({
      cnpj: parkingCompanyData.cnpj,
    });

    if (companyAlreadyExists) {
      throw new ConflictException('Company already exists');
    }

    const newCompany =
      await this.parkingCompanyRepository.save(parkingCompanyData);

    return newCompany;
  }

  async findByCnpj(cnpj: string): Promise<ParkingCompany | undefined> {
    return await this.parkingCompanyRepository.findOneBy({
      cnpj,
    });
  }

  async findById(id: string): Promise<ParkingCompany | undefined> {
    return await this.parkingCompanyRepository.findOneBy({
      id,
    });
  }

  async update(
    currentCompanyData: ParkingCompany,
    updateCompanyData: UpdateParkingCompanyDto,
  ): Promise<ParkingCompany> {
    Object.assign(currentCompanyData, updateCompanyData);

    return await this.parkingCompanyRepository.save(currentCompanyData);
  }

  async delete(id: string) {
    return await this.parkingCompanyRepository.delete(id);
  }
}
