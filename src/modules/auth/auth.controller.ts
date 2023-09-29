import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateParkingCompanyDto } from '../parking-company/dtos/create-parking-company.dto';
import { Public } from './decorators/isPublic.decorator';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('signup')
  signUp(@Body() parkingCompanyDto: CreateParkingCompanyDto) {
    return this.authService.signUp(parkingCompanyDto);
  }

  @Public()
  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
