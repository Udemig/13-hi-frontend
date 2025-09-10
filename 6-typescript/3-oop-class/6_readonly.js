/*
 ! Readonly
 * readonly anahtar kelimesi class'ın veya nesnenin özelliklerini sadece okunabilir olmasını sağlar
 
 * readOnly ile tanımlladığımız özelliklere değer ataması:
 * * sınıflarda sadece constructor içerisinde değer atanabilir
 * * nesnelerde ise sadece nesne oluştururken değer atanabiliriz
*/
// nesneye değer ataması yapalım
var kisi = {
    ad: "Ahmet",
    soyad: "Yılmaz",
    tcNo: "11112222333455",
};
kisi.ad = "Mehmet";
kisi.soyad = "Kaya";
// kisi.tcNo = "12312423543235" //! readonly olduğu için erişilemez
//? Class'lardaki Kullanım
var Book = /** @class */ (function () {
    function Book(title, pageCount, author) {
        this.author = "Orhan Pamuk"; // tanımlarken değer atadım
        this.title = title;
        this.pageCount = pageCount;
        this.author = author; // constructor içerisinde değer atanabilir
    }
    return Book;
}());
var book = new Book("Kuyucaklı Yusuf", 100, "Sabahattin Ali");
console.log(book);
