import { ProductList as ProductItems } from "components/features/productList/components/ProductList";
import { useProduct } from "components/features/productList/hooks/useProduct";
import { Fragment } from "react";

export const ProductList = () => {
  const { products, clickItem } = useProduct();
  return (
    <Fragment>
      <ProductItems products={products} clickHandler={clickItem} />
    </Fragment>
  );
};
