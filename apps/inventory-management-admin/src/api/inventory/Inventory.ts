import { Product } from "../product/Product";
import { Warehouse } from "../warehouse/Warehouse";

export type Inventory = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
  warehouse?: Warehouse | null;
};
