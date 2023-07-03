import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest();
        try {
            const authHandler = req.headers.authorization;
            const bearer = authHandler.split(' ')[0];
            const token = authHandler.split(' ')[1];

            if(bearer !== 'Bearer' && !token) {
                throw new UnauthorizedException({message: 'User not authorized'})
            }

            const user = this.jwtService.verify(token);
            req.user = user;
            return true;
        } catch(err) {
            throw new UnauthorizedException({message: 'User not authorized'});
        }
    }
}