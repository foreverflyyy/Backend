import {Body, Controller, Get, Post, UseGuards, UsePipes} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";
import {ValidationPipe} from "../pipes/validation.pipe";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'Получить всех пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @UsePipes(ValidationPipe)
    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/create')
    createUser(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary: 'Выдать роль'})
    @ApiResponse({status: 200, type: User})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/addRole')
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto);
    }

    @ApiOperation({summary: 'Забанить пользователя'})
    @ApiResponse({status: 200, type: User})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/banToUser')
    banToUser(@Body() dto: BanUserDto) {
        return this.usersService.banToUser(dto);
    }
}
