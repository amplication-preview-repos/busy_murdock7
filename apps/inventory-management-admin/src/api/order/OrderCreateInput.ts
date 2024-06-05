import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  orderDate?: Date | null;
  products?: ProductCreateNestedManyWithoutOrdersInput;
};
