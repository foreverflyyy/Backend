import {Body, HttpException, HttpStatus, Injectable, Post, UseGuards} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService
    ) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("ADMIN");
        await user.$set("roles", [role.id]);
        user.roles = [role];
        return user;
    }

    async getUsers() {
        return await this.userRepository.findAll({include: {all: true}});
    }

    async getUserByEmail(email: string) {
        return await this.userRepository.findOne({where: {email}, include: {all: true}});
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if(user && role) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new HttpException('User or role not found', HttpStatus.NOT_FOUND);
    }

    async banToUser(dto: BanUserDto) {
        const user = await this.userRepository.findByPk(dto.userId);

        if(!user)
            throw new HttpException('User or role not found', HttpStatus.NOT_FOUND);

        user.banned = true;
        user.banReason = dto.reasonBan;
        await user.save();
        return user;
    }
}
