import { Product } from "../entities/product.entity";
export declare class CreateProductDto extends Product {
    name: string;
    price?: number | null;
    images?: CreateImageDto[];
}
export declare class CreateImageDto {
    url: string;
}
