import type { ProductsCarts } from "./get-carts.response";

export interface CreateCartsRequest {
  userId: number;
  date: string;
  products: ProductsCarts[];
}
