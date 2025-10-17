"use client";

import { deleteProduct } from "@/utils/service";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  id: string;
}

const DeleteButton: FC<Props> = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Bu ürünü silmek istediğinize emin misiniz?")) return;

    try {
      setLoading(true);
      await deleteProduct(id);
      router.refresh();
      toast.success("Ürün başarıyla silindi");
    } catch (error) {
      toast.error("Kaldırma işlemi başarısız oldu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      disabled={loading}
      onClick={handleDelete}
      className="flex-1 bg-red-50 text-red-600 px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-100 transition text-center border border-red-200 hover:border-red-300 cursor-pointer"
    >
      {loading ? "Siliniyor..." : "Sil"}
    </button>
  );
};

export default DeleteButton;
