import { Signup as SignupComponent } from "components/features/signup";
import { Layout } from "components/ui/layout/Layout";
import { ConfirmModal } from "components/ui/modal/ConfirmModal";
import { FC } from "react";

export const Signup: FC = () => {
  return (
    <Layout>
      <h1 className="mb-24 text-7xl font-bold">SIGN UP</h1>
      <SignupComponent />
    </Layout>
  );
};

export default Signup;
