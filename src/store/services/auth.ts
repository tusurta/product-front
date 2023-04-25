import { api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginApiResponse, LoginApiArg>({
      query: (queryArg) => ({ url: `/auth/login`, method: "POST", body: queryArg.body }),
    }),
    signup: build.mutation<SignupApiResponse, SignupApiArg>({
      query: (queryArg) => ({ url: `/auth/signup`, method: "POST", body: queryArg.body }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as authApi };
export type LoginApiResponse = /** status 200 successful login */ {
  access_token?: string;
};
export type LoginApiArg = {
  body: {
    username?: string;
    password?: string;
  };
};
export type SignupApiResponse = /** status 200 successful operation */ User;
export type SignupApiArg = {
  body: {
    username?: string;
    password?: string;
    role?: string;
  };
};
export type User = {
  id?: number;
  username?: string;
  password?: string;
  role?: string;
};
