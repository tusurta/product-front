import { Header } from "components/features/header";
import { PageWithHeader } from "components/ui/layout/PageWithHeader";

export const Pets = () => {
  return (
    <PageWithHeader header={<Header />}>
      <h1 className="mb-24 text-7xl font-bold">PETS</h1>
    </PageWithHeader>
  );
};
