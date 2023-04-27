import { parseDate } from "common/util";
import { FC, memo } from "react";
import { Order } from "store/services/order";

type Props = {
  order: Order;
  index: number;
};

export const OrderItem: FC<Props> = memo(({ order, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{parseDate(order.createdAt ?? "")}</td>
      <td>{order?.items![0]?.product?.name}</td>
      <td className="text-center">{order?.items![0]?.quantity}</td>
      <td>¥{order?.items![0]?.product?.price}</td>
      <td>{order?.subTotal}</td>
      <td>{order?.pending ? "Served" : "Pending"}</td>
    </tr>
  );
});
