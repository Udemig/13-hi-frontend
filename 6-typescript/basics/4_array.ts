/*
 ! Array Type
 * Typescript'de dizilerin tipini tanımlarken sadece bu değişkenin bir dizi olsun demek yeterli değildir.
 * Dizinin içeriği ne olacak? dizinin elemanlarının tipi ne olacak? gibi bilgileride belirtmemiz gerekiyor.
 *
 * Array tipi tanımlarken 2 farklı yol vardır:
 * 1) Array<T> (Generic)
 * 2) T[]
*/

// Örnek - 1
let numbers: number[] = [1, 2, 3, 4, 5];

// Örnek - 2
let names: string[] = ["Ahmet", "Furkan", "Mehmet", "Ali", "Veli"];

numbers.push(10);
// numbers.push("ali"); //! HATA sayılardan oluşan diziye string atamaya çalışıyoruz

// Örnek - 3
const ages: Array<number> = [1, 2, 3, 4, 5];
const students: Array<string> = ["Ahmet", "Furkan", "Mehmet", "Ali", "Veli"];

// Soru: Apiden aynı dizi içinde hem string hem number veri gelince ne olacak
// Cevap: Evet, birden fazla farklı tipte değere sahip diziler oluşturulabilir.
// Union Type

const mixed: (string | number)[] = [1, 2, 3, "a", "b", "c"];

const mixed2: Array<string | number> = [1, 2, 3, "a", "b", "c"];

// Soru: Nenslerde oluşan bir dizinin tipini nasıl belirleriz?
// Cevap: Önce nesne tipini tanımlarız ardından dizi olduğunu belirtiriz.
const teachers: { name: string; age: number }[] = [
  { name: "Furkan", age: 35 },
  { name: "Mehmet", age: 40 },
  { name: "Ali", age: 45 },
  { name: "Veli", age: 50 },
];

const teachers2: Array<{ name: string; age: number }> = [
  { name: "Furkan", age: 35 },
  { name: "Mehmet", age: 40 },
  { name: "Ali", age: 45 },
  { name: "Veli", age: 50 },
];
