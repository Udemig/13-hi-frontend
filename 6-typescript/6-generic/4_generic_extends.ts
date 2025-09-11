// Generic Özellik
// Tipi generic olaraka tanımladığımızda her türlü tipte değer alabilmesinin önünü açıyoruz
// Bundan dolayı bazı durumlarda alabileceği tipte kısıtlamalar getirmek isteyebiliriz
// Extends ile T generic tipini dışarıdan sadece stirng vye number tipi alabilecek şekilde kısıtlayabiliriz

type Container<T extends string | number> = {
  name: T;
};

const x: Container<string> = {
  name: "selam",
};
const y: Container<number> = {
  name: 123,
};
// const z: Container<boolean> = {
//   name: true,
// };
// const a: Container<object> = {
//   name: {},
// };

// ==== Örnek ======
class AppConfig<T extends string | number | boolean> {
  constructor(private key: string, private value: T) {}

  getKey(): string {
    return this.key;
  }

  getValue(): T {
    return this.value;
  }

  updateValue(newValue: T): void {
    this.value = newValue;
  }
}

new AppConfig<string>("APP_NAME", "Instagram");
new AppConfig<number>("PORT", 3000);
new AppConfig<string>("APP_VERSION", "1.0.0");

/*
 ! Challange
 * En az 1 generic tip alan bir type/interface/fonksiyon/class yazınız
 * Tanımladığınız yapıyı en az 1 kez kullanın
 * Bonus: extend kullanın
*/

// Cevap
interface IKullanici<T extends number | string, K, Z> {
  id: K;
  ad: Z;
  email: Z;
  pozisyon: T;
}

const Kullanici1: IKullanici<number, number, string> = {
  id: 1,
  ad: "Ali",
  email: "ali12@gmail.com",
  pozisyon: 100,
};

const Kullanici2: IKullanici<string, number, string> = {
  id: 2,
  ad: "Veli",
  email: "veli123@gmail.com",
  pozisyon: "Admin",
};
