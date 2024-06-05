import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  products?: Array<Product>;
  updatedAt: Date;
};
