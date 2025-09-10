/*
 ! OOP (Object Orianted Programming)
 * Nesne yönelimli programlama, yazılım gelişitirme sürecinde kullanılan bir tekniktir.
 * Bu yaklaşım, yazılımı nesneler arasında yapmaya çalışır
  
 * OOP'nin temel kavramlar:
 * Sınıf (Class)
 * Nesne (Object)
 * Kalıtım (Inheritance)
 * Interface
 * Polymorphisim
 * Encapsulation
 * Abstraction
 
 * Sınıf: Nesnelerin üretilmesi için kullanılan şablonlardır
 * Nesne: Sınıfın bir örneğidir.
 * Kalıtım: Bir sınıfın başka bir sınıfın özelliklerini almasıdır.
 * Interface: Bir sınıfın veya nesnenin tipini tanımlamak için kullanılan yapıdır.
 * Polymorphisim: Aynı isimdeki fonksiyonların farklı şekillerde davranmasıdır.
 * Encapsulation: Verilerin dışarıdan doğrudan erişilmesini engellemek ve kontrollü bir şekilde erişim sağlamak.
 * Abstraction: Gereksiz detayları gizleyip, önemli bilgileri ve davranışları ön plana çıkarma

 * OOP'nin temel amacı, kodu daha anlaşılabilir , yönetilebilir ve yeniden kullanılabilir olmasını sağlamaktır. Bu yaklaşım büyük projelerde oldukça fazla fayda sağlar
 */
/*
 ! Class (Sınıf)
 * Sınıflar nesnelerin şablonudur.
 * Bir sınıf, belirli türdeki nesneler için veri ve fonksiyon tanımlar.
 * Örneğin "Araba" sınıfı bir arabanın sahip olucağı özellikleri (renk,marka,model) ve ddavranışlarını (hızlanma,frenleme,vites değiştirme) tanımlar
 */
var EskiTelefon = /** @class */ (function () {
    function EskiTelefon() {
        // properties (özellikler)
        this.marka = "Samsung";
        this.telefonTipi = "Entegre";
        this.tusTakimi = "Çevirmeli";
    }
    // methods (metodlar)
    EskiTelefon.prototype.ahizeAc = function () {
        console.log("ahize açlılıyor...");
    };
    EskiTelefon.prototype.numaraCevir = function (telNum) {
        console.log(telNum + " çalıyor...");
    };
    return EskiTelefon;
}());
/*
 ! Class Kullanımı
 * Class'ı tanımlamak tek başına ek bir anlam ifade etmez.
 * Fonksiyonlarda olduğu gibi fonksiyonları tanımladıktan çalıştırır ve görevini yapar.
 * Class'larda da durum aynıdır class'ı new ile çağırırz ve bize yeni bir nesne oluşturur.
 * Class'ın oluşturduğu bu nesneye "instance" (örnek) denir.
*/
var telefon1 = new EskiTelefon();
var telefon2 = new EskiTelefon();
telefon2.marka = "Nokia";
telefon2.telefonTipi = "Dikey";
telefon2.tusTakimi = "Farklı";
console.log(telefon1);
console.log(telefon2);
telefon1.ahizeAc();
telefon1.numaraCevir("9988877766655");
