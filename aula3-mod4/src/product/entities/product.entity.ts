import { Prisma } from "@prisma/client";

export class Product implements Prisma.ProductUncheckedCreateInput { // copia do q ta no banco
    id?: number;
    name: string;
    price?: number;
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutProductInput;

}
