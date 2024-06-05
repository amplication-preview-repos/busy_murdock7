import { InventoryUpdateManyWithoutProductsInput } from "./InventoryUpdateManyWithoutProductsInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ProductUpdateInput = {
  description?: string | null;
  inventories?: InventoryUpdateManyWithoutProductsInput;
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  sku?: string | null;
  supplier?: SupplierWhereUniqueInput | null;
};
