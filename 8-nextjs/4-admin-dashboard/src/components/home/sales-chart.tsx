import { FC } from "react";
import LineGraph from "../graphics/line-graph";
import { getOrders } from "@/utils/service";

const SalesChart: FC = async () => {
  const orders = await getOrders();

  const labels = orders.map((order) =>
    new Date(order.order_date).toLocaleDateString("tr", {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    })
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Satış Toplamı",
        data: orders.map((order) => order.total_price),
        borderColor: "rgba(0, 150, 255,1)",
        backgroundColor: "rgba(0, 150, 255,0.5)",
        fill: true,
        borderDash: [10, 10],
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-5 shadow-md size-full pb-16">
      <h2 className="subtitle mb-5">Satış Grafiği</h2>

      <div className="w-full pt-5">
        <LineGraph data={data} />
      </div>
    </div>
  );
};

export default SalesChart;
