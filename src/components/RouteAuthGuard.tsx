import { LOCALSTORAGE_KEY, ROUTE_PATH, ROUTE_PATH_ARRAY } from "common/constants";
import { getItemLocalStorage } from "common/localStorage";
import { isValidToken } from "common/util";
import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppDispatch } from "store";
import { setIsAuthenticated } from "store/auth";

export const RouteAuthGuard: FC = () => {
  const token = getItemLocalStorage<string>(LOCALSTORAGE_KEY.AUTH_TOKEN);
  const isAuthenticated = isValidToken(token);
  const dispatch = useAppDispatch();
  dispatch(setIsAuthenticated(isAuthenticated));
  const { pathname: redirect } = useLocation();

  if (!ROUTE_PATH_ARRAY.includes(redirect)) {
    return <Navigate to={ROUTE_PATH.HOME} replace={false} />;
  }
  if (!isAuthenticated) {
    return <Navigate to={ROUTE_PATH.LOGIN} replace={false} state={{ redirect }} />;
  }
  return <Outlet />;
};
