import { InventoryCreateNestedManyWithoutWarehousesInput } from "./InventoryCreateNestedManyWithoutWarehousesInput";

export type WarehouseCreateInput = {
  capacity?: number | null;
  inventories?: InventoryCreateNestedManyWithoutWarehousesInput;
  location?: string | null;
};
