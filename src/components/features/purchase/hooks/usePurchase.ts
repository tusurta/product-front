import { useModal } from "common/hooks/useModal";
import { useCallback, useState } from "react";
import { useAppDispatch, useTypedSelector } from "store";
import { selectedProductSelector, updateSelectedProduct } from "store/app";
import { useOrderMutation } from "store/services/enhanceEndpoints";

export const usePurchase = () => {
  const dispatch = useAppDispatch();
  const product = useTypedSelector(selectedProductSelector);
  const [isVisible, setIsVisible] = useModal("purchase");
  const [, setIsVisibleConfirmModal] = useModal("confirm");
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = useCallback(() => {
    setQuantity((prev) => {
      return prev + 1;
    });
  }, [setQuantity]);
  const decreaseQuantity = useCallback(() => {
    setQuantity((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  }, [setQuantity]);

  const [order, { isSuccess: isOrderSuccess, isLoading: isLoadingByOrder }] = useOrderMutation();
  const purchase = useCallback(async () => {
    if (quantity <= 0) return;
    if (product) {
      await order({
        body: {
          items: [
            {
              productId: product.id,
              quantity,
            },
          ],
          subTotal: (product.price ?? 0) * quantity,
        },
      });
    }
    dispatch(updateSelectedProduct(undefined));
    setIsVisible(false);
    setIsVisibleConfirmModal(true);
  }, [product, order, setIsVisible, quantity]);

  const closePurchaseModal = useCallback(() => {
    setQuantity(0);
    setIsVisible(false);
  }, []);

  return {
    isVisible,
    purchase,
    isOrderSuccess,
    isLoadingByOrder,
    product,
    increaseQuantity,
    decreaseQuantity,
    quantity,
    closePurchaseModal,
  };
};
