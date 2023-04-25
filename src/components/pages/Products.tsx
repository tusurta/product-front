import { Header } from "components/features/header";
import { ProductList } from "components/features/productList";
import { PurchaseModal } from "components/features/purchase";
import { PageWithHeader } from "components/ui/layout/PageWithHeader";
import { ConfirmModal } from "components/ui/modal/ConfirmModal";

export const Products = () => {
  return (
    <PageWithHeader header={<Header />}>
      <h1 className="mb-24 text-7xl font-bold">PRODUCT LIST</h1>
      <ProductList />
      <PurchaseModal />
      <ConfirmModal title="Order Completed!🎉" content="Thank you!!" />
    </PageWithHeader>
  );
};
