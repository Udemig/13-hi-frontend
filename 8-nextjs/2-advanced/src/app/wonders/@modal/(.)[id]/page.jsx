"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { data } from "@/utils/constants";
import x from "@pages/1";

const Modal = async ({ params }) => {
  const router = useRouter();

  // url'deki id parametresini al
  const { id } = await params;

  // data dizisindeki id'si bilinen elemanı al
  const item = data.find((item) => item.id === id);

  // x butonuna tıklandığında
  const handleClose = () => {
    // 1 sayfa geri yönlendir
    router.back();

    // 1 sayfa ileri yönlendir
    router.forward();

    // belirli bir sayfa yönlendir
    router.push("/wonders");

    // belirli bir sayfaya yönlendir (geçmişe kaydetmez)
    router.replace("/wonders");

    // sayfayı yeniden renderlar
    router.refresh();
  };

  // -? butonuna tıklandığında
  const handleInfo = () => {
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs grid place-items-center">
      <div className="bg-white px-10 pb-10 text-black rounded-md">
        <div className="flex justify-between my-5 text-lg">
          <button onClick={handleClose} className="btn">
            X
          </button>

          <button onClick={handleInfo} className="btn">
            ?
          </button>
        </div>

        <Image
          src={item.src}
          alt={item.name}
          className="max-h-[300px] object-cover rounded-md w-full aspect-square"
        />

        <h1 className="text-center my-5 text-3xl">{item.name}</h1>

        <div className="my-5">
          <h3 className="text-lg font-semibold">Fotoğrafçı</h3>
          <span className="text-lg ">{item.photographer}</span>
        </div>

        <div className="my-5">
          <h3 className="text-lg font-semibold">Lokasyon</h3>
          <span className="text-lg">{item.location}</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
