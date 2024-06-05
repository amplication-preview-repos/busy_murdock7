import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type InventoryCreateInput = {
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  warehouse?: WarehouseWhereUniqueInput | null;
};
