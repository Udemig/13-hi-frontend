import { FC } from "react";
import DoughnutGraph from "../graphics/doughnut-graph";
import { getProducts } from "@/utils/service";

const CategoryChart: FC = async () => {
  const products = await getProducts();

  // ürünlerin kategori başına kaç adet olduğunu hesapla
  const object: Record<string, number> = {};

  products.forEach((product) => {
    object[product.category] = (object[product.category] || 0) + 1;
  });

  // grafik verisini oluştur
  const data = {
    labels: [...new Set(products.map((product) => product.category))],
    datasets: [
      {
        label: "Ürün Sayısı",
        data: Object.values(object),
        backgroundColor: [
          "#6366f1", // İndigo
          "#8b5cf6", // Mor
          "#ec4899", // Pembe
          "#14b8a6", // Teal
          "#f59e0b", // Amber
          "#06b6d4", // Cyan
        ],
        borderColor: "#ffffff",
        borderWidth: 3,
        hoverOffset: 8,
        spacing: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 15,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    cutout: "65%",
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className="bg-white rounded-lg p-5 shadow-md size-full">
      <h2 className="subtitle mb-5">Kategoriler</h2>

      <div className="w-full pt-5">
        <DoughnutGraph data={data} options={options} />
      </div>
    </div>
  );
};

export default CategoryChart;
