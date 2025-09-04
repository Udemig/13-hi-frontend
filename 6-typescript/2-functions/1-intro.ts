/*
 * Function Type
 * Typescript'de fonksiyonların tipini tanımlarken kastımız fonksiyonun aldığı parametlerin ve dönüş değerinin tipini tanımlarız
 */

// normal function
function add(a: number, b: number): number {
  return a + b;
}

const x = add(12, 435);
console.log(x);

// arrow function
const add2 = (a: number, b: number): number => {
  return a + b;
};

const y = add2(123, 234534);
console.log(y);

// örnek 1
// sayının pozitif olup olmadığını kontrol eden fonksiyon
const isPositive = (sayi: number): boolean => {
  return sayi > 0 ? true : false;
};

console.log(isPositive(10));
console.log(isPositive(-20));

// örnek 2
// parametre olarak aldığı sayıların ortalamasını hesaplayan fonksiyon
const average = (arr: number[]): number => {
  const toplam = arr.reduce((acc, sayi) => acc + sayi, 0);
  return toplam / arr.length;
};

const result = average([1, 3, 45, 65, 88, 43]);

console.log(result);
