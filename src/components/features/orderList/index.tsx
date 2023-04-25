import { OrderList as OrderItems } from "components/features/orderList/components/OrderList";
import { useOrder } from "components/features/orderList/hooks/useOrder";
import { Fragment } from "react";

export const OrderList = () => {
  const { isLoadingByGetOrder, orders } = useOrder();
  return (
    <Fragment>
      <OrderItems orders={orders} />
    </Fragment>
  );
};
