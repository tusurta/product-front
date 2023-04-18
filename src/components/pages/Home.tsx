import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "common/constants";
import { Header } from "components/features/header";
import { PageWithHeader } from "components/ui/layout/PageWithHeader";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <PageWithHeader header={<Header />}>
      <h1 className="mb-24 text-7xl font-bold">HOME</h1>
      <button className="btn btn-accent w-full my-3" onClick={() => navigate(ROUTE_PATH.ORDER)}>
        To ORDER
      </button>
      <button className="btn btn-info w-full my-3" onClick={() => navigate(ROUTE_PATH.USER)}>
        To USER
      </button>
      <button className="btn btn-primary w-full my-3" onClick={() => navigate(ROUTE_PATH.PETS)}>
        To PET
      </button>
    </PageWithHeader>
  );
};

export default Home;
