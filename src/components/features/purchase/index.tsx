import {
  QuantityField,
  QuantityFieldProps,
} from "components/features/purchase/components/QuantityField";
import { usePurchase } from "components/features/purchase/hooks/usePurchase";
import { FC } from "react";

type Props = {};

export const PurchaseModal: FC<Props> = ({}) => {
  const {
    isVisible,
    purchase,
    product,
    increaseQuantity,
    decreaseQuantity,
    quantity,
    closePurchaseModal,
  } = usePurchase();
  const quantityFieldProp: QuantityFieldProps = {
    increaseQuantity,
    product,
    quantity,
    decreaseQuantity,
  };

  return (
    <div className={`modal ${isVisible ? "modal-open" : ""}`}>
      <div className="modal-box py-10">
        <label
          htmlFor="my-modal-3"
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={() => closePurchaseModal()}
        >
          ✕
        </label>
        <h1 className="w-full font-bold text-2xl pb-10">Purchase</h1>
        {product && <QuantityField {...quantityFieldProp} />}
        {
          <div className="modal-action mt-10">
            <label
              htmlFor="my-modal"
              className={`btn btn-warning ${quantity === 0 && "btn-disabled"}`}
              onClick={() => {
                purchase();
              }}
            >
              ORDER
            </label>
          </div>
        }
      </div>
    </div>
  );
};
