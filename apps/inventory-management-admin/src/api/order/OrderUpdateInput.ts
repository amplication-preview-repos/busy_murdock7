import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  products?: ProductUpdateManyWithoutOrdersInput;
};
