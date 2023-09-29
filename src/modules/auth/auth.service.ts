import {
  Injectable,
  UnprocessableEntityException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateParkingCompanyDto } from '../parking-company/dtos/create-parking-company.dto';
import { ParkingCompanyService } from '../parking-company/parking-company.service';
import { JwtService } from '@nestjs/jwt';
import { compare, genSaltSync, hashSync } from 'bcrypt';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private parkingCompanyService: ParkingCompanyService,
    private jwtService: JwtService,
  ) {}

  async signUp(parkingCompanyDto: CreateParkingCompanyDto) {
    const { password } = parkingCompanyDto;

    if (!password) {
      throw new UnprocessableEntityException('missing password param');
    }

    const genSalt = genSaltSync(10);
    const passwordHash = hashSync(password, genSalt);

    parkingCompanyDto.password = passwordHash;

    const newParkingCompany =
      await this.parkingCompanyService.create(parkingCompanyDto);

    const payload = { sub: newParkingCompany.id, cnpj: newParkingCompany.cnpj };
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      accessToken,
      newParkingCompany,
    };
  }

  async login(loginDto: LoginDto) {
    const { cnpj, password } = loginDto;

    const parikingCompany = await this.parkingCompanyService.findByCnpj(cnpj);

    if (!parikingCompany) {
      throw new NotFoundException('parkingCompany does not exists');
    }

    const passwordMatch = await compare(password, parikingCompany.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('wrong credentials');
    }

    const payload = { sub: parikingCompany.id, cnpj: parikingCompany.cnpj };
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      accessToken,
      parikingCompany,
    };
  }
  // Rota de logout
}
