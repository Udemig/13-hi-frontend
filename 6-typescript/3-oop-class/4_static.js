/*
 ! Static
 * Static anahta kelimesi özelliği veya methodu sınıfın örneğini oluşturmadan erişilebilir olmasını sağlar.
 * Static methodlar class'ın sahip olduğu özellikleri kullanamaz
*/
// Static Method
var Mathematic = /** @class */ (function () {
    function Mathematic() {
        this.x = 10;
    }
    Mathematic.prototype.add = function (y) {
        console.log(this.x + y);
    };
    Mathematic.multiply = function (a, b) {
        console.log(a * b);
    };
    return Mathematic;
}());
// static olamayan add methoduna erişelim
// normal methodlara sadece class'tan alınan örnekler üzerinden erişilebilir
var math = new Mathematic();
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
var Ogrenci = /** @class */ (function () {
    function Ogrenci(newIsim) {
        this.isim = newIsim;
        Ogrenci.ogrenciSayisi++;
    }
    Ogrenci.ogrenciSayisi = 0;
    return Ogrenci;
}());
new Ogrenci("Ahmet");
new Ogrenci("Mehmet");
new Ogrenci("Ayşe");
new Ogrenci("Zeynep");
console.log(Ogrenci.ogrenciSayisi);
// javascriptten static değişken örneği
console.log(Math.PI);
Math.E;
