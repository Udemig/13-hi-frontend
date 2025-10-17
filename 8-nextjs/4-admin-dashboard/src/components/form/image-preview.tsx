"use client";
import { FC, useEffect, useState } from "react";
import Field from "./field";
import Image from "next/image";

interface Props {
  inputId: string;
}

const ImagePreview: FC<Props> = ({ inputId }) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // resim url'inin girildiği input'un değerini al
    const imageInput = document.getElementById(inputId) as HTMLInputElement;

    // inputa girdi olunca çalışıcak fonksiyon
    const handleInput = () => {
      const url = imageInput.value;
      setImageUrl(url);
      setIsLoading(true);

      if (url) {
        // url'in geçerli bir resim url'i olduğunu kontrol et
        const testImg = new globalThis.Image();

        // resmin yüklediğini kontrol et
        testImg.onload = () => {
          setIsValid(true);
          setIsLoading(false);
        };

        // resim yüklenmezse
        testImg.onerror = () => {
          setIsValid(false);
          setIsLoading(false);
        };

        // test resminin kaynağını ayarla
        testImg.src = url;
      } else {
        setIsValid(false);
        setIsLoading(false);
      }
    };

    // düzenleme modu için ilk değere eriş
    handleInput();

    // inputa olay izleyici ekle
    if (imageInput) {
      imageInput.addEventListener("input", handleInput);
    }

    // component unmount anında izleyiciyi kaldır
    return () => {
      if (imageInput) {
        imageInput.removeEventListener("input", handleInput);
      }
    };
  }, []);

  return (
    <Field htmlFor={inputId} label="Resim Önizleme">
      <div className="relative h-48 w-full bg-gray-100 rounded-md overflow-hidden">
        {isLoading ? (
          <div className="grid place-items-center size-full text-gray-400">
            Resim Yükleniyor...
          </div>
        ) : isValid && imageUrl ? (
          <Image
            src={imageUrl}
            alt="Önizleme"
            fill
            className="object-contain"
            unoptimized
          />
        ) : (
          <span className="grid place-items-center size-full text-gray-400">
            {imageUrl ? "Geçersiz URL" : "Resim Yok"}
          </span>
        )}
      </div>
    </Field>
  );
};

export default ImagePreview;
