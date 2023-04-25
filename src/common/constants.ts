export const ROUTE_PATH = {
  HOME: "/",
  USER: "/user",
  PRODUCTS: "/products",
  ORDER: "/order",
  LOGIN: "/login",
  SIGNUP: "/signup",
} as const;

export const ROUTE_PATH_ARRAY = Object.entries(ROUTE_PATH).map(([_, value]) => {
  if (value.length > 1 && !value.startsWith("/")) {
    return "/" + value;
  }
  return value;
});

export const LOCALSTORAGE_KEY = {
  AUTH_TOKEN: "auth_token",
  PROFILE_INFO: "profile_info",
} as const;
