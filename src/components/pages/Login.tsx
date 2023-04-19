import { useModal } from "common/hooks/useModal";
import { Login as LoginComponent } from "components/features/login";
import { Layout } from "components/ui/layout/Layout";
import { ConfirmModal } from "components/ui/modal/ConfirmModal";
import { FC, useEffect, useState } from "react";

export const Login: FC = () => {
  const [isVisible, setIsVisible] = useModal("confirm");
  const okClickHandler = () => {
    setIsVisible(false);
  };
  return (
    <Layout>
      <h1 className="mb-24 text-7xl font-bold">LOGIN</h1>
      <LoginComponent />
      <ConfirmModal
        title="Failed Login!"
        content="Incorrect ID or password."
        open={isVisible}
        okCallback={okClickHandler}
      />
    </Layout>
  );
};

export default Login;
