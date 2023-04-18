import { LOCALSTORAGE_KEY, ROUTE_PATH } from "common/constants";
type ValueOf<T> = T[keyof T];
export type RoutePathType = ValueOf<typeof ROUTE_PATH>;
export type LocalStorageKeyType = ValueOf<typeof LOCALSTORAGE_KEY>;
