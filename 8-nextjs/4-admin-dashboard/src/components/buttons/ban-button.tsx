"use client";

import { banUser } from "@/utils/service";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { toast } from "react-toastify";

interface Props {
  id: string;
}

const BanButton: FC<Props> = ({ id }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleBan = async () => {
    if (!confirm("Bu kullanıcıyı silmek istediğinizden emin misiniz?")) return;

    setIsLoading(true);

    banUser(id)
      .then(() => {
        toast.success("Kullanıcı engellendi");
        router.refresh();
      })
      .catch(() => toast.error("İşlem başarısız"))
      .finally(() => setIsLoading(false));
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleBan}
      className="button hover:bg-red-200 cursor-pointer border border-red-500 disabled:cursor-not-allowed disabled:brightness-75"
    >
      <BsTrash className="text-base text-red-500" />
    </button>
  );
};

export default BanButton;
