import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/create-role.dto";

@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {}

    @Get('/:value')
    getRoleByValue(@Param('value') value: string){
        return this.rolesService.getRoleByValue(value)
    }

    @Post()
    createNewRole(@Body() createRoleDto: CreateRoleDto){
        return this.rolesService.createNewRole(createRoleDto);
    }
}
