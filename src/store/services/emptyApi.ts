// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { LOCALSTORAGE_KEY } from "common/constants";
import { getItemLocalStorage } from "common/localStorage";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = getItemLocalStorage<string>(LOCALSTORAGE_KEY.AUTH_TOKEN);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });
console.log({ baseurl: import.meta.env.VITE_API_URL });
// initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["User", "Product", "Order"],
  endpoints: () => ({}),
});
