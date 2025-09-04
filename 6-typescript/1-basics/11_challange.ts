/*
 ! Challange
 * Herkes içerisinde en az 1 tane
 * string 
 * number
 * boolean
 * array / object / tuple
 * string literal / union type
 * any
 * tiplerine sahip bir nesne tipi tanımlayın
 * ve oluşturduğunuz tipi bir değişken üzerinde kullanın
 
 * tip herhangi bir nesne hakkında olabilir: araba, kullanıcı, ürün, bilgisayar, film, kitap vb....
*/

type Car = {
  make: string;
  age: number;
};

const car: Car = {
  make: "Toyota",
  age: 34,
};

// Cevap
type Kullanıcı = {
  id: number;
  isim: string;
  aktifmi: boolean;
  roller: string[];
  adres: { şehir: string; postakodu: number };
  cinsiyet: "erkek" | "kadın";
  bilgiler: any;
  tercihler: [string, number];
};

const kullanici1: Kullanıcı = {
  id: 1,
  isim: "Musa",
  aktifmi: true,
  roller: ["yönetici", "editör"],
  adres: {
    şehir: "İstanbul",
    postakodu: 34000,
  },
  cinsiyet: "erkek",
  bilgiler: { yaş: 34 },
  tercihler: ["kitaplar", 10],
};
