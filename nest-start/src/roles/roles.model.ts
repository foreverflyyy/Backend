import {Model, Column, DataType, Table, BelongsToMany} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {UserRoles} from "./user-roles.model";
import {User} from "../users/users.model";

interface RolesCreationAttr {
    value: string
    description: string
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RolesCreationAttr>{
    @ApiProperty({example: 1, description: 'Unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Unique role'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'description role', description: 'description role'})
    @Column({type: DataType.STRING, allowNull: true})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}