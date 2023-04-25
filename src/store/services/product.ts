import { api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<GetProductApiResponse, GetProductApiArg>({
      query: () => ({ url: `/product` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as productApi };
export type GetProductApiResponse = /** status 200 successful operation */ Product[];
export type GetProductApiArg = void;
export type Product = {
  id?: string;
  name?: string;
  price?: number;
  quantity?: number;
  createdAt?: string;
  updatedAt?: string;
};
