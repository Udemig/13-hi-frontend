"use server";

import { isRedirectError } from "next/dist/client/components/redirect-error";
import { createProduct, updateProduct } from "./service";
import { redirect } from "next/navigation";

export const handleProductForm = async (formData: FormData) => {
  // form verilerini al
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const brand = formData.get("brand") as string;
  const price = formData.get("price") as string;
  const stock = formData.get("stock") as string;
  const rating = formData.get("rating") as string;
  const reviews_count = formData.get("reviews_count") as string;
  const category = formData.get("category") as string;
  const image_url = formData.get("image_url") as string;
  const description = formData.get("description") as string;

  // ürün bilgilerini nesne haline getir
  const productData = {
    name,
    brand,
    price: Number(price),
    stock: Number(stock),
    rating: Number(rating),
    reviews_count: Number(reviews_count),
    category,
    image_url,
    description,
  };

  try {
    if (id) {
      // güncelleme modundaysak
      await updateProduct(id, productData);
    } else {
      // ekleme modundaysak
      await createProduct(productData);
    }

    // kullanıcıyı yönlendir
    redirect("/products");
  } catch (error) {
    // fırlatılan hata redirect methodunda mı kaynaklı?
    if (isRedirectError(error)) {
      throw error;
    }

    throw new Error("Veri kaydetme hatası");
  }
};
