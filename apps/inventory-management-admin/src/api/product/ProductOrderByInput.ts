import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  orderId?: SortOrder;
  price?: SortOrder;
  sku?: SortOrder;
  supplierId?: SortOrder;
  updatedAt?: SortOrder;
};
