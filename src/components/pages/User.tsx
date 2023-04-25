import { Header } from "components/features/header";
import { Profile } from "components/features/profile";
import { PageWithHeader } from "components/ui/layout/PageWithHeader";

export const User = () => {
  return (
    <PageWithHeader header={<Header />}>
      <h1 className="mb-24 text-7xl font-bold">Profile</h1>
      <Profile />
    </PageWithHeader>
  );
};
