import { PrimaryBtn } from "components/ui/button/PrimaryBtn";
import { Box } from "components/ui/layout/Box";
import { TextField } from "components/ui/textField/TextField";
import { useAuth } from "../hooks/login.hook";
import { loginFormConst } from "../login.constant";

export const LoginForm = () => {
  const { errors, login, register, isLoadingByLogin, isSuccess } = useAuth();
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
        <PrimaryBtn text="login" disabled={!!errors.password || !!errors.username} />
      </form>
    </Box>
  );
};
