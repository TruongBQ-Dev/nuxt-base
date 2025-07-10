import type { StateUsers, User } from "~/types/users";

export const useUsersStore = defineStore("users", {
  state: (): StateUsers => ({
    users: [],
  }),
  actions: {
    async fetchUsers() {
      const res: User[] = await useFetchClient.get(`/v1/users`);
      this.users = res;
    },
  },
});
