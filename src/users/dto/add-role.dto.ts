import {IsNumber} from "class-validator";

export class AddRoleDto {
    @IsNumber({}, {message: "Должно быть числом"})
    readonly value: number;
    @IsNumber({}, {message: "Должно быть числом"})
    readonly userId: number;
}
