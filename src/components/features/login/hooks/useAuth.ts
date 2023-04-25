import { LOCALSTORAGE_KEY, ROUTE_PATH } from "common/constants";
import { useModal } from "common/hooks/useModal";
import { getItemLocalStorage } from "common/localStorage";
import { decodeToken } from "common/util";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "store";
import { setIsAuthenticated } from "store/auth";
import { useLoginMutation } from "store/services/enhanceEndpoints";
import { FIXED_CACHE_KEY } from "store/services/fixedCacheKeys";

type LoginInput = {
  username: string;
  password: string;
  withError: boolean;
};

export const useAuth = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<LoginInput>();
  const [login, { isLoading: isLoadingByLogin, isSuccess, data, isError }] = useLoginMutation({
    fixedCacheKey: FIXED_CACHE_KEY.useLoginMutation,
  });
  const navigate = useNavigate();
  const { state: locationState } = useLocation();
  const dispatch = useAppDispatch();
  const [, setIsVisible] = useModal("confirm");

  useEffect(() => {
    const token = getItemLocalStorage<string>(LOCALSTORAGE_KEY.AUTH_TOKEN);
    const { isValid } = decodeToken(token);
    dispatch(setIsAuthenticated(isValid));
    if (isValid) {
      navigate(ROUTE_PATH.HOME);
    }
  }, []);

  useEffect(() => {
    if (isError) {
      setIsVisible(true);
    }
  }, [isError]);

  const submitLogin: SubmitHandler<LoginInput> = async ({ username, password, withError }) => {
    try {
      if (withError) {
        setIsVisible(true);
        return;
      }
      await login({
        body: {
          username,
          password,
        },
      });
      navigate(locationState?.redirect ?? ROUTE_PATH.HOME);
    } catch (error) {
      console.error({ error });
      throw error;
    }
  };

  return {
    errors,
    watch,
    register,
    login: handleSubmit(submitLogin),
    isLoadingByLogin,
    isSuccess,
    data,
  };
};

export default {};
