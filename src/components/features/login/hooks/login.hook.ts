import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateUserMutation, User } from "store/services/user";

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
  const [createUser, { isLoading: isLoadingByLogin, isSuccess, data }] = useCreateUserMutation();
  const login: SubmitHandler<LoginInput> = async ({ username, password }) => {
    console.log({ username, password });
    return;
    createUser({
      user: {
        username,
        password,
      },
    });
  };

  return { errors, watch, register, login: handleSubmit(login), isLoadingByLogin, isSuccess, data };
};

export default {};
