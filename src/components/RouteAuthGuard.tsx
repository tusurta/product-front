import { LOCALSTORAGE_KEY, ROUTE_PATH, ROUTE_PATH_ARRAY } from "common/constants";
import { getItemLocalStorage } from "common/localStorage";
import { decodeToken } from "common/util";
import { FC, useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "store";
import { setIsAuthenticated } from "store/auth";

export const RouteAuthGuard: FC = () => {
  const { pathname: redirect } = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const token = getItemLocalStorage<string>(LOCALSTORAGE_KEY.AUTH_TOKEN);
    const { isValid } = decodeToken(token);
    dispatch(setIsAuthenticated(isValid));
    if (!isValid) {
      navigate(ROUTE_PATH.LOGIN, { replace: false, state: { redirect } });
    }
  }, [redirect]);

  if (!ROUTE_PATH_ARRAY.includes(redirect)) {
    return <Navigate to={ROUTE_PATH.HOME} replace={false} />;
  }
  return <Outlet />;
};
