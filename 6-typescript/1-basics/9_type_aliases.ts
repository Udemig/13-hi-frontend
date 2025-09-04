/*
  ! Type Aliases
  * Şuana kadar tip ataması yaparken js'de var olan tiplerin yanı sıra birkaç ts tipi kullandık.
  * Gerçek projelerde o anki yaptığımız işe özel spesifik tiplere ihtiyaç duyabiliyoruz.
  * Bunları tanımlamak için type anahtar kelimesini kullanırız
   
  * Neden ihtiyaç duyarız?
  * * Çünkü belirlediğimiz bir type'ı proje içerisinde birden çok noktada kullanmamız gerekbiliyor.
  * * Bu noktada kendi type'ımızı oluşturup onu export edip ihtiyaç duyulan her noktada kullanabiliyoruz 
*/

// Örnek- 1
// kendi özel metin ismindeki tipimizi oluştur
type metin = string;

// kendi oluşturduğum tipi kullanabiliriz
let kullanıcıAdı: metin = "Ali";

// Örnek - 2
// Uçuş projesinde sıkça kullandığımız enlem ve boylam değeri var...

// type aliases olmadan
const xFlightCoords: [number, number] = [34.5464, 54.6456];
const yFlightCoords: [number, number] = [34.5464, 54.6456];
const zFlightCoords: [number, number] = [34.5464, 54.6456];

const wFlightCoords: [number, number][] = [xFlightCoords, yFlightCoords, zFlightCoords];

// type aliases ile
type Coords = [number, number];

const aFlightCoords: Coords = [34.5464, 54.6456];
const bFlightCoords: Coords = [34.5464, 54.6456];
const cFlightCoords: Coords = [34.5464, 54.6456];

const dFlightCoords: Coords[] = [xFlightCoords, yFlightCoords, zFlightCoords];

//! Örnek - Aynı nesne tipini birden fazla kullanmamız gereken bir seneryo...

// type aliases olmadan
let user1: { id: number; name: string; age: number } = {
  id: 1,
  name: "Ali",
  age: 20,
};

let user2: { id: number; name: string; age: number } = {
  id: 2,
  name: "Ayşe",
  age: 25,
};

const users1: { id: number; name: string; age: number }[] = [user1, user2];

// type aliases kullanalım
type User = { id: number; name: string; age: number };

let user3: User = {
  id: 1,
  name: "Ali",
  age: 20,
};

let user4: User = {
  id: 2,
  name: "Ayşe",
  age: 25,
};

let users2: User[] = [user3, user4];

// E Ticaret Sitesi İçin Örnek
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  size: "xs" | "s" | "m" | "l";
  inStock: boolean;
};

let product1: Product = {
  id: 123123,
  name: "Kırmızı Elbise",
  price: 100,
  category: "Elbise",
  size: "m",
  inStock: true,
};

let product2: Product = {
  id: 2,
  name: "Mavi Elbise",
  price: 150,
  category: "Elbise",
  size: "l",
  inStock: false,
};

let products: Product[] = [product1, product2];
