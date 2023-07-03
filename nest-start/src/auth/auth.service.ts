import {Body, HttpException, HttpStatus, Injectable, Post} from '@nestjs/common';
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

    }

    async authorization(dto: AuthUserDto) {
        const candidate = await this.userService.getUserByEmail(dto.email);
        if(candidate)
            return new HttpException('User with this email already exists!', HttpStatus.BAD_REQUEST)

        const hashPassword = await bcrypt.hash(dto.password, 5);
        const user = await this.userService.createUser({...dto, password: hashPassword});
        console.log(user)
        return this.generateToken(user);
    }

    async generateToken(user: User){
        const payload = {email: user.email, id: user.id, roles: user.roles}
        return {
            token: this.jwtService.sign(payload)
        }
    }
}
