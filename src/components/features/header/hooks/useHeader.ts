import { LOCALSTORAGE_KEY, ROUTE_PATH } from "common/constants";
import { removeItemLocalStorage } from "common/localStorage";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store";
import { setIsAuthenticated } from "store/auth";

export const useHeader = () => {
  const naviage = useNavigate();
  const dispatch = useAppDispatch();
  const goHome = () => naviage(ROUTE_PATH.HOME);
  const logout = () => {
    removeItemLocalStorage(LOCALSTORAGE_KEY.AUTH_TOKEN);
    dispatch(setIsAuthenticated(false));
    naviage(ROUTE_PATH.LOGIN);
  };
  const goProfile = () => naviage(ROUTE_PATH.USER);
  const goProducts = () => naviage(ROUTE_PATH.PRODUCTS);
  const goOrders = () => naviage(ROUTE_PATH.ORDER);

  return { goHome, logout, goProfile, goProducts, goOrders };
};
