import useAuth from "components/features/login/hooks/useAuth";
import { loginFormConst } from "components/features/login/login.constant";
import { useSignup } from "components/features/signup/hooks/useSignup";
import { PrimaryBtn } from "components/ui/button/PrimaryBtn";
import { Box } from "components/ui/layout/Box";
import { TextField } from "components/ui/textField/TextField";

export const Signup = () => {
  const { signup, register, errors, isLoading } = useSignup();

  return (
    <div className="max-w-2xl w-full">
      <Box>
        <form onSubmit={signup}>
          <TextField
            placeholder={loginFormConst.id.placeholder}
            register={{ ...register("username", { required: true }) }}
          />
          <TextField
            type={"password"}
            placeholder={loginFormConst.password.placeholder}
            register={{ ...register("password", { required: true }) }}
          />
          <TextField
            type={"password"}
            placeholder={"confirm password"}
            register={{ ...register("passwordConfirm", { required: true }) }}
          />
          <PrimaryBtn
            text="signup"
            disabled={!!errors.password || !!errors.username}
            loading={isLoading}
          />
        </form>
      </Box>
    </div>
  );
};
