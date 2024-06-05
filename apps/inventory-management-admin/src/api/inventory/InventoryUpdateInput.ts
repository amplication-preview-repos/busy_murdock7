import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type InventoryUpdateInput = {
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  warehouse?: WarehouseWhereUniqueInput | null;
};
