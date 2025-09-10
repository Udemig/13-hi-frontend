/*
 ! Static
 * Static anahta kelimesi özelliği veya methodu sınıfın örneğini oluşturmadan erişilebilir olmasını sağlar.
 * Static methodlar class'ın sahip olduğu özellikleri kullanamaz
*/

// Static Method
class Mathematic {
  x: number = 10;

  add(y: number) {
    console.log(this.x + y);
  }

  static multiply(a: number, b: number) {
    console.log(a * b);
  }
}

// static olamayan add methoduna erişelim
// normal methodlara sadece class'tan alınan örnekler üzerinden erişilebilir
const math = new Mathematic();
math.add(10);

// static olan methodua erişelim
// doğrudan class ismi üzerinden örnek almadan erişebiliyoruz
Mathematic.multiply(10, 20);

// js içerisinde statik olmayan bir methoda erişelim
new Date("10-01-2025").toLocaleDateString();

// static method
Math.max(1, 3, 4, 66, 43);
Date.now();

// Static Property
// Doğrudan class üzerinden erişebileceğimiz değişkenler

class Ogrenci {
  isim: string;
  static ogrenciSayisi: number = 0;

  constructor(newIsim: string) {
    this.isim = newIsim;
    Ogrenci.ogrenciSayisi++;
  }
}

new Ogrenci("Ahmet");
new Ogrenci("Mehmet");
new Ogrenci("Ayşe");
new Ogrenci("Zeynep");

console.log(Ogrenci.ogrenciSayisi);

// javascriptten static değişken örneği
console.log(Math.PI);
console.log(Math.E);
