import {Model, Column, DataType, Table, BelongsToMany} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {UserRoles} from "../roles/user-roles.model";
import {Role} from "../roles/roles.model";

interface UserCreationAttr {
    email: string
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttr>{
    @ApiProperty({example: 1, description: 'Unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'nikita@mail.ru', description: 'Unique email'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '123456', description: 'password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: false, description: 'flag ban'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'reason ban', description: 'Reason ban'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}