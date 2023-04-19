import { Header } from "components/features/header";
import { PetManager } from "components/features/petManager";
import { PageWithHeader } from "components/ui/layout/PageWithHeader";

export const Pets = () => {
  return (
    <PageWithHeader header={<Header />}>
      <h1 className="mb-24 text-7xl font-bold">CARD LIST</h1>
      <PetManager />
    </PageWithHeader>
  );
};
