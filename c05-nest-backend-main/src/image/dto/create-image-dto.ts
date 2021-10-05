import { IsString } from "class-validator";

import {Image} from "../entities/image.entitiy"
export class CreateImageDto extends Image{
    @IsString()
    utl: string;

}