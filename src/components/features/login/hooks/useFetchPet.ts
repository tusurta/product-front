import { useAddPetMutation } from "store/services/pet";

export const useFetchPet = () => {
  const [addPetMutation, { isError }] = useAddPetMutation();
  const addPet = () => {
    addPetMutation({ pet: { name: "たま", photoUrls: ["https://google.com/image/123"] } });
  };
  return { addPet, isError };
};
