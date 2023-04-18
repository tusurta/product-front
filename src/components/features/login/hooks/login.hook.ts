import { LOCALSTORAGE_KEY, ROUTE_PATH } from "common/constants";
import { useModal } from "common/hooks/useModal";
import { getItemLocalStorage } from "common/localStorage";
import { isValidToken } from "common/util";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "store";
import { setIsAuthenticated } from "store/auth";
import { useCreateUserMutation } from "store/services/user";

type LoginInput = {
  username: string;
  password: string;
};

export const useAuth = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<LoginInput>();
  const [createUser, { isLoading: isLoadingByLogin, isSuccess, data, isError }] =
    useCreateUserMutation();
  const navigate = useNavigate();
  const { state: locationState } = useLocation();
  const dispatch = useAppDispatch();
  const [, setIsVisible] = useModal("confirm");

  useEffect(() => {
    const token = getItemLocalStorage<string>(LOCALSTORAGE_KEY.AUTH_TOKEN);
    const isAuthenticated = isValidToken(token);
    dispatch(setIsAuthenticated(isAuthenticated));
    if (isAuthenticated) {
      navigate(ROUTE_PATH.HOME);
    }
  }, []);

  useEffect(() => {
    if (isError) {
      setIsVisible(true);
    }
  }, [isError]);

  const login: SubmitHandler<LoginInput> = async ({ username, password }) => {
    try {
      await createUser({
        user: {
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

  return { errors, watch, register, login: handleSubmit(login), isLoadingByLogin, isSuccess, data };
};

export default {};
