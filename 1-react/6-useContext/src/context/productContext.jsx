import axios from "axios";
import { createContext, useEffect, useState } from "react";

/*
 * Context API | useContext
 * Uygulamada birden çok bileşenin ihtiyacı olan verileri:
 * Bileşenlerden tamamen bağımsız bir şekilde konumlanan context merkezlerinde yönetmeye yarar
 
 * Context yapısı içerisinde verilerin state'lerini ve verileri değiştermeye yarayan fonksiyonları tutarız

 * Context, tutuğumuz state'leri bileşenlere doğrudan aktarım yapabilen state yönetim aracıdır
 */

//! Context yapısnın temelini oluşturma
export const ProductContext = createContext();

//! Context sağlayıcısnı ve tuttuğu verileri tanımla
export const ProductProvider = ({ children }) => {
  // context yapısında tutulacak state'ler
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  // api'dan ürün verilerini al
  useEffect(() => {
    setLoading(true);

    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // value propuyla tanımlanan değişkenler  provider ile kapsanan bütün component'lar tarafından erişilebilir
  return (
    <ProductContext.Provider
      value={{ loading, error, products }} //
    >
      {children}
    </ProductContext.Provider>
  );
};
