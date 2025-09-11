/*
 * Omit
 * Bir type'da istemediğimiz bir değer olduğunda bütün tipi basştan yazmak yerine istediğimiz değeri tipten kaldırabiliyoruz
 */

type Product = {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
};

// api'dan alınan ürünleri return eden fonksiyon
const getProducts = (): Product[] => {
  return [{ id: 1, name: "Apple", price: 10, isAvailable: true }];
};

// api'a yeni bir ürün ekleme fonksiyonu: omit olmadan
const createProduct1 = (newProduct: { name: string; price: number; isAvailable: boolean }) => {};

// api'a yeni bir ürün ekleme fonksiyonu: omit kullanarak
const createProduct2 = (newProduct: Omit<Product, "id" | "name">) => {};

createProduct1({ name: "pc", price: 90000, isAvailable: true });
createProduct2({ price: 90000, isAvailable: true });
