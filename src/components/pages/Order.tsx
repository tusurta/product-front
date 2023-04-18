import { Header } from "components/features/header";
import { PageWithHeader } from "components/ui/layout/PageWithHeader";

export const Order = () => {
  return (
    <PageWithHeader header={<Header />}>
      <h1 className="mb-24 text-7xl font-bold">ORDER</h1>
    </PageWithHeader>
  );
};
