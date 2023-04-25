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
      </form>
    </Box>
  );
};
