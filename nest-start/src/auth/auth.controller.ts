import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthUserDto} from "./dto/auth-user.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/login')
    login(@Body() dto: AuthUserDto) {
        return this.authService.login(dto);
    }

    @Post('/authorization')
    authorization(@Body() dto: AuthUserDto) {
        return this.authService.authorization(dto);
    }
}
