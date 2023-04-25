import { authApi } from "store/services/auth";
import { orderApi } from "store/services/order";
import { productApi } from "store/services/product";

export const enhancedUserApi = authApi.enhanceEndpoints({
  endpoints: {
    login: {
      invalidatesTags: ["User"],
    },
  },
});

export const enhancedProductApi = productApi.enhanceEndpoints({
  endpoints: {
    getProduct: {
      providesTags: ["Product"],
    },
  },
});

export const enhancedOrderApi = orderApi.enhanceEndpoints({
  endpoints: {
    getOrder: {
      providesTags: ["Order"],
    },
    order: {
      invalidatesTags: ["Order"],
    },
  },
});

export const { useGetProductQuery } = enhancedProductApi;
export const { useLoginMutation, useSignupMutation } = enhancedUserApi;
export const { useGetOrderQuery, useOrderMutation } = enhancedOrderApi;
