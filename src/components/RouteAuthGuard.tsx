import { LOCALSTORAGE_KEY, ROUTE_PATH, ROUTE_PATH_ARRAY } from "common/constants";
import { getItemLocalStorage } from "common/localStorage";
import { decodeToken } from "common/util";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppDispatch } from "store";
import { isAuthenticatedSelecor, setIsAuthenticated } from "store/auth";

export const RouteAuthGuard: FC = () => {
  const { pathname: redirect } = useLocation();
  const isAuthenticated = useSelector(isAuthenticatedSelecor);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log({ redirect });
    const token = getItemLocalStorage<string>(LOCALSTORAGE_KEY.AUTH_TOKEN);
    const { isValid } = decodeToken(token);
    dispatch(setIsAuthenticated(isValid));
  }, [redirect]);

  if (!ROUTE_PATH_ARRAY.includes(redirect)) {
    return <Navigate to={ROUTE_PATH.HOME} replace={false} />;
  }
  if (!isAuthenticated) {
    return <Navigate to={ROUTE_PATH.LOGIN} replace={false} state={{ redirect }} />;
  }
  return <Outlet />;
};
