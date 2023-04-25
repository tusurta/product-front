import { api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    order: build.mutation<OrderApiResponse, OrderApiArg>({
      query: (queryArg) => ({ url: `/order`, method: "POST", body: queryArg.body }),
    }),
    getOrder: build.query<GetOrderApiResponse, GetOrderApiArg>({
      query: () => ({ url: `/order` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as orderApi };
export type OrderApiResponse = /** status 200 successful operation */ {
  result?: string;
};
export type OrderApiArg = {
  body: {
    items?: {
      productId?: string;
      quantity?: number;
    }[];
    subTotal?: number;
  };
};
export type GetOrderApiResponse = /** status 200 successful operation */ Order[];
export type GetOrderApiArg = void;
export type Product = {
  id?: string;
  name?: string;
  price?: number;
  quantity?: number;
  createdAt?: string;
  updatedAt?: string;
};
export type OrderItem = {
  id?: string;
  userId?: number;
  orderId?: string;
  quantity?: number;
  product?: Product;
};
export type Order = {
  id?: string;
  items?: OrderItem[];
  quantity?: number;
  subTotal?: number;
  pending?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
