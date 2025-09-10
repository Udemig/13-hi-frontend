/*
 ! Readonly
 * readonly anahtar kelimesi class'ın veya nesnenin özelliklerini sadece okunabilir olmasını sağlar
 
 * readOnly ile tanımlladığımız özelliklere değer ataması:
 * * sınıflarda sadece constructor içerisinde değer atanabilir
 * * nesnelerde ise sadece nesne oluştururken değer atanabiliriz
*/

//? Nesne'lerdeki Kullanım

// nesne tipi tanımlayalım
type Person = {
  ad: string;
  soyad: string;
  readonly tcNo: string;
};

// nesneye değer ataması yapalım
const kisi: Person = {
  ad: "Ahmet",
  soyad: "Yılmaz",
  tcNo: "11112222333455",
};

kisi.ad = "Mehmet";
kisi.soyad = "Kaya";
// kisi.tcNo = "12312423543235" //! readonly olduğu için erişilemez

//? Class'lardaki Kullanım
class Book {
  public title: string;
  public pageCount: number;
  private readonly author: string = "Orhan Pamuk"; // tanımlarken değer atadım

  constructor(title: string, pageCount: number, author: string) {
    this.title = title;
    this.pageCount = pageCount;
    this.author = author; // constructor içerisinde değer atanabilir
  }
}

const book = new Book("Kuyucaklı Yusuf", 100, "Sabahattin Ali");

console.log(book);
book.title = "Deneme";
book.pageCount = 200;
//book.author = "test" //!hata: author readonly

/*
 ! Challange
 * Bir class tanımlayın ve class'tan örnek oluşturun
 * Bu class en az 4 özelliğe sahip olsun
 * En az 1 özelliği readonly olsun
 * Erişim belireçteçleri efektif bir şekilde kullanılsın
*/

// cevap
class Computer {
  public brand: string;
  private readonly ipAddress: string = "127.0.0.1";
  public hdd: number;
  public ram: number;

  protected hasWifi: boolean;
  protected hasBluetooth: boolean;

  constructor(brand: string, hdd: number, ram: number) {
    this.brand = brand;
    this.hdd = hdd;
    this.ram = ram;
  }
}

const myComputer = new Computer("Apple", 256, 16);

// cevap
class User {
  public readonly id: number;
  public name: string;
  protected email: string;
  private isAdmin: boolean;

  constructor(id: number, name: string, email: string, isAdmin: boolean) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isAdmin = isAdmin;
  }

  displayInfo(): void {
    console.log(`${this.name} (${this.email}) - Admin: ${this.isAdmin}`);
  }
}

const user1 = new User(1, "Alice", "alice@example.com", false);
const user2 = new User(2, "Bob", "bob@example.com", true);
const user3 = new User(3, "Charlie", "charlie@example.com", false);
const user4 = new User(4, "Diana", "diana@example.com", true);

user1.displayInfo();
user2.displayInfo();
user3.displayInfo();
user4.displayInfo();

// cevap
class Araba {
  public marka: string;
  private hız: number;
  protected model: string;
  readonly yil: number;

  constructor(marka: string, model: string, yil: number, hız: number) {
    this.marka = marka;
    this.hız = hız;
    this.model = model;
    this.yil = yil;
  }
}

const audi = new Araba("Audi", "A3", 80, 2022);
console.log(audi);
audi.marka = "audi sport";
// audi.hız=200;//hata
// audi.yil=2023 ; //hata
