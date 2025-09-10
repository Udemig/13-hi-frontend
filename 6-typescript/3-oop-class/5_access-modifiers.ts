/*
 ! Erişim Belirteçleri
 * Class elemanları il veri tutucağımız zaman bu bilgilerim class'ın dışarısından erişilebilir olup olmama durumunu belirlememizi sağlar

 * Erişim Belirteçleri
 * public: class'ın dışarısından erişileblir
 * protected: class'ın dışarısında erişilemez 
 * private: class'ın dışarısından ve hatta class'ı miras alan class'lar tarafından erişilemez
*/

// Oluşturduğumuz Class
class House {
  public address: string = "İstanbul";
  protected price: number = 9874000;
  private owner: string = "Ahmet";

  tanim() {
    console.log(`${this.address} ${this.price} ${this.owner}`);
  }
}

// Miras Alan Class
class Villa extends House {
  tanim() {
    console.log(`${this.address} ${this.price}`);
  }
}

// Class'ın Örneği (Dışarısı)
const ev = new House();
console.log(ev.address);
// console.log(ev.price); //! HATA
// console.log(ev.owner); //! HATA

/*
 * Not: Erişim belirteçleri ts'in bütün özelliklerinde olduğu gibi kodu js'e derlediğimizde ortadan kaybolur.
 * Yani sadece geliştirme aşamasında kullanılır
 */

/*

  * Erişim      Tanımlandığı Sınıf         Miras Alan Sınıf         Dışarısı
  * public          Evet                         Evet                 Evet
  * protected.      Evet                         Evet                 Hayır
  * private         Evet                         Hayır                Hayır

*/
