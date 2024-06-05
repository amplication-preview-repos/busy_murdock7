import { Inventory } from "../inventory/Inventory";
import { Order } from "../order/Order";
import { Supplier } from "../supplier/Supplier";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  inventories?: Array<Inventory>;
  name: string | null;
  order?: Order | null;
  price: number | null;
  sku: string | null;
  supplier?: Supplier | null;
  updatedAt: Date;
};
