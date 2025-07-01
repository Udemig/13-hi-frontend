import { createContext, useState } from "react";
import { toast } from "react-toastify";

// context yapısı kurulumu
export const BasketContext = createContext();

// context sağlayıcı component'ı kurulumu
export const BasketProvider = ({ children }) => {
  // sepet state'i
  const [basket, setBasket] = useState([]);

  // ürünü sepet ekle
  const addToBasket = (product) => {
    //1) bu üründen sepette var mı kontrol et
    const found = basket.find((i) => i.id === product.id);

    if (found) {
      //2) ürün sepette varsa > miktarını 1 arttır
      //a) bulunan ürünün miktarını arttır
      const updated = { ...found, amount: found.amount + 1 };

      //b) sepet dizisindeki eski ürün yerine yenisini koy
      const newBasket = basket.map((item) => (item.id === updated.id ? updated : item));

      //c) sepet staete'ini güncelle
      setBasket(newBasket);

      // bildirim gönder
      toast.info(`Ürünün miktarı arttıldı (${updated.amount})`);
    } else {
      //3) ürün sepette yoksa > ürünü sepet ekle (miktar:1)
      setBasket([...basket, { ...product, amount: 1 }]);

      // bildirim gönder
      toast.success(`Ürün sepete eklendi`);
    }
  };

  // ürünü sepetten kaldır
  const removeFromBasket = (productId) => {
    // sepetteki ürünü bul
    const found = basket.find((i) => i.id === productId);

    if (found.amount > 1) {
      // miktarı 1'den fazlaysa > miktarını azalt
      const updated = { ...found, amount: found.amount - 1 };

      const newBasket = basket.map((i) => (i.id == updated.id ? updated : i));

      setBasket(newBasket);

      toast.info(`Ürünün miktarı azaldı (${updated.amount})`);
    } else {
      // miktarı 1 ise > ürünü sepetten kaldır
      const filtred = basket.filter((i) => i.id !== productId);

      setBasket(filtred);

      toast.error("Ürün sepetten kaldırıldı");
    }
  };

  // sepeti temizle
  const clearBasket = () => {
    setBasket([]);

    toast.success("Siparişiniz alındı");
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, clearBasket }} //
    >
      {children}
    </BasketContext.Provider>
  );
};
