import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "common/constants";
import { Header } from "components/features/header";
import { PageWithHeader } from "components/ui/layout/PageWithHeader";

export const User = () => {
  const navigate = useNavigate();
  return (
    <PageWithHeader header={<Header />}>
      <h1 className="mb-24 text-7xl font-bold">USER</h1>
      <button className="btn w-full my-3" onClick={() => navigate(ROUTE_PATH.ORDER)}>
        To ORDER
      </button>
    </PageWithHeader>
  );
};
