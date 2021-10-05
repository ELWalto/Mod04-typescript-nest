import { Image } from "../../image/entities/image.entitiy";

export class Product {
    id?: number;
    name: string;
    price?: number;
    images?: Image[];
}


