import { InventoryUpdateManyWithoutWarehousesInput } from "./InventoryUpdateManyWithoutWarehousesInput";

export type WarehouseUpdateInput = {
  capacity?: number | null;
  inventories?: InventoryUpdateManyWithoutWarehousesInput;
  location?: string | null;
};
