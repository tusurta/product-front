import { useGetOrderQuery } from "store/services/enhanceEndpoints";

export const useOrder = () => {
  const { data: orders, isLoading: isLoadingByGetOrder } = useGetOrderQuery();

  return { orders, isLoadingByGetOrder };
};
