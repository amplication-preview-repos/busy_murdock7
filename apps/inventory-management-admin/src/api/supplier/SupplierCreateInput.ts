import { ProductCreateNestedManyWithoutSuppliersInput } from "./ProductCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  products?: ProductCreateNestedManyWithoutSuppliersInput;
};
