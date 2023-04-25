import { FC, Fragment } from "react";
import { Product } from "store/services/product";
import { ProductItem } from "./ProductItem";

type Props = {
  products?: Product[];
  clickHandler: (product: Product) => void;
};
export const ProductList: FC<Props> = ({ products, clickHandler }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
      {products?.map((product, index) => (
        <ProductItem key={product.id} index={index} product={product} clickHandler={clickHandler} />
      ))}
    </div>
  );
};
