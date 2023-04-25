import { FC } from "react";
import { Product } from "store/services/product";

export type QuantityFieldProps = {
  product?: Product;
  quantity: number;
  decreaseQuantity: () => void;
  increaseQuantity: () => void;
};
export const QuantityField: FC<QuantityFieldProps> = ({
  product,
  quantity,
  decreaseQuantity,
  increaseQuantity,
}) => {
  return (
    <div className="flex items-center w-full justify-between">
      <div className="text-xl flex items-center">
        <div className="avatar placeholder pr-2">
          <div className="bg-primary text-neutral-content rounded-full w-5">
            <span className="text-xs">✓</span>
          </div>
        </div>
        <span>{product?.name}:</span>
        <span className="underline pl-2">¥{product?.price}</span>
      </div>
      <div className="btn-group">
        <button className="btn btn-outline btn-sm" onClick={() => decreaseQuantity()}>
          -
        </button>
        <span placeholder="10" className="flex items-center px-4 w-10 justify-center">
          {quantity}
        </span>
        <button className="btn btn-primary btn-sm" onClick={() => increaseQuantity()}>
          +
        </button>
      </div>
    </div>
  );
};
