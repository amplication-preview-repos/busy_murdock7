import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WarehouseWhereInput = {
  capacity?: IntNullableFilter;
  id?: StringFilter;
  inventories?: InventoryListRelationFilter;
  location?: StringNullableFilter;
};
