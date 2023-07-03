import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException
} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {Reflector} from "@nestjs/core";
import {ROLES_KEY} from "./roles-auth.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private jwtService: JwtService,
                private reflector: Reflector
    ) {}

    canActivate(context: ExecutionContext) {
        try {
            // берёт роли доступные декоратору
            const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
                context.getHandler(),
                context.getClass()
            ]);

            if(!requiredRoles)
                return true;

            const req = context.switchToHttp().getRequest();
            const authHandler = req.headers.authorization;
            const bearer = authHandler.split(' ')[0];
            const token = authHandler.split(' ')[1];

            if(bearer !== 'Bearer' && !token) {
                throw new UnauthorizedException({message: 'User not authorized'})
            }

            const user = this.jwtService.verify(token);
            req.user = user;
            return user.roles.some(role => requiredRoles.includes(role.value));
        } catch(err) {
            throw new HttpException('Not permission', HttpStatus.FORBIDDEN);
        }
    }
}