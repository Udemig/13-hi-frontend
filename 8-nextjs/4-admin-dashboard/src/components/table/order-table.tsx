import { getOrders } from "@/utils/service";
import { FC } from "react";
import TableWrapper from "./table-wrapper";

const OrderTable: FC = async () => {
  const orders = await getOrders();

  const getColor = (status: string): string => {
    switch (status) {
      case "Shipped":
        return "bg-blue-600";
      case "Delivered":
        return "bg-green-600";
      case "Processing":
        return "bg-yellow-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <TableWrapper>
      <thead>
        <tr>
          <th>#</th>
          <th>Sipariş Tarihi</th>
          <th>Ürün Sayısı</th>
          <th>Toplam Fiyat</th>
          <th>Adres</th>
          <th>Durum</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order, key) => (
          <tr key={key}>
            <td>{order.id}</td>

            <td>
              {new Date(order.order_date).toLocaleDateString("tr", {
                day: "2-digit",
                month: "long",
                year: "2-digit",
              })}
            </td>

            <td>{order.items.reduce((acc, item) => acc + item.quantity, 0)}</td>

            <td>{order.total_price.toFixed(2)} TL</td>

            <td>{order.shipping_address.city}</td>

            <td>
              <p
                className={`${getColor(
                  order.status
                )} text-white py-1 px-2 rounded-lg shadow text-center w-full`}
              >
                {order.status}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default OrderTable;
