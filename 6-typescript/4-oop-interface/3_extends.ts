/*
 ! Interface Extends
 * Interface type'larda olduğu gibi farklı bir/birkaç interface'i miras alabilir.
 * Miras alama extends anahtar kelimesi ile gerçekleşir.
 * Sınıflardan farklı olarak istersek birden fazla interface'i miras alabiliyoruz 
*/

// bir interface oluşturalım
interface IEvEsyasi {
  isim: string;
  fiyat: number;
  marka: string;
}

// yeni bir interface oluşturalım ve öncekini miras alalım
interface IMobilya extends IEvEsyasi {
  renk: string;
}

// interface'i bir nesne tipi tanımlarken kullanalım
const masa: IMobilya = {
  isim: "masa",
  fiyat: 1321,
  marka: "IKEA",
  renk: "kahverengi",
};

// farklı bir interface daha oluşturalım
interface IElektronik {
  garantiSuresi: number;
  sarjSuresi: number;
  batarya: string;
}

// birden fazla interface'i miras alalım
interface IUrun extends IElektronik, IMobilya {
  id: string;
}

// interafce'i bir nesne tipi tanımında kullanalım
const bilgisayar: IUrun = {
  id: "1",
  garantiSuresi: 2,
  sarjSuresi: 24,
  batarya: "100%",
  marka: "Apple",
  isim: "Mackbook",
  fiyat: 123123,
  renk: "siyah",
};

/*
 ! Challange
 * İlk olarak iki farklı interface oluşturun
 * Ardından 3. bir interface oluşturup ilk 2 interface'i miras olarak alıp genişletelim.
 * Son olarak bu 3. interface'i bir nesne tipi tanımında kullanın
*/

// Cevap
interface IUser {
  ad: string;
  soyad: string;
  yas: number;
}
interface IOgrenci {
  okul: string;
  sinif: number;
}

interface ICalisan extends IUser, IOgrenci {
  sirket: string;
  pozisyon: string;
}

const calısan: ICalisan = {
  ad: "Gizem",
  soyad: "Öztar",
  yas: 20,
  okul: "Akdeniz Üniversitesi",
  sinif: 4,
  sirket: "AI",
  pozisyon: "Web Geliştirici",
};
