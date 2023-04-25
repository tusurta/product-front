import { ROUTE_PATH } from "common/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignupMutation } from "store/services/enhanceEndpoints";

type SignupInput = {
  username: string;
  password: string;
  passwordConfirm: string;
};

export const useSignup = () => {
  const [signup, { isLoading }] = useSignupMutation();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<SignupInput>();
  const navigate = useNavigate();
  const goLogin = () => {
    navigate(ROUTE_PATH.LOGIN);
  };
  const submitSignup: SubmitHandler<SignupInput> = async ({
    username,
    password,
    passwordConfirm,
  }) => {
    try {
      if (password !== passwordConfirm) {
        return;
      }
      await signup({
        body: {
          username,
          password,
          role: "admin",
        },
      });
      navigate(ROUTE_PATH.LOGIN);
    } catch (error) {
      console.error({ error });
      throw error;
    }
  };
  return {
    isLoading,
    goLogin,
    errors,
    watch,
    handleSubmit,
    register,
    signup: handleSubmit(submitSignup),
  };
};
