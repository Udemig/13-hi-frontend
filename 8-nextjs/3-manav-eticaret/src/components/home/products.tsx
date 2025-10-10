import { getAllProducts } from "@/service/product-service";
import { Product } from "@/types";
import { FC } from "react";
import ProductCard from "./product-card";

const Products: FC = async () => {
  const { groceries } = await getAllProducts();

  // elimizdeki karışık veiryi category değerlerine göre grupla
  const groupedProducts = groceries.reduce<Record<string, Product[]>>(
    (obj, grocery) => {
      // ürünün kategorisini al
      const category = grocery.category;

      // nesnenin içerisinde ürürünün kategorisi için bir dizi yoksa oluştur
      if (!obj[category]) {
        obj[category] = [];
      }

      // nesnenin içerisinde ürürün kategorisine ait diziye ürünü ekle
      obj[category].push(grocery);

      // nesneyi döndür
      return obj;
    },
    {}
  );

  return (
    <div className="flex flex-col gap-10">
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category}>
          <h2 className="text-2xl font-bold mb-5">{category}</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
