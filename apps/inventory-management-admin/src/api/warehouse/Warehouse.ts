import { Inventory } from "../inventory/Inventory";

export type Warehouse = {
  capacity: number | null;
  createdAt: Date;
  id: string;
  inventories?: Array<Inventory>;
  location: string | null;
  updatedAt: Date;
};
