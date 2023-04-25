import { useModal } from "common/hooks/useModal";
import { useEffect } from "react";
import { useAppDispatch } from "store";
import { updateSelectedProduct } from "store/app";
import { useGetProductQuery } from "store/services/enhanceEndpoints";
import { Product } from "store/services/product";

export const useProduct = () => {
  const { data: products, isLoading: isLodingByGetProduct } = useGetProductQuery();
  const dispatch = useAppDispatch();
  const [_, setIsVisible] = useModal("purchase");
  const clickItem = (product: Product) => {
    dispatch(updateSelectedProduct(product));
    setIsVisible(true);
  };
  useEffect(() => {}, []);
  return { products, isLodingByGetProduct, clickItem };
};
