/*
 ! Type Casting - Tür Dönüşümü
 * Bir değişkenin tanımlanmasının ardından kullanılacağı yere özel bir tipte algılanması için type casting kullanırız.
 * As operatörü ile kullanıldığı kod satırında değişkenin tipini değiştirebiliriz
*/

type Product = {
  name: string;
  price: number | string;
};

let product1: Product = {
  name: "Laptop",
  price: 4500.45,
};

/*
 * Normalde price string veya number olabileceğinden
 * product.price number olmasına rağmen number'a özgü toFixed() fonksiyonunu kullanamadık.
 * As kullanarak aşağıdaki kod satırına özel price değişkenin tipini number olarak değiştiricez.
 * Bu sayede number'a özgü olan toFixed methodunu kullanabiliriz
 */
(product1.price as number).toFixed(1);

// Örnek - 2
// Bu kisi verisi bize firebase'den gelmiş olsun (type'ınıda firebase belirlemiş olsun)
let kisi: unknown = {
  name: "John",
  age: 30,
  address: "123 Main St.",
};

// kişi nesnenin tipi unknown olduğu için name özelliğine erişemeyiz
// kisi.name ; //!hata verir

// nesne için bir tip oluşturalım
interface IPerson {
  name: string;
  age: number;
  address: string;
}

// kişi nesnensinin name değerine erişebilmek için tip dönüşümü yapalım
const kisi2 = kisi as IPerson;

kisi2.name;
kisi2.age;
kisi2.address;

// Örnek - 3: API'den gelen verinin tipini değiştme
interface IUser {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

// api'dan gelen veriler any tipinde olur
async function fetchUser(userId: number): Promise<IUser> {
  const res = await fetch(`/api/users/${userId}`);
  const data = await res.json();

  return data as IUser; // return tipini any tipinden IUser tipine çevirdik
}

fetchUser(9);
