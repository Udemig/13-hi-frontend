import Link from "next/link";
import { FC } from "react";
import { BiPlus } from "react-icons/bi";

const Products: FC = () => {
  return (
    <div className="page">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="title">Ürünler</h1>
            <p className="text-gray-600">Tüm ürünlerinizi yönetin</p>
          </div>

          <Link
            href="/products/create"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white px-4 py-2 font-semibold hover:from-blue-700 hover:to-indigo-700 transition shadow-lg hover:shadow-xl tranform hover:-translate-y-0.5 duration-300"
          >
            <BiPlus className="text-2xl" />
            Yeni Ürün Ekle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
