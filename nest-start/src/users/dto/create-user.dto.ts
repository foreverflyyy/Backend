import {ApiOperation, ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'nikita.ushakov@mail.ru', description: 'email'})
    @IsString({message: 'Must be string!'})
    @IsEmail({}, {message: 'Invalid email'})
    readonly email: string;

    @ApiProperty({example: '123456', description: 'password'})
    @IsString({message: 'Must be string!'})
    @Length(4, 16, {message: 'nol less 4 and more than 16'})
    readonly password: string;
}