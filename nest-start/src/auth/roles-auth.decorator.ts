import {SetMetadata} from "@nestjs/common";

export const ROLES_KEY = 'roles';

// Указывает каким ролям доступны будет декоратор
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);