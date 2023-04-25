import { FC } from "react";
import { Product } from "store/services/product";

type Props = {
  index?: number;
  product: Product;
  clickHandler: (product: Product) => void;
};

export const ProductItem: FC<Props> = ({ index, product, clickHandler }) => {
  return (
    <div
      className="card w-full max-w-md bg-base-100 shadow-xl cursor-pointer hover:opacity-50"
      data-theme="luxury"
      onClick={() => clickHandler(product)}
    >
      <figure className="w-full">
        <img className="w-full" src={`https://picsum.photos/600/400?random=${index}`} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="card-actions justify-end">¥ {product.price}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Alcohol</div>
          <div className="badge">Products</div>
        </div>
      </div>
    </div>
  );
};
