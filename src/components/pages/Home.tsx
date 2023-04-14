import { Login } from "components/features/login";
import { Layout } from "components/ui/layout/Layout";

export const Home = () => {
  return (
    <Layout>
      <h1 className="mb-24 text-7xl font-bold">Pet Shop</h1>
      <Login />
    </Layout>
  );
};

export default Home;
