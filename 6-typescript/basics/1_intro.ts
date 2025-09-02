/*
 * Typescript, javascript'in bazı önemli açıklarını düzeltmek için microsoft tarafından geliştirilmiş bir programlama dilidir.

 * Neden Typescript ?
 * * JS'de koddaki hataları runtime'da görürüz
 * * TS'de koddaki hataları kod editöründe projeyi çalıştırmadana görebiliyoruz
 
 * * JS'de tanımladığımız değişkene daha sonra farklı türde değer ataması yapabilyoruz
 * * TS'de tanımladığımız değişkenin türünü belirtmek zorundayız ve farklı türde değer ataması yapamayız 
  
 * * JS'de çok kısıtlı bir otomatik tamamlama desteği bulunur.
 * * TS'de çok daha geniş kapsamlı otomatik tamamlama desteği bulunur
  
 * * NOT
 * * Typescript kodları tarayı tarafından doğrudan çalıştırılamaz
 * * Bundan dolayı compiler (tsc) ile ts kodunu js koduna çevirmeden çalıştıramayız
 * * Buradan anlyacağımız ts'in bütün tip tanımlama özellikleri sadece geliştirme sürecinde işimize yarar projeyi derleyip js'e çevirdiğimizde bütün ts kodları yok olur.
*/

// örnek - 1
const user = {
  name: "Ahmet",
  age: 20,
  email: "ahmet@gmail.com",
};

console.log(user.name);
console.log(user.age);
console.log(user.email);
// console.log(user.city); //! HATA.

// örnek - 2
let username: string = "Furkan";

username = "Ahmet";

// username = 35; //! HATA.

// username = true; //! HATA.

// username = {}; //! HATA.

// username = []; //! HATA.
