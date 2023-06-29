/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    email: string;
    name: string;
    password: string;
}
   