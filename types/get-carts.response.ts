export type ProductsCarts = {
  productId: number;
  quantity: number;
};

export type GetCartsResponse = {
  id: number;
  userId: number;
  date: string;
  products: ProductsCarts[];
};
