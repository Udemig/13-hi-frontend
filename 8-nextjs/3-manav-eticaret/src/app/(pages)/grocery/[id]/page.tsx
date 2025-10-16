import ProductDetails from "@/components/detail/product-detail";
import ProductInfo from "@/components/detail/product-info";
import { getProduct } from "@/service/product-service";
import Link from "next/link";
import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";

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
      <div className="mb-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-green-600 hover:underline"
        >
          <FaArrowLeft />
          Ana Sayfaya Dön
        </Link>
      </div>

      <div>
        <ProductDetails product={grocery} />
        <ProductInfo product={grocery} />
      </div>
    </div>
  );
};

export default Page;
