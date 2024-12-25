export type GetCartsRequest = {
  sort?: "asc" | "desc" | undefined;
  limit?: number | undefined;
  startdate?: string | undefined;
  enddate?: string | undefined;
};
