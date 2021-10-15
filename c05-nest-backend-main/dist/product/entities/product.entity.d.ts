import { Category } from 'src/category/entities/category.entity';
import { Image } from 'src/image/entities/image.entity';
export declare class Product {
    id?: number;
    name: string;
    price?: number;
    images?: Image[];
    categories: Category[];
}
