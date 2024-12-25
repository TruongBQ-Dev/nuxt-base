import type { CreateCartsRequest } from "~/types/create-carts.request";
import type { GetCartsRequest } from "~/types/get-carts.request";
import type { GetCartsResponse } from "~/types/get-carts.response";

interface CartsState {
  carts: GetCartsResponse[];
}

export const useCartsStore = defineStore("carts", {
  state: (): CartsState => ({
    carts: [],
  }),
  actions: {
    async fetchCarts(params?: GetCartsRequest) {
      const res: GetCartsResponse[] = await useFetchClient.get(
        `/carts`,
        params,
      );
      this.carts = res;
    },

    async createCarts(body?: CreateCartsRequest) {
      const res: GetCartsResponse[] = await useFetchClient.post(`/carts`, body);
      this.carts = res;
    },

    async updateCarts(body?: CreateCartsRequest) {
      const res: GetCartsResponse[] = await useFetchClient.put(
        `/carts/11`,
        body,
      );
      this.carts = res;
    },

    async deleteCarts(cartId: number) {
      const res: GetCartsResponse[] = await useFetchClient.delete(
        `/carts/${cartId}`,
      );
      this.carts = res;
    },
  },
});
