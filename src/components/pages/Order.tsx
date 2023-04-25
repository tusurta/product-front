import { Header } from "components/features/header";
import { OrderList } from "components/features/orderList";
import { PageWithHeader } from "components/ui/layout/PageWithHeader";

export const Order = () => {
  return (
    <PageWithHeader header={<Header />}>
      <h1 className="mb-24 text-7xl font-bold">ORDER LIST</h1>
      <OrderList />
    </PageWithHeader>
  );
};
