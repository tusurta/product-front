import { PrimaryBtn } from "components/ui/button/PrimaryBtn";
import { Box } from "components/ui/layout/Box";
import { TextField } from "components/ui/textField/TextField";
import { FC } from "react";
import { useAuth } from "../hooks/useAuth";
import { loginFormConst } from "../login.constant";

export const LoginForm: FC = () => {
  const { errors, login, register, isLoadingByLogin } = useAuth();
  return (
    <Box>
      <form onSubmit={login}>
        <TextField
          placeholder={loginFormConst.id.placeholder}
          register={{ ...register("username", { required: true }) }}
        />
        <TextField
          type={"password"}
          placeholder={loginFormConst.password.placeholder}
          register={{ ...register("password", { required: true }) }}
        />
        <PrimaryBtn
          text="login"
          disabled={!!errors.password || !!errors.username}
          loading={isLoadingByLogin}
        />
        <div className="flex items-center">
          <input
            className="checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            {...register("withError")}
            type="checkbox"
          />
          <label className="ml-2 text-sm font-medium">withError</label>
        </div>
      </form>
    </Box>
  );
};
