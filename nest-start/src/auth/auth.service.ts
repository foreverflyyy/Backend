import {Body, HttpException, HttpStatus, Injectable, Post, UnauthorizedException} from '@nestjs/common';
import {AuthUserDto} from "./dto/auth-user.dto";
import {UsersService} from "../users/users.service";
import * as bcrypt from 'bcryptjs'
import {User} from "../users/users.model";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {}

    async login(dto: AuthUserDto) {
        const user = await this.validateUser(dto);
        return this.generateToken(user);
    }

    async authorization(dto: AuthUserDto) {
        const candidate = await this.userService.getUserByEmail(dto.email);
        if(candidate)
            return new HttpException('User with this email already exists!', HttpStatus.BAD_REQUEST)

        const hashPassword = await bcrypt.hash(dto.password, 5);
        const user = await this.userService.createUser({...dto, password: hashPassword});
        return this.generateToken(user);
    }

    private async generateToken(user: User){
        const payload = {email: user.email, id: user.id, roles: user.roles}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(dto: AuthUserDto) {
        const user = await this.userService.getUserByEmail(dto.email);
        const passwordEquals = await bcrypt.compare(dto.password, user.password);

        if(user && passwordEquals)
            return user;

        throw new UnauthorizedException({message: 'Некорректный email или пароль!'})
    }
}
