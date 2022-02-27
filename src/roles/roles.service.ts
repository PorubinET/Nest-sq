import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from "./dto/create-role.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "./roles.model";

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role) { }

    async createRole(dto: CreateRoleDto) {
        const role = await this.roleRepository.create(dto);
        await role.save();
        return role;
    }

    async updateRole(value: CreateRoleDto) {
        const role = await this.roleRepository.findOne({ where: { value } });
        await role.save();
    }

    async getRoleByValue(value: number) {
        const role = await this.roleRepository.findOne({ where: { value } })
        return role;
    }
}
