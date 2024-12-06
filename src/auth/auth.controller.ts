import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dtos/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //Post sign up
  @Post('signup') // auth/signup
  signup(@Body() signupData: SignupDto) {
    return 'User Signup';
  }
}
