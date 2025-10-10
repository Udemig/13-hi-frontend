import { getProduct } from "@/service/product-service";
import { FC } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const Page: FC<Props> = async ({ params }) => {
  // url'den id parametresini al
  const { id } = await params;

  // api'dan ürünü al
  const { grocery } = await getProduct(id);

  return (
    <div className="page">
      <h1 className="text-2xl font-bold">{grocery.name}</h1>
    </div>
  );
};

export default Page;
