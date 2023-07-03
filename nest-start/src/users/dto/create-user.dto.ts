import {ApiOperation, ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'nikita.ushakov@mail.ru', description: 'email'})
    readonly email: string;
    @ApiProperty({example: '123456', description: 'password'})
    readonly password: string;
}