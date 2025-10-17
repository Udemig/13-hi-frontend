import ProductForm from "@/components/form/product-form";
import { Product } from "@/types";
import { getProduct } from "@/utils/service";
import { notFound } from "next/navigation";
import { FC } from "react";

interface Props {
  params: Promise<{ slug: string[] }>;
}

const Page: FC<Props> = async ({ params }) => {
  // url'deki parametreleri al
  const { slug } = await params;

  // düzenlenicek ürünün verisini tuttuğumuz değişken
  let product: Product | null = null;

  // düzenleme modundaysak, düzenlenicek ürünün verisini api'dan al
  if (slug[0] === "edit" && slug[1]) {
    try {
      // api'a istek at
      product = await getProduct(slug[1]);

      // ürün bulunamadıysa
      if (!product) return notFound();
    } catch (error) {
      return notFound();
    }
  }

  return (
    <div className="page container mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="title">{product ? "Ürünü Düzenle" : "Ürün Ekle"}</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <ProductForm product={product} />
      </div>
    </div>
  );
};

export default Page;
