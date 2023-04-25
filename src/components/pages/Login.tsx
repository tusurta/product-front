import { ROUTE_PATH } from "common/constants";
import { Login as LoginComponent } from "components/features/login";
import { Layout } from "components/ui/layout/Layout";
import { ConfirmModal } from "components/ui/modal/ConfirmModal";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <h1 className="mb-24 text-7xl font-bold">LOGIN</h1>
      <LoginComponent />
      <span className="py-2 text-primary link" onClick={() => navigate(ROUTE_PATH.SIGNUP)}>
        Sign Up Here
      </span>
      <ConfirmModal title="Failed Login!" content="Incorrect ID or password." />
    </Layout>
  );
};

export default Login;
