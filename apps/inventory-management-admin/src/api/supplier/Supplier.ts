import { Product } from "../product/Product";

export type Supplier = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
