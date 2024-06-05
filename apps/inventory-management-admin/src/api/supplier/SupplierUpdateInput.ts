import { ProductUpdateManyWithoutSuppliersInput } from "./ProductUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  products?: ProductUpdateManyWithoutSuppliersInput;
};
