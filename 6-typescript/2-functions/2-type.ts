/*
 * Typescript'de bir fonksiyonun tipini doğrudan fonksiyonu yazarken tanımlamak yerine
 * Type aliases ile ayrı bir tip tanımlayarak kullanabiliriz
 */

// 1. Yötem: fonksiyonu direkt olarak tanımlarken belirleme
let func1 = (par1: string, par2: number): string => {
  return par1 + par2;
};
let func2 = (par1: string, par2: number): string => {
  return par1 + par2;
};
let func3 = (par1: string, par2: number): string => {
  return par1 + par2;
};

// 2.Yöntem
type FuncType = (par1: string, par2: number) => string;

let func5: FuncType = (par1, par2) => {
  return par1 + par2;
};
let func6: FuncType = (par1, par2) => {
  return par1 + par2;
};
let func7: FuncType = (par1, par2) => {
  return par1 + par2;
};

/*
 ! Challange
 * Yukarıdaki 2.yöntemde olduğu gibi bir fonksiyon tipi tanımlayın

 * Fonksiyonun Görevi
 * * Paramatre olarak kişinin bulunduğu şehri ve havanın derecesini alsın.
 * * Eper hava derecesi 30 dereceden büyükse "Hava Sıcak" return etsin
 * * Eper hava derecesi 20 dereceden küçükse "Hava Soğuk" return etsin
 * * Eğer hava dercesi 30-20 arasındaysa "Hava Normal" return etsin
 
 * Hem fonksiyon tipini hemde fonksiyonu tanımlayın 
 * Fonksiyonu 1 kez çağırın
*/

// Cevap
type HavaDurumuTipi = (sehir: string, derece: number) => string;

let havaDurumu: HavaDurumuTipi = (sehir, derece) => {
  return derece > 30 ? `${sehir}: Hava Sıcak 🌞` : derece < 20 ? `${sehir}: Hava Soğuk ❄️` : `${sehir}: Hava Normal 🌤️`; // 20-30 arası
};

console.log(havaDurumu("İzmir", 25));
console.log(havaDurumu("İzmir", 45));
console.log(havaDurumu("İzmir", 10));
