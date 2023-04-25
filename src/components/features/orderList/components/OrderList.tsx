import { OrderItem } from "components/features/orderList/components/OrderItem";
import { FC } from "react";
import { Order } from "store/services/order";

type Props = {
  orders?: Order[];
};

export const OrderList: FC<Props> = ({ orders }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>ORDER DATE</th>
            <th>Job</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((item, index) => (
            <OrderItem key={item.id} index={index} order={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
