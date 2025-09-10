/*
 ! Intersection Type - Kesişim / Birleşim Tipler
 * Typescript'de kesişim türler ik iveya daha fazla türü birleştirmek için kullanılır
*/

type AType = { key1: string };
type BType = { key2: number };

// Intersection Type: Her iki nesne tipinin bütün özelliklerini birleştirelim
type ABType = AType & BType & { key3: boolean };

let foo: ABType = { key1: "merhaba", key2: 99, key3: true };

// Union Types: Belirtilen türden en az birinin bütün özelliklerini tanımlamalıyız
type AorBType = AType | BType;

let bar: AorBType = { key1: "merhaba" };
let baz: AorBType = { key2: 23 };
let ban: AorBType = { key1: "merhaba", key2: 23 };

// Örnek
type Person = {
  id: string;
  name: string;
};

type Contact = {
  email: string;
  phone: string;
};

type Employee = {
  department: string;
  salary: number;
};

type Customer = {
  credit: number;
  isActive: boolean;
};

type Staff = Person & Contact & Employee;
type Client = Person & Contact & Customer;

const staff: Staff = {
  id: "1",
  name: "Joh Doe",
  email: "johdoe@example.com",
  phone: "1235678899",
  department: "IT",
  salary: 60000,
};

const client: Client = {
  id: "2",
  name: "Jane Smith",
  email: "jane.smith@example.com",
  phone: "9988876634",
  credit: 100000,
  isActive: true,
};

/*
 ! Challange
 * Intersection type kullanarak birden fazla türü birleştir
 * Ortaya çıkan yeni türünü nesne tipi tanımlarken kullanın
*/

// cevap
type Araba = {
  marka: string;
  model: string;
  yil: number;
  yakitTipi: "benzin" | "dizel" | "elektrik" | "hibrit";
};
type Elektrikli = {
  renk: string;
  kilometre: number;
  hiz: number;
};
type Hibrit = {
  isFull: boolean;
};
type Ekstra = {
  klima: boolean;
  kamera: boolean;
};
type ElektrikliAraba = Araba & Elektrikli & Ekstra;
type HibritAraba = Araba & Hibrit & Ekstra;

const tesla: ElektrikliAraba = {
  marka: "Tesla",
  model: "Model 3",
  yil: 2021,
  renk: "Beyaz",
  kilometre: 0,
  hiz: 250,
  yakitTipi: "elektrik",
  klima: true,
  kamera: true,
};
