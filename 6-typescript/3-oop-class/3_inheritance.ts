/*
 ! Inheritance (Kalıtım / Miras)
 * Bir oop kavramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasına izin verir.
 * Bu işlem kodun tekrar kullanılabilirliğini arttırır ve kod orginizasyonunu güçlendirir.
 * Miras her zaman "ana sınıf"'tan türetilmiş olan "alt sınıf"'lar arası gerçekleşir.
 * Alt sınıf (derived class), bir üst sınıftan (parent class) özelliklerini ve methodlarını alır
*/

// Parent Class (Ana Sınıf)
class GeometricShape {
  name: string;

  constructor(newName: string) {
    this.name = newName;
  }

  list() {
    console.log(`${this.name} isimli şekildir`);
  }
}

// Derived Class (Alt Sınıf) - Constructor Yok
class Square extends GeometricShape {
  sides: number = 4;
  sidesLength: number = 58;
}

const square = new Square("Kare");
console.log(square);
square.list();

// Derived Class (Alt Sınıf) - Constructor Var
class Circle extends GeometricShape {
  radius: number;

  constructor(newName: string, newRadius: number) {
    super(newName); // super anahtar kelimesi ile parent classs'ın constructor'ına değer gönderiyoruz
    this.radius = newRadius;
  }
}

// Parent
class Arac {
  marka: string;
  model: string;

  constructor(newMarka: string, newModel: string) {
    this.marka = newMarka;
    this.model = newModel;
  }

  calistir() {
    console.log("Araca giriş yapılıyor");
  }
}

// Derived Class
class Otomobil extends Arac {
  renk: string;
  yakitTipi: string;

  constructor(newMarka: string, newModel: string, newRenk: string, newYakitTipi: string) {
    super(newMarka, newModel);
    this.renk = newRenk;
    this.yakitTipi = newYakitTipi;
  }

  // yeni method ekle
  gazaBas(): void {
    console.log("Gaz açılıyor...");
  }

  // method override: miras olarak alınan methodu değiştirmek
  calistir(): void {
    super.calistir(); // üst sınıfın methodunu çağırdık
    console.log("Otomobil çalıştırıldı...");
  }
}

const bmw = new Otomobil("Bmw", "X5", "siyah", "benzin");
console.log(bmw);
bmw.calistir();
bmw.gazaBas();

// Bir class aynı anda birden fazla farklı class'ı miras alamaz.
// Ama miras alma olayı birden fazla kez gerçekleşebilir

class Human {
  eyeColor: string = "";
}

class Father extends Human {
  eyeColor: string = "Kahverengi";
}

class Mother extends Human {
  eyeColor: string = "Mavi";
}

class Child extends Father {} // hem anne hem baba class'ını miras alma şansımız yok

const child = new Child();
console.log(child);
