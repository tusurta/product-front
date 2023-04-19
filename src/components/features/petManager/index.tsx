import { PetItem } from "./components/PetItem";

const ITEM_COUNT = 6;
export const PetManager = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
      {[...Array(ITEM_COUNT)].map((_, index) => (
        <PetItem key={index} />
      ))}
    </div>
  );
};
