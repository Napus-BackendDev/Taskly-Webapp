import { Controller, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor (private readonly authservice: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req){
        console.log(req)
        return this.authservice.login(req.user);
    }

    @UseGuards(LocalAuthGuard)
    @Post('/logout')
    async logout(@Request() req){
        return req.logout();
    }
}
