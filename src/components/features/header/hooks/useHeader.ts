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
  const goPets = () => naviage(ROUTE_PATH.PETS);

  return { goHome, logout, goProfile, goPets };
};
