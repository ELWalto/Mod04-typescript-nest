import { Image } from './../../image/entities/image.entitiy';
import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { Product } from "../entities/product.entity";
import { Type } from 'class-transformer';

export class CreateProductDto extends Product {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @IsOptional()
    price?: number | null;

    @ValidateNested({each: true}) // valida objeto ou lista de objetos com o each true
    @Type(() => CreateImageDto) // valida o tipo do objeto 
    @IsArray()
    @IsOptional()
    images?: CreateImageDto[];
}

export class CreateImageDto{
    url: string;
}
